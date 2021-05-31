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

1. `./mmTemplate` - Select the template of the mega drop down.
2. `./tabName` - The Primary Navigation tab name to be specified.
3. `./primaryNavTitle` - The Primary Navigation title to be specified.
4. `./primaryNavAriaLabel` - The aria label for the primary navigation title is specified.

Left Pane

5. `./leftPaneCtaText` - The text to be rendered on the CTA
6. `./leftPaneCtaLink` - Link to a content page, external URL or page anchor.
7. `./leftPaneCtaIcon` - Select an icon to be rendered before the text on the CTA
8. `./leftPaneCtaLinkType` - Link Type for the link authored - to make a link as Primary or Secondary
9. `./leftPaneCtaAriaLabel` - Leave blank for automated aria label ({header}:{CTA text}).
10. `./leftPaneCtaTarget` - Target for the link authored - current tab or same tab
11. `./leftPaneHeaderCopy` - The Header copy to be displayed.
12. `./leftPaneBodyCopy` - The Body copy to be displayed.

13. `./leftPaneCopyCtaText` - The text to be rendered on the CTA
14. `./leftPaneCopyCtaLink` - Link to a content page, external URL or page anchor.
15. `./leftPaneCopyCtaIcon` - Select an icon to be rendered before the text on the CTA
16. `./leftPaneCopyCtaLinkType` - Link Type for the link authored - to make a link as Primary or Secondary
17. `./leftPaneCopyCtaAriaLabel` - Leave blank for automated aria label ({header}:{CTA text}).
18. `./leftPaneCopyCtaTarget` - Target for the link authored - current tab or same tab

Right Pane

19. `./fileReferenceImage` - Select an Image to be displayed
20. `./isImageDecorative` - Check if the image should be ignored by assistive technology and therefore does not require an alternative text. This applies to decorative images only.
21. `./rightPaneImageAlt` - Textual alternative of the meaning or function of the image, for visually impaired readers.
22. `./rightPaneImageLink` - Link to a content page, external URL or page anchor.
23. `./rightPaneImageTarget` - Target for the link authored - current tab or same tab
24. `./leftPaneCopyCtaTarget` - Target for the link authored - current tab or same tab

25. `./fileReferenceImageTxt` - Select an Image to be displayed
26. `./isImageTextDecorative` - Check if the image should be ignored by assistive technology and therefore does not require an alternative text. This applies to decorative images only.
27. `./rightPaneImageTextAlt` - Textual alternative of the meaning or function of the image, for visually impaired readers.
28. `./rightPaneHeaderCopy` - The Header copy to be displayed.
29. `./rightPaneBodyCopy` - The Body copy to be displayed.

30. `./rightPaneCopyCtaText` - The text to be rendered on the CTA
31. `./rightPaneCopyCtaLink` - Link to a content page, external URL or page anchor.
32. `./rightPaneCopyCtaIcon` - Select an icon to be rendered before the text on the CTA
33. `./rightPaneCopyCtaLinkType` - Link Type for the link authored - to make a link as Primary or Secondary
34. `./rightPaneCopyCtaAriaLabel` - Leave blank for automated aria label ({header}:{CTA text}).
35. `./rightPaneCopyCtaTarget` - Target for the link authored - current tab or same tab

QuickLinks

36. `./quickLinksCtaText` - The text to be rendered on the CTA
37. `./quickLinksCopyCtaLink` - Link to a content page, external URL or page anchor.
38. `./quickLinksCopyCtaIcon` - Select an icon to be rendered before the text on the CTA
39. `./quickLinksCopyCtaLinkType` - Link Type for the link authored - to make a link as Primary or Secondary
40. `./quickLinksCopyCtaAriaLabel` - Leave blank for automated aria label ({header}:{CTA text}).
41. `./quickLinksCopyCtaTarget` - Target for the link authored - current tab or same tab

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.megadropdown.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**:
