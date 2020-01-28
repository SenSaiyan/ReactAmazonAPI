import React from 'react';
import './App.css';

function JSONCall(standardName) {
  // var express = require('express');
  // var cors = require('cors')
  // var app = express()
   
  // app.use(cors())
   
  // app.get('/products/:id', function (req, res, next) {
  //   res.json({msg: 'This is CORS-enabled for all origins!'})
  // })
   
  // app.listen(80, function () {
  //   console.log('CORS-enabled web server listening on port 80')
  // })

  // const express = require('express');
  // var cors = require('cors-express');
  // var app = express(),
  //   options = {};
 
  // app.use(cors(options));

  // end cors package

  var amazon = require('amazon-affiliate-api');
  var client = amazon.createClient({
    awsId: "AKIAI3WW6Y5EI2PSNIKA", // access key id
    awsSecret: "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", //secret access key
    awsTag: "amerinatiosta-20" //associate tag
  });
  
  var data = require("./SKUtoASINKeyed.json");
  var uncutASIN = JSON.stringify(data[standardName][0]).split(":")[1];
  var ASIN = (uncutASIN.substring(1, uncutASIN.length-2));

  client.itemLookup({
    idType: 'ASIN',
    itemId: ASIN,
    responseGroup: 'Images,ItemAttributes,OfferFull'
  }, function(err, results) {
    console.log("client item lookup "+ASIN);
    if (err) {
      // let error = new Error('test')
      console.log("error: "+err);
    } else {
      console.log("success!: "+results);
    }
  });
//   client.itemLookup({
//     idType: 'ASIN',
//     itemId: ASIN
//   }).then(function(results) {
//     console.log(results);
//   }).catch(function(err) {
//     console.log(err);
//   });
}

function App() {
  // var standard = sessionStorage.getItem("standardName");
  var standard = "ISO 9001:2015";
  return (
    <div>
      {JSONCall(standard)}
    </div>
  );
}

export default App;