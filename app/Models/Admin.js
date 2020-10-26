'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
class Admin extends Model {

    static boot() {
        super.boot()
        this.addHook('beforeSave', async(adminInstance) => {
            if (adminInstance.dirty.password) {
                adminInstance.password = await Hash.make(adminInstance.dirty.password)
            }
        })
    }

    static get primaryKey() {
        return 'admin_id'
    }

    stores() {
        return this.hasMany('App/Models/Cafe')
    }
    Community() {
        return this.hasMany('App/Models/Community')
    }
}

module.exports = Admin
