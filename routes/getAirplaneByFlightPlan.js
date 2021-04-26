const mongodbUrl = 'mongodb+srv://JGrizos:Furbee19085@cluster0.tzikv.mongodb.net/331DB';
const MongoClient = require('mongodb').MongoClient

module.exports=async function dataQuery(flightPlan) {
  return new Promise((resolve, reject) => {
      MongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, async function (err, database) {
        var dbo = database.db("331DB");
        let searchQuery = {"flightPlan":flightPlan}
        await dbo.collection("flight_data").findOne(searchQuery)
          .then( function (result,err) {  
            if (null === result||err||result===undefined) {              
              reject({Success:"false",Message:"No airplane exists with that flightPlan in the database Error: "+err});
            }
            else {  
              console.log(result)            
              resolve({Success:true, Message:result})
            }
          })     
          database.close()
      })
    })
  }