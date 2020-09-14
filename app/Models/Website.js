'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Websites extends Model {

    static get primaryKey() {
        return 'websites_id'
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
    admin_update_website() {
        return this.belongsTo('App/Models/AdminUpdateWebsite')
    }
}

module.exports = Websites
