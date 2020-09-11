'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('user_id', 5)
      table.string('frist_name', 150).notNullable()
      table.string('last_name', 150).notNullable()
      table.string('age', 2).notNullable()
      table.integer('age', 2).notNullable()
      table.string('gender', 150).notNullable()
      table.string('username', 100).notNullable().unique()
      table.string('password').notNullable()
      
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
