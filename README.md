# Mutably Starter Project
For goal #383

## To get this project running
1. `npm install`
1. `npm start` to run (uses nodemon)

Skills

- [ ] Can build a RESTful API using Express
- [ ] Can describe the general programming pattern MVC (Model View Controller)
- [ ] Can use the MVC pattern to build a Single Page Application using JavaScript
- [ ] Can integrate with an external HTTP API


Challenge Rating

This goal will likely be within your ZPD if you...
- [ ] Can build basic web sites with HTML & CSS
- [ ] Can add behavior to a web site with JavaScript
- [ ] Are familiar with DOM manipulation
- [ ] Are interested in making more complex interactive web pages


Description

Mutably is a mutable, RESTful, CRUD API. This means that it has endpoints that you can interact with RESTfully via a front-end.
Visit the repo page for information about the resources available and how to interact with them: https://github.com/GuildCrafts/mutably
Your goal is to build a front-end that consumes the Mutably API. You can choose any one of the 3 resources. Your front-end needs to complete all of the CRUD (Create, Read, Update, Delete) functions.
For the goal, you will start with this scaffolded template. Fork to get started. You will use the fetch API, and jQuery to complete this goal.
Context

Interacting with a third-party API is a key skill for any developer. Most APIs have extensive documentation and require a fair amount of "overhead" just to get started working with them.
Not Mutably. This API is way simpler, with just a few endpoints handling a few different resources.
This goal is designed as an introduction to working with third-party APIs so that you can familiarize yourself with the core ideas before moving on to work with bigger, more complex APIs (like GitHub or Twitter).
Specifications

- [ ] Your repo is a fork of mutably-starter.

- [ ] Your repo has a README with instructions for how to run your project.

- [ ] Your app is SPA (single page app). All CRUD actions take place on the same page, preferably the root (/) route.

- [ ] All interaction with the API happens with the fetch API -- don't submit data via forms. You can use form html tags, but do all your form submission in your js. Make use of jQuery's event.preventDefault().

- [ ] A user can read and display all the data for a resource.

- [ ] A user can create a new item via a create form. When the user creates a new item, that item should either get appended to the page or all the items should get re-retrieved in the js. No full page refresh.

- [ ] A user can update an existing item. Updating happens inline. This means that there is an edit button next to each item that, when clicked, causes the item text to be replaced with a pre-populated, editable input field. And the edit button becomes a save button. Once the save button is clicked and a success message comes back from the server, then the input gets replaced with the updated text. No page refresh. For example, this: 
screen shot 2017-05-11 at 3 26 09 pm 
becomes: 
screen shot 2017-05-11 at 3 26 18 pm 

- [ ] When the user clicks the edit button.

- [ ] A user can delete an existing item via a delete button next to each item. No page refresh.

- [ ] Use a UI library to make your site look nice.

- [ ] The artifact produced is properly licensed, preferably with the MIT license.

- [ ] App is deployed on Heroku.


Stretch

Create another version of your front-end using a front-end framework such as React or Angular.
If the mutably data gets too crazy from people adding / deleting things, you can reset the data to the seed data here.
Insider tip: there is an example "solution" (remember, there are MANY ways to hack it!) in the solution branch of the starter template.


Resources

- Fetch API tutorial
- jQuery tutorial (~3hrs)
- AJAX tutorial -first lesson free
