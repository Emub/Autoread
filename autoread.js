$(function(){
  
  // Have the page auto-read
  $("input[type='text']").off().on("focus", function(){
    var indexNum = 0,
        children = $(this).parent().children("*:not(br)");
    
    for(var i = 0; i < children.length; i++){
      if($(children[i]).attr("id") === $(this).attr("id")){
        $(children[i - 1]).click();
        break;
      }
    }
  });
  
  // Fix strongs not being visible on mac safari
  $("legend strong").css({
    "font-size": "18px",
    "font-weight": "900",
    "color": "rgb(25, 0, 0)"
  });
});
