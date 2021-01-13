const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('successfully connec.dbted......')
    const db = client.db(databaseName)
 /// delete data   from database

    // const updatePromise = db.collection('users').deleteMany({
    //     age:23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(error)
    // });
    const updatePromise = db.collection('users').deleteOne({
        name : "Jen"
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(error)
    });
})