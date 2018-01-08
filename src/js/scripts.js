$(function () {
    "use strict"; // Start of use strict

    /**
     * Defer youtube loading
     */
    function lazyLoadIframes() {
        var vidDefer = document.getElementsByTagName('iframe');
        console.log(vidDefer)
        for (var i = 0; i < vidDefer.length; i++) {
            if (vidDefer[i].getAttribute('data-src')) {
                vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
            }
        }
    }

    lazyLoadIframes();

    console.log(ScrollReveal)

    //scroll-reveal
    window.sr = ScrollReveal({reset: true});
    sr.reveal('.section-heading', {mobile: false});
    sr.reveal('.section-headingwithsub', {mobile: false});
    sr.reveal('.section-subheading', {mobile: false});
    sr.reveal('.from-left', {origin: 'left', distance: '300px', duration: 1000, delay: 3, mobile: false});
    sr.reveal('.from-right', {origin: 'right', distance: '300px', duration: 1000, delay: 3, mobile: false});
    sr.reveal('.col-heading', {mobile: false});
    sr.reveal('.fas', {mobile: false});
    sr.reveal('.fab', {mobile: false});
    sr.reveal('.rounded-circle', {mobile: false});
    sr.reveal('.team-member-description', {mobile: false});

    //mailchimp
    $('.mailchimp-form').submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            type: 'GET',
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'jsonp',
            jsonp: 'c', // trigger MailChimp to return a JSONP response
            contentType: 'application/json; charset=utf-8',
            error: function (error) {
                // According to jquery docs, this is never called for cross-domain JSONP requests
            },
            success: function (data) {
                var message = "";
                if (data.result != 'success') {
                    message = data.msg || 'Sorry. Unable to subscribe. Please try again later.';
                    if (data.msg && data.msg.indexOf('already subscribed') >= 0) {
                        message = 'You\'re already subscribed. Thank you.';
                    }
                } else {
                    $form.find('input[type=email]').val('');
                    message = 'Thanks for signing up. Please check your inbox for a confirmation email.';
                }
                $('.news-thanks-message').append('<p>' + message + '</p>');
                $('.news-thanks-message').show();
                setTimeout(function () {
                    $('.news-thanks-message').hide();
                    $('.news-thanks-message').empty();
                }, 4000);
            }
        });
    });

    //jq form plugin
    $('#formContact').ajaxForm({
        success: function () {
            $('#formContact input[type=email], #formContact input[type=text], #formContact select, #formContact textarea').val('');
            $('.form-thanks-message').show();
            setTimeout(function () {
                $('.form-thanks-message').hide();
            }, 4000);
        }
    });

    /*Functionalities below based on script from Agency Start Bootstrap Template*/
    /*!
    * Start Bootstrap - Agency v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2017 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);



}); // End of use strict
