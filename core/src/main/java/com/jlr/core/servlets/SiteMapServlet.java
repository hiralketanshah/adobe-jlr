/*
 * 
 */
package com.jlr.core.servlets;

import static com.day.cq.wcm.api.NameConstants.NN_TEMPLATE;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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
import com.jlr.core.constants.DerivativeConstants;
import com.jlr.core.utils.DerivativeUtils;

/**
 * The Class SiteMapServlet.
 *
 * @author Adobe
 */
@Component(service = Servlet.class,
                property = {Constants.SERVICE_DESCRIPTION + "= Page and Asset Site Map Servlet", "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                                "sling.servlet.extensions=xml", "sling.servlet.selectors=sitemap",
                                "sling.servlet.resourceTypes=" + SiteMapServlet.RESOURCE_TYPES})



public final class SiteMapServlet extends SlingSafeMethodsServlet {

    /** The sling settings service. */

    @Reference
    private transient SlingSettingsService slingSettingsService;

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = 7980112322505823554L;

    /** The Constant RESOURCE_TYPES. */
    protected static final String RESOURCE_TYPES = "jlr/components/page";

    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(SiteMapServlet.class);

    /** The Constant DATE_FORMAT. */
    private static final FastDateFormat DATE_FORMAT = FastDateFormat.getInstance("yyyy-MM-dd");

    /** The Constant DEFAULT_INCLUDE_LAST_MODIFIED. */
    private static final boolean DEFAULT_INCLUDE_LAST_MODIFIED = true;

    /** The Constant DEFAULT_INCLUDE_INHERITANCE_VALUE. */
    private static final boolean DEFAULT_INCLUDE_INHERITANCE_VALUE = true;

    /** The Constant DEFAULT_EXTERNALIZER_DOMAIN. */
    private static final String DEFAULT_EXTERNALIZER_DOMAIN = "publish";

    /** The Constant DEFAULT_EXTENSIONLESS_URLS. */
    private static final boolean DEFAULT_EXTENSIONLESS_URLS = false;

    /** The Constant DEFAULT_REMOVE_TRAILING_SLASH. */
    private static final boolean DEFAULT_REMOVE_TRAILING_SLASH = false;

    /** The Constant DEFAULT_USE_VANITY_URL. */
    private static final boolean DEFAULT_USE_VANITY_URL = false;

    private static final String REDIRECT_PAGE_TEMPLATE = "/conf/jlr/settings/wcm/templates/redirect-page-template";
    private static final String EMPTY_PAGE_TEMPLATE = "/conf/jlr/settings/wcm/templates/empty-page-template";
    private static final String HOME_PAGE_TEMPLATE = "/conf/jlr/settings/wcm/templates/homepage-template";

    private static final String DEFAULT_PN_SEO_FREQUENCY = "seoFrequency";
    private static final String DEFAULT_PN_SEO_PRIORITY = "seoPriority";
    private static final String DEFAULT_PN_HIDE_IN_NAV = "hideInNav";

    private static final String DE_PUBLISHED_SITES = "/content/landrover/global/europe/published-sites/de_de";
    private static final String AU_PUBLISHED_SITES = "/content/landrover/global/row/published-sites/en_au";

    /** The Constant NS. */
    private static final String NS = "http://www.sitemaps.org/schemas/sitemap/0.9";

    /** The externalizer. */
    @Reference
    private transient Externalizer externalizer;

    /** The externalizer domain. */
    private String externalizerDomain;

    /** The include inherit value. */
    private boolean includeInheritValue;

    /** The include last modified. */
    private boolean includeLastModified;

    /** The changefreq properties. */
    private String[] changefreqProperties;

    /** The priority properties. */
    private String[] priorityProperties;

    /** The dam asset property. */
    private String damAssetProperty;

    /** The dam asset types. */
    private List<String> damAssetTypes;

    /** The exclude from site map property. */
    private List<String> excludeFromSiteMapProperty;

    /** The character encoding. */
    private String characterEncoding;

    /** The extensionless urls. */
    private boolean extensionlessUrls;

    /** The url rewrites. */
    private Map<String, String> urlRewrites;

    /** The remove trailing slash. */
    private boolean removeTrailingSlash;

    /** The excluded page templates. */
    private List<String> excludedPageTemplates;

    /** The use vanity url. */
    private boolean useVanityUrl;



