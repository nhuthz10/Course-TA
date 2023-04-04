const loading = document.querySelector('.loading');
const btnGetpassword = document.querySelector('.form__login');

btnGetpassword.addEventListener('click', function() {
    loading.classList.add('loading--open');
})