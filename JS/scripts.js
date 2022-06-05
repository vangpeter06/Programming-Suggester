function aboutMeInfo(beer, snack,) {
  return beer + snack
  // return  "My name is say " + name + "," + age + " years old. " + "My favorite beer is " favoriteBeer "," 
  // "favorite snack is " =favoriteSnack + "," + " and my favorite sport is " + favoriteSport + "."
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
    
    $(".btn-reset").click(function () {
      $("#program").trigger("reset");
      $("#output").hide();
      // $("#hidden-fail").hide()
      $(".btn-submit").show();
    });
    
    // $(#"output").show(total);
    
    // $("#username").text(name);
    
    if ((sport === "basketball")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#output").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#output").show();
      } else (total > 20 && total <= 40);
        $("#language").text("C#");
        $("#output").show();
  
    }if ((sport === "football")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#output").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#output").show();
      } else (total > 20 && total <= 40);
        $("#language").text("C#");
        $("#").show();
    
      }if ((sport === "soccer")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#output").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#output").show();
      } else (total > 20 && total <= 40);
        $("#language").text("C#");
        $("#output").show();
      }
    // $(".beer").text(beerInput);
    // $(".snack").text(snackInput);
    // $(".sport").text(sportInput);
    // $("#output").text(result);
    // $("#output").show(result);
  });
});



