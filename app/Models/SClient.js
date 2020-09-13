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
admin() {
    return this.belongsTo('App/Models/Admin')
}
}
module.exports = SClient
