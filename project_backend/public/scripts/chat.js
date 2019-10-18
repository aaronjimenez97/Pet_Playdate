function showError(error) {
        var message = "An error occurred";
        if (error.message) {
                message = error.message;
        } else if (error.errors) {
                var errors = error.errors;
                message = "";
                Object.keys(errors).forEach(function(k) {
                        message += k + ": " + errors[k] + "\n";
                });
        }

        alert(message);
}

$(document).ready(function() {

loadComments();
addname();

    $('#comment-form').submit(function() {

        var name = $('#name').val();
        var comment = $('#comment').val();

        dpd.comments.post({
          name: name,
          comment: comment
  }, function(comment, error) {
          if (error) return showError(error);

          addComment(comment);
          $('#name').val('');
          $('#comment').val('');
  });

        return false;
    });

    function loadComments() {
        dpd.comments.get(function(comments, error) {
            $('#comments').empty();
            comments.forEach(function(comment) {
                addComment(comment);
            });
        });
    }

    function addComment(comment) {
        $('<div class="comment">')
            .append('<div class="author">Posted by: ' + comment.name + '</div>')
            .append('<p>' + comment.comment + '</p>')
            .appendTo('#comments');
    }

function addname(){
    dpd.users.me(function(user) {
      if (user) {
        $('#name').val(user.username);
      }
    });
}

});
