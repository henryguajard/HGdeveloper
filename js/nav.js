document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();

   }
    });
  });


document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filtro = btn.getAttribute('data-filtro');

    // Recorremos todos los títulos <h3> y su siguiente grupo de productos
    document.querySelectorAll('h4').forEach(header => {
      const grupo = header.nextElementSibling;

      // Aseguramos que el siguiente hermano sea un grupo de productos
      if (grupo && grupo.classList.contains('grupo-producto')) {
        const categoria = grupo.getAttribute('data-categoria');

        // Mostramos u ocultamos según el filtro
        if (filtro === 'Todos' || filtro === categoria) {
          header.style.display = 'block';
          grupo.style.display = 'flex'; // o 'block' si usas diseño vertical
        } else {
          header.style.display = 'none';
          grupo.style.display = 'none';
        }
      }
    });
     //  Marcar visualmente el botón seleccionado
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


//menu hamburgesa
document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.custom-toggler');
  const iconOpen = toggler.querySelector('.bi-list');
  const iconClose = toggler.querySelector('.bi-x-lg');
  const collapseMenu = document.getElementById('navbarContenido');

  collapseMenu.addEventListener('show.bs.collapse', () => {
      console.log('Menu abierto');
    iconOpen.classList.add('d-none');
    iconClose.classList.remove('d-none');
  });

  collapseMenu.addEventListener('hide.bs.collapse', () => {
      console.log('Menu cerrado');
    iconOpen.classList.remove('d-none');
    iconClose.classList.add('d-none');
  });
});