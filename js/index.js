/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

window.onload = () => {
    const form = document.forms[0];
    const comentario = form.comentario;
    const arrayComentarios = [];

    form.onsubmit = (evento) => {
        evento.preventDefault();
        arrayComentarios.push(comentario.value);
        localStorage.setItem("comentario", JSON.stringify(arrayComentarios));
        renderizarComentario(comentario.value);
    }
}


function renderizarComentario(comentario) {
    const contenedor = document.querySelector("#comentarios");
    const template = `<p>${comentario}</p>`;
    contenedor.innerHTML += template;
}