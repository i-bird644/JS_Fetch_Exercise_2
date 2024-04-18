# Fetch and Display Users Exercise

## API Information
We'll be using [this random user generator API](https://randomuser.me/documentation) to get information about user(s) and display that information on the webpage.

The API can be accessed by making a GET fetch request to this url: https://randomuser.me/api/

To gain a better understanding about the API and the data it returns, I recommend going to that URL in your web browser and looking at the data it gives you.

This is the same process that we need to recreate by using the `fetch()` method in our JavaScript code.

## Coding Steps

### Setup
1. Make a new folder inside of `/repos` and open it with Visual Studio Code
1. Make the usual `index.html` file
1. Be sure to attach a link to a `script.js` file and defer its execution
1. Optionally make a `style.css` file and link to it inside of your html file
1. Feel free to add some HTML and CSS to your webpage to make it your own. Maybe create an `h1` tag, and/or `p` tags... Have fun with it

### JavaScript (Within script.js)
1. Create a function called `getUserData`. It doesn't require any parameters yet (we will refactor this function in a bit)
1. Use the `fetch()` method to send a request to this URL: `https://randomuser.me/api/`
1. Consume the promise that it returns by chaining a `.then()` method onto your `fetch`.
1. Provide a callback function as a parameter to the `.then()` method. The callback function should have a parameter (we'll name it `response`). The callback function's body should parse the response object's JSON data by invoking `.json()` and return the result.
1. Handle the next promise by again chaining a `.then()` method onto the previous `.then()` method.
1. Again, provide a callback function which takes one parameter (we'll call it data). This time the callback function's body should simply log out the `data` parameter.
1. Handle any potential errors by chaining a `.catch()` method onto the previous `.then()` method.
1. Provide the `.catch()` with a callback function which takes one parameter (we'll call it err). The callback function's body should `console.error()` the `err` parameter.

### Checking our work so far
1. Above or below this function you just made, simply invoke the function `getUserData()`.
1. Run and test your code. Open the browser console to see if the random user data shows up in your console. Work through any errors you may be getting.

### Extract and Display the data
Now that you're able to get a user's data, extract just the pieces of information that you want to display

1. Create a new function called `displayUser`. This function will take a parameter (we'll call it `userData`).
1. Create temporary variables for the user's name, city, country, email, and large picture. Each variable will need to be assigned the appropriate value from the `userData` object. For example, the name will need to be a concatenation of `userData.name.first` and `userData.name.last`. (You can include the title if you'd like, as well)

Create HTML elements to contain the information and add them to the DOM. You'll need to use DOM methods and properties like `document.createElement()`, `.append()`, `.textContent`, etc...

1. Create a div with a class of `userContainer`
1. Create an img with a `src` property that points to the large picture variable you created earlier, and an `alt ` property that uses the name variable you created earlier.
1. Create separate paragraph tags for the user's name, city, country, and email. Be sure to set each of their `textContent` properties to the appropriate variables you made earlier.
1. Append the img and paragraphs to the `userContainer` div
1. Append the div onto the DOM wherever you'd like (Select an element first, or simply attach onto the `document.body`)

Lastly, you'll need to invoke this `displayUser` function at the right time

1. You can only show a user's data on the screen once you *have* a user's data. So, back in the `getUserData` function, inside the callback function of the **second** `.then()` method, invoke the function: `displayUser(data.results[0]);`

Now all the pieces of our code should be tied together, and hopefully, you'll see the user's data on your webpage.