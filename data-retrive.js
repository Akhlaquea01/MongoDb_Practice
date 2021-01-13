const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
   // 1. Retrive data by name
    db.collection('users').findOne({name:'Firoz'},(error,user)=>{
        if(error){
            return console.log('Unable to find.......')
        }

        console.log(user)
    })
})

    //2.Retrive dta by id

    // db.collection('users').findOne({_id:ObjectID("5fcf44ebdd997623544e2538")},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to find.......')
    //     }

    //     console.log(user)
    // })

    //3.Retrive dta by age attribute

    // db.collection('users').find({age: 22}).toArray((error,user)=>{
    //     if(error){
    //         return console.log('Unable to find.......')
    //     }

    //     console.log(user)
    // })
