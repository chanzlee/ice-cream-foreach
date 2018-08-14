$(document).ready(function (){

  var flavors = ["flavor1", "flavor2", "flavor3"]
  flavors.forEach(function(flavor){
    var userInput = $("input#" + flavor).val();
    $("#output ul").append("<li>" + userInput + "<li>");
  });

});
