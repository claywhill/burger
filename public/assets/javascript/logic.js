$("#create-burger").on("submit", function (event) {
  event.preventDefault();
  var newBurger = {
    name: $("#create-burger [name=name]").val().trim(),
  };
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("Created New Burger");
    location.reload();
  })
})
$(".change-devoured").on("click", function (event) {
  var id = $(this).data("id");
  var ate = $(this).data("newdevoured");
  var devouredState = {
    devoured: ate,
  };

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState,
  }).then(function () {
    console.log("Changed Devoured to true ", ate);
    location.reload();
  })
})

$(".delete-burger").on("click", function (event) {
  var id = $(this).data("id");
  $.ajax("/api/burgers/" + id, {
    type: "DELETE",
  }).then(function () {
    console.log("Deleted Burger: ", id);
    location.reload();
  })
})
