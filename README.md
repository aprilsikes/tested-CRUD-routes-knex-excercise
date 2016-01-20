https://pacific-plateau-29141.herokuapp.com/movies

## OVERVIEW

Your mission is to work through each of the included test suites one at a time. If you successfully pass each test, you should have full CRUD routes and database functionality for `Movies` and their nested resource `Reviews`.

__It is not necessary to build any client side functionality for this exercise (forms).__

This is a back end only exercise. In your routes, simply `render` or `redirect` the proper template or route.

## Set Up

```sh
npm install -g mocha
npm install
nodemon
```

## Run Tests

```sh
mocha
```

Work through your tests in this order:

1. `test_movies_routes`
1. `test_movies_db`
1. `test_movie_reviews_routes`
1. `test_movie_reviews_db`

Work through tests one at a time by removing the `x` from the next `xit` each time you pass a test. `add, commit, push` after each successfully passing test.

## Objectives

* Be able to write nested CRUD routes using TDD (Test Driven Development)
* Be able to write RESTful routes
* Be able to write RESTful _nested_ routes
* Be able to use knex with Postgres
* Be able to use knex migrations to create database schemas
* Be able to deploy a CRUD app to Heroku
* Be able to create database schemas on Heroku using migrations

# Your App Should Use:

__1. Knex Migrations__

__MOVIES SCHEMA__

```
id
director
title
```
__REVIEWS SCHEMA__

```
id
movie_id
author
rating
```

__2. Separate Route Files__

* `index.js`
* `movies.js`
* `reviews.js`

## SUBMIT A PULL REQUEST WITH YOUR HEROKU LINK

After passing all tests, deploy the app to Heroku and use migrations to create your production schema.

Add the url to your deployed site to this readme and submit a pull request.
