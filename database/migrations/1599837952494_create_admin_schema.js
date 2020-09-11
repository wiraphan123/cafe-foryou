'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
    table.increments('admin_id', 5)
            table.string("first_name", 120).notNullable()
            table.string("last_name", 120).notNullable()
            table.string("first_name", 150).notNullable()
            table.string("last_name", 150).notNullable()
            table.integer("age", 3).notNullable()
            table.string('gender', 150).notNullable()
            table.string("admin_name", 100).notNullable().unique()
            table.string("password").notNullable()

            table.timestamps()
        })
    }

  down () {
    this.drop('create_admins')
  }
}

module.exports = CreateAdminSchema
