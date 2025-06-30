// Formulario contacto: mostrar mensaje al enviar
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  

  // Simular envío
  const resultado = document.getElementById('formResultado');
  resultado.textContent = 'Gracias por contactarme, responderé pronto.';

  // Limpiar formulario
  this.reset();
});
