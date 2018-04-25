$(document).ready(function() {

  $('form').on('click', function() {
$.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', function(data) {
  console.log(data);
})});



var horoscopeDataTrial = {
    "horoscope": "Be receptive to advice from the savvy sisterhood.",
    "date": "Thursday, February 1, 2018",
    "sign": "scorpio"
  };

  var horoscopeData = {
    "aquarius": {
      "sign": "Aquarius",
      "date": [
        "01-20",
        "01-21",
        "01-22",
        "01-23",
        "01-24",
        "01-25",
        "01-26",
        "01-27",
        "01-28",
        "01-29",
        "01-30",
        "01-31",
        "02-01",
        "02-02",
        "02-03",
        "02-04",
        "02-05",
        "02-06",
        "02-07",
        "02-08",
        "02-09",
        "02-10",
        "02-11",
        "02-12",
        "02-13",
        "02-14",
        "02-15",
        "02-16",
        "02-17",
        "02-18"
      ],
      "horoscope": "$getrequest coming later"
    },
    "pisces": {
      "sign": "Pisces",
      "date": [
        "02-19",
        "02-20",
        "02-21",
        "02-22",
        "02-23",
        "02-24",
        "02-25",
        "02-26",
        "02-27",
        "02-28",
        "02-29",
        "03-01",
        "03-02",
        "03-03",
        "03-04",
        "03-05",
        "03-06",
        "03-07",
        "03-08",
        "03-09",
        "03-10",
        "03-11",
        "03-12",
        "03-13",
        "03-14",
        "03-15",
        "03-16",
        "03-17",
        "03-18",
        "03-19",
        "03-20"
      ],
      "horoscope": "$getrequest coming later"
    },
    "aries": {
      "sign": "Aries",
      "date": [
        "03-21",
        "03-22",
        "03-23",
        "03-24",
        "03-25",
        "03-26",
        "03-27",
        "03-28",
        "03-29",
        "03-30",
        "03-31",
        "04-01",
        "04-02",
        "04-03",
        "04-04",
        "04-05",
        "04-06",
        "04-07",
        "04-08",
        "04-09",
        "04-10",
        "04-11",
        "04-12",
        "04-13",
        "04-14",
        "04-15",
        "04-16",
        "04-17",
        "04-18",
        "04-19"
      ],
      "horoscope": "$getrequest coming later"
    },
    "taurus": {
      "sign": "Taurus",
      "date": [
        "04-20",
        "04-21",
        "04-22",
        "04-23",
        "04-24",
        "04-25",
        "04-26",
        "04-27",
        "04-28",
        "04-29",
        "04-30",
        "05-01",
        "05-02",
        "05-03",
        "05-04",
        "05-05",
        "05-06",
        "05-07",
        "05-08",
        "05-09",
        "05-10",
        "05-11",
        "05-12",
        "05-13",
        "05-14",
        "05-15",
        "05-16",
        "05-17",
        "05-18",
        "05-19",
        "05-20"
      ],
      "horoscope": "$getrequest coming later"
    },
    "gemini": {
      "sign": "Gemini",
      "date": [
        "05-21",
        "05-22",
        "05-23",
        "05-24",
        "05-25",
        "05-26",
        "05-27",
        "05-28",
        "05-29",
        "05-30",
        "05-31",
        "06-01",
        "06-02",
        "06-03",
        "06-04",
        "06-05",
        "06-06",
        "06-07",
        "06-08",
        "06-09",
        "06-10",
        "06-11",
        "06-12",
        "06-13",
        "06-14",
        "06-15",
        "06-16",
        "06-17",
        "06-18",
        "06-19",
        "06-20"
      ],
      "horoscope": "$getrequest coming later"
    },
    "cancer": {
      "sign": "Cancer",
      "date": [
        "06-21",
        "06-22",
        "06-23",
        "06-24",
        "06-25",
        "06-26",
        "06-27",
        "06-28",
        "06-29",
        "06-30",
        "07-01",
        "07-02",
        "07-03",
        "07-04",
        "07-05",
        "07-06",
        "07-07",
        "07-08",
        "07-09",
        "07-10",
        "07-11",
        "07-12",
        "07-13",
        "07-14",
        "07-15",
        "07-16",
        "07-17",
        "07-18",
        "07-19",
        "07-20",
        "07-21",
        "07-22"
      ],
      "horoscope": "$getrequest coming later"
    },
    "leo": {
      "sign": "Leo",
      "date": [
        "07-23",
        "07-24",
        "07-25",
        "07-26",
        "07-27",
        "07-28",
        "07-29",
        "07-30",
        "07-31",
        "08-01",
        "08-02",
        "08-03",
        "08-04",
        "08-05",
        "08-06",
        "08-07",
        "08-08",
        "08-09",
        "08-10",
        "08-11",
        "08-12",
        "08-13",
        "08-14",
        "08-15",
        "08-16",
        "08-17",
        "08-18",
        "08-19",
        "08-20",
        "08-21",
        "08-22"
      ],
      "horoscope": "$getrequest coming later"
    },
    "virgo": {
      "sign": "Aquarius",
      "date": [
        "08-23",
        "08-24",
        "08-25",
        "08-26",
        "08-27",
        "08-28",
        "08-29",
        "08-30",
        "08-31",
        "09-01",
        "09-02",
        "09-03",
        "09-04",
        "09-05",
        "09-06",
        "09-07",
        "09-08",
        "09-09",
        "09-10",
        "09-11",
        "09-12",
        "09-13",
        "09-14",
        "09-15",
        "09-16",
        "09-17",
        "09-18",
        "09-19",
        "09-20",
        "09-21",
        "09-22"
      ],
      "horoscope": "$getrequest coming later"
    },
    "libra": {
      "sign": "Libra",
      "date": [
        "09-23",
        "09-24",
        "09-25",
        "09-26",
        "09-27",
        "09-28",
        "09-29",
        "09-30",
        "10-01",
        "10-02",
        "10-03",
        "10-04",
        "10-05",
        "10-06",
        "10-07",
        "10-08",
        "10-09",
        "10-10",
        "10-11",
        "10-12",
        "10-13",
        "10-14",
        "10-15",
        "10-16",
        "10-17",
        "10-18",
        "10-19",
        "10-20",
        "10-21",
        "10-22"
      ],
      "horoscope": "$getrequest coming later"
    },
    "scorpio": {
      "sign": "Scorpio",
      "date": [
        "10-23",
        "10-24",
        "10-25",
        "10-26",
        "10-27",
        "10-28",
        "10-29",
        "10-30",
        "10-31",
        "11-01",
        "11-02",
        "11-03",
        "11-04",
        "11-05",
        "11-06",
        "11-07",
        "11-08",
        "11-09",
        "11-10",
        "11-11",
        "11-12",
        "11-13",
        "11-14",
        "11-15",
        "11-16",
        "11-17",
        "11-18",
        "11-19",
        "11-20",
        "11-21"
      ],
      "horoscope": "$getrequest coming later"
    },
    "sagittarius": {
      "sign": "Sagittarius",
      "date": [
        "11-22",
        "11-23",
        "11-24",
        "11-25",
        "11-26",
        "11-27",
        "11-28",
        "11-29",
        "11-30",
        "12-01",
        "12-02",
        "12-03",
        "12-04",
        "12-05",
        "12-06",
        "12-07",
        "12-08",
        "12-09",
        "12-10",
        "12-11",
        "12-12",
        "12-13",
        "12-14",
        "12-15",
        "12-16",
        "12-17",
        "12-18",
        "12-19",
        "12-20",
        "12-21"
      ],
      "horoscope": "$getrequest coming later"
    },
    "capricorn": {
      "sign": "Capricorn",
      "date": [
        "12-22",
        "12-23",
        "12-24",
        "12-25",
        "12-26",
        "12-27",
        "12-28",
        "12-29",
        "12-30",
        "12-31",
        "01-01",
        "01-02",
        "01-03",
        "01-04",
        "01-05",
        "01-06",
        "01-07",
        "01-08",
        "01-09",
        "01-10",
        "01-11",
        "01-12",
        "01-13",
        "01-14",
        "01-15",
        "01-16",
        "01-17",
        "01-18",
        "01-19"
      ],
      "horoscope": "$getrequest coming later"
    }
  };


