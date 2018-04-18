$(function(){
  alert("document ready");

$('#searchform').submit(function(){
  var searchTerms = $("#searchterms").val();

  getResultsFromOMDB(searchTerms);
  return false;
});
});

function getResultsFromOMDB(searchTerms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ee6b8c16&s="+searchTerms;
  $.getJSON(url,function(jsondata){
    printJSON(jsondata);
  })
}


function printJSON(jsondata){
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>"+normal+"</p>");
}
