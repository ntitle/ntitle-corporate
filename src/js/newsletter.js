const newsletterButton = document.getElementById('newsletter-trigger');
const mainOverlay = document.querySelector('.overlay');
const submitNewsletter = document.getElementById('submitNewsletter');
const closeNewsletter = document.getElementById('closeNewsletter');

const offScroll = 'scroll-off';

const hiddenClass = 'overlay--hidden';
const visibleClass = 'overlay--visible';

// submitNewsletter.addEventListener('click', (e) => {
//     mainOverlay.classList.remove(visibleClass);
//     mainOverlay.classList.add(hiddenClass);
//     document.body.classList.remove(offScroll);
// });

function overlayListener() {
    mainOverlay.addEventListener('click', (e) => {
        mainOverlay.classList.remove(visibleClass);
        mainOverlay.classList.add(hiddenClass);
        document.body.classList.remove(offScroll);
    });
}

closeNewsletter.addEventListener('click', (e) => {
    mainOverlay.classList.remove(visibleClass);
    mainOverlay.classList.add(hiddenClass);
    document.body.classList.remove(offScroll);
});

newsletterButton.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    mainOverlay.classList.remove(hiddenClass);
    mainOverlay.classList.add(visibleClass);

    document.body.classList.add(offScroll);

    const newsletterArea = document.querySelector('.section-newsletter');

    newsletterArea.addEventListener('click', (ev) => {
        // ev.preventDefault();
        ev.stopPropagation();
    });

    overlayListener();

});

// SendGrid subscribe function
function SendGridSubscribe(email, listId, os) {
    var data = JSON.stringify(
        {
          "email": email,
          "listId": listId,
          "os": os
        }
    );

    fetch("https://demo-api.ntitle.network/api/v1/sendgrid", {
        method: 'POST',
        mode: "cors",
        body: data,
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Newsletter subscription
var NewsletterEmail = document.getElementById('newsletterEmail');
var NewsletterSucces = document.getElementById('newsletterSucces');
var NewsletterError = document.getElementById('newsletterError');
var NewsletterTermsCheck = document.getElementById('NewsletterTermsCheck');
var NewsletterPrivacyCheck = document.getElementById('NewsletterPrivacyCheck');
var SubmitNewsletterContainer = document.getElementById('submitNewsletterContainer');
var SubmitNewsletter = document.getElementById('submitNewsletter');
var CloseNewsletter = document.getElementById('closeNewsletterContainer');
SubmitNewsletter.addEventListener('click', ()=>{
    var email = NewsletterEmail.value;
    if(validateEmail(email) && NewsletterTermsCheck.checked){
        SendGridSubscribe(email, 3871051);
        NewsletterSucces.style.display = 'block';
        CloseNewsletter.style.display = 'block';
        NewsletterEmail.style.display = 'none';
        NewsletterError.style.display = 'none';
        NewsletterPrivacyCheck.style.display = 'none';
        SubmitNewsletter.style.display = 'none';
    } else {
        if(!NewsletterTermsCheck.checked && !validateEmail(email)) {
            NewsletterError.innerHTML = "Please enter a valid email address and accept our terms."
        } else if(!NewsletterTermsCheck.checked) {
            NewsletterError.innerHTML = "Please accept our terms.";
        } else {
            NewsletterError.innerHTML = "Please enter a valid email address.";
        }
    }
});

// DApp beta subscription
var DAppOsContainer = document.getElementById('DAppOsContainer');
var DAppIos = document.getElementById('DAppIos');
var DAppAndroid = document.getElementById('DAppAndroid');
var DAppEmail = document.getElementById('DAppEmail');
var DAppEmailContainer = document.getElementById('DAppEmailContainer');
var DAppError = document.getElementById('DAppErrors');
var DAppTermsCheck = document.getElementById('DAppTermsCheck');
var DAppPrivacyCheck = document.getElementById('DAppPrivacyCheck');
var DAppSucces = document.getElementById('DAppSucces');
document.getElementById('DAppSubmit').addEventListener('click', ()=>{
    var email = DAppEmail.value;
    var os = document.querySelector('input[name="OS"]:checked').value;

    if(validateEmail(email) && DAppTermsCheck.checked){
        SendGridSubscribe(email, 4834254, os);
        DAppSucces.style.display = 'block';
        DAppOsContainer.style.display = 'none';
        DAppEmailContainer.style.display = 'none';
        DAppError.style.display = 'none';
        DAppPrivacyCheck.style.display = 'none';
    } else {
        if(!DAppIos.checked && !DAppAndroid.checked) {
            DAppError.innerHTML = "Please select an OS."
        } else if(!DAppTermsCheck.checked && !validateEmail(email)) {
            DAppError.innerHTML = "Please enter a valid email address and accept our terms."
        } else if(!DAppTermsCheck.checked) {
            DAppError.innerHTML = "Please accept our terms.";
        } else {
            DAppError.innerHTML = "Please enter a valid email address.";
        }
    }
});