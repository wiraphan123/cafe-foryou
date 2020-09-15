'use strict'

const Factory = require('@adonisjs/lucid/src/Factory')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
Factory.blueprint('App/Models/Admin', (faker) => {
    return{
        frist_name : faker.frist(),
        last_name : faker.last(),
        age : faker.age(),
        gender : faker.gender(),
        admin_name: faker.admin(),
        password : faker.word({length : 8})
    }
})
Factory.blueprint('App/Models/AdminupdataWebsite', (faker) =>{
    return{
        news: faker.sentence({ words: 4 }),
        detail: faker.sentence()
    }
})
Factory.blueprint('App/Models/Cafe', (faker) =>{
    return{
        cafe_name: faker.name(),
        detail: faker.sentence(),
        comment_review: faker.sentence({ words: 5 }),
        admin_id: faker.integer({ min: 1, max: 10 }),
        user_id: faker.integer({ min: 1, max: 10 }),
    }

})
Factory.blueprint('App/Models/Client', (faker) =>{
    return{
        frist_name : faker.frist(),
        last_name : faker.last(),
        age : faker.age(),
        gender: faker.gender(),
        user_name: faker.name(),
        password : faker.word({length : 8})
    }
})
Factory.blueprint('App/Models/Community', (faker) =>{
    return{
        post: faker.sentence({ words: 5 }),
        comment_post: faker.sentence(),
        user_id: faker.integer({ min: 1, max: 10 }),
    }
})
Factory.blueprint('App/Models/Webiste',(faker) =>{
    return{
        update_websites_id: faker.integer({ min: 1, max: 10 })
    }
})
// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
