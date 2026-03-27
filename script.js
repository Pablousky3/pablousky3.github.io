/* ====================================================================
   MARIO BROS INSPIRED PORTFOLIO - SCRIPT LIMPIO Y OPTIMIZADO (V6)
   ==================================================================== */

// ============ 1. DATOS DEL PORTFOLIO ============
const PORTFOLIO_DATA = {
  games: {
    1: { title: 'CYBER QUEST', description: 'Una aventura de acción y estrategia en un mundo cyberpunk distópico.', platform: 'PC / Mac / Linux', year: '2023', engine: 'Unity', link: '#', github: '#' },
    2: { title: 'PIXEL WARS', description: 'Un juego de estrategia en tiempo real con estética retro pixel art.', platform: 'PC / Web', year: '2022', engine: 'Godot', link: '#', github: '#' },
    3: { title: 'NEON RUSH', description: 'Un juego de carreras de ritmo rápido en un mundo neon.', platform: 'PC / Consolas', year: '2023', engine: 'Unreal Engine 5', link: '#', github: '#' },
    4: { title: 'VOID ECHO', description: 'Un juego de exploración y horror psicológico en el espacio.', platform: 'PC / VR', year: '2024', engine: 'Unreal Engine 5', link: '#', github: '#' }
  },
  awards: {
    1: { title: 'Best Game Design', event: 'Global Game Jam 2023', year: '2023', description: 'Reconocimiento por la innovación y creatividad.' },
    2: { title: 'Innovation Award', event: 'Indie Game Festival', year: '2023', description: 'Premio a la mejor propuesta innovadora.' },
    3: { title: 'Best Art Direction', event: 'Game Dev Expo 2022', year: '2022', description: 'Reconocimiento por la excelencia en dirección de arte.' },
    4: { title: "Player's Choice", event: 'Community Awards', year: '2022', description: 'Votado por la comunidad.' },
    5: { title: 'Best Innovation', event: 'Tech Innovation Awards', year: '2023', description: 'Premio a la innovación tecnológica.' },
    6: { title: 'Game Jam Winner', event: 'Madrid Game Jam', year: '2023', description: 'Ganador de la Game Jam de Madrid.' },
    7: { title: 'Photo', event: 'Oppo Imagine If', year: '2023', description: 'Reconocimiento fotográfico.' }
  },
  experience: {
    1: { title: 'Senior Game Developer', company: 'Tech Games Studio', period: '2022 - Presente', image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Senior+Developer', description: 'Liderando el desarrollo de múltiples proyectos AAA.', responsibilities: ['Diseño de sistemas', 'Optimización', 'Mentoría'] },
    2: { title: 'Game Programmer', company: 'Indie Creative Labs', period: '2020 - 2022', image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Game+Programmer', description: 'Desarrollé varios juegos independientes exitosos.', responsibilities: ['Programación de mecánicas', 'Sistemas de física'] },
    3: { title: 'Junior Developer', company: 'Digital Games Co.', period: '2019 - 2020', image: 'https://via.placeholder.com/300x200/FFE66D/FFFFFF?text=Junior+Developer', description: 'Comencé mi carrera profesional.', responsibilities: ['Features móviles', 'UI/UX'] },
    4: { title: 'Freelance Developer', company: 'Proyectos Independientes', period: '2018 - 2019', image: 'https://via.placeholder.com/300x300/95E1D3/FFFFFF?text=Freelance', description: 'Trabajé en diversos proyectos independientes.', responsibilities: ['Desarrollo full-stack', 'Gestión de clientes'] }
  }
};

// --- Indicador personalizado para "fantasma" (inactivo)
const GHOST_IMAGE_URL = 'Imagenes/pildora.png'; // <- tu imagen

// ============ 2. CONTROLADOR DE NAVEGACIÓN ============
const UIController = (() => {
  const init = () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    // Cambio de estilo al hacer scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'white';
      }
    }, { passive: true });

    // Toggle del menú móvil
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
      });
      navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          navLinks.classList.remove('active');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Scroll suave al logo
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, null, ' ');
      });
    }

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          if (navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
          }
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };
  return { init };
})();

// ============ 3. CONTROLADOR DE MODALES ============
const ModalController = (() => {
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      CarouselController.pauseAutoplay();
    }
  };
  const closeModal = (modal) => {
    modal.classList.remove('active');
    CarouselController.resumeAutoplay();
  };
  const init = () => {
    // Abrir modales (por atributo data-modal)
    document.querySelectorAll('[data-modal]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.modal));
    });

    // Cerrar modales
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.modal-close')) {
          closeModal(modal);
        }
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) closeModal(activeModal);
      }
    });
  };
  return { init, openModal, closeModal };
})();

