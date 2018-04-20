var express = require('express');
var app = express();
// var Twitter = require('twitter');
//
// var client = new Twitter({
//  consumer_key: 'wsk2GCAxUMM9i4eu4UyFyWrdF',
//  consumer_secret: 'GYIJg9BaBeQY0E5e5g1KHBf3vm9Tlj6Vq51a0M36PbEsnF4pXR',
//  access_token_key: '980911711422238730-t6bRCpUyYcZFk6RnH6Ct1ra9u51n1SM',
//  access_token_secret: '6hoVseGhSfbUi4VfXEHMPwb9znmz2DLzp9PaHYytSG1gr'
// });
import Quagga from 'quagga'; // ES6
const Quagga = require('quagga').default; // Common JS (important: default)

app.use(express.static('public'))


function myFunction(){

  Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#BarcodeScreen')    // Or '#yourElement' (optional)
      },
      decoder : {
        readers : ["code_128_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

}


app.get('/getform', function(req, res){

// var name = req.query.name;
//
//   var params = {screen_name: name};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//    if (!error) {
//      var output = "";
//       for (var t = 0; t < tweets.length; t++) {
//       output += "<div>";
//       output += "<h2>" + tweets[t].user.screen_name + "<h2>";
//       output += "<p>" + tweets[t].text + "</p>"
//       output += "</div>";
//       }
//      res.send(output);
//    }
//
//   });
//  //res.send("Hello world! by express & twitter");



});




app.get('/tweetsjson', function(req, res) {
  var screen_name = req.query.name;
  var params = {
    screen_name: screen_name
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var json = [];
      for (var i = 0; i < tweets.length; i++) {
        json.push({
          name: tweets[i].user.name,
          text: tweets[i].text
        });
      }
      res.send(JSON.stringify(json));
    }
  });
})






app.listen(8080);
