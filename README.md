# All Hail Ceasar! Task

This solution is made by [Sebastian Porling](https://github.com/sebastian-porling).

## Motivation and Explanation

I use [Bootstrap Material Design](https://fezvrasta.github.io/bootstrap-material-design/) for the styling of the page page. It is almost the same as normal bootstrap but with some styling tweaks.

The solution utilizes modules for better seperation of the different methods. I use the class [**caesar.mjs**](/js/modules/caeser.mjs) for handling the cipher calculations. It uses the same method for calculating the encryption and decryption. The only diffenrece is that the steps are either negative or positive.

The [**util.mjs**](/js/modules/util.mjs) has some methods that is used for checking if multiple variables are empty or undefined.

The [**elements.mjs**](/js/modules/elements.mjs) just declares some of the HTML elements needed for getting the user input and printing the output for the DOM.

The [**main.js**](/js/main.js) handles the methods from the user actions and input. Like the encrypt and decrypt buttons. It checks if the fields are not empty and then calculates the cipher and displays the output in the DOM.
