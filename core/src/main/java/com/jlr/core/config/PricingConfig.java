package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.osgi.service.metatype.annotations.Option;

/**
 * Pricing Details OSGI configuration
 * 
 * @author Adobe
 *
 */
@ObjectClassDefinition(name = "JLR Pricing Details Configuration", description = "JLR Pricing Details Configuration")
public @interface PricingConfig {

    @AttributeDefinition(name = "Production Endpoints", description = "Production Endpoints from which the prices shall be fetched. Add the trailing slash. Format to be followed : <region> | <endpoint>", type = AttributeType.STRING)
    public String[] listOfProdEndpoints() default { "de|https://rules.configureconnect.com/",
            "en_au|https://rules.australia.jlr.com/" };

    @AttributeDefinition(name = "Staging Endpoints", description = "Staging Endpoints from which the prices shall be fetched. Add the trailing slash. Format to be followed : <region> | <endpoint>", type = AttributeType.STRING)
    public String[] listOfStageEndpoints() default { "de|https://rules.staging.configureconnect.com/",
            "en_au|https://rules.australia.jlr.com/" };

    @AttributeDefinition(name = "DE staging API Key", description = "DE staging API key to be used while fetching from staging environment", type = AttributeType.STRING)
    public String stageApiKey() default "adobestagingkeyPSxmWxDfRFbmUE6p7DM5f597WNMU3zzn";

    @AttributeDefinition(name = "Static part of the endpoints", description = "Static part of the endpoints. Add the trailing slash. Format to be followed : <region> | <static part of the endpoint>", type = AttributeType.STRING)
    public String[] listOfStaticUrl() default { "de|rc/lr2/de/", "en_au|rc/lr2/en_au/" };

    @AttributeDefinition(name = "List of Config Pages", description = "List of Config Pages. Format to be followed : <region>|<config page path>", type = AttributeType.STRING)
    public String[] listOfConfigPages() default {
            "de|/content/landrover/global/europe/published-sites/de_de/config/price-config",
            "en_au|/content/landrover/global/row/published-sites/en_au/config/price-config" };

    @AttributeDefinition(name = "Australian states", description = "List of Australian states", options = {
            @Option(label = "Queensland", value = "QLD"),
            @Option(label = "Australian Capital Territory", value = "ACT"),
            @Option(label = "New South Wales", value = "NSW"), @Option(label = "Northern Territory", value = "NT"),
            @Option(label = "South Australia", value = "SA"), @Option(label = "Tasmania", value = "TAS"),
            @Option(label = "Victoria", value = "VIC"), @Option(label = "Western Australia", value = "WA") })
    public String[] listOfStates() default { "QLD", "ACT", "NSW", "NT", "SA", "TAS", "VIC", "WA" };

    @AttributeDefinition(name = "Destination path", description = "Destination path", type = AttributeType.STRING)
    public String[] listOfDestinationPaths() default { "stage|/var/jlr/pricing/stg/", "prod|/var/jlr/pricing/prd/" };

    @AttributeDefinition(name = "Replication Agents", description = "Comma separated list of replication agents", type = AttributeType.STRING)
    public String replicationAgent() default "publish";

    @AttributeDefinition(name = "Destination path to be replicated", description = "Destination path to be replicated", type = AttributeType.STRING)
    public String replicationPath() default "/var/jlr/pricing/prd";
}
