Vehicle Specs(v1)
====
Vehicle Specs component written in HTL.

## Features

* Vehicle Specs component used for presenting vechicle specification on DX.

### Use Object
Vehicle Specs component component uses the `com.jlr.core.models.VehicleSpecsModel.java` and 'com.jlr.core.models.PageModel' Sling model as its Use-object.

### Edit Dialog Properties
### Edit Dialog Properties
The following properties are written to JCR for this Title Banner and are expected to be available as `Resource` properties:

1. `./bodyStyleHeader` - defines the bodyStyleHeader copy for the component.
2. `./modelHeader` - defines the modelHeader copy for the component.
3. `./engineHeader` - defines an engineHeader copy for the component.
4. `./specHeader` - defines an specHeader copy for the component.
5. `./enablePrice` - checkbox enable price for the component.
6. `./ctaList` - defines the CTA list for the component.


The edit dialog allows the page to be refreshed after editing the component


## Client Libraries
The component provides a `jlr.components.vehiclespecs.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.



## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: 
