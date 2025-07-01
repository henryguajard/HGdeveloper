document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const animateBars = () => {
      progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;

        if (isVisible && !bar.classList.contains("animated")) {
          const targetWidth = bar.getAttribute("data-width");
          bar.style.width = targetWidth;
          bar.classList.add("animated"); // Evita que se vuelva a animar
        }
      });
    };

    window.addEventListener("scroll", animateBars);
    animateBars(); // Por si ya está visible al cargar
  });