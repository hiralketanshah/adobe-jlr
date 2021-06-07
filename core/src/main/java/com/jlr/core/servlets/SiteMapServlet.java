package com.jlr.core.servlets;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.xml.stream.XMLOutputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamWriter;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.FastDateFormat;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.commons.osgi.PropertiesUtil;
import org.apache.sling.settings.SlingSettingsService;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.adobe.acs.commons.util.ParameterUtil;
import com.day.cq.commons.Externalizer;
import com.day.cq.commons.inherit.HierarchyNodeInheritanceValueMap;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.replication.ReplicationStatus;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;
import com.jlr.core.constants.CommonConstants;

@Component(service = Servlet.class,
                property = {Constants.SERVICE_DESCRIPTION + "= Page and Asset Site Map Servlet", "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                                "sling.servlet.extensions=xml", "sling.servlet.selectors=sitemap",
                                "sling.servlet.resourceTypes=" + SiteMapServlet.RESOURCE_TYPES})



public final class SiteMapServlet extends SlingSafeMethodsServlet {

    /**
     * 
     */

    @Reference
    private SlingSettingsService slingSettingsService;

    private static final long serialVersionUID = 7980112322505823554L;

    protected static final String RESOURCE_TYPES = "jlr/components/page";

    private static final Logger log = LoggerFactory.getLogger(SiteMapServlet.class);

    private static final FastDateFormat DATE_FORMAT = FastDateFormat.getInstance("yyyy-MM-dd");

    private static final boolean DEFAULT_INCLUDE_LAST_MODIFIED = true;

    private static final boolean DEFAULT_INCLUDE_INHERITANCE_VALUE = true;

    private static final String DEFAULT_EXTERNALIZER_DOMAIN = "publish";

    private static final boolean DEFAULT_EXTENSIONLESS_URLS = false;

    private static final boolean DEFAULT_REMOVE_TRAILING_SLASH = false;

    private static final boolean DEFAULT_USE_VANITY_URL = false;



    private static final String NS = "http://www.sitemaps.org/schemas/sitemap/0.9";

    @Reference
    private transient Externalizer externalizer;

    private String externalizerDomain;

    private boolean includeInheritValue;

    private boolean includeLastModified;

    private String[] changefreqProperties;

    private String[] priorityProperties;

    private String damAssetProperty;

    private List<String> damAssetTypes;

    private List<String> excludeFromSiteMapProperty;

    private String characterEncoding;

    private boolean extensionlessUrls;

    private Map<String, String> urlRewrites;

    private boolean removeTrailingSlash;

    private List<String> excludedPageTemplates;

    private boolean useVanityUrl;

    @Activate
    protected void activate(Map<String, Object> properties) {
        this.externalizerDomain = PropertiesUtil.toString(StringUtils.EMPTY, DEFAULT_EXTERNALIZER_DOMAIN);
        this.includeLastModified = PropertiesUtil.toBoolean(true, DEFAULT_INCLUDE_LAST_MODIFIED);
        this.includeInheritValue = PropertiesUtil.toBoolean(true, DEFAULT_INCLUDE_INHERITANCE_VALUE);
        // this.changefreqProperties = PropertiesUtil.toStringArray(new String[0], new String[0]);
        this.changefreqProperties = new String[] {"seoFrequency"};
        // this.priorityProperties = PropertiesUtil.toStringArray(new String[0], new String[0]);
        this.priorityProperties = new String[] {"seoPriority"};
        this.damAssetProperty = PropertiesUtil.toString("", "");
        this.damAssetTypes = Arrays.asList(PropertiesUtil.toStringArray(new String[0], new String[0]));
        // this.excludeFromSiteMapProperty = Arrays.asList(PropertiesUtil.toStringArray(new String[0], new String[0]));
        this.excludeFromSiteMapProperty = Arrays.asList("hideInNav");
        this.characterEncoding = PropertiesUtil.toString(null, null);
        this.extensionlessUrls = PropertiesUtil.toBoolean(false, DEFAULT_EXTENSIONLESS_URLS);
        this.urlRewrites = ParameterUtil.toMap(PropertiesUtil.toStringArray(StringUtils.EMPTY, new String[0]), ":", false, "");
        this.removeTrailingSlash = PropertiesUtil.toBoolean(DEFAULT_REMOVE_TRAILING_SLASH, DEFAULT_REMOVE_TRAILING_SLASH);
        // this.excludedPageTemplates = Arrays.asList(PropertiesUtil.toStringArray(new String[0], new String[0]));
        this.excludedPageTemplates =
                        Arrays.asList("/conf/jlr/settings/wcm/templates/redirect-page-template", "/conf/jlr/settings/wcm/templates/empty-page-template");
        this.useVanityUrl = PropertiesUtil.toBoolean(false, DEFAULT_USE_VANITY_URL);
    }

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        response.setContentType(request.getResponseContentType());
        if (StringUtils.isNotEmpty(this.characterEncoding)) {
            response.setCharacterEncoding(characterEncoding);
        }
        ResourceResolver resourceResolver = request.getResourceResolver();
        PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
        Page page = pageManager.getContainingPage(request.getResource());

