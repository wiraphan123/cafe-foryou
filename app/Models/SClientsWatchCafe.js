'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SClientsWatchCafe extends Model {
    static get primaryKey() {
        return 'Clients_Watch_Cafe_id'
    }
    clientWatchCafe(){
        return this.belongsTo('App/Models/Client_Watch_Cafe')
    }
    }
}
module.exports = SClientsWatchCafe
