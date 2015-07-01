# Workshop 10 - jQuery and AJAX practice

## Resources

Feel free to use any of the jQery AJAX functions to complete the exercises.

[jQuery Deferred](https://api.jquery.com/category/deferred-object/)

[jQuery AJAX](https://api.jquery.com/jquery.ajax/)

[jQuery GET](https://api.jquery.com/jquery.get/)

[jQuery GETJSON](https://api.jquery.com/jquery.getjson/)


## Exercise - Get Familiar With ajax

1. Make a GET call to
```
http://mainstreetchat-kylepace.rhcloud.com/firstAjax
```
and log the results out to the screen.

2. Using the same URL, instead of logging the results out, add the results to the HTML on the page wherever you like.

3. Now add a button to the page and when the user clicks the button, make an ajax call to the url and add the results to the screen.

## Exercise - POSTing

1. Make a POST call to
```
http://mainstreetchat-kylepace.rhcloud.com/article
```
using the format
```
{
    "title": "YOUR TITLE GOES HERE",
    "content": "YOUR CONTENT GOES HERE"
}
```
with whatever hard-coded data you want.

2. Using the same url described above, give two text areas for a user to enter custom data for their article.

3. Notice what happens when you leave one parameter out.  Handle the error case when a user fails to enter either the title or content fields.

## Exercise - Leveraging the Server
Sometimes we need a server to handle more CPU intensive processing, we can use AJAX to ask the server for help.

1. Javscript can do math, but instead let's let out server handle this.  Create a GET request to the server at
```
http://mainstreetchat-kylepace.rhcloud.com/add
```
with the query parameters 'firstNumber' and 'secondNumber' for each of the numbers.  If you need help understanding what a query parameter is for a GET HINT: it's everything after a ?.

Once you have the result, then allow a user to enter two numbers, GET the result from the server and display the result back out to the screen.

## Exercise - Handling JSON responses
It is commonplace for a server to respond with JSON data.  This makes the response payload smaller and makes dealing with the incoming data easier for HTML templating.

1. Make a request to the route at
```
http://mainstreetchat-kylepace.rhcloud.com/books
```
Once you have the result, for every result in the list, render out the object to the screen in a way that is easy for a user to identify.  You'll have to use Chrome or console.log to figure out the structure of the data.

2. Search for books by adding a query string parameter "search" to the url.  Search for a book by name, the search will compare the beginning of the strings.  As before, render the results out to the screen after the data is returned.
