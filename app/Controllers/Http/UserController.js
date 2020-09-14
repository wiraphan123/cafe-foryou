'use strict'

const UserValidator = require("../../../service/UserValidator")
const Database = use('Database')
const User = use('App/Models/User')
const UserUtil = require('../../../util/UserUtil')

function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class UserController {
    async index(){
        const { references } = request.qs
        const userUtill = new UserUtill(User)
        const user = await userUtill.getAll(references)
        return { status : 200 , error : undefined, data : user }
    }
    async show({request}){
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }
        constuserUtill = new UserUtill(User)
        const user = userUtill.getById(id, references)
        return{ status: 200, error : undefined, data : user ||{} }
    }
    async store ({request}){
        const {first_name,last_name,age,gender,user_name,password,} = request.body
        const { references } = request.qs
        const validatedData = await UserValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }
        const userUtill = new UserUtill(User)
        const user = await userUtill.create({first_name,last_name,age,gender,user_name,password,}, references)
        return { status: 200, error: undefined, data: user }
    }
    async update({ request }) {
        const { body, params } = request
        const { id } = params
        const { first_name, last_name, age, gender, user_name, password, } = body
        
        const userId = await Database
            .table('users')
            .where({ user_id: id })
            .update({ first_name, last_name, age, gender, user_name, password, })
        
            const user = await Database
            .table('users')
            .where({ user_id:userId })
            .first()
        return { status: 200, error: undefined, data: user }
    }
    async destroy({ request }) {
        const { id } = request.params
        await Database
            .table('user')
            .where({user_id: id })
            .delete()
        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
    
}

module.exports = UserController
