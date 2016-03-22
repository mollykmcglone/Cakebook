//business logic
//function constructor to create all the bakeries//
function Bakery(bakery, website) {
  this.bakeryName = bakery;
  this.website = website;
  this.cakes = [];
}
//function constructor to create all the cakes//
function Cake(cakeName, erikScore, mollyScore) {
  this.cakeName = cakeName;
  this.erikScore = erikScore;
  this.mollyScore = mollyScore;
}
// prototype for Cakes that creates a summary statement of our rankings for each cake//
Cake.prototype.summary = function() {
  return this.cakeName + ": Erik ranks " + this.erikScore + " and Molly ranks " + this.mollyScore;
}
//function that resets all the fields on the input form//
function resetFields() {
    $("input#new-bakery-name").val("");
    $("input#new-bakery-website").val("");
    $("input.new-cake-name").val("");
    $("input.new-Erik-score").val("");
    $("input.new-Molly-score").val("");
}

function removeDiv(divId) {
  $("#" +divId).remove();
}

// user interface logic
$(document).ready(function() {
//upon click of the "add cake" button...//
  $("#add-cake").click(function() {
    //to the new-cakes ID, add...//
    $("#new-cakes").append('<div id="additional">'+
                              '<div class="new-cake">' +
                                 '<div class="form-group">' +
                                   '<label for="new-cake-name">Name of Cake</label>' +
                                   '<input type="text" class="form-control new-cake-name">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Erik-score">Erik Flavor/Texture Score</label>' +
                                   '<input type="text" class="form-control new-Erik-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Molly-score">Molly Flavor/Texture Score</label>' +
                                   '<input type="text" class="form-control new-Molly-score">' +
                                 '</div>' +
                              '</div>' +
                            '</div>');
  });

  $("form#new-bakery").submit(function(event) {
    event.preventDefault();

    var inputtedBakeryName = $("input#new-bakery-name").val();
    var inputtedBakeryWebsite = $("input#new-bakery-website").val();
    var newBakery = new Bakery(inputtedBakeryName, inputtedBakeryWebsite);

    $(".new-cake").each(function() {
      var inputtedCake = $(this).find("input.new-cake-name").val();
      var inputtedErikScore = $(this).find("input.new-Erik-score").val();
      var inputtedMollyScore = $(this).find("input.new-Molly-score").val();
      var newCake = new Cake(inputtedCake, inputtedErikScore, inputtedMollyScore)
      newBakery.cakes.push(newCake)
    });

    $("ul#bakeries").append("<li><span class='bakery'>" + newBakery.bakeryName + "</span></li>");

    $(".bakery").last().click(function() {
      $("#show-bakery").show();
      $("#show-bakery h2").text(newBakery.bakeryName);
      $(".bakery-name").text(newBakery.bakeryName);
      $(".bakery-website").text(newBakery.website);
      $("ul#cakes").text("");
      newBakery.cakes.forEach(function(cake) {
        $("ul#cakes").append("<li>" + cake.summary() + "</li>");
      });
    });

    resetFields();
    removeDiv("additional");

  });
});
