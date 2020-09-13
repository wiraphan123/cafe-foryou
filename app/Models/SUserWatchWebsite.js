'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SUserWatchWebsite extends Model {
        static get primaryKey() {
            return ' userpostcommunity_id'
        }
}

module.exports = SUserWatchWebsite
