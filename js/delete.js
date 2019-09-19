function deleteDesign() {
  $('#pValid').submit(function (e) {
    const imageURL = $('#image-url').val();
    const url = $(this).attr('action');

    if (imageURL === '') {
      alert("Image URL must not be empty");
    }
    else {
      $.get(url + `?imageUrl=${imageURL}`, (data) => {
        const gottenId = data[0].id;
        $.ajax({
          url: url + `/${gottenId}`,
          type: 'DELETE',
          success: function () {
            $('#main-wrapper').html(`
                              <h2>You have successfully deleted the design with the image URL</h2></b>${imageURL}<br>
                          `);
          }
        })
      })
    }
    return false;
  })
}