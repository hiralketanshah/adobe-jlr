<!-- Jaguar Component -->
Vehicle Card (v1)
====
Vehicle Card Component written in HTL.

## Features

* Vehicle Card are a versatile component used in a variety of ways on DX.

### Use Object
The Vehicle Card component uses the `com.jlr.core.models.VehicleCardModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Vehicle Card and are expected to be available as `Resource` properties:

1. `./id` - defines the id for the component.
2. `./headerCopy` - defines the header copy for the component.
3. `./headerIcon` - defines an header icon for the component.
4. `./copy` - Make the image a copy to another resource.
5. `./price` - defines the price for the component.
6. `./carddata` - defines the footer list for the component ( header and copy fields).
7. `./image` - defines the image details for the component (video or image).
8. `./ctaList` - defines the CTA list for the component.


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5