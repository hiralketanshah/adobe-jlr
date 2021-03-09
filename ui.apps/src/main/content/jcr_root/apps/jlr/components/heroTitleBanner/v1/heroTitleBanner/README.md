<!-- Jaguar Component -->
Hero Title Banner (v1)
====
Hero Title Banner component written in HTL.

## Features

* Hero Title Banner are a versatile component used in a variety of ways on DX.

### Use Object
The Hero Title Banner component uses the `com.jlr.core.models.HeroTitleBannerModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Hero Title Banner component and are expected to be available as `Resource` properties:

1. `./headerCopy` - defines the title for the component
2. `./copy` - defines the body copy for the component
3. `./fileReference` - defines an iamge for the component
4. `./imageAlt` - defines the iamge alt text for the component
5. `./text` - defines the CTA text for the component
6. `./link` - defines the CTA link for the component
7. `./target` - defines the CTA target (new tab or current tab) for the component
8. `./linkType` - defines whether the CTA is primary or Secondary


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/042104-hero-title-banner
