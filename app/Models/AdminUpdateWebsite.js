'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdminUpdateWebsite extends Model {

    static get primaryKey() {
        return 'update_websites_id'
    }

    news() {
        return this.hasMany('App/Models/Websites')
    }
    new(){
        return this.hasMany('App/Models/Community')
    }
    new(){
        return this.hasMany('App/Models/Community')
    }
}

module.exports = AdminUpdateWebsite