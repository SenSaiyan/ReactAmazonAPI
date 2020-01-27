import React from 'react';
import './App.css';

function JSONCall(standardName) {
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
    console.log("client item lookup "+ASIN)
    if (err) {
      // let error = new Error('test')
      console.log("error: "+err);
    } else {
      console.log("success!: "+results);
    }
  });
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