    /**
     * Activate.
     *
     * @param properties the properties
     */
    @Activate
    protected void activate(Map<String, Object> properties) {
        this.externalizerDomain = PropertiesUtil.toString(StringUtils.EMPTY, DEFAULT_EXTERNALIZER_DOMAIN);
        this.includeLastModified = PropertiesUtil.toBoolean(true, DEFAULT_INCLUDE_LAST_MODIFIED);
        this.includeInheritValue = PropertiesUtil.toBoolean(true, DEFAULT_INCLUDE_INHERITANCE_VALUE);

        this.changefreqProperties = new String[] {DEFAULT_PN_SEO_FREQUENCY};

        this.priorityProperties = new String[] {DEFAULT_PN_SEO_PRIORITY};
        this.damAssetProperty = PropertiesUtil.toString("", "");
        this.damAssetTypes = Arrays.asList(PropertiesUtil.toStringArray(new String[0], new String[0]));

        this.excludeFromSiteMapProperty = Arrays.asList(DEFAULT_PN_HIDE_IN_NAV);
        this.characterEncoding = PropertiesUtil.toString(null, null);
        this.extensionlessUrls = PropertiesUtil.toBoolean(false, DEFAULT_EXTENSIONLESS_URLS);
        this.urlRewrites = ParameterUtil.toMap(PropertiesUtil.toStringArray(StringUtils.EMPTY, new String[0]), ":", false, "");
        this.removeTrailingSlash = PropertiesUtil.toBoolean(DEFAULT_REMOVE_TRAILING_SLASH, DEFAULT_REMOVE_TRAILING_SLASH);
        this.excludedPageTemplates = Arrays.asList(REDIRECT_PAGE_TEMPLATE, EMPTY_PAGE_TEMPLATE, HOME_PAGE_TEMPLATE);
        this.useVanityUrl = PropertiesUtil.toBoolean(false, DEFAULT_USE_VANITY_URL);
    }

    /*
     * (non-Javadoc)
     * 
     * @see org.apache.sling.api.servlets.SlingSafeMethodsServlet#doGet(org.apache.sling.api.SlingHttpServletRequest,
     * org.apache.sling.api.SlingHttpServletResponse)
     */
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
            write(page, stream, request, null);

