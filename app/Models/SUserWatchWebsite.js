'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SUserWatchWebsite extends Model {
        static get primaryKey() {
            return ' userwatchcommunity_id'
        }
}

module.exports = SUserWatchWebsite
