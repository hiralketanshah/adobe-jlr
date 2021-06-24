
Site Notification (v1)

## Features

* The Site Notification is the popup that is shown to users on DX.
* Multiple notifications can exist on the site, across multiple pages (never two notifications on the same page)

### Use Object
The Site Notification component uses the `com.jlr.core.models.SiteNotificationModel` Sling model as its Use-object.


### Edit Dialog Properties
The following properties are written to JCR for this Site Notification component and are expected to be available as `Resource` properties:

1. `./headerCopy` - The title of the content.
2. `./copy` - The summary about title or any information.
3. `./id` - It defines a unique id for this component.
4. `./closeButtonCopy` - The copy to be rendered on the close button.
5. `./closeButtonArialabel` - The aria label to be rendered on the close button.


Note: on author instances automatic transitioning only works with the `wcmmode=disabled` URL parameter.

## Client Libraries


## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**: 