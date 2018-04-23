$(document).ready(function() {

var horoscopeDataTrial = {
    "horoscope": "Be receptive to advice from the savvy sisterhood.",
    "date": "Thursday, February 1, 2018",
    "sign": "scorpio"
  };

  function displaySign(responseObject) {
    var sign = responseObject.sign;
    var paragraph = $("<p>" + sign + "</p>");
    var dailyHoroscope = $('.horoscope-of-the-day');

        return paragraph.insertBefore(dailyHoroscope);


  };

  $('form').on('submit', function(event) {
    event.preventDefault();
    displaySign(horoscopeDataTrial);
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
})

$('.search-results').on('click', function() {
  $(this).fadeOut(1000);
  $('form').show(2000);
});

$('#submit-again-button').on('click', function() {
  $('#actual-horoscope').replaceWith();
});

$('#home-button').on('click', function() {
  location.reload();
});

console.log("Is this thing on?");


});

var horoscopeData = [
  aquarius = {
    sign: "Aquarius",
    date: "january 20-february 18",
    horoscope: "$getrequest coming later"
  },
  pisces = {
    sign: "Pisces",
    date: "february 19-march 20",
    horoscope: "$getrequest coming later"
  },
  aries = {
    sign: "Aries",
    date: "march 21-april 19",
    horoscope: "$getrequest coming later"
  },
  taurus = {
    sign: "Taurus",
    date: "april 20-may 20",
    horoscope: "$getrequest coming later"
  },
  gemini = {
    sign: "Gemini",
    date: "may 21-june 20",
    horoscope: "$getrequest coming later"
  },
  cancer = {
    sign: "Cancer",
    date: "june 21-july 22",
    horoscope: "$getrequest coming later"
  },
  leo = {
    sign: "Leo",
    date: "july 23-august 22",
    horoscope: "$getrequest coming later"
  },
virgo = {
    sign: "Aquarius",
    date: "august 23-september 22",
    horoscope: "$getrequest coming later"
  },
  libra = {
    sign: "Libra",
    date: "september 23-october 22",
    horoscope: "$getrequest coming later"
  },
  scorpio = {
    sign: "Scorpio",
    date: "october 23-november 21",
    horoscope: "$getrequest coming later"
  },
  sagittarius = {
    sign: "Sagittarius",
    date: "november 22-december 21",
    horoscope: "$getrequest coming later"
  },
  capricorn = {
    sign: "Capricorn",
    date: "december 22-january 19",
    horoscope: "$getrequest coming later"
  }
];
