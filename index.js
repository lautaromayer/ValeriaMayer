document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const mensaje = document.getElementById('formMensaje');
  
    // Animaciones de entrada
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  
    // Validación del formulario
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensajeTexto = document.getElementById('mensaje').value.trim();
  
      if (!nombre || !email || !mensajeTexto) {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
        return;
      }
  
      mensaje.textContent = 'Gracias por tu mensaje. Te responderé a la brevedad.';
      mensaje.style.color = 'green';
      form.reset();
    });
  });
  