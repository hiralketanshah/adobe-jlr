
Snippet (v1)

## Features

* The Snippet component is designed to allow a small amount copy to be authored as a page introduction or summary.
* The copy is centrally aligned.
* The maximum number of characters that can be used in the Snippet component is 500.
* Two Snippet components must never be placed immediately next to each other.
* Can be used as just a Header, Body copy or CTA.
* Maximum two CTAs are allowed.

### Use Object
The Article component uses the `com.jlr.core.models.SnippetModel` Sling model as its Use-object.


### Edit Dialog Properties
The following properties are written to JCR for this Snippet component and are expected to be available as `Resource` properties:

1. `./headerTitle` - The title of the content.
2. `./copy` - The description about title or any information.
3. `./id` - It defines a unique id for this component.
4. `./call To Action` - CTA can enter accessibility Label and the url path.
5. `./text` - It defines the label for the CTA.
6. `./link` - It defines the path for the CTA.
7. `./target`  - It defines whether the link needs to be opened in new tab or current tab.
8. `./linkType` - It defines the type of CTA ,whether it's a Primary or Secondary.


Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/5789e1-snippet