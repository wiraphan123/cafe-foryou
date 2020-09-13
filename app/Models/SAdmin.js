'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SAdmin extends Model {
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

    update_websites() {
        return this.hasMany('App/Models/AdminUpdateWebsite')
}
    cafes() {
        return this.hasMany('App/Models/Cafe')
    }
}


module.exports = SAdmin