// this is generally what I want to say, but I'm not totally sure how to say it
// since the responseObject is declared later?

// also, should I include an error option in the var data, or is that done
// separately through, for exmple, an "else" statement where the data is false?

// basically want a loop to check if the data entered in form is equal to any of
// the dates that have been laid out in var horoscopeData. if it is, it would
// pull the rest of the data from that same object (ie, enter 11-20, "scorpio" and
// the consequential horoscope would be shown on the screen). if it doesn't match,
// the signTitle and signHoroscope would change to a message saying to try again




// var responseObject = "form_submit_not_totally_sure"
//
//
//   if (responseObject != [i]) {
//     return false;
//   } if (responseObject === [i] {
//     return true;
//   })


  function displaySignTitle(responseObject) {
    var sign = responseObject.sign;
    var title = $("<article>" + sign + "</article>");
    var dailyHoroscope = $('.horoscope-of-the-day');

        return title.insertBefore(dailyHoroscope);
  };

  function displaySignHoroscope(responseObject) {
    var signHoroscope = responseObject.horoscope;
    var paragraph = $("<p>" + signHoroscope + "</p>");
    var dailyHoroscope = $('.horoscope-of-the-day');

        return paragraph.insertAfter(dailyHoroscope);
  };


  $('form').on('submit', function(event) {
    event.preventDefault();
    displaySignTitle(horoscopeDataTrial);
    displaySignHoroscope(horoscopeDataTrial);
  });

