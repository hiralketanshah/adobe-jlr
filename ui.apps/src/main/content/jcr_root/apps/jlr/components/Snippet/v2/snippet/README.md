
Snippet (v1)

## Features

* The Snippet component is designed to allow a small amount copy to be authored as a page introduction or summary.
* The copy is centrally aligned.
* The maximum number of characters that can be used in the Snippet component is 500.
* Two Snippet components must never be placed immediately next to each other.
* Can be used as just a Header, Body copy or CTA.
* Maximum two CTAs are allowed.


### Edit Dialog Properties
The following properties are written to JCR for this Snippet component and are expected to be available as `Resource` properties:

1. `./Heading - The title of the content.
2. `./Description` - The description about title or any information.
3. `./call To Action` - CTA can enter accessibility Label and the url path. 


Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries
