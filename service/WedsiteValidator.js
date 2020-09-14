const Validator = use('Validator')
module.exports = async function WebsiteValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { update_website_id } = data
    const rules = {
        update_websits_id: 'required',

    }

    const validation = await Validator.validateAll({
        update_websites_id,
    }, rules)

    return {
        error: validation.messages()
    }
}