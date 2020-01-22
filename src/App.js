import React from 'react';
import logo from './logo.svg';
import './App.css';

function JSONCall(standardName) {
  var amazon = require('amazon-affiliate-api');
  var client = amazon.createClient({
    awsId: "AKIAI3WW6Y5EI2PSNIKA", // access key id
    awsSecret: "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", //secret access key
    awsTag: "amerinatiosta-20" //associate tag
  });
  var JSONUrl = "https://notstaging.com/SKUtoASINKeyed.json"; //need to host on webstore server
  var request = new XMLHttpRequest();
  request.open('GET', JSONUrl, true);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var uncutASIN = JSON.stringify(data[standardName][0]).split(":")[1];
    var cutASIN = (uncutASIN.substring(1, uncutASIN.length-2));
    client.itemLookup({
      idType: 'ASIN',
      itemId: cutASIN,
      responseGroup: 'Images,ItemAttributes,OfferFull'
    }, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
    console.log("client: "+client);
    // return client;
  }
}

function App() {
  var ASIN = window.standardName;
  
  return (
    JSONCall(standardName);
  );
}

export default App;
