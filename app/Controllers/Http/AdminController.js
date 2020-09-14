'use strict'

class AdminController {
    async store({ request }) {
        const { news, detail } = request.body


        return { status: 200, error: undefined, data: subject }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { news, detail } = body


        const updateNewsId = await Database
            .table('update_news')
            .where({ update_news_id: id })
            .update({ news, detail })

        const update_news = await Database
            .table('update_news')
            .where({ update_news_id: updateNewsId })
            .first()

        return { status: 200, error: undefined, data: update_news }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('update_news')
            .where({ update_news_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}


module.exports = AdminController
