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
        $("#maryjane").append(`
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

  function clickSearch(e) {

  }
})