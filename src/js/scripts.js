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
        var videoActivated = false;
        // If user scrolls to video, play it
        $( window ).scroll( () => {
            if($('#DAppGameDevVideo').visible() && !videoActivated){
                videoActivated = true;
                $('#DAppGameDevVideoPlayBtn').hide();
                $('#DAppGameDevVideoPauseBtnSmall').show();
                $('#DAppGameDevVideoShade').hide();
                // Play first video
                $('#DAppGameDevVideo').get(0).play();
            }
        });
        // Logic: when you click on the play button the videos get played after eachother
        // At the last video play button comes back to replay
        $('#DAppGameDevVideo').get(0).pause();
        $('#DAppGameDevVideoPlayBtnSmall').hide();
        $('#DAppGameDevVideoPauseBtnSmall').hide();
        $('#DAppGamerVideo').get(0).pause();
        $('#DAppGamerVideoPauseBtnSmall').hide();
        $('#DAppInfluencerVideo').get(0).pause();
        $('#DAppInfluencerVideoPauseBtnSmall').hide();

        // Sequence play
        $('#DAppGameDevVideoPlayBtn').click(()=>{
            $('#DAppGameDevVideoPlayBtn').hide();
            $('#DAppGameDevVideoPauseBtnSmall').show();
            $('#DAppGameDevVideoShade').hide();
            // Play first video
            $('#DAppGameDevVideo').get(0).play();
        });
        // If first video ends
        $('#DAppGameDevVideo').on('ended',function(){
            $('#DAppGameDevVideoShade').show();
            // Play second video
            $('#DAppGamerVideoShade').hide();
            $('#DAppGamerVideoPlayBtnSmall').hide();
            $('#DAppGamerVideoPauseBtnSmall').show();
            $('#DAppGamerVideo').get(0).play();
        });
        // If second video ends
        $('#DAppGamerVideo').on('ended',function(){
            $('#DAppGamerVideoShade').show();
            $('#DAppGamerVideoPlayBtnSmall').show();
            $('#DAppGamerVideoPauseBtnSmall').hide();
            // Play third video
            $('#DAppInfluencerVideoShade').hide();
            $('#DAppInfluencerVideoPlayBtnSmall').hide();
            $('#DAppInfluencerVideoPauseBtnSmall').show();
            $('#DAppInfluencerVideo').get(0).play();
        });
        // If third video ends
        $('#DAppInfluencerVideo').on('ended',function(){
            $('#DAppInfluencerVideoShade').show();
            $('#DAppInfluencerVideoPlayBtnSmall').show();
            $('#DAppInfluencerVideoPauseBtnSmall').hide();
            // Show play btn
            $('#DAppGameDevVideoPlayBtn').show();
            $('#DAppGameDevVideoShade').show();
            $('#DAppGameDevVideoPlayBtnSmall').hide();
            $('#DAppGameDevVideoPauseBtnSmall').hide();
        });

        // Small action buttons
        function videoAction(element, action) {
            if(action === 'pause') {
                $('#'+element+'Video').get(0).pause();
                $('#'+element+'VideoPauseBtnSmall').hide();
                $('#'+element+'VideoPlayBtnSmall').show();
                $('#'+element+'VideoShade').show();
            } else {
                $('#'+element+'Video').get(0).play();
                $('#'+element+'VideoPauseBtnSmall').show();
                $('#'+element+'VideoPlayBtnSmall').hide();
                $('#'+element+'VideoShade').hide();
            }
        }
        $('#DAppGameDevVideoPauseBtnSmall').click(()=>{videoAction('DAppGameDev', 'pause')});
        $('#DAppGameDevVideoPlayBtnSmall').click(()=>{videoAction('DAppGameDev', 'play')});
        $('#DAppGamerVideoPauseBtnSmall').click(()=>{videoAction('DAppGamer', 'pause')});
        $('#DAppGamerVideoPlayBtnSmall').click(()=>{videoAction('DAppGamer', 'play')});
        $('#DAppInfluencerVideoPauseBtnSmall').click(()=>{videoAction('DAppInfluencer', 'pause')});
        $('#DAppInfluencerVideoPlayBtnSmall').click(()=>{videoAction('DAppInfluencer', 'play')});


        // Swiper carousels
        // Section News Small
        var SectionNewsSmallSwiper = new Swiper ('.section-news-small__carousel', {
            loop: false,
            slidesPerView: 7,
            autoplay: true,
            speed: 1000,
            spaceBetween: 20,
            breakpoints: {
                767: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 10
                },
                992: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                  spaceBetween: 20
                },
                // when window width is <= 640px
                1600: {
                  slidesPerView: 7,
                  slidesPerGroup: 7,
                  spaceBetween: 20
                }
            },
            // centeredSlides: true,
            navigation: {
                nextEl: '.news-small-next',
                prevEl: '.news-small-prev',
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

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var DAppEmail = document.getElementById('DAppEmail');
var DAppEmailContainer = document.getElementById('DAppEmailContainer');
var DAppError = document.getElementById('DAppErrors');
var DAppTermsCheck = document.getElementById('DAppTermsCheck');
var DAppPrivacyCheck = document.getElementById('DAppPrivacyCheck');
var DAppSucces = document.getElementById('DAppSucces');
document.getElementById('DAppSubmit').addEventListener('click', ()=>{
    var email = DAppEmail.value;
    console.log(DAppTermsCheck.checked)
    if(validateEmail(email) && DAppTermsCheck.checked){
        DAppSubscribe(email);
        DAppSucces.style.display = 'block';
        DAppEmailContainer.style.display = 'none';
        DAppError.style.display = 'none';
        DAppPrivacyCheck.style.display = 'none';
    } else {
        if(!DAppTermsCheck.checked && !validateEmail(email)) {
            DAppError.innerHTML = "Please enter a valid email adres and accept our terms."
        } else if(!DAppTermsCheck.checked) {
            DAppError.innerHTML = "Please accept our terms.";
        } else {
            DAppError.innerHTML = "Please enter a valid email adres.";
        }
    }
});
// DApp beta subscription
function DAppSubscribe(email) {
    var data = JSON.stringify([
        {
          "email": email
        }
    ]);
      
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var result = JSON.parse(this.responseText)
            console.log(result.persisted_recipients[0]);
            DAppAddSubscriberToList(result.persisted_recipients[0])
        }
    });
    
    xhr.open("POST", "https://api.sendgrid.com/v3/contactdb/recipients");
    xhr.setRequestHeader("authorization", "Bearer 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");
    xhr.setRequestHeader("content-type", "application/json");
    
    xhr.send(data);
}

function DAppAddSubscriberToList(subscriber){
    var data = "null";

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "https://api.sendgrid.com/v3/contactdb/lists/4834254/recipients/"+subscriber);
    xhr.setRequestHeader("authorization", "Bearer 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");

    xhr.send(data);
}



