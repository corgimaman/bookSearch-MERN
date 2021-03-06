# MERN Stack: Books!!!

This is a full-stack MERN application that allows you to create a login account to search the Google API for books, and save and remove the books to your profile. This was built using GraphQL, React, MongoDB, and Node.js.

## Table of Contents
* [Installation Guide](#Installation)
* [How to Use](#Usage)
* [App History](#History)
* [License](#License)
* [Contact Info](#Contact)

## Installation
To use this locally, this app requires Node.js to install and use. The package.json is already provided, so navigate to the project folder and run `npm install`. Or skip all that and simply head over to the live site on [Heroku here](https://mern-read.herokuapp.com/).

## Usage
You can use this app without making an account to simply search for books. It uses the Google Books API, and will return for you an image of the cover, the author(s), and a description of the book.
![search](./assets/search-demo.gif)
If you create an account, you'll have an authorized token and be able to see the "Save This Book!" button at the bottom of the book's card, under the description. If you've already saved the book, it will tell you it's already saved.
![save](./assets/save-demo.gif)
You can navigate to your saved books using the link in the Nav bar, and remove books you no longer want to keep as part of your collection.
![savedBooks](./assets/saved-demo.gif)

## History

This application was a working RESTful API that was refactored into a GraphQL API built with Apollo server. The REST API was replaced with Apollo Server GraphQL queries and mutations to fetch and modify data. The authentication middleware was adjusted to work in context of the GraphQL API. An Apollo Provider was created, so the requests would communicate with the Apollo Server.

## License
This project is licensed under the MIT license.

[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)

©[corgimaman](https://github.com/corgimaman)

## Contact
Questions? Comments? Feel free to reach out to me at helloidaworld@gmail.com or on [GitHub](https://github.com/corgimaman).
