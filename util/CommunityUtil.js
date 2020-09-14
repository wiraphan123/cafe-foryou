class CommunityUtil{
    constructor(CommunityModel) {
        this._Community = CommunityModel
    }

    getAll(references) {
        const community = this._Community.query()

        return this._withReference(adminUpdate, references)
            .fetch()
    }

    getById(communityId, references) {
        const community  = this._Community
            .query()
            .where('community_id', communityId)

        return this._withReference(community, references)
            .fetch()
            .then(response => response.first())
    }

    async create(communityInstance, references) {
        const { community_id } = await this._Community.create(communityInstance)
        const community = this._Community
            .query()
            .where('community_id', community_id)

        return this._withReference(community, references)
            .fetch()
            .then(response => response.first())
    }

    async deletById(communityInstance){
        const { id } = communityInstance.params
        const community = await this._Community.find(id)

        if(!community){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        community.delete()
        await community.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(communityInstance,references){
        const { id } = communityInstance.params
        let community = await this._Community.find(id)

        if(!community){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        community.merge(communityInstance.body)
        await community.save();
    
        community = this._Community.query().where({community_id : id})
        
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

module.exports = CommunityUtil