const path = require('path');
const express = require('express');

const PORT = 8000;

express()

.use(express.json())

//endpoints go here

// example:
// .get("/hello", (req,res)=> {
//     res.status(200).json({hi: "hi"})
// })

//endpoints

.listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
