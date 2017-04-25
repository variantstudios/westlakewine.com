$(document).ready(function() {

    $('.my-slider').unslider({
        animateHeight: true,
        autoplay: true,
    });
    // Modernizer Code
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };

    if (window.location.host === "app.cloudcannon.com") {
      $('body').addClass('admin');
    }
    else {
        $('body').addClass('not-admin');
    }

    $('a.hours-link').click(function() {
      $( "body" ).toggleClass('hours-open');
    });

    $('.close-section').click(function() {
      $( "body" ).removeClass('hours-open');
    });



    $('.navigation-wrap nav').addClass('hide');

    $(".menu-btn").click(function() {
        $(".navigation-wrap nav").toggleClass('hide');
        $(".menu-btn").toggleClass('close');
    });



    var openTime = moment('08:30am', 'HH:mma');
    var closeTime = moment('10:30pm', 'h:mma');
    var openTime2 = moment('08:30am', 'h:mma');
    var closeTime2 = moment('11:30pm', 'h:mma');
    var openTime3 = moment('10:00am', 'h:mma');
    var closeTime3 = moment('06:00pm', 'h:mma');

    var monday = moment().isoWeekday(1);
    var tuesday = moment().isoWeekday(2);
    var wednesday = moment().isoWeekday(3);
    var thursday = moment().isoWeekday(4);
    var friday = moment().isoWeekday(5);
    var saturday = moment().isoWeekday(6);
    var sunday = moment().isoWeekday(7);
    var now = moment();
    var today = moment().startOf('day'); 

    if (today.startOf('day').isSame(monday.startOf('day'))) { 
      if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime.format('LT'));
        }
    }

    if (today.startOf('day').isSame(tuesday.startOf('day'))) { 
     if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime.format('LT'));
        }
    }

    if (today.startOf('day').isSame(wednesday.startOf('day'))) { 
     if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime.format('LT'));
        }
    }

    if (today.startOf('day').isSame(thursday.startOf('day'))) { 
     if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime2.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime.format('LT'));
        }
    }

    if (today.startOf('day').isSame(friday.startOf('day'))) { 
     if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime2.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime2.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime2.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime2.format('LT'));
        }
    }

    if (today.startOf('day').isSame(saturday.startOf('day'))) { 
     if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime3.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime2.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime2.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime2.format('LT'));
        }
    }

    if (today.startOf('day').isSame(sunday.startOf('day'))) { 
      if (now > closeTime) {
           $('.open-close').append("<span>Closed</span>");
           $('.open-close').addClass('were-closed');
           $('.hours-today').prepend("<span class='opening-at'>We Open Tomorrow at: </span>");
            $('.site-header .hours-today').append(openTime.format('LT'));
        } 
        else if (now < openTime){
            $('.open-close').append('Closed');
            $('.hours-today').append("<span class='opening-at'>We Open at: </span>");
            $('.site-header .hours-today').append(openTime3.format('LT'));
            $('.open-close').addClass('were-closed');
        }
        else {
           $('.open-close').append('Open');
           $('.open-close').addClass('were-open');
           $('.site-header .hours-today').append(openTime3.format('LT'));
           $('.site-header .hours-today').append(' - ');
           $('.site-header .hours-today').append(closeTime3.format('LT'));
        }
    }


    // WEBFORM MESSAGE
    if ($('body.form').length > 0) {
    if (queryString() == "true") {
        $('#form-message').css("display","block");
        $("html, body").delay(0).animate({scrollTop: $('#form-message').offset().top }, 2000);
        $('#form-message').hide(0).delay(300).fadeIn(2000);
    }
    }
    function queryString() {
    var queryString = window.location.search;
    var varArray = queryString.split("&");
    for (var i = 0; i < varArray.length; i++) {
        var param = varArray[i].split("=");
        //console.log('param', param[1]);
        return param[1];
    }
    }


});