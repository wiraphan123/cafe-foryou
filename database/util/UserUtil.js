class UserUtil {

    constructor(UserModel) {
        this._User = UserModel
    }

    getAll(references) {
        const users = this._User.query()

        return this._withReference(users, references)
            .fetch()
    }

    getById(userId, references) {
        const user = this._User
            .query()
            .where('user_id', userId)

        return this._withReference(user, references)
            .fetch()
            .then(response => response.first())
    }

    async create(userInstance, references) {
        const { user_id } = await this._User.create(userInstance)
        const user = this._User
            .query()
            .where('user_id', user_id)

        return this._withReference(user, references)
            .fetch()
            .then(response => response.first())
    }
    
    async deletById(userInstance){
        const { id } = userInstance.params
        const users = await this._User.find(id)

        if(!users){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        users.delete()
        await users.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(userInstance,references){
        const { id } = userInstance.params
        let users = await this._User.find(id)

        if(!users){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        users.merge(userInstance.body)
        await users.save();
    
        users = this._User.query().where({user_id : id})
        
        return this._withReferences(categories,references).fetch().then(response => response.first())
    }


    _withReference(instance, references) {
        if (references) {
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }

        return instance
    }
}