    //business interface logic


      function condition (){
       for(var count =1; count <= number;count ++){
          if ((count %3 ===0) & (count % 5 ===0)){
            $("#result").append("<li>" + "pingpong"  + "</li>");
          } else if (count %3===0){
            $("#result").append("<li>" + "ping" + "</li>");
          } else if (count % 5===0){
            $("#result").append("<li"+ "pong" + "</li>");
          } else {
            $("#result").append("<li>" + count.toString() + "</li>");
          }
        }
     }


//user interface logic
  $(document).ready(function(){
    $("form#divisibleNumber").submit(function(event){
      number = parseInt($("#no").val());
      $("#result").text("");
       condition();
       $("#result").show();
       $("#no").val('');
       event.preventDefault();


      });
    });
