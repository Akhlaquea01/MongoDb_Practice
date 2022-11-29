Mongosh Shellcommands
    show dbs => to show all databases with atleast one collection and document

    db => current db

    db.stats() =>statics of db

    show collections => Returns all collections

    use {dbName} => switch to db or create and Use

    db.test.insertOne({test:123}) =>create collection and add document

    db.test.find() => Return All documents in collection

    db.dropDatabase() => Drop current db

    db.createCollection("products") =>Create collection

    db.createCollection("test",{capped:true,autoIndexId:true,size:329030,max:100}) =>Create collection with options

    db.test.drop()=>drop collection

    db.customer.insertMany([{name:"Atts2",age:22,gender:"Male"},{name:"Choti",age:19,gender:"Female"},{name:"Steve",age:22}])

    db.customer.insert({name:"Ram"})

    db.customer.insert([{name:"Ram2"},{name:"three"}]) =>depreciated in many languages driver

    db.customer.findOne() => Return first doc

    db.customer.findOne({name:"Ram2"}) =>return 1 doc with this filter

    db.customer.find() => return all docs

    db.customer.find({name:"Ram2"}) => return all docs with this filter

    db.customer.find({gender:"Male"},{_id:false,gender:0}) =>2nd{} to filter what to not return

    db.customer.updateOne({name:"Atts"},{$set:{age:33}}) =>Updated age for First Doc

    db.customer.updateMany({name:"Atts"},{$set:{age2:333}})

    db.customer.update({name:"Atts"},{$set:{age2:333}},{multi:true})

    db.customer.replaceOne({name:"Atts"},{age2:333,age3:1})

    db.customer.save({_id:"dkferi4",name:"MARK",gender:"male",age:22})=>insert and save not thre in latest v 6

    db.customer.deleteOne({name:"Atts"})

    db.customer.deleteMany({name:"Atts"})

    db.customer.remove({name:"Atts"},true) =>delete 1st doc

    db.customer.remove({name:"Atts"},false) =>delete all doc we can not specify 2nd args also

    db.customer.find().toArray() => returns all docs

    db.customer.find().forEach(function (cust){print("akhlaque :"+cust.name)}) => returns all docs

