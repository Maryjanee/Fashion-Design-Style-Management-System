function createUser() {
  $('.quote').submit(function (e) {
    e.preventDefault();
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const email = $('#emailAddress').val();
    const password = $('#password').val();
    const isAdmin = false;
    const url = $(this).attr('action');
    const user = { firstName, lastName, email, password, isAdmin };
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName.length < 1) {
      alert("Please enter your first name");
    } else if (lastName.length < 1) {
      alert("Please enter your last name");
    } else if (email.length < 1) {
      alert("Please enter your email address");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address")
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    } else {
      $.ajax({
        url: url,
        type: 'POST',
        data: user
      }).done((data) => {
        $('#sidebar').html(`
        <h2>You have successfully registered on FashionEye</h2>
        <h3>Your details are </h3>
        <b>Name: </b>${data.firstName} ${data.lastName} <br>
        <b>Email Address: </b>${data.email} <br>
         `);
        window.location.replace('../html/design.html');
      })
    }
    return false;
  })
}
