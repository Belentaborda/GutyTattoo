
let ilust2 = document.getElementById('ilust2');
let ilust3 = document.getElementById('ilust3');
let ilust4 = document.getElementById('ilust4');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    ilust4.style.top = value * 2.5 + 'px';
    ilust2.style.top = value * -1.5 + 'px';
    ilust2.style.left = value * 1.5 + 'px';
    ilust3.style.top = value * -1.5 + 'px';
    ilust3.style.left = value * -1.5 + 'px';
    

}) ;
