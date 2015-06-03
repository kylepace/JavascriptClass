# Workshop 8 - Using jQuery and Promise-based AJAX to make a single-page shopping cart app.

## Resources

You'll once again need jQuery's AJAX functions, this time utilize the promises the shorthand functions return
to handle errors.  The server will randomly error, you should handle the errors and let the user know what is going on.


[jQuery Deferred](https://api.jquery.com/category/deferred-object/)

[jQuery AJAX](https://api.jquery.com/jquery.ajax/)

[jQuery GET](https://api.jquery.com/jquery.get/)

[jQuery GETJSON](https://api.jquery.com/jquery.getjson/)


## Exercise - Shopping Cart Stories

### Search for products
As a user, I want to search for an item in the shopping cart so eventually I could buy something.

Acceptance
- Using the provided api, search product name and description.
- Use GET http://mainstreetchat-kylepace.rhcloud.com/products?search=TEXT

### Show product categories
As a user I want to see product categories so I can eventually filter products.

Acceptance
- Using the provided api, render out categories
- Use GET http://mainstreetchat-kylepace.rhcloud.com/categories

### Search by categories
As a user, I want to see products by categories.

Acceptance
- Using the provided api, search product by category.
- Alternatively, allow both search and filter by category.
- Use GET http://mainstreetchat-kylepace.rhcloud.com/products?category=CATEGORY

### Create an order
- As a user, I want to select products and create an order with the selected products so I can enjoy the products.

Acceptance
- Using the provided api, create an order with the user-selected products.
- Use
POST http://mainstreetchat-kylepace.rhcloud.com/order

Format

	{
		{
		    "items": [{
		        "name": "Third Product",
		        "description": "The very best product",
		        "price": 11.5,
		        "image": "https://www.batleys.co.uk/img/general/bestin-product-range.jpg",
		        "categories": [
		            "First",
		            "Second",
		            "Third"
		        ]
		    }]
		}
	}

### Search for order by unique identifier
- As a user, I want to search for an order by the unique ID I was given when the order was created, so that I can eventually can update the order.

Acceptance
- Using the provided api, fetch and render the contents of the order by the unique identifier.
- Use
GET http://mainstreetchat-kylepace.rhcloud.com/order/ORDERID

### Add items to the order
- As a user I want to add items to or remove items from the order.

Acceptance
- Using the provided api, update the order.
- Use
PUT http://mainstreetchat-kylepace.rhcloud.com/order/ORDERID

Format

	{
		{
			"items": [{
				"name": "Third Product",
				"description": "The very best product",
				"price": 11.5,
				"image": "https://www.batleys.co.uk/img/general/bestin-product-range.jpg",
				"categories": [
					"First",
					"Second",
					"Third"
				]
			}]
		}
	}
