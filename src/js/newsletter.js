const newsletterButton = document.getElementById('newsletter-trigger');
const mainOverlay = document.querySelector('.overlay');
const submitNewsletter = document.getElementById('submitNewsletter');


const offScroll = 'scroll-off';

const hiddenClass = 'overlay--hidden';
const visibleClass = 'overlay--visible';

submitNewsletter.addEventListener('click', (e) => {
    mainOverlay.classList.remove(visibleClass);
    mainOverlay.classList.add(hiddenClass);
    document.body.classList.remove(offScroll);
});

function overlayListener() {
    mainOverlay.addEventListener('click', (e) => {
        mainOverlay.classList.remove(visibleClass);
        mainOverlay.classList.add(hiddenClass);
        document.body.classList.remove(offScroll);
    });
}

newsletterButton.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    mainOverlay.classList.remove(hiddenClass);
    mainOverlay.classList.add(visibleClass);

    document.body.classList.add(offScroll);

    const newsletterArea = document.querySelector('.section-newsletter');

    newsletterArea.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
    });

    overlayListener();

});