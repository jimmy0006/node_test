const User = require('../schemas/user')
const {findAll,postOne,getOneComment} = require('../router/controller');
const mongoose = require('mongoose')
const assert = require('assert')
const databaseName = 'test'

const request = require('supertest')
const app = require('../index')


// function hasData(status, callback) {
//     // 1번
//     return res => {
//       // 2번
//       assert.equal(res.status, status) // 3번
  
//       if (!body.hasOwnProperty("data")) throw new Error("missing data key") // 4번
  
//       callback(res.body.data) // 5번
//     }
//   }


describe('/user',()=>{

    test('유저 정보 생성1',(done)=>{
        request(app)
        .post('/users')
        .send({
            name:'tester1',
            age:32,
            married:false
        })
        .expect(201, done)
    })

    test('유저 정보 생성2',async ()=>{
        const response = await request(app)
        .post('/users')
        .send({
            name:'tester2',
            age:32,
            married:false
        })
        expect(response.status).toEqual(201)
        expect(response.body.name).toEqual("tester2")
    })
})
//toEqual toBe toBeTruthy toBeFalsy toHaveLength toContain toThrow

describe('/',()=>{
    test('모든 유저 가져옴',(done)=>{
        request(app)
        .get('/')
        .expect(200,done)
    })
})

