$(function(){



$('#searchform').submit(function(){
  var searchTerms = $("#searchterms").val();
  getResultsFromOMDB(searchTerms);
  return false;
});
});

function getResultsFromOMDB(searchTerms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ee6b8c16&s="+searchTerms+"&type=movie";
  $.getJSON(url,function(jsondata){

  addResultsTitles(jsondata);
//  console.log(jsondata);
  })
}

    function addResultsTitles(jsondata){



   for(var i = 0;i<10;i++){
$('#results').empty();
  var temp = jsondata.Search[i].Title;

      var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ee6b8c16&t=" + temp + "&type=movie";

        $.getJSON(url,function(jsondata){

$('#results').append("<li>"+jsondata.Title+"</li>"+ '<a href="'+jsondata.Poster+'">Poster-Link</a>'+"<br>"+jsondata.Year+"</br>"+"<br>"+jsondata.Type+"</br>"+'<a href="http://www.imdb.com/title/'+jsondata.imdbID+' "/" ">imdb Link</a>');


              })
              }


      }
