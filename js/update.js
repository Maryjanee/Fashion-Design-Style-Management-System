function updateDesign() {
  $('#pValid').submit(function (e) {
    e.preventDefault();
    const imageUrl = $('#image-url').val();
    const price = $('#price').val();
    const url = $(this).attr('action');

    if (price === '') {
      alert("Please enter the new price of your design");
    }
    if (imageUrl === '') {
      alert("Please enter the image url of the design to be updated");
    }
    else {
      $.get(url + `/?imageUrl=${imageUrl}`, (data) => {
        const gottenId = data[0].id;
        const ctgry = data[0].category;
        const desSize = data[0].size;
        const dscrptn = data[0].description;
        const newPrice = price;
        const imgUrl = data[0].imageUrl;
        $.ajax({
          url: url + `/${gottenId}`,
          type: 'PUT',
          data: {
            category: ctgry,
            description: desSize,
            description: dscrptn,
            price: newPrice,
            imageUrl: imgUrl
          },
          success: function () {
            $('#main-wrapper').html(`
                              <h2>You have successfully updated the price of your design</h2>
                              <h3>Your design details are </h3>
                              <b>Design Category: </b>${ctgry}<br>
                              <b>Design Size: </b>${desSize} <br>
                              <b>Description: </b>${dscrptn} <br>
                              <b>New Price: </b>${newPrice} <br>
                              <b>Image URL: </b>${imgUrl} <br>
                          `);
          }
        })
      })
    }
    return false;
  })
}