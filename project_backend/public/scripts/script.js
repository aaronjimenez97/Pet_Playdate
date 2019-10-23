$(document).ready(function() {

  // $('#comment-form').submit(function() {
  //     //Get the data from the form
  //     var name = $('#name').val();
  //     var comment = $('#comment').val();
  //
  //     //Clear the form elements
  //     $('#name').val('');
  //     $('#comment').val('');
  //
  //     addComment({
  //         name: name,
  //         comment: comment
  //     });
  //
  //     return false;
  // });
  //
  // function addComment(comment) {
  //     $('<div class="comment">')
  //         .append('<div class="author">Posted by: ' + comment.name + '</div>')
  //         .append('<p>' + comment.comment + '</p>')
  //         .appendTo('#comments');
  // }

  $('#register-form').submit(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();

    var confirmPassword = $('#confirm-password').val();
    if (!username) {
      alert("Username is required");
    } else if (!password) {
      alert("Password is required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dpd.users.post({
        username: username,
        password: password,
        fname: fname,
        lname: lname,
        email: email
      }, function(user, error) {
        if (error) {
          alert(JSON.stringify(error));
        } else {
          location.href = "/index.html";
        }
      });
    }
    return false;
  });

});
