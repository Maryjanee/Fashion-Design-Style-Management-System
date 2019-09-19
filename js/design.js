$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/clothes",
    dataType: "json"
  }).done(function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      if (data.length === 0) {
        $(".py-5").html("<h2>There are currently no design collections available</h2>")
      } else {
        $(".col-10").append(`
        
        <h1 class='text-capitalize font-weight-bold'>${data[i].category}</h1>
        <p class='text-blue'>${data[i].description}</p>
        <p>${data[i].price}</p>
        <img src="${data[i].imageUrl}"/>
      `)
      }
    }
  })
})