const CommunityUtil = require("./CommunityUtil")

class AdminUtil {

    constructor(AdminModel) {
        this._Admin = AdminModel
    }

    getAll(references) {
        const admins = this._Admin.query()

        return this._withReference(admins, references)
            .fetch()
    }

    getById(adminId, references) {
        const admin = this._Admin
            .query()
            .where('admin_id', adminId)

        return this._withReference(admin, references)
            .fetch()
            .then(response => response.first())
    }

    async create(adminInstance, references) {
        const { admin_id } = await this._Admin.create(adminInstance)
        const admin = this._Admin
            .query()
            .where('admin_id', admin_id)

        return this._withReference(admin, references)
            .fetch()
            .then(response => response.first())
    }

    async deletById(adminInstance){
        const { id } = adminInstance.params
        const admin = await this._Admin.find(id)

        if(!admin){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        admin.delete()
        await admin.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(adminInstance,references){
        const { id } = adminInstance.params
        let admin = await this._Admin.find(id)

        if(!admin){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        admin.merge(adminInstance.body)
        await admin.save();
    
        admin = this._Admin.query().where({admin_id : id})
        
        return this._withReferences(community,references).fetch().then(response => response.first())
    }

    _withReference(instance, references) {
        if (references) {
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }

        return instance
    }
}

module.exports = AdminUtil