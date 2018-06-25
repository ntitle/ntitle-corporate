const triggers = document.querySelectorAll('.section-benefits__character');
const sections = document.querySelectorAll('.section-benefits__content-section');

const visibleSectionClass = 'section-benefits__content-section--visible';
const activeTabClass = 'section-benefits__character--active';

function hideSections() {
    sections.forEach((section) => {
        section.classList.remove(visibleSectionClass);
    });
}

function setTabsInactive() {
    triggers.forEach((section) => {
        section.classList.remove(activeTabClass);
    });
}

function handleBenefits() {
    triggers.forEach((trigger) => {
        const tabId = trigger.dataset.triggerId;

        trigger.addEventListener('click', (e) => {
            hideSections();
            setTabsInactive();

            e.target.classList.add(activeTabClass);
            const activeSection = document.getElementById(`${tabId}`);
            activeSection.classList.add(visibleSectionClass);
        });
    });
}

export default () => {
    handleBenefits();
};
