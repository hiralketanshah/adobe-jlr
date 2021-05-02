<!-- Jaguar Component -->
Hero Title Banner (v1)
====
Hero Title Banner written in HTL.

## Features

* Hero Item are a versatile component used in a variety of ways on DX.

### Use Object
The Hero Carousel component uses the `com.jlr.core.models.HeroTitleBannerModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Title Banner and are expected to be available as `Resource` properties:

1. `./id` - defines the id for the component.
2. `./headerCopy` - defines the header copy for the component.
3. `./headerIcon` - defines an header icon for the component.
4. `./copy` - Make the image a copy to another resource.
5. `./price` - defines the price for the component.
6. `./footerList` - defines the footer list for the component ( header and copy fields).
7. `./assetType` - defines the asset type for the component (video or image).
8. `./ctaList` - defines the CTA list for the component.


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.herotitlebanner.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5