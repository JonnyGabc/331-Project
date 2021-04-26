const mongodbUrl = 'mongodb+srv://JGrizos:Furbee19085@cluster0.tzikv.mongodb.net/331DB';
const MongoClient = require('mongodb').MongoClient

module.exports=async function dataQuery() {
  return new Promise((resolve, reject) => {
      MongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, async function (err, database) {
        var dbo = database.db("331DB");
  
        await dbo.collection("airport_data").find()
          .toArray( function (err,result) {  
            if (null === result||err) {              
              reject({Success:"false",Message:"No Data was retrieved. Error: "+err});
            }
            else {              
              resolve({Success:true, Message:result})
            }
          })     
          database.close()
      })
    })
  }
