class WebsiteUtil {
    constructor(WebsiteModel) {
        this._Website = WebsiteModel
    }

    getAll(references) {
        const websites = this._Website.query()

        return this._withReference(websites, references)
            .fetch()
    }

    getById(websiteId, references) {
        const website = this._Website
            .query()
            .where('website_id', websiteId)

        return this._withReference(website, references)
            .fetch()
            .then(response => response.first())
    }

    async create(websiteInstance, references) {
        const { website_id } = await this._Website.create(websiteInstance)
        const user = this._Website
            .query()
            .where('website_id', website_id)

        return this._withReference(website, references)
            .fetch()
            .then(response => response.first())
    }
    async deletById(websiteInstance){
        const { id } = websiteInstance.params
        const websites = await this._Website.find(id)

        if(!websites){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        websits.delete()
        await websites.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(websiteInstance,references){
        const { id } = websiteInstance.params
        let websites = await this._Website.find(id)

        if(!websites){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        websites.merge(websiteInstance.body)
        await websites.save();
    
        websites = this._Website.query().where({website_id : id})
        
        return this._withReferences(websites,references).fetch().then(response => response.first())
    }


    _withReference(instance, references) {
        if (references) {
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }

        return instance
    }
}
