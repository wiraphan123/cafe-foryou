'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAdminupdatewebsiteSchema extends Schema {
    up() {
      this.create('admin_update_websites', (table) => {
        table.increments("update_websits_id", 5)
          table.string("websites", 120).notNullable()
          table.string("detail").notNullable()
          table.timestamps()
  })
}

  down () {
    this.drop('admin_update_websites')
  }
}

module.exports = CreateAdminupdatewebsiteSchema
