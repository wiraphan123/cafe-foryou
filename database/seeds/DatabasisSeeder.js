'use strict'

/*
|--------------------------------------------------------------------------
| DatabasisSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabasisSeeder {
  async run () {
    const admin = await Factory
    .model('App/Models/Admin')
    .createMany(10)
    
    const admin_update_website = await Factory
    .model('App/Models/admin_Updata_Website')
    .createMany(10)
    
    const client = await Factory
    .model('App/Models/Client')
    .createMany(10)

    const client_watch_cafe = await Factory
    .model('App/Models/Client_Watch_Cafe')
    .createMany(10)

    const posts = await Factory
    .modle('App/Modls/Posts')
    .createMany(10)

    const community = await Factory
    .model('App/Models/Community')
    .createMany(10)

    const post_community = await Factory
    .model('App/Model/Post_Community')
    .createMany(10)
  }
}

module.exports = DatabasisSeeder