$('#aquarius').on('click', function(event) {
  event.preventDefault();
  var responseObject = horoscopeData.aquarius;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#pisces').on('click', function() {

  var responseObject = horoscopeData.pisces;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#aries').on('click', function() {

  var responseObject = horoscopeData.aries;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#taurus').on('click', function() {

  var responseObject = horoscopeData.taurus;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#gemini').on('click', function() {

  var responseObject = horoscopeData.gemini;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#cancer').on('click', function() {

  var responseObject = horoscopeData.cancer;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#leo').on('click', function() {

  var responseObject = horoscopeData.leo;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#virgo').on('click', function() {

  var responseObject = horoscopeData.virgo;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#libra').on('click', function() {

  var responseObject = horoscopeData.libra;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#scorpio').on('click', function() {

  var responseObject = horoscopeData.scorpio;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#sagittarius').on('click', function() {

  var responseObject = horoscopeData.sagittarius;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('#capricorn').on('click', function() {

  var responseObject = horoscopeData.capricorn;

  displaySignTitle(responseObject);
  displaySignHoroscope(responseObject);
});

$('form').on('submit', function(event) {
  event.preventDefault();
});

$('h1').mouseenter(function() {
  $('h1').css('color', '#997034');
  $('em').css('color', '#688082');
});

$('h1').mouseleave(function() {
  $('h1').css('color', '#688082');
  $('em').css('color', '#997034');
});

$('h1').on('click', function() {
  $('b').css('color', '#F9F1E5');
  });

$('button').on('click', function() {
  $(this).css('padding', '8px');
});

$('form').on('submit', function() {
  $('.your-daily-horoscope', '#submit-again-button').addClass('active');
  $('.horoscope-options').fadeOut(1000);
  $('#submit-button').fadeOut(500);
  $('#submit-again-button').delay(500).fadeIn(600);
  $('.your-daily-horoscope').show(3000);
});

$('.box').on('click', function() {
  $('.your-daily-horoscope', '#submit-again-button').addClass('active');
  $('.horoscope-options').fadeOut(1000);
  $('#submit-button').fadeOut(500);
  $('#submit-again-button').delay(500).fadeIn(600);
  $('.your-daily-horoscope').show(3000);
});

$('.search-results').on('click', function() {
  $(this).fadeOut(1000);
  $('form').show(2000);
});

// $('#submit-again-button').on('click', function() {
//   $('#actual-horoscope').replaceWith();
// });

$('#home-button').on('click', function() {
  location.reload();
});

console.log("Is this thing on?");

});


