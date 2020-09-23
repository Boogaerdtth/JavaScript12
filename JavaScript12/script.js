const btn = document.querySelector('.btn-alert');

btn.addEventListener('click', function () {
    alert('Clicked');
});



// const body = document.body;

// const btnBackground = document.querySelector('.btn-background');

// btnBackground.addEventListener('click', function () {
//     body.classList.add('red-background');
// });



const body = document.body;

const btnBackground = document.querySelector('.btn-background');

btnBackground.addEventListener('click', function () {
    body.classList.toggle('red-background');
});



