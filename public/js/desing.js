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

var check=document.querySelector(".check");
check.addEventListener('click', idiom);
function idiom(){
  let id=check.checked;
  if(id==true){
    location.href="/public/en/desing.html"
  }else{
    location.href="/public/pages/desing.html"
  }
}

// Función que detecta el scroll para aplicar la animación
function revealCards() {
  const cards = document.querySelectorAll('.card');

  for (let i = 0; i < cards.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = cards[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          cards[i].classList.add('visible');
          setTimeout(() => {
            cards[i].querySelector('.card-text').classList.add('visible');
        }, 200);
      }
  }
}

window.addEventListener('scroll', revealCards);