$(document).ready(function() {

dpd.postings.get(function(postings){
  if(postings){
    postings.forEach(function(p){
        renderPost(p);
        });
  }
});

// function renderPost(post){
//
// var $el = $('<p>');
// $el.append('Username: ' + post.username +'</p>');
// $el.append('Pet Name: ' + post.pname+'</p>');
// $el.append('Pet Type: ' + post.ptype+'</p>');
// $el.append('Monday: ' + post.monday+'</p>');
// $el.append('Tuesday: ' + post.tuesday+'</p>');
// $el.append('Wedndesday: ' + post.wednesday +'</p>');
// $el.append('Thursday: ' + post.thursday +'</p>');
// $el.append('Friday: ' + post.friday +'</p>');
// $el.append('Saturday: ' + post.saturday +'</p>');
// $el.append('Sunday: ' + post.sunday +'</p>');
// $el.append('Time Available: ' + post.timeav +'</p>');
// $el.append('Location: ' + post.mylocation +'</p>');
// $el.appendTo('#myDIV');
//
// }

function renderPost(post){

var $el = $('<p>');

  $('<div class="card">')
              // ('#myDIV').append('<img src="/animals/cat.jpg"')
              // //$('card').append('<img src="/animals/cat.jpg"')
              .append('<img src="/animals/cat.jpg" style="width:20%">')
              .append('Username: ' + post.username + ' </p>')
              .append('Pet Name: ' + post.pname+ ' </p>')
              .append('Pet Type: ' + post.ptype+ ' </p>')
              .append('Monday: ' + post.monday + ' </p>')
              .append('Tuesday: ' + post.tuesday+ ' </p>')
              .append('Wedndesday: ' + post.wednesday+ ' </p>')
              .append('Thursday: ' + post.thursday + ' </p>')
              .append('Friday: ' + post.friday  + ' </p>')
              .append('Saturday: ' + post.saturday + ' </p>')
              .append('Sunday: ' + post.sunday+ ' </p>')
              .append('Time Available: ' + post.timeav+ ' </p>')
              .append('Location: ' + post.mylocation + ' </p>')
              .appendTo('#myDIV');

}

});



// <div class="card">
//   <img src="/animals/cat.jpg" style="width:20%">
//   <p class="title">CEO & Founder, Example</p>
//   <p class = "days">Harvard University</p>
// </div>
