var check=document.querySelector(".check");


check.addEventListener('click', idiom);


function idiom(){
  let id=check.checked;


  if(id==true){
    location.href="../en/presentation.html"
  }else{
    location.href="/public/pages/presentacion.html"
  }


}
