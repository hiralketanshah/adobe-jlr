<!-- Jaguar Component -->
Search Config (v1)
====
Search Config component written in HTL.

## Features

* Search Config is used to configure the paths exclusions, priority for the search.

### Use Object
The Search Config component uses the `com.jlr.core.models.SearchConfigModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Search Config component and are expected to be available as `Resource` properties:

1. `./exclusion` - lists the paths to be excluded including child pages for the component.
2. `./priority` - lists the priority path and priority number for the component.

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: 
