$(function(){
  alert("document ready");
$('#searchform').submit(function(){
  var searchTerms = $("#searchterms").val();

  addItemToList(searchTerms);
  return false;
});
});

function addItemToList(item){
  $('#results').append("<li>"+item+"</li>");
}
