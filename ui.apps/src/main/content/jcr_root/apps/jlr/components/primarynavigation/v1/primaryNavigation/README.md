<!-- Jaguar Component -->
Mega Drop Down  (v1)
====
Mega Drop Down component written in HTL.

## Features

* Mega Drop Down Component is used for authoring Purchase, Ownership and Explore sections of primary navigation. It carries 5 templates.

### Use Object
The Mega Drop Down component uses the `com.jlr.core.models.MegaDropDownModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Carousel component and are expected to be available as `Resource` properties:

1. `./navPagePathOne` - Link to a content page one of the Primary navigation.
2. `./navPagePathTwo` - Link to a content page Two of the Primary navigation.
3. `./navPagePathThree` - Link to a content page Three of the Primary navigation.


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.megadropdown.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**:
