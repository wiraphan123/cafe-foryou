'use strict'

    const Cafe = use('App/Models/Cafe')
    const cafeUtil = requrire('../../../util/cafeUtil')


class CafeController {
    async index({ request }) {
        const { references } = request.qs
        const cafeUtil = new CafeUtil(Cafe)
        const cafe = await cafeUtil.getAll(references)

        return { status: 200, error: undefined, data: cafe }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const cafeUtil = new CafeUtil(Cafe)
        const cafe = cafeUtil.getById(id, references)
        return { status: 200, error: undefined, data: cafe || {} }

    }
    async cafe({ request }) {
        const { cafe_name, detail, comment_review, user_id, admin_id } = request.body
        const validatedData = await CafeValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }
        const { references } = request.qs



        const CafeUtil = new CafeUtil(Store)
        const cafe = await cafeUtil.create({ cafe_name, detail, comment_review, user_id, admin_id }, references)

        return { status: 200, error: undefined, data: cafe }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { store_name, detail, comment_review, user_id, admin_id } = body


        const cafeId = await Database
            .table('stores')
            .where({ store_id: id })
            .update({ store_name, detail, comment_review, user_id, admin_id })

        const cafe = await Database
            .table('cafes')
            .where({ cafe_id: cafeId })
            .first()

        return { status: 200, error: undefined, data: cafe }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('cafe')
            .where({ cafe_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}


module.exports = CafeController
