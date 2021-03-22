<!-- Jaguar Component -->
Market Selector (v1)
====
Market Selector component written in HTL.

## Features

* Market Selector are a versatile component used in a variety of ways on DX.

### Use Object
The Market Selector component uses the `com.jlr.core.models.MarketListModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Market Selector component and are expected to be available as `Resource` properties:

1. `./marketName` - Specify the name of the market or country.
2. `./marketFlag` - Specify the icon for the market or country flag.
3. `./region` - Specify the region in an market.
4. `./languageTitle` - Specify the Language of the market.
5. `./link` - defines the CTA link for the component.
6. `./target` - defines the CTA target (new tab or current tab) for the component.



The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/61fd5e-footer
