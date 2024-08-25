var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    window.location.href = "/Front/pages/presentacion.html";
  } else {
    window.location.href = "/Front/en/presentacion.html";
  }
}
