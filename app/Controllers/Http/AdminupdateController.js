'use strict'
const AdminupdateValidator = require("../../../service/AdminupdateValidator")
const Database = use('Database')
const Adminupdate = use("App/Models/AdminupdateWebsite")
const AdminupdateUtil = require("../../../util/AdminupdateUtil")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class AdminupdateController {
    async index({ request }) {
        const { references } = request.qs
        const adminupdateUtil = new AdminupdateUtil(Adminupdate)
        const adminupdates = await adminupdateUtil.getAll(references)

        return { status: 200, error: undefined, data: adminUpdates }
}
async show({ request }) {
    const { id } = request.params
    const { references } = request.qs
    const validatedValue = numberTypeParamValidator(id)
    if (validatedValue.error)
        return { status: 500, error: validatedValue.error, data: undefined }
    const adminupdateUtil = new AdminupdateUtil(AdminUpdate)
    const adminupdates = adminupdateUtil.getById(id, references)
    return { status: 200, error: undefined, data: adminupdates || {} }
}
async store({ request }) {
    const { websites, detail } = request.body
    const { references } = request.qs
    const validatedData = await AdminupdateValidator(request.body)
    if (validatedData.error)
        return { status: 422, error: validatedData.error, data: undefined }


    const adminupdateUtil = new AdminupdateUtil(Adminupdate)
    const adminupdates = await adminupdateUtil.create({ websites, detail }, references)

    return { status: 200, error: undefined, data: adminupdates }
}
async update({ request }) {

    const { body, params } = request
    const { id } = params
    const { websites, detail } = body


    const adminupdateId = await Database
        .table('admin_update_websites')
        .where({ update_websites_id: id })
        .update({ websites, detail })

    const adminupdates = await Database
        .table('admin_update_websites')
        .where({ update_websites_id: adminupdateId })
        .first()

    return { status: 200, error: undefined, data: adminupdates }
}
async destroy({ request }) {
    const { id } = request.params

    await Database
        .table('admin_update_websites')
        .where({ update_websites_id: id })
        .delete()

    return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}



module.exports = AdminupdateController
