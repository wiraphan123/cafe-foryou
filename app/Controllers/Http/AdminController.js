'use strict'

class AdminController {
<<<<<<< HEAD
    async store({ request }) {
        const { news, detail } = request.body


        return { status: 200, error: undefined, data: subject }

=======
    async index({ request }) {
        const { references } = request.qs
        const adminUtil = new AdminUtil(Admin)
        const admins = await adminUtil.getAll(references)
        return { status: 200, error: undefined, data: admins }
>>>>>>> 3bcc4b731dce9d8c624417739e5a2f66e4bb103c
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
            const { first_name, last_name, age, gender, admin_name, password, status } = request.body
            const { references } = request.qs
            const validatedData = await AdminValidator(request.body)
            if (validatedData.error)
                return { status: 422, error: validatedData.error, data: undefined }
    }
}

module.exports = AdminController
