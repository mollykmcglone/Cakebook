//business logic
function Bakery(bakery, website) {
  this.bakeryName = bakery;
  this.website = website;
  this.cakes = [];
}

function Cakes(name, erikFlavor, erikTexture, mollyFlavor, mollyTexture) {
  this.name = name;
  this.erikFlavor = erikFlavor;
  this.erikTexture = erikTexture;
  this.mollyFlavor = mollyFlavor;
  this.mollyTexture= mollyTexture;
}

Cakes.prototype.summary = function() {
  return this.name + ": Erik ranks " + this.erikFlavor + "/" + this.erikTexture + "and Molly ranks " this.mollyFlavor + "/" + this.mollyTexture;
}

function resetFields() {
    $("input#new-bakery-name").val("");
    $("input#new-bakery-website").val("");
    $("input.new-cake-name").val("");
    $("input.Erik-flavor-score").val("");
    $("input.Erik-texture-score").val("");
    $("input.Molly-flavor-score").val("");
    $("input.Molly-texture-score").val("");
}

// user interface logic
$(document).ready(function() {

  $("#add-cake").click(function() {
    $("#new-cakes").append('<div class="new-cake">' +
                                 '<div class="form-group">' +
                                   '<label for="new-cake">Cake</label>' +
                                   '<input type="text" class="form-control new-cake">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="Erik-flavor-score">Erik Flavor Score</label>' +
                                   '<input type="text" class="form-control Erik-flavor-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="Erik Texture Score">Erik Texture Score</label>' +
                                   '<input type="text" class="form-control Erik-texture-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="Molly-flavor-score">Molly Flavor Score</label>' +
                                   '<input type="text" class="form-control Molly-flavor-score">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="Molly Texture Score">Molly Texture Score</label>' +
                                   '<input type="text" class="form-control Molly-texture-score">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-bakery").submit(function(event) {
    event.preventDefault();

    var inputtedBakeryName = $("input#new-bakery-name").val();
    var inputtedBakeryWebsite = $("input#new-bakery-website").val();

    $(".new-cake").each(function() {
      var inputtedCake = $(this).find("input.new-cake").val();
      var inputtedErikFlavorScore = $(this).find("input.Erik-flavor-score").val();
      var inputtedErikTextureScore = $(this).find("input.Erik-texture-score").val();
      var inputtedMollyFlavorScore = $(this).find("input.Molly-flavor-score").val();
      var inputtedMollyTextureScore = $(this).find("input.Molly-texture-score").val();
    });

    $("ul#cakes").append("<li><span class='cake'>" + newBakery.bakeryName() + "</span></li>");

    $(".bakery").last().click(function() {
      $("#show-cakes").show();
      $("#show-cakes h2").text(newBakery.bakeryName());
      $(".last-").text(newBakery.website);
      $("ul#cakes").text("");
      newBakery.cakes.forEach(function(cake) {
        $("ul#cakes").append("<li>" + cakes.cake() + "</li>");
      });
    });

    resetFields();

  });
});
