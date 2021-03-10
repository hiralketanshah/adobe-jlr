<!-- Jaguar Component -->
Accolade (v1)
====
Accolade component written in HTL.

## Features

* Accolade are a versatile component used in a variety of ways on DX.

### Use Object
The Accolade component uses the `com.jlr.core.models.AccoladeModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Accolade component and are expected to be available as `Resource` properties:

1. `./id` - defines the id for the component
2. `./headerCopy` - defines the header copy for the component
3. `./copy` - defines the body copy for the component
4. `./date` - defines the date (optional)
5. `./backgroundImage` - defines background image for the component
6. `./logoImage` - defines the image for the logo for the component
7. `./text` - defines the CTA text for the component
8. `./link` - defines the CTA link for the component
9. `./target` - defines the CTA target (new tab or current tab) for the component

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jaguar.components.accolade.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/90a3fa-accolades
