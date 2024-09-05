let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let ilust2 = document.getElementById('ilust2');
let ilust3 = document.getElementById('ilust3');
let ilust4 = document.getElementById('ilust4');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.margingTop = value * 2.5 + 'px';
    leaf.style.Top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    ilust2.style.left = value * 1.5 + 'px';
    ilust3.style.right = value * -1.5 + 'px';
    ilust4.style.right = value * 1 + 'px';

}) ;
