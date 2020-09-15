'use strict'

const { test } = use('Test/Suite')('Insert')

const urlClients = "/api/v2/clients"
const ClientModel = use('App/Models/Client')

const urlAdmins = "/api/v2/admins"
const AdminModel = use('App/Models/Admin')

const urlCommunity = "/api/v2/communitys"
const CommunityModel = use('App/Models/Community')

const urlWebsites = "/api/v2/websites"
const WebsitesModel = use('App/Models/Websites')

const urlCafe = "/api/v2/cafes"
const CafeModel = use('App/Models/Cafe')

trait("Test/ApiClient");

test('should insert value to client table', async ({ client }) => {
  const client = {
        first_name: "Voy",
        last_name: "Doe",
        age: '20',
        gender: 'male',
        client_name: "Voyeiei",
        password: "12345678",
        
  }
  const response = await client.post(urlClients).send(client).end()
  response.assertStatus(200)
})

test('should insert value to admin table', async ({ client }) => {
    const admin = {
      first_name: "Voy",
      last_name: "Doe",
      age: '20',
      gender: 'male',
      client_name: "Voyeiei",
      password: "12345678",
      
    }
    const response = await client.post(urlAdmins).send(admin).end()
    response.assertStatus(200)
  })
test('should insert value to community table', async ({ client }) => {
    const client = {
          post: "Voy",
          comment_post:"goodd"
    }
    const response = await client.post(urlClients).send(client).end()
    response.assertStatus(200)
  })
 