        XMLOutputFactory outputFactory = XMLOutputFactory.newFactory();
        XMLStreamWriter stream = null;
        try {
            stream = outputFactory.createXMLStreamWriter(response.getWriter());
            stream.writeStartDocument("1.0");

            stream.writeStartElement("", "urlset", NS);
            stream.writeNamespace("", NS);

            // first do the current page
            write(page, stream, request);

            for (Iterator<Page> children = page.listChildren(new PageFilter(false, true), true); children.hasNext();) {
                write(children.next(), stream, request);
            }

            if (damAssetTypes.size() > 0 && damAssetProperty.length() > 0) {
                for (Resource assetFolder : getAssetFolders(page, resourceResolver)) {
                    writeAssets(stream, assetFolder, request);
                }
            }

            stream.writeEndElement();

            stream.writeEndDocument();
        } catch (XMLStreamException e) {
            throw new IOException(e);
        } finally {
            if (stream != null) {
                try {
                    stream.close();
                } catch (XMLStreamException e) {
                    log.warn("Can not close xml stream writer", e);
                }
            }
        }
    }

    private Collection<Resource> getAssetFolders(Page page, ResourceResolver resolver) {
        List<Resource> allAssetFolders = new ArrayList<Resource>();
        ValueMap properties = page.getProperties();
        String[] configuredAssetFolderPaths = properties.get(damAssetProperty, String[].class);
        if (configuredAssetFolderPaths != null) {
            // Sort to aid in removal of duplicate paths.
            Arrays.sort(configuredAssetFolderPaths);
            String prevPath = "#";
            for (String configuredAssetFolderPath : configuredAssetFolderPaths) {
                // Ensure that this folder is not a child folder of another
                // configured folder, since it will already be included when
                // the parent folder is traversed.
                if (StringUtils.isNotBlank(configuredAssetFolderPath) && !configuredAssetFolderPath.equals(prevPath)
                                && !StringUtils.startsWith(configuredAssetFolderPath, prevPath + "/")) {
                    Resource assetFolder = resolver.getResource(configuredAssetFolderPath);
                    if (assetFolder != null) {
                        prevPath = configuredAssetFolderPath;
                        allAssetFolders.add(assetFolder);
                    }
                }
            }
        }
        return allAssetFolders;
    }

    private String applyUrlRewrites(String url) {
        try {
            String path = URI.create(url).getPath();
            for (Map.Entry<String, String> rewrite : urlRewrites.entrySet()) {
                if (path.startsWith(rewrite.getKey())) {
                    return url.replaceFirst(rewrite.getKey(), rewrite.getValue());
                }
            }
            return url;
        } catch (IllegalArgumentException e) {
            return url;
        }
    }

    @SuppressWarnings("squid:S1192")
    private void write(Page page, XMLStreamWriter stream, SlingHttpServletRequest request) throws XMLStreamException {
        if (isHiddenByPageProperty(page) || isHiddenByPageTemplate(page) || isPageNotReplicated(page)) {
            return;
        }
        stream.writeStartElement(NS, "url");
        String loc = "";

        if (useVanityUrl && !StringUtils.isEmpty(page.getVanityUrl())) {
            loc = externalizeUri(request, page.getVanityUrl());
        } else if (!extensionlessUrls) {
            loc = externalizeUri(request, String.format("%s.html", page.getPath()));
        } else {
            String urlFormat = removeTrailingSlash ? "%s" : "%s/";
            loc = externalizeUri(request, String.format(urlFormat, page.getPath()));
        }

        loc = applyUrlRewrites(loc);

        writeElement(stream, "loc", loc);

        if (includeLastModified) {
            Calendar cal = page.getLastModified();
            if (cal != null) {
                writeElement(stream, "lastmod", DATE_FORMAT.format(cal));
            }
        }

        if (includeInheritValue) {
            HierarchyNodeInheritanceValueMap hierarchyNodeInheritanceValueMap = new HierarchyNodeInheritanceValueMap(page.getContentResource());
            writeFirstPropertyValue(stream, "changefreq", changefreqProperties, hierarchyNodeInheritanceValueMap);
            writeFirstPropertyValue(stream, "priority", priorityProperties, hierarchyNodeInheritanceValueMap);
        } else {
            ValueMap properties = page.getProperties();
            writeFirstPropertyValue(stream, "changefreq", changefreqProperties, properties);
            writeFirstPropertyValue(stream, "priority", priorityProperties, properties);
        }

        stream.writeEndElement();
    }

    private boolean isHiddenByPageProperty(Page page) {
        boolean flag = false;
        if (this.excludeFromSiteMapProperty != null) {
            for (String pageProperty : this.excludeFromSiteMapProperty) {
                flag = flag || page.getProperties().get(pageProperty, Boolean.FALSE);
            }
        }
        return flag;
    }

    private boolean isPageNotReplicated(Page page) {
        boolean flag = false;
        if (slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR) && (!page.getProperties()
                        .get(ReplicationStatus.NODE_PROPERTY_LAST_REPLICATION_ACTION, StringUtils.EMPTY).equalsIgnoreCase("Activate"))) {
            flag = true;
        }
        return flag;
    }

    private boolean isHiddenByPageTemplate(Page page) {
        boolean flag = false;
        if (this.excludedPageTemplates != null) {
            for (String pageTemplate : this.excludedPageTemplates) {
                flag = flag || page.getProperties().get("cq:template", StringUtils.EMPTY).equalsIgnoreCase(pageTemplate);
            }
        }
        return flag;
    }

    private String externalizeUri(SlingHttpServletRequest request, String path) {
        if (request.getRequestURI().contains("au")) {
            externalizerDomain = "publish-au";
        } else if (request.getRequestURI().contains("de")) {
            externalizerDomain = "publish-de";
        } else {
            externalizerDomain = "publish";
        }
        if (StringUtils.isNotBlank(externalizerDomain)) {
            return externalizer.externalLink(request.getResourceResolver(), externalizerDomain, path);
        } else {
            log.debug("No externalizer domain configured, take into account current host header {} and current scheme {}", request.getServerName(),
                            request.getScheme());
            return externalizer.absoluteLink(request, request.getScheme(), path);
        }
    }

    private void writeAsset(Asset asset, XMLStreamWriter stream, SlingHttpServletRequest request) throws XMLStreamException {
        stream.writeStartElement(NS, "url");

        String loc = externalizeUri(request, asset.getPath());
        writeElement(stream, "loc", loc);

        if (includeLastModified) {
            long lastModified = asset.getLastModified();
            if (lastModified > 0) {
                writeElement(stream, "lastmod", DATE_FORMAT.format(lastModified));
            }
        }

        Resource contentResource = asset.adaptTo(Resource.class).getChild(JcrConstants.JCR_CONTENT);
        if (contentResource != null) {
            if (includeInheritValue) {
                HierarchyNodeInheritanceValueMap hierarchyNodeInheritanceValueMap = new HierarchyNodeInheritanceValueMap(contentResource);
                writeFirstPropertyValue(stream, "changefreq", changefreqProperties, hierarchyNodeInheritanceValueMap);
                writeFirstPropertyValue(stream, "priority", priorityProperties, hierarchyNodeInheritanceValueMap);
            } else {
                ValueMap properties = contentResource.getValueMap();
                writeFirstPropertyValue(stream, "changefreq", changefreqProperties, properties);
                writeFirstPropertyValue(stream, "priority", priorityProperties, properties);
            }
        }

        stream.writeEndElement();
    }

    private void writeAssets(final XMLStreamWriter stream, final Resource assetFolder, final SlingHttpServletRequest request) throws XMLStreamException {
        for (Iterator<Resource> children = assetFolder.listChildren(); children.hasNext();) {
            Resource assetFolderChild = children.next();
            if (assetFolderChild.isResourceType(DamConstants.NT_DAM_ASSET)) {
                Asset asset = assetFolderChild.adaptTo(Asset.class);

                if (damAssetTypes.contains(asset.getMimeType())) {
                    writeAsset(asset, stream, request);
                }
            } else {
                writeAssets(stream, assetFolderChild, request);
            }
        }
    }

    private void writeFirstPropertyValue(final XMLStreamWriter stream, final String elementName, final String[] propertyNames, final ValueMap properties)
                    throws XMLStreamException {
        for (String prop : propertyNames) {
            String value = properties.get(prop, String.class);
            if (value != null) {
                writeElement(stream, elementName, value);
                break;
            }
        }
    }

    @SuppressWarnings("squid:S1144")
    private void writeFirstPropertyValue(final XMLStreamWriter stream, final String elementName, final String[] propertyNames,
                    final InheritanceValueMap properties) throws XMLStreamException {
        for (String prop : propertyNames) {
            String value = properties.get(prop, String.class);
            if (value == null) {
                value = properties.getInherited(prop, String.class);
            }
            if (value != null) {
                writeElement(stream, elementName, value);
                break;
            }
        }
    }

    private void writeElement(final XMLStreamWriter stream, final String elementName, final String text) throws XMLStreamException {
        stream.writeStartElement(NS, elementName);
        stream.writeCharacters(text);
        stream.writeEndElement();
    }

}
