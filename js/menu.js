// Seleccionamos los elementos del DOM
const btnAbrir = document.querySelector('#btn-abrir');
const btnCerrar = document.querySelector('#btn-cerrar');
const menu = document.querySelector('#menu-enlaces');

// Función para abrir el menú
btnAbrir.addEventListener('click', () => {
    menu.classList.add('active');
});

// Función para cerrar el menú
btnCerrar.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu li a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});