const beneTriggers = document.querySelectorAll('.section-benefits__character');
const beneSections = document.querySelectorAll('.section-benefits__content-section');
const beneTitles = document.querySelectorAll('.benefit-item__title');

const beneVisibleSectionClass = 'section-benefits__content-section--visible';
const beneActiveCharacter = 'section-benefits__character--active';

const blue = 'benefit-item__title--blue';
const green = 'benefit-item__title--green';
const violet = 'benefit-item__title--violet';

function hideBenefitSections() {
    beneSections.forEach((section) => {
        section.classList.remove(beneVisibleSectionClass);
    });
}

function setBeneInactive() {
    beneTriggers.forEach((section) => {
        section.classList.remove(beneActiveCharacter);
    });
}

function clearTitles() {
    beneTitles.forEach((title) => {
        title.classList.remove(blue);
        title.classList.remove(green);
        title.classList.remove(violet);
    });
}

function getTitleColor(character) {
    switch (character) {
        case 'dev':
            return green;
        case 'infl':
            return violet;
        case 'gamer':
            return blue;
        default:
            return blue;
    }
}

function setTitlesColor(character) {
    const color = getTitleColor(character);

    beneTitles.forEach((title) => {
        title.classList.add(color);
    })
}

function handleBenefits() {
    beneTriggers.forEach((trigger) => {

        trigger.addEventListener('click', (e) => {

            const { character } = e.target.dataset;

            hideBenefitSections();
            setBeneInactive();
            clearTitles();
            setTitlesColor(character);

            e.target.classList.add(beneActiveCharacter);
            const activeSection = document.getElementById(`${e.target.dataset.triggerId}`);
            activeSection.classList.add(beneVisibleSectionClass);
        });
    });
}

handleBenefits();