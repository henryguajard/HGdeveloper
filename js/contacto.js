document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita el envío normal

      const formData = new FormData(form);

      fetch("https://formsubmit.co/1c7fce060ae883730f5f79dc3a432e99", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
   title: '✔️ ¡Mensaje enviado!',
  text: 'Gracias por contactarme. Te responderé pronto.',
  imageUrl: '/img/modal2.png',
  imageWidth: 50,
  imageHeight: 60,
  imageAlt: 'Icono de éxito',
  timer: 3000,
  showConfirmButton: false
  
          });
          form.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar el mensaje.'
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo conectar con el servidor.'
        });
      });
    });
  });