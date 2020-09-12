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
    const admin= await Factory
    .model('App/Models/Admin')
    .createMany(10)
  }
}

module.exports = DatabasisSeeder
