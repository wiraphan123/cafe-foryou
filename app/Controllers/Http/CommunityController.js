'use strict'

const Database = use('Database')
const Community =use("App/Models/SCommunity")
const CommunityUtill = require('../../../util/community')

class CommunityController {
        async index(){
            const { references } = request.qs
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.getAll(references)
            
            return { 
                status : 200 , 
                error : undefined, 
                data : group
            }
        }
        async show({ request }){
            const { id } = request.params
            const { references } = request.qs
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
