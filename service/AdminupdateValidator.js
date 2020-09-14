const Validator = use('Validator')
module.exports = async function AdminUpdateValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { websites, detail } = data
    const rules = {
        websites: 'required',
        detail: 'required',

    }

    const validation = await Validator.validateAll({
        websites,
        detail,
    }, rules)

    return {
        error: validation.messages()
    }
}