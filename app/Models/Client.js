'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Client extends Model {

  static boot() {
        super.boot()
        this.addHook('beforeSave', async(request) => {
            if (request.dirty.password) {
                request.password = await Hash.make(request.password)
            }
        })
    }
    static get primaryKey() {
        return 'client_id'
    }

    cafes() {
        return this.hasMany('App/Models/Cafe')
    }
    Community(){
        return this.hasMany('App/Models/ Community')
    }

}