            for (Iterator<Page> children = page.listChildren(new PageFilter(false, true), true); children.hasNext();) {
            	Page childPage = children.next();
            	write(childPage, stream, request, null);
            	if(isModelPage(childPage)) {
            		List<String> listOfDynamicUrl = getDerivativePages(childPage,resourceResolver,pageManager);
            		for(String dynamicUrl : listOfDynamicUrl) {
            			write(childPage, stream, request, dynamicUrl);
            		}
            	}
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
                    LOGGER.warn("Can not close xml stream writer", e);
                }
            }
        }
    }

    private List<String> getDerivativePages(Page childPage, ResourceResolver resourceResolver, PageManager pageManager) {
    	List<String> listOfDerivativeResources = new ArrayList<>();
    	Resource pageResource = childPage.adaptTo(Resource.class);
    	Resource containerResource = pageResource.getChild("jcr:content/root/container");
    	if(null != containerResource) {
    		 Iterator<Resource> childResources = containerResource.listChildren();
    		while (childResources.hasNext()) {
                Resource child = childResources.next();
                if (child.getName().startsWith("derivative")) {
                	List<String> dynamicUrlList = DerivativeUtils.getDynamicUrls(child);
                	for(String dynamicUrl : dynamicUrlList) {
                		String updateUrl = childPage.getPath().concat(CommonConstants.DOT).concat(dynamicUrl);
                		
                			listOfDerivativeResources.add(dynamicUrl);
                		
                		
                	}	
                }
            }
    	}
    	return listOfDerivativeResources;
	}

	private boolean isModelPage(Page childPage) {
		return null!=childPage.getName() && childPage.getName().contains("model");
	}

	/**
     * Gets the asset folders.
     *
     * @param page the page
     * @param resolver the resolver
     * @return the asset folders
     */
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

    /**
     * Apply url rewrites.
     *
     * @param url the url
     * @return the string
     */
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

    /**
     * Write.
     *
     * @param page the page
     * @param stream the stream
     * @param request the request
     * @param dynamicUrl 
     * @throws XMLStreamException the XML stream exception
     */
    @SuppressWarnings("squid:S1192")
    private void write(Page page, XMLStreamWriter stream, SlingHttpServletRequest request, String dynamicUrl) throws XMLStreamException {
        if (isHiddenByPageProperty(page) || isHiddenByPageTemplate(page) || isPageNotReplicated(page)) {
            return;
        }
        stream.writeStartElement(NS, "url");
        String loc = "";

        if (useVanityUrl && !StringUtils.isEmpty(page.getVanityUrl())) {
            loc = externalizeUri(request, page.getVanityUrl());
        } else if (!extensionlessUrls) {
        	String formattedUrl = getFormattedUrl(page.getPath(),dynamicUrl);
    		loc = externalizeUri(request, formattedUrl);
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

    private String getFormattedUrl(String path, String dynamicUrl) {
		if(null!=dynamicUrl) {
			return String.format("%s."+dynamicUrl+".html", path);
		}
		return String.format("%s.html", path);
	}

	/**
     * Checks if is hidden by page property.
     *
     * @param page the page
     * @return true, if is hidden by page property
     */
    private boolean isHiddenByPageProperty(Page page) {
        boolean flag = false;
        if (this.excludeFromSiteMapProperty != null) {
            for (String pageProperty : this.excludeFromSiteMapProperty) {
                flag = flag || page.getProperties().get(pageProperty, Boolean.FALSE);
            }
        }
        return flag;
    }

    /**
     * Checks if is page not replicated.
     *
     * @param page the page
     * @return true, if is page not replicated
     */
    private boolean isPageNotReplicated(Page page) {
        boolean flag = false;
        if (slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR) && (!page.getProperties()
                        .get(ReplicationStatus.NODE_PROPERTY_LAST_REPLICATION_ACTION, StringUtils.EMPTY).equalsIgnoreCase("Activate"))) {
            flag = true;
        }
        return flag;
    }

    /**
     * Checks if is hidden by page template.
     *
     * @param page the page
     * @return true, if is hidden by page template
     */
    private boolean isHiddenByPageTemplate(Page page) {
        boolean flag = false;
        if (this.excludedPageTemplates != null) {
            for (String pageTemplate : this.excludedPageTemplates) {
                flag = flag || page.getProperties().get(NN_TEMPLATE, StringUtils.EMPTY).equalsIgnoreCase(pageTemplate);
            }
        }
        return flag;
    }

    /**
     * Externalize uri.
     *
     * @param request the request
     * @param path the path
     * @return the string
     */
    private String externalizeUri(SlingHttpServletRequest request, String path) {
        Page currentPage = Optional.ofNullable(request.getResourceResolver().adaptTo(PageManager.class)).map(pm -> pm.getContainingPage(request.getResource()))
                        .orElse(null);

        if (null != currentPage) {
            if (currentPage.getPath().contains("au")) {
                externalizerDomain = CommonConstants.AU_EXTERNALIZER_DOMAIN;
            } else if (currentPage.getPath().contains("de")) {
                externalizerDomain = CommonConstants.DE_EXTERNALIZER_DOMAIN;
            } else {
                externalizerDomain = CommonConstants.DEFAULT_EXTERNALIZER_DOMAIN;
            }
            if (StringUtils.isNotBlank(externalizerDomain)) {
                path = path.replaceAll(DE_PUBLISHED_SITES, StringUtils.EMPTY);
                path = path.replaceAll(AU_PUBLISHED_SITES, StringUtils.EMPTY);
                return externalizer.externalLink(request.getResourceResolver(), externalizerDomain, path);
            } else {
                if (LOGGER.isDebugEnabled()) {
                    LOGGER.debug("No externalizer domain configured, take into account current host header {} and current scheme {}", request.getServerName(),
                                    request.getScheme());
                }
                return externalizer.absoluteLink(request, request.getScheme(), path);
            }
        } else {
            return StringUtils.EMPTY;
        }
    }

    /**
     * Write asset.
     *
     * @param asset the asset
     * @param stream the stream
     * @param request the request
     * @throws XMLStreamException the XML stream exception
     */
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

    /**
     * Write assets.
     *
     * @param stream the stream
     * @param assetFolder the asset folder
     * @param request the request
     * @throws XMLStreamException the XML stream exception
     */
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

    /**
     * Write first property value.
     *
     * @param stream the stream
     * @param elementName the element name
     * @param propertyNames the property names
     * @param properties the properties
     * @throws XMLStreamException the XML stream exception
     */
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

    /**
     * Write first property value.
     *
     * @param stream the stream
     * @param elementName the element name
     * @param propertyNames the property names
     * @param properties the properties
     * @throws XMLStreamException the XML stream exception
     */
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

    /**
     * Write element.
     *
     * @param stream the stream
     * @param elementName the element name
     * @param text the text
     * @throws XMLStreamException the XML stream exception
     */
    private void writeElement(final XMLStreamWriter stream, final String elementName, final String text) throws XMLStreamException {
        stream.writeStartElement(NS, elementName);
        stream.writeCharacters(text);
        stream.writeEndElement();
    }

}
