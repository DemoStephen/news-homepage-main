const navBar = document.querySelector('[data-navBar]')
const showSideBar = document.querySelector('[data-showSideBar]')
const hideBar = document.querySelector('[data-hideSideBar]')

showSideBar.addEventListener('click', (event)=>{
    event.preventDefault()
    navBar.classList.remove('d-none')
})
hideBar.addEventListener('click', (event)=>{
    event.preventDefault()
    navBar.classList.add('d-none')
})