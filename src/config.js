require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://jewelloepm2735:DuNAc0bokVeAHv9A@cluster0.wbto6a0.mongodb.net/?retryWrites=true&w=majority',
  FIREBASE_DBURL: process.env.FIREBASE_DBURL || '',
  FIREBASE_KEY_PATH: process.env.FIREBASE_KEY_PATH || 'file.json',
};


// require('dotenv').config();

// // Access and print the environment variables
// console.log(process.env.PORT);
// console.log(process.env.MONGO_URI);
// console.log(process.env.FIREBASE_DBURL);
// console.log(process.env.FIREBASE_KEY_PATH);
// console.log(process.env,"env path")


