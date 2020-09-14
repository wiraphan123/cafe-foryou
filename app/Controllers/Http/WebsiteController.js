'use strict'
const Websites = use("App/Models/Websites")

const Database = use('Database')
const WebsiteValidator = require("../../../service/WebsiteValidator")
const WebsiteUtil = require("../../../util/WebsiteUtil.func")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class WebsiteController {
    async index({ request }) {
        const { references } = request.qs
        const websiteUtil = new websiteUtil(Websites)
        const websites = await websiteUtil.getAll(references)

        return { status: 200, error: undefined, data: websites }
}
async show({ request }) {
    const { id } = request.params
    const { references } = request.qs
    const validatedValue = numberTypeParamValidator(id)
    if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined }

    const websiteUtil = new WebsiteUtil(Websites)
    const websites = websiteUtil.getById(id, references)
    return { status: 200, error: undefined, data: websites || {} }
}
async store({ request }) {
    const { update_websites_id } = request.body
        //const { references } = request.qs
    const validatedData = await WebsiteValidator(request.body)
    if (validatedData.error)
        return { status: 422, error: validatedData.error, data: undefined }
    const websites = new Websites;
    websites.update_websites_id = update_websites_id;

    await websites.save()

    return { status: 200, error: undefined, data: websites }
}
async update({ request }) {

    const { body, params } = request
    const { id } = params
    const { update_websites_id } = body


    const WebsitesId = await Database
        .table('websites')
        .where({ websites_id: id })
        .update({ update_websites_id })

    const websites = await Database
        .table('websites')
        .where({ websites_id: WebsitesId })
        .first()

    return { status: 200, error: undefined, data: websites }
}
async destroy({ request }) {
    const { id } = request.params

    await Database
        .table('websites')
        .where({ websites_id: id })
        .delete()

    return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = WebsiteController
