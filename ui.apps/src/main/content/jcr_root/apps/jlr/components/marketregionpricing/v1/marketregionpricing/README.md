<!-- Jaguar Component -->
Market Region Pricing(v1)
====
Market Region Pricing component written in HTL.

## Features

* Vehicle Summary are a versatile component used in a variety of ways on DX.

### Use Object
The Vehicle Summary component uses the `com.jlr.core.models.VehicleSummaryModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Vehicle Summary component and are expected to be available as `Resource` properties:

1. `./id` - defines the id for the component and is a Mandatory field.
2. `./headerCopy` - defines the header title for the component
4. `./price` - defines the body copy for the component
5. `./copy` - defines the body copy for the component
6. `./fileReference` - defines background image for the component
7. `./imageAlt` - defines the iamge alt text for the component
8. `./imageLink` - defines the image link for the component
9. `./text` - defines the primary CTA text for the component
10. `./link` - defines the primary CTA link for the component
11. `./icon` - defines the primary CTA icon for the component
12. `./target` - defines the primary CTA target for the component
13. `./ctaList` - multifield for 2 secondary CTAs for the component

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jaguar.components.vehilesummary.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://zeroheight.com/518dbc646/v/latest/p/699464-vehicle-summary/b/182369
