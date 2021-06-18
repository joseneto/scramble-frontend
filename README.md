
# Clojurescript: Scramble Task

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project it's a simple frontend service that call a scramble function that check if a of the strings can be rearranged with another, to use the service you need the backend service, can be found here [Clojure Scramble BackEnd](https://github.com/joseneto/scramble-backend)

### Libraries

Scramble Task use some open source libraries:

* [Shadow] - A build automation and dependency management tool for Clojurescript
* [npm] - Npm is a package manager for the JavaScript programming language
* [Reagent] - Reagent provides a minimalistic interface between ClojureScript and React
* [cljs-ajax] - Simple Ajax client for ClojureScript and Clojure

### Install

Scramble Task require npm, you can download it here [npm](https://www.npmjs.com/get-npm). You will need it to run the project, the installation is super simple.

After install npm, you can go to your project root path and run the command below, npm will install all dependecies.

```sh
$ npm install
```

We are almost ready to run the project. If everything is ok, run the command below to start the service!

```sh
$ npx shadow-cljs node-repl
```

The Web app should be running at port 3000, but if that port its already used, shadow automatically change to the next port 3001.

### Project Structure

The project was divided as follows:

* [src/scramble_frontend/core.cljs] - This is our main file where the app is mounted.
* [src/scramble_backend/components/scramble.cljs] - This file represent the scramble component UI.


### Building for production

```
npx shadow-cljs release app
```
