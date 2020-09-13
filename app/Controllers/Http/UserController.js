'use strict'

const Database = use('Database')
const Validator = use('Validator')
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
        return { status : 200 , error : undefined, data : group}
    }
    async show({request}){
        const { id } = request.params
        const { references } = request.qs
        constuserUtill = new UserUtill(User)
        const user = userUtill.getById(id, references)
        return{ status: 200, error : undefined, data : user ||{} }
    }
    async store ({request}){
        const {first_name,last_name,age,gender,user_name,password,} = request.body
        const { references } = request.qs
        const userUtill = new UserUtill(User)
        const user = await userUtill.create({first_name,last_name,age,gender,user_name,password,}, references)
        return { status: 200, error: undefined, data: user }
    }
}

module.exports = UserController
