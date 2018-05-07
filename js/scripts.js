    //business interface logic
    Var number;

    function condition (){
       for (var count =1; count <=number;count ++){
          if (count % 3 || 5===0) {
            $("#result").append("<li>") + "PingPong"  + "</li>)";
          } else if (count %3===0){
            $("#result").append("<li>") + "ping" + "</li>)";
          } else if (count % 5===0){
            $("#result").append("<li") + "pong" + "</li>)";
          } else {
            $("#result").append("<li>") + "count.toString() + "(</li>");
          }
        }
     }

//user interface logic
  $(document).ready(function(){
   $("form#divisibleNumber").submit(function(event){
       number =parseInt($("#no").val());
       ("#result").text("result");
         condition();
         $("#result").show();
         $("#no").val('');
        event.preventDefault();
      });
    });
