# TODO Backend
This is the backend for the Todo App which consist of the backend server and it's connection to the database.

NPM Packages: 
- express
- mongoose
- mocha 
- chai

Folder/File Structure

It is structured in a monolithic way, The folder structure help us achieve seperation of concerns in a way that every aspect of this project start within the scope in it's own "index.js" file and it's being imported to other files as a dependency.

server.js: This is the main entry point of the project which starts the server and also initiazes the connection with the database
loaders: Split the startup process into modules
models: Database models
config: configuration related stuff and Internal Data Models
services: All the business logic is here
handlers: Response Handlers and Error Handlers
routes: Contains all the API routes
tests: Tests of all sorts

# 3 Layer architecture
The idea is to use the principle of separation of concerns to move the business logic away from the node.js API Routes. It’s just a collection of classes with clear purposes, following the SOLID principles applied to node.js.
