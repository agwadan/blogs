# Blogs

This is a simple application built using microservices. A user can write an article and post it, and any other user can comment on an article of their choice.

There are four services: posts, comments, moderation and query. There is an event-bus that handles the communications among the services. The purpose of the event-bus is to eliminate direct dependencies among the different services.

## How To Run It

### Pre-requsites
You need to have node installed on your local computer.
The dependency "nodemon" should be installed globally for all node applications. You can also install it for each of the services. 

### Steps
1. Clone the repository.
2. You'll need to open each of the directories in the root with a terminal to use a shell of your choice i.e. you'll have 6 terminals running.

3. In each of the shells, run one of the following commands depending on the package manager you use. The purpose of these commands is to install dependencies to run these services.
* ```yarn add```
* ```npm install```

4. After the installations, run one of the following commands to start the micro servers for each of the services.
* ```yarn start```
* ```npm start```