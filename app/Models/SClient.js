'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SClient extends Model {
    static get primaryKey() {
        return 'Usename_id'
}
static get primaryKey() {
    return 'password'
}
client() {
    return this.belongsTo('App/Models/Client')
}
}
module.exports = SClient
