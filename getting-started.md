# Getting Started

In an attempt to get everyone up to speed and establish a base line I've put together a small introduction for setting up a JavaScipt environment locally. If you already have this in place or do not wish to set a JS environment locally you can skip this step.

The bare minimum required is installing Node.js. According to [this](https://en.wikipedia.org/wiki/Node.js) wikipedia post

> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

That might be a lot of information to take in so lets focus on that it enables us to execute JavaScript code outside a web browser.

## Istallation of Node.js

- Go to the [Node.js Downloads page](https://nodejs.org/en/download/)
- Download Node.js for macOS by clicking the "Macintosh Installer" option
- Run the downloaded Node.js .pkg Installer
- Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
- You're finished! To ensure Node.js has been installed, run node -v in your terminal - you should get something like v16.11.1
  ([source](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/))

When installing Node.js on your machine npm is included in that installation.
[npm](https://www.npmjs.com/) is a **n**ode **p**ackage **m**anager.

- run npm -v in your terminal - you should get something like 8.0.0

## Alternatives to installing Node.js

You can run/test JavaScript in your web browser by pressing f12, going to the console, and simply typing out JS there. Another viable alternative is using one of the many existing sites that allow you to write code in the browser such as [codepen](www.codepen.io).
