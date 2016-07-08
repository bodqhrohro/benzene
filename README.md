This is a personal RSS client implemented in modern technologies. Can be run on your own server or a hosting and gather your feeds as long as they update to be read any time. It also displays some statistics for cypherpunk nerds.

The project is currently in early stage of development, only frontend part is implemented for now. It's made with Angular 2, Semantic UI and ng2-charts library. The build process rely on Gulp, Webpack2 and Babel.

Installation
============

1. Install Node.JS and npm.
1. Clone this repo.
1. Open a *nix shell.
1. Run `npm i`.
1. If the dependency installation was successfull, run `gulp`. Webpack returns its output at build finish, so be patient.
1. Install Node Web Server (`npm install -g nws`, preceed with `sudo ` for sure) and run `nws -p 2514 -d build &`.
1. Open a browser and go to http://localhost:2514/index.htm to see the UI. If you have an external IP you may open it on another machine as well or use a tunnel broker.
