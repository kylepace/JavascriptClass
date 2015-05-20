# Workshop 6 - All about ajax

There are two exercises, with each you are allowed to use jQuery to finish
the project.  jQuery is already included on the screen.

## Resources

In order to finish this project feel free to use jQuery's ajax functions.

[jQuery AJAX](https://api.jquery.com/jquery.ajax/)

[jQuery GET](https://api.jquery.com/jquery.get/)

[jQuery GETJSON](https://api.jquery.com/jquery.getjson/)


### Exercise 1 - Hipster Lorem Ipsum

http://hipsterjesus.com/api/ is an api that randomly generates Lorem Ipsum with a hipster jesus spin.  Use this api to make requests at the push of a button and display them on screen.

### Exercise 2 - Google

https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=Aeronautics&callback=? is an api that simulates google results based on search term.

Allow a user to search a term, then search the api using that term to produce search results.  This API requires the request type to be JSON otherwise it will block the call.

The search term is specified in the parameter &q=YOURSEARCHTERM, so use this to filter results.

Note the "callback=?", this is necessary for CORS (cross-site request sharing), so make sure it is at the end of the request.

Inspect the output results and draw whatever you feel necessary to the screen to community the results.
