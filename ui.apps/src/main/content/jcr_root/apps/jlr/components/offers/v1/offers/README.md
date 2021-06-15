
Offers (v1)

## Features

* The Offers component is used to display vehicle offers on the website.
* Up to two offer values can be authored (either a price and/or a finance rate).

### Use Object
The Offers component uses the `com.jlr.core.models.OffersModel` Sling model as its Use-object.


### Edit Dialog Properties
The following properties are written to JCR for this Offers component and are expected to be available as `Resource` properties:

1. `./headerCopy` - The title of the content.
2. `./copy` - The description about title or any information.
3. `./id` - It defines a unique id for this component.
4. `./call To Action` - CTA can enter accessibility Label and the url path.
5. `./text` - It defines the label for the CTA.
6. `./link` - It defines the path for the CTA.
7. `./target`  - It defines whether the link needs to be opened in new tab or current tab.
8. `./linkType` - It defines the type of CTA ,whether it's a Primary or Secondary.
9. `./ariaLabel` - It defines the arialabel for CTA.
10. `./icon` - Select an icon to be rendered before the text on the CTA.
11. `./fileReference` - Select an Image to be displayed.
12. `./isDecorative` - Check if the image should be ignored by assistive technology and therefore does not require an alternative text. This applies to decorative images only.
13. `./ImageAlt` - Textual alternative of the meaning or function of the image, for visually impaired readers.
14. `./offerCopy` - The Offer copy to be displayed.
15. `./offerPrefix` - Specify Offer prefix which is used for pricing symbol.
16. `./offerValue` - The Offer value to be displayed.
17. `./offerSuffix` - Specify the offer suffix which is used for percentage.
18. `./offerLabel` - Specify the Offer Label to be displayed.
19. `./offerDetailsButton` - Specify the Offer Details button copy to be displayed.
20. `./offerOverlayHeader` - The Offer overlay Header copy to be displayed.
21. `./offerOverlaySummary` - The Offer overlay Summary copy to be displayed.



Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: