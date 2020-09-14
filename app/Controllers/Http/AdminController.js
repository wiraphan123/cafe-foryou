'use strict'

const Database = use('Database')
const AdminValidator = require("../../../service/AdminValidator")
const Admin = use('App/Models/Admin')
const AdminUtil = require("../../../util/adminUtil")
const Hash = use('Hash')

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class AdminController {
    async index({ request }) {
        const { references } = request.qs
        const adminUtil = new AdminUtil(Admin)
        const admins = await adminUtil.getAll(references)
        return { status: 200, error: undefined, data: admins }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const adminUtil = new AdminUtil(Admin)
        const admins = adminUtil.getById(id, references)
        return { status: 200, error: undefined, data: admins || {} }
    }
        async store({ request }) {
            const { first_name, last_name, age, gender, admin_name, password,  } = request.body
            const { references } = request.qs
            const validatedData = await AdminValidator(request.body)
            if (validatedData.error)
                return { status: 422, error: validatedData.error, data: undefined }
                const adminUtil = new AdminUtil(Admin)
        const admins = await adminUtil.create({ first_name, last_name, age, admin_name, password, status }, references)

        return { status: 200, error: undefined, data: admins }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { first_name, last_name, age, gender, admin_name, password,} = body

        const hashedPassword = await Hash.make(password)

        const adminId = await Database
            .table('admins')
            .where({ admin_id: id })
            .update({ first_name, last_name, age, gender, admin_name, password: hashedPassword,  })

        const admins = await Database
            .table('admins')
            .where({ admin_id: adminId })
            .first()

        return { status: 200, error: undefined, data: admins }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('admins')
            .where({ admin_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = AdminController
