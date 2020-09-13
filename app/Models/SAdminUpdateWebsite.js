'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SAdminUpdateWebsite extends Model {
    static get primaryKey() {
        return 'admin_update_website_id'
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
    adminUpdateWebsite() {
        return this.belongsTo('App/Models/AdminUpdateWebsite')
    }
}

module.exports = SAdminUpdateWebsite
