const teamBtn = document.getElementById('team-toggle');
const hiddenTeamList = document.querySelectorAll('.team-member--hidden');

const hiddenTeamListClass = 'team-member--hidden';
const hiddenTeamToggleBtn = 'team-toggle--hidden';

teamBtn.addEventListener('click', () => {
    console.log('hiddenTeamList', hiddenTeamList);

    if (!hiddenTeamList) return;

    hiddenTeamList.forEach(item => {
        item.classList.remove(hiddenTeamListClass);
    });
    teamBtn.classList.add(hiddenTeamToggleBtn);
});
