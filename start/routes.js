'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.resource('/users', 'UserController')
  Route.resource('/communities', 'CommunityController')
  Route.resource('/admins', 'AdminController')
  Route.resource('/adminupdatewebsites', 'AdminUpdateWebsiteController')
  Route.resource('/websites', 'WebsitesController')
  Route.resource('/cafes', 'CafeController')
<<<<<<< HEAD
}).prefix('api/v1')
=======
}).prefix('api/v1').prefix
>>>>>>> 345c4955807461277defbaeb87b5dcb19a3f7054