// ============ 4. CONTROLADOR DE ANIMACIONES ============
const AnimationController = (() => {
  const animateNumbers = (container) => {
    const stats = container.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.innerText);
      const suffix = stat.innerText.replace(/[0-9]/g, '');
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const updateCount = () => {
        if (count < target) {
          count += increment;
          stat.innerText = Math.floor(count) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          stat.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  const init = () => {
    const isMobile = window.innerWidth <= 768;
    const observerOptions = {
      threshold: isMobile ? 0.1 : 0.2,
      rootMargin: isMobile ? "0px 0px -50px 0px" : "0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'about') {
            animateNumbers(entry.target);
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };
  return { init };
})();

// ============ 5. CONTROLADOR DEL CARRUSEL ============
const CarouselController = (() => {
  let currentIndex = 0;
  let autoplayInterval = null;
  let isTransitioning = false;
  let isPaused = false;
  let track, wrapper, originalItems, clonesCount, totalOriginalItems;

  const updateCarousel = (animate = true) => {
    if (!track || !wrapper || originalItems.length === 0) return;
    const allItems = track.querySelectorAll('.award-item');
    if (allItems.length === 0) return;

    const wrapperWidth = wrapper.offsetWidth;
    const currentItem = allItems[currentIndex];
    const currentItemWidth = currentItem.offsetWidth;
    const currentItemOffsetLeft = currentItem.offsetLeft;
    const finalOffset = (wrapperWidth / 2) - (currentItemOffsetLeft + currentItemWidth / 2);

    track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none';
    track.style.transform = `translateX(${finalOffset}px)`;

    // Actualizar items activos
    allItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });

    // Actualizar indicadores con imagen personalizada (Pac-Man activo, píldora inactiva)
    const indicators = document.querySelectorAll('.carousel-indicator');
    const activeIdx = (currentIndex - clonesCount + totalOriginalItems) % totalOriginalItems;
    indicators.forEach((ind, idx) => {
      const isActive = idx === activeIdx;
      ind.classList.toggle('active', isActive);
      const img = ind.querySelector('.indicator-gif');
      if (img) {
        img.src = isActive ? 'Imagenes/pacman.gif' : GHOST_IMAGE_URL;
      }
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    currentIndex++;
    isTransitioning = true;
    updateCarousel(true);
  };
  const prevSlide = () => {
    if (isTransitioning) return;
    currentIndex--;
    isTransitioning = true;
    updateCarousel(true);
  };

  const startAutoplay = () => {
    if (!isPaused && !autoplayInterval) {
      autoplayInterval = setInterval(nextSlide, 3000);
    }
  };
  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };
  const pauseAutoplay = () => { isPaused = true; stopAutoplay(); };
  const resumeAutoplay = () => { isPaused = false; startAutoplay(); };

  const init = () => {
    track = document.querySelector('.carousel-track');
    wrapper = document.querySelector('.carousel-wrapper');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!track || !wrapper) return;

    originalItems = Array.from(track.querySelectorAll('.award-item'));
    totalOriginalItems = originalItems.length;
    clonesCount = 2;

    // Crear carrusel infinito con clones
    const fragment = document.createDocumentFragment();
    for (let i = totalOriginalItems - clonesCount; i < totalOriginalItems; i++) {
      fragment.appendChild(originalItems[i].cloneNode(true));
    }
    originalItems.forEach(item => fragment.appendChild(item.cloneNode(true)));
    for (let i = 0; i < clonesCount; i++) {
      fragment.appendChild(originalItems[i].cloneNode(true));
    }
    track.innerHTML = '';
    track.appendChild(fragment);
    currentIndex = clonesCount;

    // Crear indicadores con imagen personalizada
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = originalItems.map((_, i) => {
        const imgSrc = i === 0 ? 'Imagenes/pacman.gif' : GHOST_IMAGE_URL;
        return `<button class="carousel-indicator ${i === 0 ? 'active' : ''}" data-index="${i}" role="button" aria-label="Ir al premio ${i + 1}">
                  <img src="${imgSrc}" alt="Indicador ${i + 1}" class="indicator-gif" onerror="this.style.display='none'" />
                </button>`;
      }).join('');
      indicatorsContainer.addEventListener('click', (e) => {
        const indicator = e.target.closest('.carousel-indicator');
        if (indicator && !isTransitioning) {
          currentIndex = parseInt(indicator.dataset.index) + clonesCount;
          updateCarousel(true);
          stopAutoplay();
          startAutoplay();
        }
      });
    }

    // Botones de navegación
    document.querySelector('.carousel-btn-prev')?.addEventListener('click', () => {
      stopAutoplay(); prevSlide(); startAutoplay();
    });
    document.querySelector('.carousel-btn-next')?.addEventListener('click', () => {
      stopAutoplay(); nextSlide(); startAutoplay();
    });

    // Manejo de transición infinita
    track.addEventListener('transitionend', () => {
      isTransitioning = false;
      if (currentIndex >= totalOriginalItems + clonesCount) {
        currentIndex = clonesCount;
        updateCarousel(false);
      } else if (currentIndex < clonesCount) {
        currentIndex = totalOriginalItems + clonesCount - 1;
        updateCarousel(false);
      }
    });

    // Clics en items: Si es el item central, abre el modal; si no, lo centra.
    track.addEventListener('click', (e) => {
      const item = e.target.closest('.award-item');
      if (!item) return;
      
      const allItems = Array.from(track.querySelectorAll('.award-item'));
      const itemIdx = allItems.indexOf(item);
      
      if (itemIdx === currentIndex) {
        // Es el item activo, abrir modal
        const awardId = item.dataset.award;
        const award = PORTFOLIO_DATA.awards[awardId];
        if (award) {
          // Obtener la imagen del item clicado para mostrarla en el modal
          const awardImg = item.querySelector('img')?.src;
          ModalController.openModal('awardModal');
          updateAwardModal(award, awardImg);
        }
      } else {
        // Centrar el item clicado
        currentIndex = itemIdx;
        updateCarousel(true);
        stopAutoplay();
        startAutoplay();
      }
    });

    startAutoplay();
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  };

  const updateAwardModal = (award, imgSrc) => {
    const titleEl = document.getElementById('modalAwardTitle');
    const descEl = document.getElementById('modalAwardDescription');
    const eventEl = document.getElementById('modalAwardEvent');
    const yearEl = document.getElementById('modalAwardYear');
    const imgEl = document.getElementById('modalAwardImage');

    if (titleEl) titleEl.textContent = award.title;
    if (descEl) descEl.textContent = award.description;
    if (eventEl) eventEl.textContent = award.event;
    if (yearEl) yearEl.textContent = award.year;
    if (imgEl && imgSrc) imgEl.src = imgSrc;
  };

  return { init, pauseAutoplay, resumeAutoplay };
})();

