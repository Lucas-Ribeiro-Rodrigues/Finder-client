const firebase  = require("firebase");
const key       = require("./firebaseKey.json");

firebase
  .initializeApp({
    ...key,
    databaseURL: "https://finder-88f51.firebaseio.com",
    storageBucket: "gs://finder-88f51.appspot.com/",
  })


module.exports = firebase;