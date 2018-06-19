const beneTriggers = document.querySelectorAll('.section-benefits__character');
const beneSections = document.querySelectorAll('.section-benefits__content-section');

const beneVisibleSectionClass = 'section-benefits__content-section--visible';
const beneActiveCharacter = 'section-benefits__character--active';

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

function handleBenefits() {
    beneTriggers.forEach((trigger) => {

        trigger.addEventListener('click', (e) => {

            hideBenefitSections();
            setBeneInactive();

            e.target.classList.add(beneActiveCharacter);
            const activeSection = document.getElementById(`${e.target.dataset.triggerId}`);
            activeSection.classList.add(beneVisibleSectionClass);
        });
    });
}

handleBenefits();
