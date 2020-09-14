'use strict'

const UserValidator = require("../../../service/UserValidator")
const Database = use('Database')
const User = use('App/Models/User')
const UserUtil = require('../../../util/UserUtil')


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
        const UserValidator = require("../../../service/UserValidator")
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
        const {references = undefined} =request.qs
        const validation = await UserValidator(request.body)

        if(validation.error){
            return {status: 422, 
              error: validation.error,
              data: undefined}
          }
        
          const userUtil = new UserUtil(User)
          const users = await userUtil
          .updateById(request,references)
            
            return { status: 200, error: undefined, data: users }
              }
    async destroy({ request }) {
        const {references = undefined} =request.qs
        const userUtil = new UserUtil(User)
        const user = await userUtil.deletById(request,references)

            return {status: 200, error: undefined, data: {massage: 'success' }}
    }
    
}

module.exports = UserController
