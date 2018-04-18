var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
 consumer_key: 'wsk2GCAxUMM9i4eu4UyFyWrdF',
 consumer_secret: 'GYIJg9BaBeQY0E5e5g1KHBf3vm9Tlj6Vq51a0M36PbEsnF4pXR',
 access_token_key: '980911711422238730-t6bRCpUyYcZFk6RnH6Ct1ra9u51n1SM',
 access_token_secret: '6hoVseGhSfbUi4VfXEHMPwb9znmz2DLzp9PaHYytSG1gr'
});

app.use(express.static('public'))
app.get('/getform', function(req, res){

var name = req.query.name;

  var params = {screen_name: name};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
     var output = "";
      for (var t = 0; t < tweets.length; t++) {
      output += "<div>";
      output += "<h2>" + tweets[t].user.screen_name + "<h2>";
      output += "<p>" + tweets[t].text + "</p>"
      output += "</div>";
      }
     res.send(output);  }

  });
 //res.send("Hello world! by express & twitter");

});
app.listen(8080);
