const navList = document.getElementById('nav-list')
const toggleButton = document.getElementById('toggle-button')

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('show-menu')
})
