const hiddenLinks = document.getElementById('HiddenLinks');

const menuButton = document.getElementById('MenuButton');
const closeMenuButton = document.getElementById('CloseMenuButton');

menuButton.addEventListener('click', () => {
    hiddenLinks.classList.remove('hide');
})

closeMenuButton.addEventListener('click', () => {
    hiddenLinks.classList.add('hide');
})