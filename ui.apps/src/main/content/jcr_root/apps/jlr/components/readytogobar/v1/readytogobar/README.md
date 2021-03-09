
Ready To Go Bar (v1)

## Features

* The Ready to Go Bar is used to provide four key links to other sections on DX or to guide users to other touch points such as Test Drives and the configurator.
* Commonly used at the top of a page below the Hero or at the bottom above the footer.
* Must contain four items (no more, no less).
* Must have an icon, header, body copy and destination link.
* The content in the RTGB also feeds the Floating Action Button.


### Edit Dialog Properties
The following properties are written to JCR for this Ready To Go Bar component and are expected to be available as `Resource` properties:

1. `./id` - It defines the unique id for the component.
2. `./Description` - The description about title or any information.
3. `./Link TextL` - Accessibility text to Show user the info about the link. 
4. `./Link URL` - URL for getting more info regarding the image or context.
5. `./linkType` - Link Type for the link authored - to make a link as Primary or Secondary.
6. `./Target` - Add this to open page in new tab or current tab.
7. `./enableFAB` - If checked 'Floating Action Bar' will be visible.
8. `./Icon` - Icon to display about the content specified.
9. `./imageAlt` - Alternate text for the image.




Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries

## Information
* **Vendor**: Jaguar
* **Version**: v2
* **Compatibility**: AEM 6.5
* **Component Library**: https://wiki.jlrdxhelp.com/967de2bc9/p/6032c4-ready-to-go-bar
