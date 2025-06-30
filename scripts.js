document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Buton yazısını güncelle
  function updateButton() {
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Açık Mod';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Koyu Mod';
    }
  }
  updateButton();

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateButton();
  });

  // Fade-in animasyonları
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Sayfa yenilenmeden önce scroll'u en başa al
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Sayfa yüklendiğinde scroll'u en başa al ve hash varsa temizle
  window.addEventListener('load', () => {
    if (window.location.hash) {
      history.replaceState(null, null, ' ');
    }
    window.scrollTo(0, 0);
  });

  // Particles.js animasyonu
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
      color: "transparent"
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    },
    particles: {
      color: {
        value: "#5e60ce"
      },
      links: {
        color: "#5e60ce",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: true,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 60
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 2, max: 4 }
      }
    },
    detectRetina: true
  });
});
