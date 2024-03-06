/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/register', async ({ view }) => {
  return view.render('Register')
})
Route.get('/fetchView', async ({ view }) => {
  return view.render('fetch')
})

Route.post('/register', 'Controller1.register')

// Route.get('/fetch', 'Controller1.fetchData')
// Route.get('/fetch', 'Controller1.fetchData')
// Route.get('/fetchView', 'Controller1.fetchData')

//
// Route.on('fetch').render('fetch');


//Route for showing form 
Route.on('get').render('form');

//Route called when we submit form 
Route.post('/submitForm', 'Controller1.register');

//Route called when form is submitted successfully
Route.on('success').render('success');

// Route for Login
Route.on('login').render('login');

// Route called when we click login
Route.post('loginForm', 'Controller1.login');

//Route for showing data
// Route.get('/fetchUsers', 'Controller1.fetchData');