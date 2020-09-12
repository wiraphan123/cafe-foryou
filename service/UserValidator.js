const Validator = use('Validator')
module.exports = async function adminValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { first_name, last_name, age, gender, user_name, password } = data
    const rules = {
        first_name: 'required',
        last_name: 'required',
        age: 'required',
        gender: 'required',
        user_name: 'required',
        password: 'required|min:8',
        
    }

    const validation = await Validator.validateAll({
        first_name,
        last_name,
        age,
        gender,
        user_name,
        password,
    }, rules)

    return {
        error: validation.messages()
    }
} 