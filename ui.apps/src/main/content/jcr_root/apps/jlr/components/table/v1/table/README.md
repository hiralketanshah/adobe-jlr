
Table (v1)

## Features

* The Table component is designed to display table
* The table component is previously called Engine Specification Component
* The Header Copy is centrally aligned.
* Maximum one CTAs is allowed.

### Use Object
The Table component uses the `com.jlr.core.models.TableModel` Sling model as its Use-object.


### Edit Dialog Properties
The following properties are written to JCR for this Table component and are expected to be available as `Resource` properties:

1. `./headerCopy` - The title of the content.
2. `./copy` - The description and the caption content
3  `./tableHTML` - The table HTML content that renders as table
4. `./id` - It defines a unique id for this component.
5. `./call To Action` - CTA can enter accessibility Label and the url path.
6. `./text` - It defines the label for the CTA.
7. `./link` - It defines the path for the CTA.
8. `./target`  - It defines whether the link needs to be opened in new tab or current tab.
9. `./linkType` - It defines the type of CTA ,whether it's a Primary or Secondary.


Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries


## Information
* **Vendor**: JLR
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: jlr.components.table.v1