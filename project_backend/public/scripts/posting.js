$(document).ready(function() {


  $('#pet-form').submit(function() {
    var username = $('#username').val();
    var pname = $('#pname').val();
    var ptype = $('#ptype').val();
    var monday = $('#monday').is(":checked");
    var tuesday = $('#tuesday').is(":checked");
    var wednesday = $('#wednesday').is(":checked");
    var thursday = $('#thursday').is(":checked");
    var friday = $('#friday').is(":checked");
    var saturday = $('#saturday').is(":checked");
    var sunday = $('#sunday').is(":checked");
    var timeav = $('#timeav').val();
    var mylocation = $('#mylocation').val();



    //     dpd.postings.post({username: username, pname: pname, ptype: petType, monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday, time: timeav, mylocation: location }, function(user, error) {
    //       if (error) {
    //         alert(JSON.stringify(error));
    //       } else {
    //         location.href = "/main.html";
    //       }
    //     });
    //
    //   return false;
    // });
    dpd.postings.post({
      username: username,
      pname: pname,
      ptype: ptype,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
      timeav: timeav,
      mylocation: mylocation
    }, function(user, error) {
      if (error) {
        alert(JSON.stringify(error));
      } else {
        location.href = "/index.html";
      }
    });
  });

  return false;
});
