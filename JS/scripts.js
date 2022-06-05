function aboutMeInfo(beer, snack,) {
  return beer + snack
}

$(document).ready(function() {
  $("form#program").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const age = $("#age").val();
    const beer = parseInt($("#beer").val());
    const snack = parseInt($("#snack").val());
    const sport = $("input:radio[name=sport]:checked").val();
    const total = aboutMeInfo(beer, snack);
    $("#username").text(name);
    $(".btn-submit").hide();
    
    $(".btn-reset").click(function () {
      $("#program").trigger("reset");
      $("#output").hide();
      $(".btn-submit").show();
    });
    
    if ((sport === "basketball")) {
      if (total <= 16)  {
        $("#language").text("Ruby");
        $("#output").show();
        $("#output").text(Ruby);
      } else if (total >= 17 && total <= 25) {
        $("#language").text("Java");
        $("#output").show();
        $("#output").text(Java);
      } else (total >= 31 && total <= 40);
        $("#language").text("C#");
        $("#output").show();
  
    }if ((sport === "football")) {
      if (total <= 15)  {
        $("#language").text("Ruby");
        $("#output").show();
        $("#output").text(Ruby);
      } else if (total >= 16 && total <= 20) {
        $("#language").text("Java");
        $("#output").show();
        $("#output").text(Java);
      } else (total >= 21 && total <= 40);
        $("#language").text("C#");
        $("#output").show();
    
      }if ((sport === "soccer")) {
      if (total <= 15)  {
        $("#language").text("Ruby");
        $("#output").show();
        $("#output").text(Ruby);
      } else if (total >= 16 && total <= 20) {
        $("#language").text("Java");
        $("#output").show();
        $("#output").text(Java);
      } else (total >= 21 && total <= 40);
        $("#language").text("C#");
        $("#output").show();
      }

      else {
        alert ("Please enter you name")
      }
   });
});



