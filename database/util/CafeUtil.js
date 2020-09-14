class CafeUtil {

    constructor(CafeModel) {
        this._Cafe = CafeModel
    }

    getAll(references) {
        const cafe = this._Cafe.query()
        if (references) {
            const extractedReferences = references.split(",");
            extractedReferences.forEach(reference => {
                cafe.with(reference)
            });
        }

        return this._withReference(cafe, references)
            .fetch()
    }

    getById(cafeId, references) {
        const cafe = this._Cafe
            .query()
            .where('cafe_id', cafeId)

        return this._withReference(cafe, references)
            .fetch()
            .then(response => response.first())
    }

    async create(cafeInstance, references) {
        const { cafe_id } = await this._Cafe.create(cafeInstance)
        const cafe = this._Cafe
            .query()
            .where('cafe_id', cafe_id)

        return this._withReference(cafe, references)
            .fetch()
            .then(response => response.first())
    }

    async deletById(cafe){
        const { id } = cafe.params
        const cafe = await this._Cafe.find(id)

        if(!cafe){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        cafe.delete()
        await cafe.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(cafe,references){
        const { id } = cafe.params
        let cafe = await this._Cafe.find(id)

        if(!cafe){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        cafe.merge(cafe.body)
        await cafe.save();
    
        cafe = this._Cafe.query().where({cafe_id : id})
        
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

module.exports = CafeUtil