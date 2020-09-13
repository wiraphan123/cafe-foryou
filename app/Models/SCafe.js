'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SCafe extends Model {
    static get primaryKey() {
        return 'cafe_id'
    }

    Cafe() {
        return this.belongsTo('App/Models/cafe')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = SCafe
