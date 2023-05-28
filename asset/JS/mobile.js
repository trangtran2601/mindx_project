const navToggleAddElements = document.getElementsByClassName("nav-mobile-toggle-add")

for (i = 0; i < navToggleAddElements.length; i++){
    
    navToggleAddElements[i].onclick = function(e){
        e.preventDefault()
        let navDropdownWrapperElement = e.target.closest('.nav-dropdown-item-wrapper')
        let navUlChildElement = navDropdownWrapperElement.querySelector('ul') 
        if (navUlChildElement) {
            navUlChildElement.classList.add('show')
        } 
        e.target.style = "display: none"  
        e.target.nextElementSibling.style =  "display: block"
    }
}


const navToggleMinusElements = document.getElementsByClassName("nav-mobile-toggle-minus")

for (i = 0; i < navToggleMinusElements.length; i++){
    
    navToggleMinusElements[i].onclick = function(e){
        e.preventDefault()
        let navDropdownWrapperElement = e.target.closest('.nav-dropdown-item-wrapper')
        let navUlChildElement = navDropdownWrapperElement.querySelector('ul') 
        if (navUlChildElement) {
            navUlChildElement.classList.remove('show')
        } 
        e.target.style = "display: none"  
        e.target.previousElementSibling.style =  "display: block"
    }
}


const NavMobileOverlay = document.querySelector('.nav-mobile-overlay')
const NavMobileWrapper = document.querySelector('.nav-mobile-wrapper')
const navMobileClose = document.querySelector('.nav-mobile-close')
const headerMobileMenuBtn = document.querySelector('.header-mobile-menu')

function showNavMobileOverlay(){
    NavMobileOverlay.classList.add('open')
}

function hideNavMobileOverlay (){
    NavMobileOverlay.classList.remove('open')
}

headerMobileMenuBtn.addEventListener('click', showNavMobileOverlay)
navMobileClose.addEventListener('click', hideNavMobileOverlay)
NavMobileOverlay.addEventListener('click', hideNavMobileOverlay)
NavMobileWrapper.addEventListener('click' , function(event) {
    event.stopPropagation()
})

const footerNavBtns = document.querySelectorAll('.footer-mobile-arrow-down')


for (i = 0; i < footerNavBtns.length; i++){
    footerNavBtns[i].onclick = function(e) {
        e.preventDefault()
        let footerSectionElement = e.target.closest('.footer-section')
        let footerUlChildElement = footerSectionElement.querySelector('ul')
        if (footerUlChildElement) {
            footerUlChildElement.classList.toggle('show')
            footerUlChildElement.style = 'margin-top: 0'
        }
    }
}