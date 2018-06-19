const triggers = document.querySelectorAll('.section-ecosystem__tab');
const sections = document.querySelectorAll('.section-ecosystem__content-section');

const visibleSectionClass = 'section-ecosystem__content-section--visible';
const activeTabClass = 'section-ecosystem__tab--active';

function handleTabs() {
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

console.log('initEcosystem');
handleTabs();
