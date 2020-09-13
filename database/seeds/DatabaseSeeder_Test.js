'use strict'

/*
|--------------------------------------------------------------------------
| BlueprintSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder_test {
  async run() {
    const admin_score = await Factory
      .model('App/Models/Admin')
      .createMany(10)
  }
}
module.exports = DatabaseSeeder_test