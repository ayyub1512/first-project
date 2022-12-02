let next = document.querySelector('.btn-next');
let prev = document.querySelector('.btn-prev');

let imgs = document.querySelectorAll('.slider_images img');
let i = 0;
next.addEventListener('click', function() {
    imgs[i].classList.remove('active');
    i++;
    if (i == imgs.length - 1) {
        i = 0;
    }
    imgs[i].classList.add('active');
})

prev.addEventListener('click', function() {
    imgs[i].classList.remove('active');
    --i;
    if (i < 0) {
        i = imgs.length - 1;
    }
    imgs[i].classList.add('active');
})