$(function(){
  alert("document ready");

$('#searchform').submit(function(){
  var searchTerms = $("#searchterms").val();

  getResultsFromOMDB(searchTerms);
  return false;
});
});

function getResultsFromOMDB(searchTerms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ee6b8c16&t="+searchTerms;
  $.getJSON(url,function(jsondata){
    prettyPrintJSON(jsondata);
  })
}


function prettyPrintJSON(jsondata){
  var pretty = JSON.stringify(jsondata,null,4);
  $('#resultsbox').append("<pre>"+pretty+"</pre>");
}
