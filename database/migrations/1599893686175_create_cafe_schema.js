'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCafeSchema extends Schema {
  up () {
    this.create('create_cafes', (table) => {
      table.increments('cafe_id', 5)
      table.string('cafe_name', 150).notNullable()
      table.string('detail', 150).notNullable()
      table.string('comment_review', 100).notNullable()
      table.integer('user_id').unsigned()
      table.integer('admin_id').unsigned()
      table.foreign('user_id')
          .references('users.user_id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      table.foreign('admin_id')
          .references('admins.admin_id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      table.timestamps()
  })
}

  down () {
    this.drop('create_cafes')
  }
}

module.exports = CreateCafeSchema
