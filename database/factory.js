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
        admin_name: faker.admin(),
        password : faker.word({length : 8})
    }
})
Factory.blueprint('App/Models/AdminUpdataWebsite', (faker) =>{
    return{
        post : faker.post({varchar : 1000}),
        detail : faker.detail()
    }
})
Factory.blueprint('App/Models/Cafe', (faker) =>{
    return{
        cafe_name : faker.cafe(),
        detail : faker.detail()
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
Factory.blueprint('App/Models/ClientsWatchCafe', (faker) =>{
    return{
        cafe_name : faker.cafe(),
        detail : faker.detail(),
        comment_review : faker.comment()
        
    }
})
Factory.blueprint('App/Models/Community', (faker) =>{
    return{
        post : faker.post(),
        comment_post : faker.comment(),
        detail_time : faker.detail()
    }
})
Factory.blueprint('App/Models/User_post_Community', (faker) =>{
    return{
        post : faker.post(),
        comment_post : faker.comment(),
        detail_time : faker.detail()
    }
})
Factory.blueprint('App/Models/UserPostCommunity', (faker) => {
    return{
        post : faker.post(),
        comment_post : faker.comment(),
        detail_time : faker.detail()
    }
})
Factory.blueprint('App/Models/WatchWebiste',(faker) =>{
    return{
        post : faker.post(),
        comment_post : faker.comment(),
        detail_time : faker.detail()
    }
})
// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
