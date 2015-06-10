# Workshop 9 - Revisiting Object Modeling

## Exercises

The goal of this workshop is to become more fluent with javascript syntax, vocabulary and to understand how to create and work with objects.  Try to write at least the first five exercises yourself to gain confidence and muscle memory.  Syntax comes with practice.


### Beginner Refreshers

1. Create a variable named `person` and assign it the value `'Mr. Rogers'`;

2. Log out to the console the length of the person variable.

3.  Add the text `" Neighborhood"` to the person variable and log out the results to the screen.

4. Create another variable named `age` and give it the value 57.

5. Concatenate the two variables `person` and `age` together in a third variable called `personAndAge`.   Put a space between the two variables.  Log that value out to the screen.

6. Write a function called `add` that takes in two arguments and returns the result of adding those two arguments together.

7. Call the `add` function you just created with the values `6` and `7` and assign that to variable called `thirteen`.  Log `thirteen` to the screen.

8. Call the `add` function with the values `"Star Wars"` and `"The Force Awakens"`.  Store that information in memory and log it out to the screen.

9. Create a function called `printArray` that takes in an array as a parameter.  When called, the function should print out any values in the array.  Pass in an array called `cereals` that contains the values `Cap'n Crunch`, `Cheerios` and `Wheaties`.  Pass `cereals` into the `printArray` method and observe the results.

10. Create a function called `canRetire` that returns true if the argument value is greater than or equal to the retirement age, and false if it is not.  Call the function with the value `21`, store it in a variable, and log it out.


### Intermediate Modeling

The theme of the modeling exercise will revolve around hotels.  The main domain will consist of hotels, hotel rooms, guests etc... If a property you feel integral to the operation of a hotel is not in the list below, feel free to play around with the code.

1. Create an object to represent a hotel.  The hotel should have a name, maximum occupancy, star rating and location.  The location should, at a minimum, contain the city and state of the hotel.

2. Hotels need rooms, add hotel room objects to the hotel.  A hotel room needs to have a unique number and how many people it can fit.  The hotel also wants to know if the room has wifi enabled, free cable tv, or a jacuzzi.

3. The hotel needs to communicate how many rooms are available.  Alter the hotel model (if need be) to know which rooms are available, then add a method on the hotel that returns whether or not any rooms are available.

4. Hotels get filled with people.  Add a method onto the hotel to book a room for guests.  Only book rooms that are available.  Make sure to keep the hotels state correct, don't double book rooms.

5. To make the previous method more correct, when booking a room, make sure the available room can accommodate the amount of people attempting to book a room.

6. Guests eventually leave.  Model out the process of a guest leaving the hotel room.  There are many ways to solve this problem depending on your previous choices (i.e does a guest leave a room?  does a hotel checkout a guest? both?).

7. Hotels want to make money.  Starting with 0, give a value to the amount of money the hotel is making.  Then either give a price to each particular room, or a price to the rooms in general.  When a room is booked, add more money to the hotels bank.
