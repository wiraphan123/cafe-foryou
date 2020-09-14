'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCommunitySchema extends Schema {
  up () {
    this.create('communities', (table) => {
      table.increments('community_id', 5)
      table.string('website').notNullable()
      table.string('comment_post').notNullable()
      table.integer('user_id').unsigned()
      table
          .foreign('user_id')
          .references('users.user_id')
      table.timestamps()
  })
}

  down() {
    this.drop('user_post_communities')
  }
}

module.exports = CreateCommunitySchema
