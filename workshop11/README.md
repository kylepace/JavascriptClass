# Workshop 11 - Promises Recap

## Resources

Feel free to use any of the jQery AJAX functions to complete the exercises.

[jQuery Deferred](https://api.jquery.com/category/deferred-object/)

[jQuery AJAX](https://api.jquery.com/jquery.ajax/)

[jQuery GET](https://api.jquery.com/jquery.get/)

[jQuery GETJSON](https://api.jquery.com/jquery.getjson/)


## Overall Exercise - Cap Builder using Promises

The goal of the following problem set is to render out baseball caps with options for a user to filter through, select, build and purchase a baseball cap.  As you build this code, you might find you need to use promises to coordinate making multiple trips to the server in order to speed up the user interface.

## Overall Exercise - Get All Caps

The first step will be to get all baseball cap types.

1. Make a GET call to
```
http://mainstreetchat-kylepace.rhcloud.com/caps
```
and log the results out to the screen.

2. Using the same URL, instead of logging the results out, add the results to the HTML on the page so that a user would be able to select a cap.

3. Allow a user to select a cap, store the user's selection and display that on screen.

## Exercise - Get Cap Configurations

Once a cap is selected, we need to display the configurations for the user to select the color, size and logo of the cap.

1. Make a GET call to
```
http://mainstreetchat-kylepace.rhcloud.com/caps/{id}/colors
```
and log out the results for the data structure.

2. Using a select list or radio button set, allow the user to pick the color they want.  Store the color in addition to cap type.  You might want to create an object to store this information.

3. Make a GET call to
```
http://mainstreetchat-kylepace.rhcloud.com/caps/{id}/sizes
```
and log out the results.

4. Just like the color example, provide a place for the user to select the size.  Sizes of cap vary by type.  Once selected, again, store this information.

5. Make a GET call to
```
http://mainstreetchat-kylepace.rhcloud.com/caps/{id}/logos
```
and log out the results.

6. A completed cap can have two logos, front and back, so give the user the ability to select two logos from this list.

## Exercise - Creating Cap and Completing the Order

1. Once you have a cap put together make a POST call to
```
http://mainstreetchat-kylepace.rhcloud.com/caporder
```
with the structure
```
{
	"type": "CAPTYPE",
	"size": "CAPSIZE",
	"color": "CAPCOLOR",
	"frontLogo": "FRONTLOGO",
	"backLogo": "BACKLOGO"
}
```
This will complete the order.

2. Try re-configuring the page to allow for multiple selections.  Then post multiple times to the same route to complete an order that has more than one configured cap.
