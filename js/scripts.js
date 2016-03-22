//business logic
//function constructor to create all the bakeries//
function Bakery(bakery, website) {
  this.bakeryName = bakery;
  this.website = website;
  this.cakes = [];
}
//function constructor to create all the cakes//
function Cake(name, erikFlavor, erikTexture, mollyFlavor, mollyTexture) {
  this.name = name;
  this.erikFlavor = erikFlavor;
  this.erikTexture = erikTexture;
  this.mollyFlavor = mollyFlavor;
  this.mollyTexture= mollyTexture;
}
// prototype for Cakes that creates a summary statement of our rankings for each cake//
Cake.prototype.summary = function() {
  return this.name + ": Erik ranks " + this.erikFlavor + "/" + this.erikTexture + " and Molly ranks " + this.mollyFlavor + "/" + this.mollyTexture;
}
//function that resets all the fields on the input form//
function resetFields() {
    $("input#new-bakery-name").val("");
    $("input#new-bakery-website").val("");
    $("input.new-cake-name").val("");
    $("input.new-Erik-flavor-score").val("");
    $("input.new-Erik-texture-score").val("");
    $("input.new-Molly-flavor-score").val("");
    $("input.new-Molly-texture-score").val("");
}

// user interface logic
$(document).ready(function() {
//upon click of the "add cake" button...//
  $("#add-cake").click(function() {
    //to the new-cakes ID, add...//
    $("#new-cakes").append('<div class="new-cake">' +
                                 '<div class="form-group">' +
                                   '<label for="new-cake">Cake</label>' +
                                   '<input type="text" class="form-control new-cake">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Erik-flavor-score">Erik Flavor Score</label>' +
                                   '<input type="text" class="form-control new-Erik-flavor-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Erik Texture Score">Erik Texture Score</label>' +
                                   '<input type="text" class="form-control new-Erik-texture-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Molly-flavor-score">Molly Flavor Score</label>' +
                                   '<input type="text" class="form-control new-Molly-flavor-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-Molly Texture Score">Molly Texture Score</label>' +
                                   '<input type="text" class="form-control new-Molly-texture-score">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-bakery").submit(function(event) {
    event.preventDefault();

    var inputtedBakeryName = $("input#new-bakery-name").val();
    var inputtedBakeryWebsite = $("input#new-bakery-website").val();
    var newBakery = new Bakery(inputtedBakeryName, inputtedBakeryWebsite);

    $(".new-cake").each(function() {
      var inputtedCake = $(this).find("input.new-cake").val();
      var inputtedErikFlavorScore = $(this).find("input.new-Erik-flavor-score").val();
      var inputtedErikTextureScore = $(this).find("input.new-Erik-texture-score").val();
      var inputtedMollyFlavorScore = $(this).find("input.new-Molly-flavor-score").val();
      var inputtedMollyTextureScore = $(this).find("input.new-Molly-texture-score").val();
      var newCake = new Cake(inputtedCake, inputtedErikFlavorScore, inputtedErikTextureScore, inputtedMollyFlavorScore, inputtedMollyTextureScore);
      newBakery.cakes.push(newCake)
    });

    $("ul#bakeries").append("<li><span class='bakery'>" + newBakery + "</span></li>");

    $(".bakery").last().click(function() {
      $("#show-bakery").show();
      $("#show-bakery h2").text(newBakery);
      $(".bakery-website").text(newBakery.website);
      $("ul#cakes").text("");
      newBakery.cakes.forEach(function(cake) {
        $("ul#cakes").append("<li>" + cake.summary() + "</li>");
      });
    });

    resetFields();

  });
});
