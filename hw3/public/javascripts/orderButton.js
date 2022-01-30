// Tyler Uyeno
// If user puts "vegan" in the notes section when they press the 
// order button it will give the customer a warning. Else it will 
// display the customers order and thank you screen.
eventHandler = function( event ) {
    if($ ("#notes").val().toLowerCase().indexOf("vegan") != -1) {
        alert("WARNING! ALL CHEESECAKES CONTAIN DAIRY PRODUCTS! ");
      }
      else {
        $ ("#form").removeAttr("style").hide();
        $ ("#thankYouScreen").show();
        $ ("#displayOrder").html("Topping: " + $ ("input[name='Topping']:checked").val());
        $ ("#displayQuantity").html("Quantity: " + $ ("#Quantity").val());
        $ ("#extraNotes").html("Notes: " + $ ("#notes").val());
      }
}

$(function() {
    $("#orderButton").click(eventHandler);
});

