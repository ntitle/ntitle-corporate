(function ($) {
    $(function () {
        'use strict'; // Start of use strict

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Show cookie
        const cookieAccepted = getCookie('cookie_accepted') === 'true';

        if (cookieAccepted) {
            $('.cookie-bar').remove();
        } else {
            $('.cookie-bar').show();
        }
        // Accept cookie

        $('.js-accept-cookie').on('click', function () {
            document.cookie = 'cookie_accepted=true;domain=.ntitle.network';

            $('.cookie-bar').remove();
        });

        // scroll-reveal
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.section-heading', { mobile: false });
        sr.reveal('.section-headingwithsub', { mobile: false });
        sr.reveal('.section-subheading', { mobile: false });
        sr.reveal('.from-left', {
            origin: 'left',
            distance: '300px',
            duration: 1000,
            delay: 3,
            mobile: false
        });
        sr.reveal('.from-right', {
            origin: 'right',
            distance: '300px',
            duration: 1000,
            delay: 3,
            mobile: false
        });
        sr.reveal('.col-heading', { mobile: false });
        sr.reveal('.fas', { mobile: false });
        sr.reveal('.fab', { mobile: false });
        sr.reveal('.rounded-circle', { mobile: false });
        sr.reveal('.team-member-description', { mobile: false });

        // mailchimp
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
                error: function (err) {
                    // According to jquery docs, this is never called for cross-domain JSONP requests
                },
                success: function (data) {
                    let message = '';
                    if (data.result !== 'success') {
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

        // jq form plugin
        $('#formContact').submit({
            success: function () {
                $('#formContact input[type=email], #formContact input[type=text], #formContact select, #formContact textarea').val('');
                $('.form-thanks-message').show();
                setTimeout(function () {
                    $('.form-thanks-message').hide();
                }, 4000);
            }
        });

        /* Functionalities below based on script from Agency Start Bootstrap Template */
        /* !
        *  Start Bootstrap - Agency v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/agency)
        *  Copyright 2013-2017 Start Bootstrap
        *  Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
        */

        // Smooth scrolling using jQuery easing
        $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 48)
                    }, 1000, 'easeInOutExpo');
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
        let navbarCollapse = function () {
            if ($('#mainNav').offset().top > 100) {
                $('#mainNav').addClass('navbar-shrink');
            } else {
                $('#mainNav').removeClass('navbar-shrink');
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

        (function (o, l, a, r, k, y) {
            if (o.olark) return;
            r = 'script';
            y = l.createElement(r);
            r = l.getElementsByTagName(r)[0];
            y.async = 1;
            y.src = '//' + a;
            r.parentNode.insertBefore(y, r);
            y = o.olark = function () {
                k.s.push(arguments);
                k.t.push(+new Date)
            };
            y.extend = function (i, j) {
                y('extend', i, j)
            };
            y.identify = function (i) {
                y('identify', k.i = i)
            };
            y.configure = function (i, j) {
                y('configure', i, j);
                k.c[i] = j
            };
            k = y._ = { s: [], t: [+new Date], c: {}, l: a };
        })(window, document, 'static.olark.com/jsclient/loader.js');
        /* custom configuration goes here (www.olark.com/documentation) */
        olark.identify('6726-310-10-1482');


        // DApp video section
        // Logic: when you click on the play button the videos get played after eachother
        // At the last video play button comes back to replay
        $('#DAppGameDevVideo').get(0).pause();
        $('#DAppGamerVideo').get(0).pause();
        $('#DAppInfluencerVideo').get(0).pause();

        $('#VideoPlayBtn').click(()=>{
            $('#VideoPlayBtn').hide();
            $('#DAppGameDevVideoShade').hide();
            // Play first video
            $('#DAppGameDevVideo').get(0).play();
            // If first video ends
            $('#DAppGameDevVideo').on('ended',function(){
                $('#DAppGameDevVideoShade').show();
                // Play second video
                $('#DAppGamerVideoShade').hide();
                $('#DAppGamerVideo').get(0).play();
                // If second video ends
                $('#DAppGamerVideo').on('ended',function(){
                    $('#DAppGamerVideoShade').show();
                    // Play third video
                    $('#DAppInfluencerVideoShade').hide();
                    $('#DAppInfluencerVideo').get(0).play();
                    // If third video ends
                    $('#DAppInfluencerVideo').on('ended',function(){
                        $('#DAppInfluencerVideoShade').show();
                        // Show play btn
                        $('#VideoPlayBtn').show();
                    });
                });
            });
        });

        

        // Swiper carousels
        // Section News Small
        var SectionNewsSmallSwiper = new Swiper ('.section-news-small__carousel', {
            loop: false,
            slidesPerView: 7,
            autoplay: true,
            speed: 1000,
            spaceBetween: 20,
            // centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            simulateTouch: false
        })

        // Section News
        var SectionNewsSwiper = new Swiper ('.section-news__carousel', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            autoplay: false,
            speed: 1000,
            spaceBetween: 20,
            breakpoints: {
                767: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                992: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20
                },
                // when window width is <= 640px
                1600: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20
                }
            },
            pagination: {
                el: '.news-swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.news-next',
                prevEl: '.news-prev',
            },
            simulateTouch: false
        })

        // Section Events
        var SectionEventsSwiper = new Swiper ('.section-events__carousel', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            autoplay: false,
            speed: 1000,
            spaceBetween: 20,
            breakpoints: {
                767: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                992: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20
                },
                // when window width is <= 640px
                1600: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20
                }
            },
            pagination: {
                el: '.events-swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.events-next',
                prevEl: '.events-prev',
            },
            simulateTouch: false
        })

    }); // End of use strict
})(window.jQuery);
