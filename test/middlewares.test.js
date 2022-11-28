const User = require('../schemas/user')
const {findAll,postOne,getOneComment} = require('../router/controller');
const mongoose = require('mongoose')
const databaseName = 'test'

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`
  await mongoose.connect(url, { useNewUrlParser: true })
})

beforeEach(async ()=>{
    const user=await User.create({
        name:"tester",
        age:"32", 
        married:false,
    });
})

afterEach(async ()=>{
    await User.deleteMany()
})

// async function removeAllCollections () {
//     const collections = Object.keys(mongoose.connection.collections)
//     for (const collectionName of collections) {
//         const collection = mongoose.connection.collections[collectionName]
//         await collection.deleteMany()
//     }
// }
  
// afterEach(async () => {
//     await removeAllCollections()
// })

// test('1 + 1은 2입니다.',()=>{
//     expect(1+1).toEqual(2)
// })

describe('user',()=>{
    
    test('asdfa',()=>{
        expect(1+1).toEqual(2)
    })
})

