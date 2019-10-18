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
$el.append('Monday: ' + post.monday+'</p>');
$el.append('Tuesday: ' + post.tuesday+'</p>');
$el.append('Wedndesday: ' + post.wednesday +'</p>');
$el.append('Thursday: ' + post.thursday +'</p>');
$el.append('Friday: ' + post.friday +'</p>');
$el.append('Saturday: ' + post.saturday +'</p>');
$el.append('Sunday: ' + post.sunday +'</p>');
$el.append('Time Available: ' + post.timeav +'</p>');
$el.append('Location: ' + post.mylocation +'</p>');
$el.appendTo('#myDIV');

}


});
