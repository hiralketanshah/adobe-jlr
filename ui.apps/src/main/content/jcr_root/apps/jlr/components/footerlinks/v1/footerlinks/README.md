<!-- Jaguar Component -->
Full Width Image (v1)
====
Full Width Image component written in HTL.

## Features

* Full Width Image are a versatile component used in a variety of ways on DX.

### Use Object
The Full Width Image component uses the `com.jlr.core.models.FullWidthImageModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Full Width Image component and are expected to be available as `Resource` properties:

1. `./headerCopy` - defines the title for the component.
2. `./bodyCopy` - defines the body copy for the component.
3. `./fileReference` - defines an iamge for the component.
4. `./imageLink` - Make the image a link to another resource.
5. `./imageAlt` - defines the iamge alt text for the component.
6. `./text` - defines the CTA text for the component.
7. `./link` - defines the CTA link for the component.
8. `./target` - defines the CTA target (new tab or current tab) for the component.
9. `./linkType` - defines whether the CTA is primary or Secondary.
10. `./logoImage` - It defines the logo to be used at the top of title.
11. `./id` - It defines the unique id for the component.


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/20bf47-full-width-image
