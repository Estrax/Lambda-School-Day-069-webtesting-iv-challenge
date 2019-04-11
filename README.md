# Server-Testing

## Topics

- automated testing.
- jest testing framework.
- supertest module.

## Assignment

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Download Project and Install Dependencies

1.  fork and clone this repository.
2.  **CD into the folder** where you downloaded the repository.
3.  run `yarn` or `npm i` to download all dependencies.
4.  type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Requirements

1.  use `jest` and `supertest` to write the tests.
2.  Your API must be able to **create** and **delete** a _resource_ of your choosing.
3.  Write a minimum of two tests per route handler.
4.  Add tests to verify that the endpoints return the correct HTTP status codes.
5.  Write the **tests BEFORE** writing the route handlers.

#### Personal stretch: Routes added (out of the specs):
- get all resources
- get single resource
- update single resource

and of course **add new resource** and **delete a resource**