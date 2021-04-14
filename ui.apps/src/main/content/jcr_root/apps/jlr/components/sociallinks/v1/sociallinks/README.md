<!-- Jaguar Component -->
Social Links Component (v1)
====
Social Links component written in HTL.

## Features

* Social Links are a versatile component used in a variety of ways on DX.

### Use Object
The Social Links Component uses the `com.jlr.core.models.SocialLinksModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Social Links Component and are expected to be available as `Resource` properties:

1. `./headerTitle` - defines the title for the Links.
2. `./socialLinks` - shows a multiple option to set Text, Link, Target and Icons.
3. `./text` - defines the CTA text for the component.
4. `./link` - defines the CTA link for the component.
5. `./target` - defines the CTA target (new tab or current tab) for the component.
6. `./Icon` - defines the social icons like facebook,twitter etc.



The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/61fd5e-footer
