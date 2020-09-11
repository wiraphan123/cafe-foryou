'use strict'

const Database = use('Database')
const Validator = use('Validator')
function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class CommunityController {
        async index(){
            const data = await Database.table('groups')
            return { status : 200 , error : undefined, data : group}
        }
        async show({request}){
            const { id } = request.params
            const validatedValue = numberTypeParamValidator(id)
            if(validatedValue.error) return {status: 500, error : validatedValue.error, data : undefined}
            const community= await Database
            .select('*')
            .from('communitys')
            .where("community_id",id)
            .first()
            return{ status: 200, error : undefined, data : community ||{} }
      
            const validattion = await Validator.validateAll(request.body,rules)
            if(validattion.fails())
            return { status: 422 ,error:validattion.messages(),data:undefined}
    
            const hashedPassword = await Hash.make(password)
            const community = await Database
            .table('communitys')
            return {status : 200,error : undefined , data : {community} }
        }
        async update({request}){
            const {body,params}=request
            const {id}=params
            const communityId = await Database
            .table('communitys')
            .where({community_id:id})
    
            const community = await Database 
            .table('communitys')
            .where({community_id:studentId})
            .first()
            return{status : 200,error : undefined , data : { community } }
        }
}


module.exports = CommunityController
