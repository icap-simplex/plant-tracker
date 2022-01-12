## Plant Tracker App

Specifications:
- Laravel 8+ JSON API backend
- Frontend:
    - React + TailwindCSS

A simple app comprised of 2 pages:
- Home page (listing of all plants)
- Add plant page (a form with the appropriate fields)

## Setup Guide

**Step 1**: Open the terminal in your root directory & install the composer packages, run the following command:
```
composer install
```
###

**Step 2**: In the root directory, you will find a file named .env.example rename the given file name to .env and run the following command to generate the key (and you can also edit your data base credentials here)
```
php artisan key:generate
```
###

**Step 3**: Link upload file directory to be accessible publicly by running the command:
```
php artisan storage:link
```
###

**Step 4**: By running the following command, you will be able to get all the dependencies in your node_modules folder:
```
npm install
```
###

**Step 5**: To run the project you need to run following command in the project directory. It will compile the react files & all the other project files. If you are making any changes in any of the .vue file then you need to run the given command again.
``` 
npm run dev
```
###

**Watching for changes**: Running `npm run dev` every time you make changes to file is inefficient. Hopefully there's a command so your changes can be watched and get reflected accordingly.
``` 
npm run watch
```
###

**Building for Production**: If you want to run the project and make the build in the production mode then run the following command in the root directory, otherwise the project will continue to run in the development mode.
``` 
npm run prod
```
###

If you encounter errors during form submission, make sure the following directory exists and is writable.
``` 
[project root]/storage/app/public/plants/photos
```
