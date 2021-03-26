const navInput = document.querySelector('#nav-input')
const userDropdown = document.querySelector('.user-dropdown')
const settingDropdown = document.querySelector('.setting-dropdown')
const notificationDropdown = document.querySelector('.notification-dropdown')
const uIcon = document.querySelector('#user')
const sIcon = document.querySelector('#setting')
const nIcon = document.querySelector('#notification')
const barIcon = document.querySelector('#bars')
const navMenu = document.querySelector('.nav-menu')


// Hiding Dropdown displays

userDropdown.hidden = true;
settingDropdown.hidden = true;
notificationDropdown.hidden = true

function ToggleDropdown1 (e) {
    console.log(e)
    userDropdown.hidden = !userDropdown.hidden
        settingDropdown.hidden=true
        notificationDropdown.hidden=true
}
function ToggleDropdown2 () {
    settingDropdown.hidden = !settingDropdown.hidden
        userDropdown.hidden=true
        notificationDropdown.hidden=true
}
function ToggleDropdown3 () {
    notificationDropdown.hidden = !notificationDropdown.hidden
        settingDropdown.hidden=true
        userDropdown.hidden=true
}

function clear1 (i) {
    if (i.target !== uIcon) {
        userDropdown.hidden=true
    } 
}
function clear2 (i) {
    if (i.target !== sIcon){
        settingDropdown.hidden=true
    }
}
function clear3 (i) {
    if (i.target !== nIcon) {
        notificationDropdown.hidden=true
    }
}
// function clear1 (i, j, k) {
//     if (i.srcElement !== uIcon || j.srcElement !== sIcon || k.srcElement !== nIcon) {
//         userDropdown.hidden=true
//         settingDropdown.hidden=true
//         notificationDropdown.hidden=true
//     }
// }

// Expanding and Contract the search input
let width = navInput.style.width = '300px'

// Expanding Nav Input
function expandInput (){
    navInput.style.width = '500px'
    navInput.style.background = 'white'
    navInput.style.color = ' rgb(56, 56, 56)'
    navInput.style.outline = 'none'      
}

// || e.srcElement !== uIcon || e.srcElement !== sIcon || e.srcElement !== nIcon
// Contracting Nav Input
function contract (e) {
    if (e.srcElement !== navInput ) {
    navInput.style.width = '300px'
    navInput.style.background = 'transparent'
    navInput.style.color = 'white'
    // userDropdown.hidden=true
    // settingDropdown.hidden=true
    // notificationDropdown.hidden=true
    } else {
        navInput.style.width = '500px'
        // notificationDropdown.hidden = !notificationDropdown.hidden
        // settingDropdown.hidden = !settingDropdown.hidden
        // userDropdown.hidden = !settingDropdown.hidden

    }
}


function addClass () {
    navMenu.classList.toggle('display')
}

uIcon.addEventListener('click', ToggleDropdown1)
sIcon.addEventListener('click', ToggleDropdown2)
nIcon.addEventListener('click', ToggleDropdown3)
navInput.addEventListener('click', expandInput)
window.addEventListener('click', contract)
window.addEventListener('click', clear1)
window.addEventListener('click', clear2)
window.addEventListener('click', clear3)
barIcon.addEventListener('click', addClass)