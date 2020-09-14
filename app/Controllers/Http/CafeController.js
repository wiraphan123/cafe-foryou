'use strict'

    const Database = use('Database')
    const Cafe = use('App/Models/Cafe')
    const CafeValidator = require("../../../service/CafeValidator")
    const CafeUtil = requrire('../../../util/cafeUtil')

class CafeController {
    async index({ request }) {
        const { references } = request.qs
        const CafeUtil = new CafeUtil(SCafe)
        const cafe = await CafeUtil.getAll(references)

        return { 
            status: 200, 
            error: undefined, 
            data: cafe
        }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const CafeValidator = require("../../../service/CafeValidator")
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const cafeUtil = new CafeUtil(Cafe)
        const cafe = cafeUtil.getById(id, references)
        return { status: 200, error: undefined, data: cafe || {} }

    }
    async store({ request }) {
        const { cafe_name, detail, comment_review, user_id, admin_id } = request.body
        const { references } = request.qs
        const validatedData = await CafeValidator(request.body)
        if (validatedData.error){
            return { status: 422, error: validatedData.error, data: undefined }
        }
        const cafeUtil = new CafeUtil(Cafe)
        const cafe = await cafeUtil.create({ cafe_name, detail, comment_review, user_id, admin_id }, references)

        return { status: 200, error: undefined, data: cafe }

    }
    async update({ request }) {
        const {references = undefined} =request.qs
        const validatedData = await CafeValidator(request.body)
        if (validatedData.error){
            return { status: 422, error: validatedData.error, data: undefined }
        }
        const cafeUtil = new CafeUtil(Cafe)
        const cafe = await cafeUtil
        .updateById(request,references)

        return { status: 200, error: undefined, data: cafe }
    }
    async destroy({ request }) {
        const {references = undefined} =request.qs
        const cafeUtil = new CafeUtil(Cafe)
        const cafe = await cafeUtil.deletById(request,references)

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}


module.exports = CafeController
