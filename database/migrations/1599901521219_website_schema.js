'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WebsiteSchema extends Schema {
  up () {
    this.create('website', (table) => {
      table.string('website',100)
      table.string('detail',500)
      table.string('community', 1000)
    })
  }

  down () {
    this.drop('websites')
  }
}

module.exports = WebsiteSchema
