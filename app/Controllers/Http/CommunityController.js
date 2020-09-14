'use strict'

const Database = use('Database')
const Community =use("App/Models/Community")
const CommunityValidator = require("../../../service/CommunityValidator")
const CommunityUtill = require("../../../util/Community")


class CommunityController {
        async index(){
            const { references } = request.qs
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.getAll(references)
            
            return { status : 200 , error : undefined, data : community}
        }
        async show({ request }){
            const { id } = request.params
            const { references } = request.qs
            CommunityValidator(references)
            
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.getById(id, references)
            return{ status: 200, error : undefined, data : community ||{} }

        }
        async store({ request }) {
            const { post,comment_post } = request.body
            const { references } = request.qs
            const validation = await CommunityValidator(request.body)
                if (validation.error){
                    return { status: 422, error: validated.error, data: undefined }
                }
            const communityUtill = new CommunityUtill(Community)
            const community = await communityUtill.create({ post,comment_post }, references)
    
            return { status: 200, error: undefined, data: community }
        }
        async update({request}){
            const {references = undefined} =request.qs
            const validation = await communityValidator(request.body)
            if (validation.error){
                return { status: 422, error: validated.error, data: undefined }
            }
            const communityUtil = new CommunityUtil(Community)
            const comunity = await communityUtil
                .updateById(request,references)
    
                return { status: 200, error: undefined, data: community }
      }
      async destroy({ request }) {
        const {references = undefined} =request.qs
        const communityUtil = new CommunityUtil(Community)
        const community = await communityUtil.deletById(request,references)

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}



module.exports = CommunityController
