'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.string('post',100)
      table.string('detail',500)
      table.string('community', 1000)
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
