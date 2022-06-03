function aboutMeInfo(nam, year, favBeer, favSnack,favSport) {
  return  "My name is say " + nam + "," + year + " years old. " + "My favorite beer is " favBeer "," 
  "favorite snack is " =favSnack + "," + " and my favorite sport is " + favSport + "."
}



$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = $("input#age").val();
    // const favoriteBeer = $("select#beer").val();
    // // const favoriteBeer = $("#beer").val();
    // const favoriteSnack = $("select#snack").val();
    // // const favoriteSnack = $("#snack").val();
    // const favoriteSport = $("input:radio[name=sport]:checked").val;
    const result = aboutMeInfo(nam, year, favBeer, favSnack, favSport);
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    // $(".beer").text(beerInput);
    // $(".snack").text(snackInput);
    // $(".sport").text(sportInput);
    $("#output").text(result);
    // $("#output").show(result);

  });
});



