<!-- Jaguar Component -->
Gallery Categories  (v1)
====
Gallery Categories component written in HTL.

## Features

* Gallery Categories component is used in the gallery main page

### Use Object
The Gallery Categories component uses the `com.jlr.core.models.GalleryCategoriesModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Carousel component and are expected to be available as `Resource` properties:

1. `./headerCopy` - defines the header for the component
2. `./copy` - defines the body copy for the component
3. `./fileReference` - defines an iamge for the component
4. `./imageAlt` - defines the iamge alt text for the component
5. `./imageLink` - defines the image link for the component
6. `./text` - defines the CTA text for the component
7. `./link` - defines the CTA link for the component
8. `./linkType` - defines the CTA link types such as Primary or secondary for the component
9. `./target` - defines the CTA target (new tab or current tab) for the component


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.gallerycategories.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/190487-article
