<!-- Jaguar Component -->
Full Frame Carousel (v1)
====
Full Frame Carousel component written in HTL.

## Features

* Full Frame Carousel are a versatile component used in a variety of ways on DX.

### Use Object
The Full Frame Carousel component uses the `com.jlr.core.models.FullFrameCarouselModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Full Frame Carousel component and are expected to be available as `Resource` properties:

1. `./id` - defines the id for the component.
2. `./headerTitle` - defines the header title for the component.
3. `./copy` - defines the body copy for the component.
4. `./assetType` - defines the assetType - image or video, accordingly show and hide teh fields.
5. `./ctaList` - defines the list of CTA for the component where max number of CTAs is 2.

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.fullframecarousel.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
