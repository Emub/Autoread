$(function(){
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
});