// ============ 6. CONTROLADOR DE EXPERIENCIA ============
const ExperienceController = (() => {
  const init = () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
      item.addEventListener('click', () => {
        const expId = item.dataset.experience;
        const experience = PORTFOLIO_DATA.experience[expId];
        if (experience) {
          ModalController.openModal('experienceModal');
          updateExperienceModal(experience);
        }
      });
    });
  };
  const updateExperienceModal = (exp) => {
    const titleEl = document.getElementById('modalExpTitle');
    const companyEl = document.getElementById('modalExpCompany');
    const periodEl = document.getElementById('modalExpPeriod');
    const imgEl = document.getElementById('modalExpImage');
    const descEl = document.getElementById('modalExpDescription');
    const listEl = document.getElementById('modalExpResponsibilities');

    if (titleEl) titleEl.textContent = exp.title;
    if (companyEl) companyEl.textContent = exp.company;
    if (periodEl) periodEl.textContent = exp.period;
    if (imgEl) imgEl.src = exp.image;
    if (descEl) descEl.textContent = exp.description;
    if (listEl) listEl.innerHTML = exp.responsibilities.map(r => `<li>${r}</li>`).join('');
  };
  return { init };
})();

// ============ 7. CONTROLADOR DE JUEGOS ============
const GamesController = (() => {
  const init = () => {
    document.querySelectorAll('.game-item').forEach(item => {
      item.addEventListener('click', () => {
        const gameId = item.dataset.game;
        const game = PORTFOLIO_DATA.games[gameId];
        if (game) {
          ModalController.openModal('gameModal');
          updateGameModal(game);
        }
      });
    });
  };
  const updateGameModal = (game) => {
    const titleEl = document.getElementById('modalGameTitle');
    const engineEl = document.getElementById('modalGameEngine');
    const platformEl = document.getElementById('modalGamePlatform');
    const yearEl = document.getElementById('modalGameYear');
    const descEl = document.getElementById('modalGameDescription');

    if (titleEl) titleEl.textContent = game.title;
    if (engineEl) engineEl.textContent = game.engine;
    if (platformEl) platformEl.textContent = game.platform;
    if (yearEl) yearEl.textContent = game.year;
    if (descEl) descEl.textContent = game.description;
  };
  return { init };
})();

