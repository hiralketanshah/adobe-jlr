<!-- Jaguar Component -->
Primary Navigation  (v1)
====
Primary Navigation component written in HTL.

## Features

* Primary Navigation Component is used for authoring Purchase, Ownership and Explore pages of primary navigation.

### Use Object
The Primary Navigation component uses the `com.jlr.core.models.PrimaryNavigationModel` Sling model as its Use-object.

### Edit Dialog Properties
The following properties are written to JCR for this Carousel component and are expected to be available as `Resource` properties:

1. `./navPagePathOne` - Link to a top level page path 1 of the Primary navigation.(Example:Purchase.html)
2. `./navPagePathTwo` - Link to a top level page path 2 of the Primary navigation.(Example:Ownership.html)
3. `./navPagePathThree` - Link to a top level page path 3 of the Primary navigation.(Example:Explore.html)
4. `./vehicleNavPagePath` - Link to a top level vehicle page of the Primary navigation.(Example:vehicles.html)
5. `./logoImageAlt` - Specify Alternative text for the Logo Image.
6. `./logoImageLink` - Specify the Link for the Logo Image.
7. `./enableLastVisited` - Check if the Last Visited should be linked to Primary Navigation.
8. `./enableCustPortal` - Check if the Customer Portal should be linked to Primary Navigation.
9. `./custPortalLink` - Specify Link to a customer portal.
10. `./custPortalAriaLabel` - Enter the Aria Label for Customer Portal.
11. `./retailerLink` - Specify Link to a Retailer Locator Page.
12. `./retailerAriaLabel` - Specify the Aria Label for Retailer Locator.
13. `./searchAriaLabel` - Specify the Aria Label for Search.
14. `./mobileBurgerAriaLabel` - Enter the Aria Label for Mobile Burger.

The edit dialog allows the page to be refreshed after editing the component

## Client Libraries
The component provides a `jlr.components.primarynavigation.v1` client library category that contains a recommended base
CSS styling and JavaScript component. It should be added to a relevant site client library using the `embed` property.

## Information
* **Vendor**: Jaguar
* **Version**: v1
* **Compatibility**: AEM 6.5
* **Component Library**:
