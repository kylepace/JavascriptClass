# Workshop 7 - Using jQuery and AJAX to make a chat application.

## Resources

In order to finish this project feel free to use jQuery's ajax functions.
You can also greatly simplify your code by using jQuery's selectors to update the html on the screen.

[jQuery AJAX](https://api.jquery.com/jquery.ajax/)

[jQuery GET](https://api.jquery.com/jquery.get/)

[jQuery GETJSON](https://api.jquery.com/jquery.getjson/)


## Exercise - Live Chat Stories

### Login
As a user, I want to enter a username.

Acceptance
- The system should allow a user to enter a username, then store that username in memory.
- If using a simple text-input, hide the input when the user is "logged-in".

### Logout
As a user, I want to exit the application.

Acceptance
- The system should allow the user to press a button, logout, and be presented with the username entry.

### Create a chat room
As a user, I want to create a room to chat.

Acceptance
- User can enter a chat room name.
- If the room already exists, let the user know.
- Use http://mainstreetchat-kylepace.rhcloud.com/chatroom { name: 'Chat Room Name' }

### See chat rooms
As a user I want to see a list of chat rooms available to join.

Acceptance
- User can see a list of all available chat rooms.
- Use http://mainstreetchat-kylepace.rhcloud.com/chatroom

### Post to chat room
As a user, I can post to a chat room.

Acceptance
- User can add 250 character message to a chatroom.
- Use http://mainstreetchat-kylepace.rhcloud.com/chatroom/{id}/post { username: 'username', text: 'Text to post' }

### Search for a chat room
As a user I want to search for a chat room.

Acceptance
- Can enter text and find a chat room by name
- Use http://mainstreetchat-kylepace.rhcloud.com/chatroom?name=RoomName

### See posts in a chatroom
As a user I want to see the posts in a chat room.

Acceptance
- Click on a room to "enter".
- See posts in the room.
- Use http://mainstreetchat-kylepace.rhcloud.com/chatroom/:id where id is the _id returned on the chatroom.
