function totalMinutes() {
  $('.minutes .total').click(function() {
    var hours = $('.minutes input[name="hours"]').val();
    var minutes = $('.minutes input[name="minutes"]').val();
    var total = (parseFloat(hours) * 60) + parseFloat(minutes)
    $('.minutes input[name="total"]').val(total);
  });
}

function totalHours() {
  $('.hours .total').click(function() {
    var hours = $('.hours input[name="hours"]').val();
    var minutes = $('.hours input[name="minutes"]').val();
    var total = parseFloat(hours) + parseFloat((minutes / 60));
    $('.hours input[name="total"]').val(total);
  });
}

function timeSinceNow() {

  var now = new Date();
  var nowHours = now.getHours() % 12;
  var nowMinutes = now.getMinutes();
  if (nowMinutes < 10) {
    nowMinutes = "0" + nowMinutes;
  }
  $('.time h2[name="now"]').text(nowHours + ":" + nowMinutes);

  $('.time .total').click(function() {

    var hours = $('.time input[name="hours"]').val();
    var addHours = parseFloat(hours) + parseFloat(nowHours);
    var minutes = $('.time input[name="minutes"]').val();
    var addMinutes = parseFloat(minutes) + parseFloat(nowMinutes);
    if (hours == '') {
      addHours = nowHours;
    }
    if (minutes == '') {
      addMinutes = nowMinutes;
    }
    if (addMinutes >= 60) {
      var newHours = ((minutes / 60));
      if (newHours > 1) {
        addMinutes = addMinutes % 60 + newHours * (newHours % 1);
        addMinutes = Math.floor(addMinutes);
        addHours = addHours + Math.floor(newHours);
      } else {
        addMinutes = addMinutes % 60 + newHours * (newHours % 1);
        addMinutes = Math.floor(addMinutes);
        addHours = addHours + 1;
      }
    }
    if (addHours > 12) {
      addHours = addHours % 12;
      if (addHours == 0) {
        addHours = 12;
      }
    }
    if (addMinutes < 10 ) {
      addMinutes = "0" + addMinutes;
    }
    var total = addHours + ":" + addMinutes;
    $('.time input[name="then"]').val(total);
  });

  $('.time .update').click(function() {
    now = new Date();
    nowHours = now.getHours() % 12;
    nowMinutes = now.getMinutes();
    if (nowMinutes < 10) {
      nowMinutes = "0" + nowMinutes;
    }
    $('.time h2[name="now"]').text(nowHours + ":" + nowMinutes);
  });
  
    $('.time .select').click(function() {   
    nowHours = $('.time select[name="opt-hours"]').val(); 
    nowHours = nowHours % 12;
    nowMinutes = $('.time select[name="opt-minutes"]').val();  
    if(nowMinutes < 10) {
      nowMinutes = $('.time select[name="opt-minutes"]').val().substring(0,1);
    }
    var selectMinutes = $('.time select[name="opt-minutes"]').val();
    $('.time h2[name="now"]').text(nowHours + ":" + selectMinutes);
  });

}

$(document).ready(function() {
  timeSinceNow();
});