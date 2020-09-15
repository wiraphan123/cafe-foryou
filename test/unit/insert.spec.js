'use strict'

const { test } = use('Test/Suite')('Insert')

const urlUsers = "/api/v2/users"
const UserModel = use('App/Models/User')

const urlAdmins = "/api/v2/admins"
const AdminModel = use('App/Models/Admin')

const urlCommunity = "/api/v2/communitys"
const CommunityModel = use('App/Models/Community')

const urlWebsites = "/api/v2/websites"
const WebsitesModel = use('App/Models/Websites')

const urlCafe = "/api/v2/cafes"
const CafeModel = use('App/Models/Cafe')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const user = {
        first_name: "John",
        last_name: "Doe",
        age: '20',
        user_name: "Johnlnwza",
        password: "12345678",
        status: "user"
  }
  const response = await client.post(urlUsers).send(user).end()
  response.assertStatus(200)
})

test('should insert value to admin table', async ({ client }) => {
    const admin = {
        first_name: "John",
        last_name: "Doe",
        age: '20',
        admin_name: "Johnlnwzazaa",
        password: "12345678",
        status: "admin"
    }
    const response = await client.post(urlAdmins).send(admin).end()
    response.assertStatus(200)
  })
test('should insert value to community table', async ({ client }) => {
    const user = {
          post: "John",
          comment_post:"goodd"
    }
    const response = await client.post(urlUsers).send(user).end()
    response.assertStatus(200)
  })
  test('should insert value to news table', async ({ client }) => {
      const user = {
            update_websites_id:"1"
      }
      const response = await client.post(urlUsers).send(user).end()
      response.assertStatus(200)
    })
    test('should insert value to store table', async ({ client }) => {
      const user = {
            cafe_name: "kormadikub",
            detail: "lowpice",
            comment_review: "good"
      }
      const response = await client.post(urlUsers).send(user).end()
      response.assertStatus(200)
    })
