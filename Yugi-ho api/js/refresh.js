function actualizar(){
location.reload();}

function contacto(){

    let info = "";

    info += `<div id="contactos" class="contactos">`;
    info += `<h1>Contacto</h1>`;
    info += `<p>Puden contactar al creador de esta pagina mediante su perfil de Linkedin</p>`;
    info += `<a href="test"> Desarrollador de este sitio. </a>`;
    info += `</div>`;

    document.getElementById("cardsCont").innerHTML = info;
    document.getElementById("cardsCont").style.display = "inline-block";
    document.getElementById("presentation").remove();
  
}

