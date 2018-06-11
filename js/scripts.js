$(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputStreet = $("input#new-street-name").val();
    var inputCity = $("input#new-city-name").val();
    var inputState = $("input#new-state-name").val();

    var newContact = new Contact(inputFirstName, inputLastName, inputStreet, inputCity, inputState);

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street-name").text(newContact.streetName);
      $(".city-name").text(newContact.cityName);
      $(".state-name").text(newContact.stateName);
    });
    clearInput();
  });
});

//Create a constructor for object Contact
function Contact(first, last , street, city, state){
  this.firstName = first;
  this.lastName = last;
  this.streetName= street;
  this.cityName = city;
  this.stateName = state;
}

function clearInput()
{
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-name").val("");
  $("input#new-city-name").val("");
  $("input#new-state-name").val("");
}
