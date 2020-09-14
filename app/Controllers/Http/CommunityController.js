'use strict'

const Database = use('Database')
const Community =use("App/Models/Community")
const CommunityValidator = require("../../../service/CommunityValidator")
const CommunityUtill = require("../../../util/Community")

function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class CommunityController {
        async index(){
            const { references } = request.qs
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.getAll(references)
            
            return { status : 200 , error : undefined, data : community}
        }
        async show({request}){
            const { id } = request.params
            const { references } = request.qs
            const validatedValue = numberTypeParamValidator(id)
            if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

            const communityUtill = new CommunityUtill(Community)
            const community = communityUtill.getById(id, references)
            return{ status: 200, error : undefined, data : community ||{} }

        }
        async store({ request }) {
            const { post,comment_post } = request.body
            const { references } = request.qs
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.create({ post,comment_post }, references)
    
            return { status: 200, error: undefined, data: community }
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
