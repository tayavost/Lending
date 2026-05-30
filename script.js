window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

function openForm() {
    let formBlock = document.getElementById('formBlock');
    formBlock.classList.add('show-form');
}

function closeForm() {
    let formBlock = document.getElementById('formBlock');
    formBlock.classList.remove('show-form');
}