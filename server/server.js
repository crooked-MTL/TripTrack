const path = require('path');
const express = require('express');
const { placesHandle, findUser, addUser, addTrip,getTrips} = require('./handlers');

const PORT = 8000;

express()

.use(express.json())

//endpoints go here

// example:
// .get("/hello", (req,res)=> {
//     res.status(200).json({hi: "hi"})
// })
.post("/trip", placesHandle)
.get("/checkUser/:_id", findUser)
.post("/addUser", addUser)
.patch("/addTrip/:email", addTrip)
.post("/myTrips", getTrips)
//endpoints

.listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
