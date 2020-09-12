const Validator = use('Validator')
module.exports = async function adminValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { first_name, last_name, age, admin_name, password, status } = data
    const rules = {
        first_name: 'required',
        last_name: 'required',
        age: 'required',
        gender: 'required',
        admin_name: 'required',
        password: 'required|min:8',
        
    }

    const validation = await Validator.validateAll({
        first_name,
        last_name,
        age,
        gender,
        admin_name,
        password,
        status,
    }, rules)

    return {
        error: validation.messages()
    }
} 