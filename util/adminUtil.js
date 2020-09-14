class AdminUtil {
    constructor(AdminModel) {
      this._SAdmin = AdminModel
    }
  
    getAll(references){
        const admin = this._SAdmin.query()
        return this._withReference(admin,references).fetch()
        }       
  
    getById (subjectId, references) {
      const subject = this._Subject
        .query()
        .where('subject_id', subjectId)
  
      return this._withReference(subject, references)
        .fetch()
        .then(response => response.first())
    }
  
    async create (subjectInstance, references) {
      const { subject_id } = await this._Subject.create(subjectInstance)
      const subject = this._Subject
        .query()
        .where('subject_id', subject_id)
  
      return this._withReference(subject, references)
        .fetch()
        .then(response => response.first())
    }
  
    _withReference (instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance
    }
  }
  
  module.exports = AdminUtil
  