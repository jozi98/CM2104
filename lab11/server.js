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
app.get('/', function(req, res){
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
     res.send(tweets);
  }
  });
 res.send("Hello world! by express & twitter");

});
app.listen(8080);
