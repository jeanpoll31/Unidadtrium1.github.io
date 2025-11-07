document.addEventListener('DOMContentLoaded' , function()
{
    const botonMenu = document.getElementById('menu__boton');
    const listaNavegador = document.querySelector('.lista__navegador');

    botonMenu.addEventListener('click' , function()
    {
    listaNavegador.classList.toggle('menu__oculto');
    });
});
