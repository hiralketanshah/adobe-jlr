
Quote (v1)

## Features

* Used on pages that require a component to reference a quote from an individual.

### Use Object
The Quote component uses the `com.jlr.core.models.QuoteModel` Sling model as its Use-object.


### Edit Dialog Properties
The following properties are written to JCR for this Quote component and are expected to be available as `Resource` properties:

1. `./id` - It defines a unique id for this component.
2. `./quote` - Specify the quote /header text.
3. `./quoteAuthorName` - Specify the name of the individual who said the quote.
4. `./quoteTitleName` - Specify the title of the individual who said the quote.

Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: 