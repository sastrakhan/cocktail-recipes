
# Spiral
Drinks code exercise

# Overview
* Backend: [Django Rest Framework](https://www.django-rest-framework.org/)
* Frontend: [React](https://reactjs.org/)

# Commands
## Backend
`pipenv install`
Install packages

`pipenv shell`
Activate shell

`python manage.py runserver`
Run the server

`python manage.py makemigrations`
Create migrations

`python manage.py migrate`
Apply migrations

## Frontend
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
or use Insomnia/Postman.
