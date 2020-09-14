'use strict'

const Database = use('Database')
const AdminValidator = require("../../../service/AdminValidator")
const Admin = use('App/Models/Admin')
const AdminUtil = require("../../../util/adminUtil")
const Hash = use('Hash')

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
        AdminValidator(id)
        const adminUtil = new AdminUtil(Category)
        const admin = await adminUtil.getById(id,references)
        
        return { status: 200, error: undefined, data: admin || {} }
        }
        
    
        async store({ request }) {
            const { references } = request.qs
            const validatedData = await AdminValidator(request.body)
            if (validatedData.error){
                return { status: 422, error: validatedData.error, data: undefined }
        }
            const adminUtil = new AdminUtil(Admin)
            const admins = await adminUtil.create({ first_name, last_name, age, admin_name, password, status }, references)

        return { status: 200, error: undefined, data: admins }
    
    }
    async update({ request }) {
        const {references = undefined} =request.qs
        const validatedData = await AdminValidator(request.body)
        if (validatedData.error){
            return { status: 422, error: validatedData.error, data: undefined }
        }
        const adminUtil = new AdminUtil(admin)
        const admin = await adminUtil
        .updateById(request,references)

        return { status: 200, error: undefined, data: admin }
    }
    async destroy({ request }) {
        const {references = undefined} =request.qs
        const adminUtil = new AdminUtil(Admin)
        const admin= await adminUtil.deletById(request,references)

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }

}

       
module.exports = AdminController
