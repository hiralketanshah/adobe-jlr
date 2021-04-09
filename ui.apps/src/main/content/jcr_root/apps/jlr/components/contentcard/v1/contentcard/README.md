<!-- Jaguar Component -->
Content Block Container (v1)
====
Content Block Container component written in HTL.

## Features

* Content Block Container are a versatile component used in a variety of ways on DX.

### Use Object
The Content Block Container component uses the `com.jlr.core.models.ContentBlockContainerModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Content Block Container component and are expected to be available as `Resource` properties:

1. `./headerCopy` - defines the title for the component.
2. `./bodyCopy` - defines the body copy for the component.
3. `./column` - defines the column layout for the component
4. `./icon` - defines the primary CTA icon for the component.
5. `./ariaLabel` - defines the aria label for the CTA.
6. `./text` - defines the CTA text for the component.
7. `./link` - defines the CTA link for the component.
8. `./target` - defines the CTA target (new tab or current tab) for the component.
9. `./linkType` - defines whether the CTA is primary or Secondary.
10. `./id` - It defines the unique id for the component.


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/54da7d-content-cards/t/1829dc
