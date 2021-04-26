const mongodbUrl = 'mongodb+srv://JGrizos:Furbee19085@cluster0.tzikv.mongodb.net/331DB';
const MongoClient = require('mongodb').MongoClient

module.exports=async function dataQuery(airportName) {
  return new Promise((resolve, reject) => {
      MongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, async function (err, database) {
        var dbo = database.db("331DB");
        let searchQuery = {"airportName":airportName}
        await dbo.collection("airport_data").findOne(searchQuery)
          .then( result=> { 
            console.log(result)
            resolve({Success:true, Message:result})            
          })   
          .catch(err=>{
            reject({Success:"false",Message:"No airport exists with that name in the database Error: "+err});
          })  
          database.close()
      })
    })
  }