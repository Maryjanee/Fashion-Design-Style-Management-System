$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/clothes",
    dataType: "json"
  }).done(function (data) {
    // alert(data.length)
    for (let i = 0; i < data.length; i++) {
      if (data.length === 0) {
        $(".py-5").html("<h2>There are currently no design collections available</h2>")
      } else {
        $("#myRow").append(`
        <div class="col-4 mt-5 mb-5">
        <img class="design image" src="../img/4th.jpg"/>
        <h1 class='text-capitalize font-weight-bold'>${data[i].category}</h1>
        <p class='text-blue'>${data[i].description}</p>
        <p>${data[i].price}</p>
        </div>
      `)
      }
    }
  })


  $('#search-form').submit(function (e) {
    e.preventDefault();
    const id = $("#search-field").val();
    $.ajax({
      type: "GET",
      url: `http://localhost:3000/clothes/${id}`,
      dataType: "json"
    }).done(function (data) {
      $("#myRow").hide();
      $("#Row").append(`
        <div class="col-4 mt-5 mb-5">
        <img class="design image" src="../img/4th.jpg"/>
        <h1 class='text-capitalize font-weight-bold'>${data.category}</h1>
        <p class='text-blue'>${data.description}</p>
        <p>${data.price}</p>
        </div>
      `)
    }
    )
  })


})