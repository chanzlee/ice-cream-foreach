$(document).ready(function (){
  var tags = ["p", "h1", "img"];

  tags.forEach(function (tag) {
    $(tag).click(function (){
      result = "this is " + tag;
      alert(result);
    });
  });
});
