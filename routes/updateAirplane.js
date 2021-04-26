const mongodbUrl = 'mongodb+srv://JGrizos:Furbee19085@cluster0.tzikv.mongodb.net/331DB';
const MongoClient = require('mongodb').MongoClient
//const connectDb = require('Connection');
module.exports = function (airplane, flightPlan) {
  return new Promise((resolve, reject) => {    
    MongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, function (err, db) {
      let dbo = db.db("331DB");
      let query = { "flightPlan": flightPlan };
      let newvalues = { $set: { callSign: airplane.body.callSign, aircraftType: airplane.body.aircraftType, flightPlan: airplane.body.flightPlan, squawk: airplane.body.squawk, proposedTime: airplane.body.proposedTime, requiredAltitude: airplane.body.requiredAltitude, departmentAirport: airplane.body.departmentAirport, completeRoute: airplane.body.completeRoute, remarks: airplane.body.remarks, lastFix: airplane.body.lastFix, coord: airplane.body.coord, entryTime: airplane.body.entryTime, altitude: airplane.body.altitude, remainingRoute: airplane.body.remainingRoute, arrivingAirport: airplane.body.arrivingAirport } }
      dbo.collection("flight_data").updateOne(query, newvalues)
        .then(function (result) {
          if (result === null) {            
            reject({ Success: false });
          }          
          else {            
            resolve({ Success: true})
            db.close()
          }
        });
    });
  })

}