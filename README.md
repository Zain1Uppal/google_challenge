# Replicating Google Search

## Installation & Usage

### Installation

* `git clone` or download the repository.
* Navigate to the `server` directory using `cd server`.
* Run `npm install` to install the dependencies.

### Usage

#### Server

* Run `npm run dev` to start the server.

#### Client

* `Start index.html`.
* Enter a word into the Google search bar and click either button.
    * `Google Search` will direct you to a list of results relating to the word entered.
    * `I'm Feeling Lucky` will direct you to one of the results chosen at random.
        * Clicking refresh after a result is shown, will direct you to another random result

## Changelog

### server

#### index.js

[x] Got the server running on a specified port.

#### server.js

[x] Got access to the data stored in `data.js` to enable the search functions.

[x] Added a main route that returns every data object available in our API.

[x] Added a `/search` route that returns a JSON of all the results that have a match in their titles or descriptions with the user's search word.

[x] Added a `/random` route that returns a random result.

### client

#### index.html

[x] Added content and structure to the homepage.

[] Changed the elements to render the homepage based on user interactions.

#### style.css

[x] Was able to align the elements similar to the real Google homepage.

[x] Styled the links and buttons

## Bugs

[] `index.html` is not rendering to show the returned results from the API.

## Wins & Challenges

### Wins

* Was able to successfully get a return object from the routes requesting the API.
* Replicating the real Google homepage as best as possible.

### Challenges

* Trying to render the HTML so that the pages were updated with the results.
