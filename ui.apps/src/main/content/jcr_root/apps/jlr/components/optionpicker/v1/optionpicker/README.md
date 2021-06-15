Interactive Option Picker (v1)
====
Interactive Option Picker component written in HTL.

## Features

* Interactive Option Picker are a versatile component used in a variety of ways on DX.

### Use Object
The Interactive Option Picker component uses the `com.jlr.core.models.OptionPickerModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Content Card component and are expected to be available as `Resource` properties:

1. `./globalHeaderCopy` - defines the Header Copy that is at the bottom left section
2. `./globalSummary` - defines the Global Summary that is at the bottom section of the component.
3. `./globalCtaText` - defines the Global CTA Text for the component
4. `./globalCtaLink` - defines the Global CTA Link for the component.
5. `./globalCtaIcon` - defines the Global CTA icon for the CTA.
6. `./globalCtaLinkType` - defines the Global CTA Link Type for the CTA.
7. `./globalCtaAriaLabel` - defines the Global CTA Aria Label.
8. `./globalCtaTarget` - defines the Global CTA target (new tab or current tab) for the component.
9. `./linkType` - defines whether the CTA is primary or Secondary.
10. `./id` - It defines the unique id for the component.
11. `./optionImage` - defines an option image for the component.
12. `./thumbnailImage` - defines an thumbnail image for the component.
13. `./imageAlt` - defines the iamge alt text for the component.
14. `./isDecorative` -  Defines if the image is decorative in nature.
15. `./optionLabel` - Defines the option Label for each image
16. `./isCtaOverriden` - Defines if the local CTA should take precendence
17. `./imageLink` - defines the image link for the component
18. `./text` - defines the CTA text for the component
19. `./link` - defines the CTA link for the component
20. `./linkType` - defines the CTA link types such as Primary or secondary for the component
21. `./target` - defines the CTA target (new tab or current tab) for the component


The edit dialog allows the page to be refreshed after editing the component

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/54da7d-content-cards/t/1829dc
