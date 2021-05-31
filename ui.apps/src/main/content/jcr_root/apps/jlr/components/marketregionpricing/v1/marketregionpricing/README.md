<!-- Jaguar Component -->
Market Region Pricing(v1)
====
Market Region Pricing component written in HTL.

### Use Object
The Market Region Pricing uses the `com.jlr.core.models.MarketRegionPricingModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Market Region Pricing component and are expected to be available as `Resource` properties:

1. `./stateList` - defines the list of state (stateName and stateValue)

The edit dialog allows the component to be refreshed after inserting/editing the component

## Client Libraries
The component provides a `jlr.components.marketregionpricing.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
