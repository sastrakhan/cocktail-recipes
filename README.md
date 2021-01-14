# Overview
Application to demonstrate competency in React, Redux, and Django since my company's repos are private.  Forked from a colleague's practice project and has since been expanded. Must have Yarn, Python and pipenv installed on local machine.

Purpose:  To view, filter, and search cocktail recipes.  

* Backend: [Django Rest Framework](https://www.django-rest-framework.org/)
* Frontend: [React](https://reactjs.org/)

# Commands
## Backend
Rename the `.env.template` folder to `.env`.  Place any value in the SECRET_KEY variable.  
Run the following commands from the root directory:

`pipenv install`
Install packages

`pipenv shell`
Activate shell

`python backend/manage.py runserver`
Run the server

`python manage.py makemigrations`
Create migrations

`python manage.py migrate`
Apply migrations

## Frontend
Rename the `.env.template` folder to `.env` in the folder `frontend/src` and populate the *REACT_APP_API_URL* with your BE API URL (e.g. http://127.0.0.1:8000/).  

`yarn install`
Install package dependencies.

`yarn start`
Starts the development server.

`yarn build`
Bundles the app into static files for production.

`yarn test`
Starts the test runner.

`yarn eject`
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

## Running the application
Run `python manage.py runserver` and `yarn start` to start the development server.
The frontend will likely start on http://localhost:3000 and the api on http://localhost:8000.
You can interact directly with the API in the browser at http://localhost:8000/api/,
or use Insomnia/Postman.  If the FE is not running on port 3000 or 3001,
make sure to add it to the CORS_ORIGIN_WHITELIST variable in `backend/settings.py`
