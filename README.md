# futurama-quotes-api
A full-stack web app with a home page, a futrurama quote game and two get routes for retrieving quotes (/randomquote and /allquotes).

This application serves as an API for retrieving (get requests only) Futurama quotes.

The quote structure is:

``{name: "characters name", quote: "the quote", score: "1-3 difficulty to guess"}``

For the home page with links and instructions:

https://futuramaquoteapi.herokuapp.com

For one randomly chosen futurama quote:

https://futuramaquoteapi.herokuapp.com/randomquote

For all the quotes:

https://futuramaquoteapi.herokuapp.com/allquotes

Or to play a Futurama quote trivia game using the quotes:

https://futuramaquoteapi.herokuapp.com/playgame

This project uses node.js, heroku and native web technologies (vanilla javascript, HTML and CSS)