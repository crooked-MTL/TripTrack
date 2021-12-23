"use strict";

require('dotenv').config();
const { v4: uuidv4 } = require("uuid");

const {MONGO_URI, REACT_APP_GOOGLE_MAPS_API_KEY} = process.env;
const { MongoClient } = require("mongodb");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let axios = require('axios');



const placesHandle = async (req,res) => {

let {latitude, longitude, radius,type} = req.body;
let result = [];
console.log(latitude, longitude,radius, type)
let config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius * 1000}&type=${type}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`,
  headers: {  "Content-Type": "application/json",
  "Accept":"application/json",  "Access-Control-Allow-Origin": "http://localhost/3000",}
};

    await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.results));
      result = response.data.results
    })
    .catch(function (error) {
      console.log(error);
    });
res.status(200).json({status:200, message: "success", data: result})
}


const findUser = async(req,res) =>{
    const {_id} = req.params;
    try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db=client.db("TripTrack");
    const user = await db.collection("users").findOne({_id});
    console.log(user)
    res.status(200).json({status:200, data: user})
    client.close();
    }
    catch(err){
        console.log(err);
    }
}

const addUser = async(req,res) => {
    try{
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db=client.db("TripTrack");

        await db.collection("users").insertOne({_id: req.body._id,user:req.body.user, tripPlans:[]});
        res.status(200).json({status:200, data: {email: req.body,user:req.body.user, tripPlans: []}})
        client.close();
    }catch(err){
        console.log(err.stack);
    }
}

const addTrip = async (req, res) => {
    try{
        const {email}=req.params;
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("TripTrack");
        let id = uuidv4()
console.log(email);
        await db.collection("SavedTrips").insertOne({trip: req.body.trip, _id: id});
        await db.collection("users").updateOne({_id:email},{$push: {tripPlans:id}})
        res.status(200).json({status:200, data:req.body})
        client.close();
    }catch(err){
        console.log(err)
    }
}

const getTrips = async(req,res)=> {
    try{
        const {TripsArr} = req.body;        
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("TripTrack");
        console.log(TripsArr)
        if (TripsArr) {
        const allTrips=await db.collection("SavedTrips").find({_id:{$in:TripsArr}}).toArray();
        res.status(200).json({status:200,data:allTrips})} else{
            res.status(404).json({status:404,data:null})
        }
        client.close()
    }catch(err){
        console.log(err.stack)
    }
}
module.exports = {placesHandle, findUser, addUser, addTrip, getTrips}