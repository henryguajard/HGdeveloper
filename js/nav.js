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

const toggleBtn = document.getElementById('toggleTheme');
  const prefersDark = localStorage.getItem('theme') === 'dark';

  if (prefersDark) {
    document.body.classList.add('dark-mode');
    document.querySelector('.navbar').classList.add('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.add('dark-mode'));
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });