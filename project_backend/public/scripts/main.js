$(document).ready(function() {

dpd.postings.get(function(postings){
  if(postings){
    postings.forEach(function(p){
        renderPost(p);
        });
  }
});

function renderPost(post){
var $el = $('<p>');
$el.append('Username: ' + post.username +'</p>');
$el.append('Pet Name: ' + post.pname+'</p>');
$el.append('Pet Type: ' + post.ptype+'</p>');
$el.append(post.monday+'</p>');
$el.append(post.tuesday+'</p>');
$el.append(post.wednesday +'</p>');
$el.append(post.thursday +'</p>');
$el.append(post.friday +'</p>');
$el.append(post.saturday +'</p>');
$el.append(post.sunday +'</p>');
$el.append('Time Available: ' + post.timeav +'</p>');
$el.append('Location: ' + post.mylocation +'</p>');
$el.appendTo('#myDIV');

}


});
