function aboutMeInfo(nam, year, favBeer, favSnack,favSport) {
  return  "My name is " + nam + "," + year + " years old. " + "My favorite beer is " favBeer "," 
  "favorite snack is " =favSnack + "," + " and my favorite sport is " + favSport + "."
}



$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = $("input#age").val();
    const favoriteBeer = $("#beer").val();
    const favoriteSnack = $("#snack").val();
    const favSport = $("input:radio[name=sport]:checked").val;
    const result = info(nam, year, favBeer, favSnack, favSport);
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".beer").text(beerInput);
    $(".snack").text(snackInput);
    $(".sport").text(sportInput);
    $("#output").text();

  });
});