// ============ 8. CONTROLADOR DEL PERSONAJE INTERACTIVO (V5 - Con Selector, Destrucción y Reparación) ============
const CharacterController = (() => {
  const playerContainer = document.getElementById('player-container');
  const characterSelector = document.getElementById('character-selector');
  const breakableTitle = document.getElementById('breakable-title');
  const originalTitleText = "Pablo Menéndez-Morán"; // El texto original del título

  let char = null; // El personaje seleccionado
  let charType = null; // Tipo de personaje (para cargar GIFs)

  // --- Configuración Física ---
  let posX = 100;
  let posY = 0;           
  let velocityY = 0;      
  const speed = 8;        
  const gravity = 0.8;    
  const jumpPower = -16;  
  
  // --- Estados de Animación ---
  let isJumping = false;
  let isAttacking = false;
  let currentDirection = 1; 
  let lastAttackTime = 0;
  const attackDuration = 400; // Ajusta según la duración de tu GIF de ataque
  
  // --- Registro de Teclas ---
  const keys = { right: false, left: false, up: false, attack: false };

  // --- Lógica de Título --- 
  let titleBroken = false;
  let repairTimeout = null;
  const repairDelay = 5000; // 5 segundos para reparar el título

  const init = () => {
    // Inicializar el título con su texto original
    if (breakableTitle) {
      breakableTitle.textContent = originalTitleText;
    }

    // Mostrar selector de personajes
    if (characterSelector) {
      characterSelector.querySelectorAll('.character-option').forEach(option => {
        option.addEventListener('click', () => selectCharacter(option.dataset.char));
      });
    }

    // Escuchar eventos de teclado solo después de seleccionar personaje
    window.addEventListener('keydown', (e) => {
      if (!char) return; // No procesar teclas si no hay personaje seleccionado
      const key = e.key.toLowerCase();
      if (key === 'arrowright' || key === 'd') keys.right = true;
      if (key === 'arrowleft' || key === 'a') keys.left = true;
      if (key === ' ' || key === 'arrowup' || key === 'w') keys.up = true;
      if (key === 'f' || key === 'enter') keys.attack = true;
    });

    window.addEventListener('keyup', (e) => {
      if (!char) return; // No procesar teclas si no hay personaje seleccionado
      const key = e.key.toLowerCase();
      if (key === 'arrowright' || key === 'd') keys.right = false;
      if (key === 'arrowleft' || key === 'a') keys.left = false;
      if (key === ' ' || key === 'arrowup' || key === 'w') keys.up = false;
      if (key === 'f' || key === 'enter') keys.attack = false;
    });

    // Iniciar el bucle de juego solo después de seleccionar personaje
    // gameLoop(); // Esto se llamará después de la selección
  };

  const selectCharacter = (type) => {
    charType = type;

    // Ocultar el selector
    if (characterSelector) {
        characterSelector.classList.add('hidden');
    }

    // Crear el personaje principal
    char = document.createElement('div');
    char.id = 'player-character';
    char.classList.add('character-idle');
    char.classList.add('active'); // SIN ESTO EL PERSONAJE ES INVISIBLE
    char.style.backgroundImage = `url('Imagenes/char${charType}_idle.gif')`;
    playerContainer.appendChild(char);

    // Iniciar el bucle de juego
    gameLoop();
  };

  const gameLoop = () => {
    if (!char) return; // Asegurarse de que el personaje exista

    // 1. ACTUALIZAR ESTADOS FÍSICOS
    let isMovingHorizontally = false;
    if (keys.right) {
      posX += speed;
      currentDirection = 1; // Mirar a la derecha
      isMovingHorizontally = true;
    }
    if (keys.left) {
      posX -= speed;
      currentDirection = -1; // Mirar a la izquierda
      isMovingHorizontally = true;
    }

    // Lógica de Salto y Gravedad
    if (keys.up && !isJumping) {
      velocityY = jumpPower;
      isJumping = true;
    }

    velocityY += gravity;
    posY -= velocityY;

    if (posY <= 0) {
      posY = 0;
      velocityY = 0;
      isJumping = false;
    }

    // Lógica de Ataque
    if (keys.attack && !isAttacking && Date.now() - lastAttackTime > attackDuration + 100) {
      isAttacking = true;
      lastAttackTime = Date.now();
      
      // Reiniciar el GIF de ataque
      char.style.backgroundImage = `url('Imagenes/char${charType}_attack.gif?t=${Date.now()}')`;
      char.classList.add('character-attacking');
      
      createHitEffect();
      checkTitleCollision(); // Comprobar si golpea el título

      setTimeout(() => {
        isAttacking = false;
        char.classList.remove('character-attacking');
        // Restaurar el GIF de idle/walking/jumping después del ataque
        if (isJumping) {
          char.style.backgroundImage = `url('Imagenes/char${charType}_jump.gif')`;
        } else if (isMovingHorizontally) {
          char.style.backgroundImage = `url('Imagenes/char${charType}_walk.gif')`;
        } else {
          char.style.backgroundImage = `url('Imagenes/char${charType}_idle.gif')`;
        }
      }, attackDuration);
    }

    // 2. ACTUALIZAR CLASES DE ANIMACIÓN (si no está atacando)
    if (!isAttacking) {
      if (isJumping) {
        char.className = 'character-jumping'; // Siempre usa el GIF de salto en el aire
        char.style.backgroundImage = `url('Imagenes/char${charType}_jump.gif')`;
      } else if (isMovingHorizontally) {
        char.className = 'character-walking';
        char.style.backgroundImage = `url('Imagenes/char${charType}_walk.gif')`;
      } else {
        char.className = 'character-idle';
        char.style.backgroundImage = `url('Imagenes/char${charType}_idle.gif')`;
      }
    }

    // 3. APLICAR POSICIÓN
    posX = Math.max(0, Math.min(window.innerWidth - char.offsetWidth, posX)); // Límites de pantalla
    char.style.left = posX + 'px';
    char.style.bottom = `calc(12vh + ${posY}px)`;
    char.style.transform = `scaleX(${currentDirection})`;

    requestAnimationFrame(gameLoop);
  };

  // Efecto visual de golpe al atacar
  const createHitEffect = () => {
    const effect = document.createElement('div');
    effect.className = 'attack-effect';
    effect.style.left = (currentDirection === 1 ? '60px' : '-20px');
    effect.style.top = '20px';
    char.appendChild(effect);
    setTimeout(() => effect.remove(), 200);
  };

  // Lógica de colisión y destrucción del título
  const checkTitleCollision = () => {
    if (!breakableTitle || titleBroken) return;

    const charRect = char.getBoundingClientRect();
    const titleRect = breakableTitle.getBoundingClientRect();

    // Simple detección de colisión (ajusta según el tamaño de tu personaje y título)
    const collisionThreshold = 50; // Distancia para considerar colisión
    const distanceX = Math.abs((charRect.left + charRect.right) / 2 - (titleRect.left + titleRect.right) / 2);
    const distanceY = Math.abs((charRect.top + charRect.bottom) / 2 - (titleRect.top + titleRect.bottom) / 2);

    if (distanceX < titleRect.width / 2 + collisionThreshold && distanceY < titleRect.height / 2 + collisionThreshold) {
      // ¡Colisión detectada! Romper el título
      breakableTitle.classList.add('broken');
      breakableTitle.classList.remove('repaired');
      titleBroken = true;
      startRepairTimer();
    }
  };

  const startRepairTimer = () => {
    if (repairTimeout) clearTimeout(repairTimeout);
    repairTimeout = setTimeout(() => {
      repairTitle();
    }, repairDelay);
  };

  const repairTitle = () => {
    if (!breakableTitle) return;
    breakableTitle.classList.remove('broken');
    breakableTitle.classList.add('repaired');
    titleBroken = false;
    // Eliminar la clase 'repaired' después de la animación para poder volver a romperlo
    breakableTitle.addEventListener('animationend', () => {
      breakableTitle.classList.remove('repaired');
    }, { once: true });
  };

  return { init };
})();

// ============ 9. INICIALIZACIÓN GENERAL ============
document.addEventListener('DOMContentLoaded', () => {
  UIController.init();
  ModalController.init();
  AnimationController.init();
  CarouselController.init();
  ExperienceController.init();
  GamesController.init();
  CharacterController.init(); // ¡Iniciamos el controlador del personaje!
});
