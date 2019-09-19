function createDesign() {
  $('#pValid').submit(function (e) {
    e.preventDefault();
    const category = $('#category').val();
    const size = $('#size').val();
    const description = $('#description').val();
    const price = $('#price').val();
    const imageUrl = $('#image-url').val();
    const designValues = { category, size, description, price, imageUrl }
    const url = $(this).attr('action');

    if (category === '') {
      alert("Please enter the category");
    }
    if (size === '') {
      alert("Please enter the size of the cloth");
    }
    if (description === '') {
      alert("Description is required");
    }
    if (price === '') {
      alert("Price must not be empty");
    }
    if (imageUrl === '') {
      alert("Image URL must be provided");
    }
    else {
      $.ajax({
        url: url,
        type: 'POST',
        data: designValues,
        success: function (data) {
          $('#main-wrapper').html(`
                  <h2>You have successfully created a design</h2>
                  <h3>Your design details are </h3>
                  <b>Design ID: </b>${data.id}<br>
                  <b>Category: </b>${data.category} <br>
                  <b>Size: </b>${data.size} <br>
                  <b>Description: </b>${data.description} <br>
                  <b>Price: </b>${data.price} <br>
                  <b>Image: </b>${data.imageUrl} <br>
                   `);
        }
      })
    }
    return false;
  })
}