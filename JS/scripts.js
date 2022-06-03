function aboutMeInfo(beer, snack,) {
  return beer + snack
  // return  "My name is say " + name + "," + age + " years old. " + "My favorite beer is " favoriteBeer "," 
  // "favorite snack is " =favoriteSnack + "," + " and my favorite sport is " + favoriteSport + "."
}

$(document).ready(function() {
  $("form#program").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const age = $("#age").val();
    const beer = parseInt($("#beer").val());
    const snack = parseInt($("#snack").val());
    const sport = $("input:radio[name=sport]:checked").val;
    console.log(sport)
    const total = aboutMeInfo(beer, snack);
    
    $("#username").text(name);
    // $(#"output").show(total);
    
    // $("#username").text(name);
    
    if ((sport === "basketball")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#hidden").show();
      } else (total > 20 && total <= 40)
        $("#language").text("C#");
        $("#hidden").show();
  
    }if ((sport === "football")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#hidden").show();
      } else (total > 20 && total <= 40)
        $("#language").text("C#");
        $("#hidden").show();
    
      }if ((sport === "soccer")) {
      if (total <= 10)  {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total > 11 && total <= 20) {
        $("#language").text("Java");
        $("#hidden").show();
      } else (total > 20 && total <= 40)
        $("#language").text("C#");
        $("#hidden").show();
    }
    // $(".beer").text(beerInput);
    // $(".snack").text(snackInput);
    // $(".sport").text(sportInput);
    // $("#output").text(result);
    // $("#output").show(result);
  });
});



