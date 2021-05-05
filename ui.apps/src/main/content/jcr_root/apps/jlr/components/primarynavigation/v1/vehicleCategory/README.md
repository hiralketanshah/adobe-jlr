<!-- Jaguar Component -->
Vehicle Category  (v1)
====
Vehicle Category component written in HTL.

## Features

* Vehicle Category Component is used for authoring.

### Use Object
The Vehicle Category component uses the `com.jlr.core.models.VehicleCategoryModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Carousel component and are expected to be available as `Resource` properties:

1. `./vehicleTabName` - Vehicle tab name to be displayed at the top.
2. `./vehicleFamilyName` - Vehicle Family Name to be specified.
3. `./vehicleTitle` - The title of the vehicle to be displayed.
4. `./vehicleLink` - Link to a vehicle information to be specified.
5. `./vehicleImage` - Select an Vehicle background image to be displayed for the vehicle title.

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.VehicleCategoryModel.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**:
