'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SWebsite extends Model {
    static get primaryKey() {
        return 'admin_id'
}
static get primaryKey() {
    return 'usename_id'
}
static get primaryKey() {
    return 'community_id'
}
}

module.exports = SWebsite
