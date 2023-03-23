const navAccount = document.querySelector('.setting-nav-account');
const navPassword = document.querySelector('.setting-nav-password');
const navSystem = document.querySelector('.setting-nav-system');
const navTarger = document.querySelector('.setting-nav-targer');
const account = document.querySelector('.setting-account');
const password = document.querySelector('.setting-password');
const system = document.querySelector('.setting-system');
const targer = document.querySelector('.setting-targer');
const navActive = document.querySelector('.setting-nav-active');
const listTarger = document.querySelectorAll('.edit-targer__content-item');

// nav 
navAccount.addEventListener('click', function() {
    navAccount.classList.add('setting-nav-active');
    navPassword.classList.remove('setting-nav-active');
    navSystem.classList.remove('setting-nav-active');
    navTarger.classList.remove('setting-nav-active');
    account.style.display = 'flex';
    password.style.display = 'none';
    system.style.display = 'none';
    targer.style.display = 'none';
})
navPassword.addEventListener('click', function() {
    navPassword.classList.add('setting-nav-active');
    navAccount.classList.remove('setting-nav-active');
    navSystem.classList.remove('setting-nav-active');
    navTarger.classList.remove('setting-nav-active');
    password.style.display = 'flex';
    account.style.display = 'none';
    system.style.display = 'none';
    targer.style.display = 'none';
})
navSystem.addEventListener('click', function() {
    navSystem.classList.add('setting-nav-active');
    navAccount.classList.remove('setting-nav-active');
    navPassword.classList.remove('setting-nav-active');
    navTarger.classList.remove('setting-nav-active');
    system.style.display = 'flex';
    account.style.display = 'none';
    password.style.display = 'none';
    targer.style.display = 'none';
})
navTarger.addEventListener('click', function() {
    navTarger.classList.add('setting-nav-active');
    navAccount.classList.remove('setting-nav-active');
    navSystem.classList.remove('setting-nav-active');
    navPassword.classList.remove('setting-nav-active');
    targer.style.display = 'flex';
    account.style.display = 'none';
    system.style.display = 'none';
    password.style.display = 'none';
})



// choose targer
const itemTarger1 = listTarger[0];
const itemTarger2 = listTarger[1];
const itemTarger3 = listTarger[2];
const itemTarger4 = listTarger[3];

itemTarger1.addEventListener('click', function() {
    itemTarger1.classList.add('edit-targer__content-item--choose');
    itemTarger2.classList.remove('edit-targer__content-item--choose');
    itemTarger3.classList.remove('edit-targer__content-item--choose');
    itemTarger4.classList.remove('edit-targer__content-item--choose');
})
itemTarger2.addEventListener('click', function() {
    itemTarger2.classList.add('edit-targer__content-item--choose');
    itemTarger1.classList.remove('edit-targer__content-item--choose');
    itemTarger3.classList.remove('edit-targer__content-item--choose');
    itemTarger4.classList.remove('edit-targer__content-item--choose');
})
itemTarger3.addEventListener('click', function() {
    itemTarger3.classList.add('edit-targer__content-item--choose');
    itemTarger2.classList.remove('edit-targer__content-item--choose');
    itemTarger1.classList.remove('edit-targer__content-item--choose');
    itemTarger4.classList.remove('edit-targer__content-item--choose');
})
itemTarger4.addEventListener('click', function() {
    itemTarger4.classList.add('edit-targer__content-item--choose');
    itemTarger2.classList.remove('edit-targer__content-item--choose');
    itemTarger3.classList.remove('edit-targer__content-item--choose');
    itemTarger1.classList.remove('edit-targer__content-item--choose');
})