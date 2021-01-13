const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('successfully connec.dbted......')

const db = client.db(databaseName)
    // update data of database//

    const updatePromise = db.collection('users').updateOne({
        _id: ObjectID("5fcfa03e977ec713403819fc")
    }, {
        $set: {
            name: 'Dude'
        },
        $inc:{
            age:1
        }
    })
    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });


    // const updatePromise = db.collection('users').updateMany({

    //     completed: true
    // },
    //     {
    //         $set: {
    //             coompleted: false
    //         }

    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     });
})