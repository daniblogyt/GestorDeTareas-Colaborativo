
      // ============================================
      // DATA & STATE
      // ============================================
      const cars = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "Clase S",
    year: 2024,
    price: 125000,
    type: "Sedán",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "455 CV",
      acceleration: "4.4s",
      fuel: "Híbrido",
      transmission: "Automático",
    },
    description:
      "El pináculo del lujo automotriz. Tecnología innovadora, confort inigualable y diseño atemporal.",
  },
  {
    id: 2,
    brand: "BMW",
    model: "Serie 7",
    year: 2024,
    price: 118000,
    type: "Sedán",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "536 CV",
      acceleration: "4.2s",
      fuel: "Eléctrico",
      transmission: "Automático",
    },
    description:
      "Elegancia deportiva y sostenibilidad. El Serie 7 redefine la movilidad de lujo.",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911 Carrera",
    year: 2023,
    price: 142000,
    type: "Deportivo",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "385 CV",
      acceleration: "4.0s",
      fuel: "Gasolina",
      transmission: "PDK",
    },
    description:
      "Un icono atemporal. El 911 combina tradición con la última tecnología deportiva.",
  },
  {
    id: 4,
    brand: "Audi",
    model: "e-tron GT",
    year: 2024,
    price: 135000,
    type: "Eléctrico",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "646 CV",
      acceleration: "3.3s",
      fuel: "Eléctrico",
      transmission: "Automático",
    },
    description:
      "El futuro de la movilidad eléctrica. Rendimiento excepcional con cero emisiones.",
  },
  {
    id: 5,
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 138000,
    type: "Eléctrico",
    image:
      "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "1020 CV",
      acceleration: "2.1s",
      fuel: "Eléctrico",
      transmission: "Automático",
    },
    description:
      "La berlina más rápida del mundo. Tecnología de vanguardia y autonomía excepcional.",
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    model: "G-Class",
    year: 2023,
    price: 165000,
    type: "SUV",
    image:
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "585 CV",
      acceleration: "4.5s",
      fuel: "Gasolina",
      transmission: "Automático",
    },
    description:
      "El SUV más icónico del mundo. Capacidad todoterreno sin comprometer el lujo.",
  },
  {
    id: 7,
    brand: "BMW",
    model: "X7",
    year: 2024,
    price: 98000,
    type: "SUV",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954e0d4a?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954e0d4a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "523 CV",
      acceleration: "4.7s",
      fuel: "Gasolina",
      transmission: "Automático",
    },
    description:
      "El SUV definitivo para familias exigentes. Espacio, lujo y tecnología en perfecta armonía.",
  },
  {
    id: 8,
    brand: "Audi",
    model: "R8",
    year: 2023,
    price: 185000,
    type: "Deportivo",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      power: "620 CV",
      acceleration: "3.1s",
      fuel: "Gasolina",
      transmission: "S tronic",
    },
    description:
      "Superdeportivo con alma de competición. Experiencia de conducción pura y emocionante.",
  },
];

const rentalCars = [
  {
    id: 101,
    brand: "Mercedes-Benz",
    model: "Clase C Cabrio",
    year: 2023,
    dailyPrice: 180,
    type: "Descapotable",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Gasolina", seats: 4, transmission: "Automático" },
    features: ["GPS", "Bluetooth", "Asientos de cuero", "Sensores parking"],
  },
  {
    id: 102,
    brand: "BMW",
    model: "Serie 4 Gran Coupé",
    year: 2023,
    dailyPrice: 150,
    type: "Coupé",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Diésel", seats: 5, transmission: "Automático" },
    features: ["GPS", "Apple CarPlay", "Cámara 360", "Techo solar"],
  },
  {
    id: 103,
    brand: "Audi",
    model: "A5 Sportback",
    year: 2024,
    dailyPrice: 165,
    type: "Sedán",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Híbrido", seats: 5, transmission: "Automático" },
    features: [
      "GPS",
      "Android Auto",
      "Sonido Bang & Olufsen",
      "Carga inalámbrica",
    ],
  },
  {
    id: 104,
    brand: "Porsche",
    model: "Cayenne",
    year: 2023,
    dailyPrice: 280,
    type: "SUV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Gasolina", seats: 5, transmission: "Automático" },
    features: ["GPS", "Air suspension", "Massage seats", "Night Vision"],
  },
  {
    id: 105,
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    dailyPrice: 120,
    type: "Eléctrico",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Eléctrico", seats: 5, transmission: "Automático" },
    features: ["Autopilot", "Supercharger", "Netflix", "Glass roof"],
  },
  {
    id: 106,
    brand: "Range Rover",
    model: "Velar",
    year: 2023,
    dailyPrice: 220,
    type: "SUV",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954e0d4a?auto=format&fit=crop&w=800&q=80",
    specs: { fuel: "Diésel", seats: 5, transmission: "Automático" },
    features: ["GPS", "Terrain Response", "Meridian Sound", "Head-up Display"],
  },
];



      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      let repairs = JSON.parse(localStorage.getItem("repairs")) || [];
      let commercialListings = JSON.parse(localStorage.getItem("commercialListings")) || [];
      let repairPhotos = [];
      let commercialPhotos = [];

      // ============================================
      // INIT
      // ============================================

      document.addEventListener("DOMContentLoaded", () => {
        initTheme();
        updateNavigation();
        renderFeaturedCars();
        renderCarsGrid();
        renderRentalCars();
        updateFavoritesCount();
        
        if (currentUser) {
          updateAuthUI();
          if (currentUser.role === 'mecanico') loadMechanicDashboard();
          if (currentUser.role === 'comercial') loadCommercialDashboard();
          if (currentUser.role === 'admin') loadAdminDashboard();
        }
      });

      // ============================================
      // THEME
      // ============================================

      function initTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        }
      }

      function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
      }

      // ============================================
      // AUTH & ROLES
      // ============================================

      function openAuthModal(mode) {
        document.getElementById("auth-modal").classList.remove("hidden");
        document.getElementById("login-form").classList.toggle("hidden", mode !== "login");
        document.getElementById("register-form").classList.toggle("hidden", mode !== "register");
        document.body.style.overflow = "hidden";
        lucide.createIcons();
      }

      function closeAuthModal() {
        document.getElementById("auth-modal").classList.add("hidden");
        document.body.style.overflow = "";
      }

      function switchAuthMode(mode) {
        document.getElementById("login-form").classList.toggle("hidden", mode !== "login");
        document.getElementById("register-form").classList.toggle("hidden", mode !== "register");
        lucide.createIcons();
      }

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value; // Añadido por si lo necesitas
  const role = document.querySelector('input[name="login-role"]:checked').value;
  
  // Crear usuario
  currentUser = {
    name: email.split("@")[0],
    email: email,
    role: role,
    id: Date.now(),
  };

  // Guardar en localStorage PRIMERO
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  
  // Cerrar modal
  closeAuthModal();
  
  // Actualizar navegación inmediatamente (esto es lo que el usuario ve primero)
  updateNavigation();
  
  // Pequeño delay para asegurar que el DOM está listo
  requestAnimationFrame(() => {
    updateAuthUI();
    
    // Redirigir según rol
    switch(role) {
      case 'mecanico':
        showSection('mecanico-dashboard');
        break;
      case 'comercial':
        showSection('comercial-dashboard');
        break;
      case 'admin':
        showSection('admin-dashboard');
        break;
      default:
        showSection('home');
    }
    
    showToast(`Bienvenido, ${currentUser.name}`);
  });
}

      function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const role = document.getElementById("reg-role").value;

        currentUser = {
          name: name,
          email: email,
          role: role,
          id: Date.now(),
        };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        updateAuthUI();
        updateNavigation();
        closeAuthModal();
        showToast("Cuenta creada exitosamente");
        
        setTimeout(() => {
          if (role === 'mecanico') showSection('mecanico-dashboard');
          else if (role === 'comercial') showSection('comercial-dashboard');
          else if (role === 'admin') showSection('admin-dashboard');
          else showSection('home');
        }, 500);
      }

      function logout() {
        currentUser = null;
        localStorage.removeItem("currentUser");
        updateAuthUI();
        updateNavigation();
        showToast("Sesión cerrada");
        showSection('home');
      }

      function updateAuthUI() {
        const navLinks = document.getElementById("nav-links");
        const mobileNavLinks = document.getElementById("mobile-nav-links");
        const roleIndicator = document.getElementById("role-indicator");
        
        if (!currentUser) {
          navLinks.innerHTML = `
            <button onclick="showSection('catalogo')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Comprar</button>
            <button onclick="showSection('alquiler')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Alquilar</button>
            <button onclick="openAuthModal('login')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Taller</button>
            <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><i data-lucide="moon" class="h-5 w-5 dark:text-white"></i></button>
            <button onclick="openAuthModal('login')" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Iniciar Sesión</button>
            <button onclick="openAuthModal('register')" class="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105">Registrarse</button>
          `;
          roleIndicator.classList.add("hidden");
        } else {
          roleIndicator.textContent = currentUser.role;
          roleIndicator.className = `ml-3 role-badge role-${currentUser.role}`;
          roleIndicator.classList.remove("hidden");
        }
        
        lucide.createIcons();
      }

      function updateNavigation() {
        const navLinks = document.getElementById("nav-links");
        const mobileNavLinks = document.getElementById("mobile-nav-links");
        const footerLinks = document.getElementById("footer-account-links");
        
        if (!currentUser) {
          navLinks.innerHTML = `
            <button onclick="showSection('catalogo')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Comprar</button>
            <button onclick="showSection('alquiler')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Alquilar</button>
            <button onclick="openAuthModal('login')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Taller</button>
            <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><i data-lucide="moon" class="h-5 w-5 dark:text-white"></i></button>
            <button onclick="openAuthModal('login')" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Iniciar Sesión</button>
            <button onclick="openAuthModal('register')" class="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105">Registrarse</button>
          `;
          footerLinks.innerHTML = `
            <li><button onclick="openAuthModal('login')" class="hover:text-white transition-colors">Iniciar sesión</button></li>
            <li><button onclick="openAuthModal('register')" class="hover:text-white transition-colors">Registrarse</button></li>
          `;
        } else {
          // Según el rol
          let roleSpecificLinks = '';
          let footerRoleLinks = '';
          
          if (currentUser.role === 'cliente') {
            roleSpecificLinks = `
              <button onclick="showSection('catalogo')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Comprar</button>
              <button onclick="showSection('alquiler')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Alquilar</button>
              <button onclick="showSection('reparaciones')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Taller</button>
              <button onclick="showSection('favoritos')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors relative">Favoritos<span id="fav-count" class="absolute -top-2 -right-4 bg-black dark:bg-white text-white dark:text-black text-xs rounded-full h-5 w-5 flex items-center justify-center opacity-0 transition-opacity">0</span></button>
            `;
            footerRoleLinks = `
              <li><button onclick="showSection('favoritos')" class="hover:text-white transition-colors">Favoritos</button></li>
              <li><button onclick="showSection('reparaciones')" class="hover:text-white transition-colors">Mis reparaciones</button></li>
            `;
          } else if (currentUser.role === 'mecanico') {
            roleSpecificLinks = `
              <button onclick="showSection('mecanico-dashboard')" class="text-sm font-medium text-amber-600 dark:text-amber-400">Panel Mecánico</button>
              <button onclick="showSection('catalogo')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Ver Catálogo</button>
            `;
            footerRoleLinks = `<li><button onclick="showSection('mecanico-dashboard')" class="hover:text-white transition-colors">Panel de trabajo</button></li>`;
          } else if (currentUser.role === 'comercial') {
            roleSpecificLinks = `
              <button onclick="showSection('comercial-dashboard')" class="text-sm font-medium text-emerald-600 dark:text-emerald-400">Panel Comercial</button>
              <button onclick="showSection('vender')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Nuevo Vehículo</button>
            `;
            footerRoleLinks = `
              <li><button onclick="showSection('comercial-dashboard')" class="hover:text-white transition-colors">Mis ventas</button></li>
              <li><button onclick="showSection('vender')" class="hover:text-white transition-colors">Publicar vehículo</button></li>
            `;
          } else if (currentUser.role === 'admin') {
            roleSpecificLinks = `
              <button onclick="showSection('admin-dashboard')" class="text-sm font-medium text-purple-600 dark:text-purple-400">Admin</button>
              <button onclick="showSection('catalogo')" class="text-sm font-medium hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">Catálogo</button>
            `;
            footerRoleLinks = `<li><button onclick="showSection('admin-dashboard')" class="hover:text-white transition-colors">Panel admin</button></li>`;
          }
          
          navLinks.innerHTML = `
            ${roleSpecificLinks}
            <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><i data-lucide="moon" class="h-5 w-5 dark:text-white"></i></button>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Hola, ${currentUser.name}</span>
            <button onclick="logout()" class="text-sm font-medium text-red-600 hover:text-red-700">Salir</button>
          `;
          
          footerLinks.innerHTML = `
            ${footerRoleLinks}
            <li><button onclick="logout()" class="hover:text-white transition-colors text-red-400">Cerrar sesión</button></li>
          `;
        }
        
        lucide.createIcons();
      }

      // ============================================
      // NAVIGATION
      // ============================================

      function showSection(sectionId) {
        // Ocultar todas las secciones
        document.querySelectorAll("main > section").forEach(section => {
          section.classList.add("hidden");
          section.classList.remove("section-active");
        });
        
        // Mostrar la sección solicitada
        const target = document.getElementById(sectionId);
        if (target) {
          target.classList.remove("hidden");
          target.classList.add("section-active", "fade-in");
        }
        
        window.scrollTo(0, 0);
        
        // Renderizar contenido específico
        if (sectionId === 'catalogo') renderCarsGrid();
        if (sectionId === 'favoritos') renderFavorites();
        if (sectionId === 'reparaciones') renderMyRepairs();
        if (sectionId === 'mecanico-dashboard') loadMechanicDashboard();
        if (sectionId === 'comercial-dashboard') loadCommercialDashboard();
        if (sectionId === 'admin-dashboard') loadAdminDashboard();
        
        lucide.createIcons();
      }

      function toggleMobileMenu() {
        document.getElementById("mobile-menu").classList.toggle("hidden");
      }

      // ============================================
      // REPARACIONES - CLIENTE
      // ============================================

      function handleRepairPhotos(files) {
        repairPhotos = Array.from(files).slice(0, 4);
        const preview = document.getElementById("repair-photo-preview");
        preview.innerHTML = repairPhotos.map(file => `
          <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img src="${URL.createObjectURL(file)}" class="w-full h-full object-cover">
          </div>
        `).join("");
      }

      function handleRepairRequest(e) {
        e.preventDefault();
        
        const repair = {
          id: Date.now(),
          clientId: currentUser.id,
          clientName: currentUser.name,
          brand: document.getElementById("repair-brand").value,
          model: document.getElementById("repair-model").value,
          year: document.getElementById("repair-year").value,
          plate: document.getElementById("repair-plate").value,
          type: document.getElementById("repair-type").value,
          description: document.getElementById("repair-desc").value,
          status: "pending",
          date: new Date().toLocaleDateString("es-ES"),
          photos: repairPhotos.length,
          mechanicId: null,
          mechanicName: null,
          estimate: null,
          finalPrice: null
        };
        
        repairs.push(repair);
        localStorage.setItem("repairs", JSON.stringify(repairs));
        
        // Reset form
        e.target.reset();
        repairPhotos = [];
        document.getElementById("repair-photo-preview").innerHTML = "";
        
        showToast("Solicitud enviada. Te contactaremos pronto.");
        renderMyRepairs();
      }

      function renderMyRepairs() {
        const container = document.getElementById("my-repairs-list");
        const empty = document.getElementById("no-repairs");
        
        const myRepairs = repairs.filter(r => r.clientId === currentUser?.id);
        
        if (myRepairs.length === 0) {
          container.innerHTML = "";
          empty.classList.remove("hidden");
          return;
        }
        
        empty.classList.add("hidden");
        container.innerHTML = myRepairs.map(repair => `
          <div class="bg-white dark:bg-dark-surface rounded-2xl p-6 shadow-sm border-l-4 ${getStatusColor(repair.status)}">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-bold dark:text-white">${repair.brand} ${repair.model}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">${repair.plate} • ${repair.year}</p>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(repair.status)}">
                ${getStatusText(repair.status)}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${repair.description}</p>
            <div class="flex justify-between items-center text-sm">
              <span class="text-gray-400">Solicitado: ${repair.date}</span>
              ${repair.estimate ? `<span class="font-bold text-blue-600">Presupuesto: €${repair.estimate}</span>` : ''}
            </div>
            ${repair.mechanicName ? `<p class="text-sm text-gray-500 mt-2">Mecánico asignado: ${repair.mechanicName}</p>` : ''}
          </div>
        `).join("");
        
        lucide.createIcons();
      }

      function getStatusColor(status) {
        const colors = {
          'pending': 'border-yellow-500',
          'in-progress': 'border-blue-500',
          'completed': 'border-green-500',
          'rejected': 'border-red-500'
        };
        return colors[status] || 'border-gray-500';
      }

      function getStatusBadgeClass(status) {
        const classes = {
          'pending': 'status-pending',
          'in-progress': 'status-progress',
          'completed': 'status-completed',
          'rejected': 'status-rejected'
        };
        return classes[status] || 'bg-gray-100 text-gray-800';
      }

      function getStatusText(status) {
        const texts = {
          'pending': 'Pendiente',
          'in-progress': 'En progreso',
          'completed': 'Completado',
          'rejected': 'Rechazado'
        };
        return texts[status] || status;
      }

      // ============================================
      // MECÁNICO DASHBOARD
      // ============================================

      function loadMechanicDashboard() {
        const pending = repairs.filter(r => r.status === 'pending');
        const inProgress = repairs.filter(r => r.status === 'in-progress' && r.mechanicId === currentUser.id);
        const completed = repairs.filter(r => r.status === 'completed' && r.mechanicId === currentUser.id);
        
        document.getElementById("mechanic-pending-count").textContent = pending.length;
        document.getElementById("mechanic-progress-count").textContent = inProgress.length;
        document.getElementById("mechanic-completed-count").textContent = completed.length;
        
        renderMechanicRepairs('all');
      }

      function renderMechanicRepairs(filter) {
        const container = document.getElementById("mechanic-repairs-list");
        const empty = document.getElementById("mechanic-no-repairs");
        
        let filtered = repairs;
        if (filter === 'pending') filtered = repairs.filter(r => r.status === 'pending');
        if (filter === 'in-progress') filtered = repairs.filter(r => r.status === 'in-progress' && r.mechanicId === currentUser.id);
        if (filter === 'completed') filtered = repairs.filter(r => r.status === 'completed' && r.mechanicId === currentUser.id);
        
        if (filtered.length === 0) {
          container.innerHTML = "";
          empty.classList.remove("hidden");
          return;
        }
        
        empty.classList.add("hidden");
        container.innerHTML = filtered.map(repair => `
          <div class="bg-white dark:bg-dark-surface rounded-2xl p-6 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-lg font-bold dark:text-white">${repair.brand} ${repair.model}</h3>
                  <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(repair.status)}">${getStatusText(repair.status)}</span>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${repair.plate} • ${repair.year} • ${repair.type}</p>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${repair.description}</p>
                <p class="text-sm text-gray-500">Cliente: ${repair.clientName} • ${repair.date}</p>
              </div>
              
              <div class="flex flex-col gap-2 min-w-[200px]">
                ${repair.status === 'pending' ? `
                  <button onclick="acceptRepair(${repair.id})" class="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="check" class="h-4 w-4"></i> Aceptar
                  </button>
                  <button onclick="rejectRepair(${repair.id})" class="px-4 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="x" class="h-4 w-4"></i> Rechazar
                  </button>
                ` : repair.status === 'in-progress' ? `
                  <div class="space-y-2">
                    <input type="number" id="estimate-${repair.id}" placeholder="Presupuesto (€)" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-dark-border dark:bg-dark-bg dark:text-white text-sm">
                    <button onclick="completeRepair(${repair.id})" class="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                      <i data-lucide="check-circle" class="h-4 w-4"></i> Completar
                    </button>
                  </div>
                ` : `
                  <div class="text-right">
                    <p class="text-sm text-gray-500">Precio final</p>
                    <p class="text-xl font-bold text-green-600">€${repair.finalPrice || repair.estimate || 0}</p>
                  </div>
                `}
              </div>
            </div>
          </div>
        `).join("");
        
        lucide.createIcons();
      }

      function filterRepairs(filter) {
        renderMechanicRepairs(filter);
      }

      function acceptRepair(repairId) {
        const repair = repairs.find(r => r.id === repairId);
        if (repair) {
          repair.status = 'in-progress';
          repair.mechanicId = currentUser.id;
          repair.mechanicName = currentUser.name;
          localStorage.setItem("repairs", JSON.stringify(repairs));
          showToast("Reparación aceptada");
          loadMechanicDashboard();
        }
      }

      function rejectRepair(repairId) {
        const repair = repairs.find(r => r.id === repairId);
        if (repair) {
          repair.status = 'rejected';
          localStorage.setItem("repairs", JSON.stringify(repairs));
          showToast("Reparación rechazada");
          loadMechanicDashboard();
        }
      }

      function completeRepair(repairId) {
        const estimate = document.getElementById(`estimate-${repairId}`).value;
        const repair = repairs.find(r => r.id === repairId);
        if (repair) {
          repair.status = 'completed';
          repair.finalPrice = estimate || repair.estimate;
          localStorage.setItem("repairs", JSON.stringify(repairs));
          showToast("Reparación completada");
          loadMechanicDashboard();
        }
      }

      // ============================================
      // COMERCIAL DASHBOARD
      // ============================================

      function handleCommercialPhotos(files) {
        commercialPhotos = Array.from(files).slice(0, 5);
        const preview = document.getElementById("commercial-photo-preview");
        preview.innerHTML = commercialPhotos.map(file => `
          <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img src="${URL.createObjectURL(file)}" class="w-full h-full object-cover">
          </div>
        `).join("");
      }

      function handleCommercialSell(e) {
        e.preventDefault();
        
        if (commercialPhotos.length < 3) {
          showToast("Por favor sube al menos 3 fotos");
          return;
        }
        
        const listing = {
          id: Date.now(),
          sellerId: currentUser.id,
          sellerName: currentUser.name,
          brand: document.getElementById("commercial-brand").value,
          model: document.getElementById("commercial-model").value,
          year: parseInt(document.getElementById("commercial-year").value),
          km: parseInt(document.getElementById("commercial-km").value),
          price: parseInt(document.getElementById("commercial-price").value),
          type: document.getElementById("commercial-type").value,
          fuel: document.getElementById("commercial-fuel").value,
          description: document.getElementById("commercial-desc").value,
          image: URL.createObjectURL(commercialPhotos[0]),
          date: new Date().toLocaleDateString("es-ES"),
          status: 'active'
        };
        
        commercialListings.push(listing);
        localStorage.setItem("commercialListings", JSON.stringify(commercialListings));
        
        // También agregar al catálogo general
        cars.push({
          id: listing.id,
          brand: listing.brand,
          model: listing.model,
          year: listing.year,
          price: listing.price,
          type: listing.type,
          fuel: listing.fuel,
          image: listing.image,
          specs: { power: "N/A", acceleration: "N/A" },
          description: listing.description
        });
        
        e.target.reset();
        commercialPhotos = [];
        document.getElementById("commercial-photo-preview").innerHTML = "";
        
        showToast("Vehículo publicado en el catálogo");
        showSection('comercial-dashboard');
      }

      function loadCommercialDashboard() {
        const myListings = commercialListings.filter(l => l.sellerId === currentUser.id);
        const totalSales = myListings.reduce((sum, l) => sum + (l.sold ? l.price : 0), 0);
        const commission = totalSales * 0.02;
        
        document.getElementById("commercial-sales").textContent = totalSales.toLocaleString();
        document.getElementById("commercial-active").textContent = myListings.filter(l => !l.sold).length;
        document.getElementById("commercial-offers").textContent = Math.floor(Math.random() * 10); // Simulado
        document.getElementById("commercial-commission").textContent = commission.toLocaleString();
        
        const container = document.getElementById("commercial-listings");
        const empty = document.getElementById("commercial-no-listings");
        
        if (myListings.length === 0) {
          container.innerHTML = "";
          empty.classList.remove("hidden");
          return;
        }
        
        empty.classList.add("hidden");
        container.innerHTML = myListings.map(listing => `
          <div class="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-sm hover-lift">
            <div class="relative h-48">
              <img src="${listing.image}" class="w-full h-full object-cover">
              ${listing.sold ? '<div class="absolute inset-0 bg-black/60 flex items-center justify-center"><span class="text-white font-bold text-xl">VENDIDO</span></div>' : ''}
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold dark:text-white mb-1">${listing.brand} ${listing.model}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${listing.year} • ${listing.km.toLocaleString()} km</p>
              <div class="flex justify-between items-center">
                <p class="text-2xl font-bold text-emerald-600">€${listing.price.toLocaleString()}</p>
                <span class="text-xs px-2 py-1 rounded-full ${listing.sold ? 'bg-gray-100 text-gray-600' : 'bg-emerald-100 text-emerald-700'}">
                  ${listing.sold ? 'Vendido' : 'Activo'}
                </span>
              </div>
            </div>
          </div>
        `).join("");
      }

      // ============================================
      // ADMIN DASHBOARD
      // ============================================

      function loadAdminDashboard() {
        // Stats
        document.getElementById("admin-users-count").textContent = Math.floor(Math.random() * 500) + 100;
        document.getElementById("admin-sales").textContent = (Math.floor(Math.random() * 2000000) + 500000).toLocaleString();
        document.getElementById("admin-repairs").textContent = repairs.length;
        document.getElementById("admin-pending-repairs").textContent = repairs.filter(r => r.status === 'pending').length;
        document.getElementById("admin-stock").textContent = cars.length + commercialListings.length;
        
        // Users table
        const usersTable = document.getElementById("admin-users-table");
        const mockUsers = [
          { name: "Juan García", email: "juan@email.com", role: "cliente", status: "active" },
          { name: "María López", email: "maria@email.com", role: "mecanico", status: "active" },
          { name: "Carlos Ruiz", email: "carlos@email.com", role: "comercial", status: "active" },
          { name: "Admin", email: "admin@autoelite.com", role: "admin", status: "active" },
        ];
        
        usersTable.innerHTML = mockUsers.map(user => `
          <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td class="px-4 py-3 dark:text-white">${user.name}</td>
            <td class="px-4 py-3 text-gray-500 dark:text-gray-400">${user.email}</td>
            <td class="px-4 py-3"><span class="role-badge role-${user.role}">${user.role}</span></td>
            <td class="px-4 py-3"><span class="text-green-600 text-sm">● Activo</span></td>
            <td class="px-4 py-3">
              <button class="text-gray-400 hover:text-purple-600"><i data-lucide="edit" class="h-4 w-4"></i></button>
            </td>
          </tr>
        `).join("");
        
        // All repairs
        const repairsList = document.getElementById("admin-repairs-list");
        repairsList.innerHTML = repairs.map(repair => `
          <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-bg rounded-xl">
            <div>
              <p class="font-medium dark:text-white">${repair.brand} ${repair.model}</p>
              <p class="text-sm text-gray-500">${repair.clientName} • ${getStatusText(repair.status)}</p>
            </div>
            <span class="text-sm text-gray-400">${repair.date}</span>
          </div>
        `).join("");
        
        lucide.createIcons();
      }

      function showAdminTab(tab) {
        // Ocultar todo
        document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('[id^="tab-"]').forEach(el => {
          el.classList.remove('text-purple-600', 'border-b-2', 'border-purple-600');
          el.classList.add('text-gray-500');
        });
        
        // Mostrar seleccionado
        document.getElementById(`admin-content-${tab}`).classList.remove('hidden');
        document.getElementById(`tab-${tab}`).classList.remove('text-gray-500');
        document.getElementById(`tab-${tab}`).classList.add('text-purple-600', 'border-b-2', 'border-purple-600');
        
        lucide.createIcons();
      }

      // ============================================
      // CARS & CATALOG
      // ============================================

      function renderFeaturedCars() {
        const container = document.getElementById("featured-cars");
        if (!container) return;
        container.innerHTML = cars.slice(0, 3).map(car => createCarCard(car)).join("");
        lucide.createIcons();
      }

      function renderCarsGrid() {
        const grid = document.getElementById("cars-grid");
        if (!grid) return;
        
        const brand = document.getElementById("filter-brand")?.value;
        const type = document.getElementById("filter-type")?.value;
        const price = document.getElementById("filter-price")?.value;
        
        let filtered = cars;
        if (brand) filtered = filtered.filter(c => c.brand === brand);
        if (type) filtered = filtered.filter(c => c.type === type);
        if (price) {
          if (price === '0-50000') filtered = filtered.filter(c => c.price <= 50000);
          if (price === '50000-100000') filtered = filtered.filter(c => c.price > 50000 && c.price <= 100000);
          if (price === '100000+') filtered = filtered.filter(c => c.price > 100000);
        }
        
        if (filtered.length === 0) {
          document.getElementById("no-results").classList.remove("hidden");
          grid.innerHTML = "";
        } else {
          document.getElementById("no-results").classList.add("hidden");
          grid.innerHTML = filtered.map(car => createCarCard(car)).join("");
        }
        lucide.createIcons();
      }

      function createCarCard(car) {
        const isFav = favorites.includes(car.id);
        return `
          <div class="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-sm hover-lift group cursor-pointer" onclick="showCarDetail(${car.id})">
            <div class="relative h-64 image-hover">
              <img src="${car.image}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover">
              <button onclick="event.stopPropagation(); toggleFavorite(${car.id})" class="absolute top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-all shadow-md ${isFav ? 'text-red-500' : 'text-gray-400'}">
                <i data-lucide="heart" class="h-5 w-5 ${isFav ? 'fill-current' : ''}"></i>
              </button>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">${car.brand}</p>
                  <h3 class="text-xl font-bold dark:text-white">${car.model}</h3>
                </div>
                <span class="bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">${car.type}</span>
              </div>
              <div class="flex gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span class="flex items-center gap-1"><i data-lucide="gauge" class="h-4 w-4"></i> ${car.specs.power}</span>
                <span class="flex items-center gap-1"><i data-lucide="fuel" class="h-4 w-4"></i> ${car.fuel}</span>
              </div>
              <div class="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-dark-border">
                <p class="text-2xl font-bold serif dark:text-white">€${car.price.toLocaleString()}</p>
                <button class="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Ver detalles</button>
              </div>
            </div>
          </div>
        `;
      }

      function renderRentalCars() {
        const grid = document.getElementById("rental-grid");
        if (!grid) return;
        grid.innerHTML = rentalCars.map(car => `
          <div class="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-sm hover-lift">
            <div class="relative h-56">
              <img src="${car.image}" class="w-full h-full object-cover">
              <div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">€${car.dailyPrice}/día</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold dark:text-white mb-1">${car.brand} ${car.model}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">${car.year} • ${car.type}</p>
              <button onclick="showToast('Función de alquiler')" class="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all">
                Reservar ahora
              </button>
            </div>
          </div>
        `).join("");
        lucide.createIcons();
      }

     function showCarDetail(carId) {
  const car = cars.find(c => c.id === carId);
  if (!car) return;

  const modal = document.getElementById("car-detail-modal");
  const content = document.getElementById("car-detail-content");
  
  if (!modal || !content) {
    console.error("Modal elements not found");
    return;
  }

  const isFav = favorites.includes(carId);
  const isCommercial = commercialListings.some(l => l.id === carId);
  const listing = commercialListings.find(l => l.id === carId);

  // Generar array de imágenes (mínimo 3 para la galería)
  let images = car.images || [car.image];
  if (images.length === 1) {
    // Si solo hay una imagen, duplicarla para la galería
    images = [car.image, car.image, car.image];
  }

  content.innerHTML = `
    <!-- Left Side: Image Gallery -->
    <div class="md:w-3/5 bg-gray-100 dark:bg-dark-bg relative">
      <!-- Main Image -->
      <div class="relative h-64 md:h-[500px] overflow-hidden">
        <img id="main-gallery-image" src="${images[0]}" alt="${car.brand} ${car.model}" 
             class="w-full h-full object-cover transition-transform duration-500">
        
        <!-- Image Navigation Arrows -->
        ${images.length > 1 ? `
          <button onclick="changeGalleryImage(-1)" class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110">
            <i data-lucide="chevron-left" class="h-6 w-6"></i>
          </button>
          <button onclick="changeGalleryImage(1)" class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110">
            <i data-lucide="chevron-right" class="h-6 w-6"></i>
          </button>
        ` : ''}
        
        <!-- Image Counter -->
        <div class="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
          <span id="current-image-index">1</span> / ${images.length}
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="p-4 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border">
        <div class="flex gap-3 overflow-x-auto pb-2" id="gallery-thumbnails">
          ${images.map((img, idx) => `
            <button onclick="setGalleryImage(${idx})" 
                    class="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === 0 ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 dark:border-gray-600 hover:border-gray-400'}">
              <img src="${img}" class="w-full h-full object-cover">
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Right Side: Info & Actions -->
    <div class="md:w-2/5 p-6 md:p-8 lg:p-10 overflow-y-auto max-h-screen dark:text-white bg-white dark:bg-dark-surface">
      
      <!-- Header -->
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-2">
          <span class="px-3 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">${car.year}</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">${car.type}</span>
          ${isCommercial ? '<span class="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 rounded-full text-xs font-bold">COMERCIAL</span>' : ''}
        </div>
        <h1 class="serif text-3xl md:text-4xl font-bold mb-2">${car.brand} ${car.model}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg">${car.fuel} • ${car.specs.transmission || 'Automático'}</p>
      </div>

      <!-- Price Section -->
      <div class="bg-gray-50 dark:bg-dark-bg rounded-2xl p-6 mb-6">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Precio</p>
        <div class="flex items-baseline gap-2">
          <p class="text-4xl font-bold serif text-gray-900 dark:text-white">€${car.price.toLocaleString()}</p>
          ${isCommercial ? `<span class="text-sm text-emerald-600 font-medium">+ €${Math.round(car.price * 0.02).toLocaleString()} comisión</span>` : ''}
        </div>
        ${listing ? `<p class="text-sm text-gray-400 mt-2">Vendedor: ${listing.sellerName}</p>` : ''}
      </div>

      <!-- Description -->
      <div class="mb-6">
        <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
          <i data-lucide="file-text" class="h-5 w-5 text-gray-400"></i>
          Descripción
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${car.description}</p>
      </div>

      <!-- Specs Grid -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 dark:bg-dark-bg p-4 rounded-xl text-center">
          <i data-lucide="zap" class="h-6 w-6 mx-auto mb-2 text-amber-500"></i>
          <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Potencia</p>
          <p class="font-bold text-lg">${car.specs.power}</p>
        </div>
        <div class="bg-gray-50 dark:bg-dark-bg p-4 rounded-xl text-center">
          <i data-lucide="timer" class="h-6 w-6 mx-auto mb-2 text-blue-500"></i>
          <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">0-100 km/h</p>
          <p class="font-bold text-lg">${car.specs.acceleration}</p>
        </div>
        <div class="bg-gray-50 dark:bg-dark-bg p-4 rounded-xl text-center">
          <i data-lucide="fuel" class="h-6 w-6 mx-auto mb-2 text-green-500"></i>
          <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Combustible</p>
          <p class="font-bold text-lg">${car.fuel}</p>
        </div>
        <div class="bg-gray-50 dark:bg-dark-bg p-4 rounded-xl text-center">
          <i data-lucide="settings" class="h-6 w-6 mx-auto mb-2 text-purple-500"></i>
          <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Transmisión</p>
          <p class="font-bold text-lg">${car.specs.transmission || 'Auto'}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button onclick="${currentUser ? `initiatePurchase(${car.id})` : `requireAuthForPurchase(${car.id})`}" 
                class="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg">
          <i data-lucide="shopping-bag" class="h-5 w-5"></i>
          Comprar ahora
        </button>
        
        <div class="grid grid-cols-2 gap-3">
          <button onclick="${currentUser ? `makeOffer(${car.id})` : `requireAuthForOffer(${car.id})`}" 
                  class="py-3 bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
            <i data-lucide="tag" class="h-5 w-5"></i>
            Hacer oferta
          </button>
          <button onclick="toggleFavorite(${car.id}); updateDetailHeart(this)" 
                  class="py-3 border-2 ${isFav ? 'border-red-500 text-red-500' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'} rounded-xl font-semibold hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center gap-2">
            <i data-lucide="heart" class="h-5 w-5 ${isFav ? 'fill-current' : ''}"></i>
            ${isFav ? 'Guardado' : 'Favorito'}
          </button>
        </div>

        <button onclick="${currentUser ? `scheduleTestDrive(${car.id})` : `requireAuthForTestDrive(${car.id})`}" 
                class="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl font-medium hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center gap-2">
          <i data-lucide="calendar-clock" class="h-5 w-5"></i>
          Reservar prueba de conducción
        </button>
      </div>

      <!-- Additional Info -->
      <div class="mt-6 pt-6 border-t border-gray-200 dark:border-dark-border">
        <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <i data-lucide="shield-check" class="h-5 w-5 text-green-500"></i>
          <span>Garantía de 12 meses incluida</span>
        </div>
        <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-2">
          <i data-lucide="refresh-cw" class="h-5 w-5 text-blue-500"></i>
          <span>Devolución en 14 días</span>
        </div>
      </div>
    </div>
  `;

  // Guardar referencias para la galería
  window.currentGalleryImages = images;
  window.currentGalleryIndex = 0;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

// Funciones auxiliares para la galería
function changeGalleryImage(direction) {
  if (!window.currentGalleryImages) return;
  
  window.currentGalleryIndex += direction;
  
  if (window.currentGalleryIndex < 0) {
    window.currentGalleryIndex = window.currentGalleryImages.length - 1;
  } else if (window.currentGalleryIndex >= window.currentGalleryImages.length) {
    window.currentGalleryIndex = 0;
  }
  
  setGalleryImage(window.currentGalleryIndex);
}

function setGalleryImage(index) {
  if (!window.currentGalleryImages) return;
  
  window.currentGalleryIndex = index;
  const mainImg = document.getElementById("main-gallery-image");
  const counter = document.getElementById("current-image-index");
  
  if (mainImg) {
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = window.currentGalleryImages[index];
      mainImg.style.opacity = "1";
    }, 200);
  }
  
  if (counter) {
    counter.textContent = index + 1;
  }
  
  // Actualizar thumbnails activos
  document.querySelectorAll("#gallery-thumbnails button").forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add("border-blue-500", "ring-2", "ring-blue-200");
      btn.classList.remove("border-gray-200", "dark:border-gray-600");
    } else {
      btn.classList.remove("border-blue-500", "ring-2", "ring-blue-200");
      btn.classList.add("border-gray-200", "dark:border-gray-600");
    }
  });
}

function closeCarDetail() {
  const modal = document.getElementById("car-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  window.currentGalleryImages = null;
  window.currentGalleryIndex = 0;
}

function updateDetailHeart(btn) {
  const icon = btn.querySelector("i");
  const isFav = favorites.includes(window.currentCarId);
  
  if (isFav) {
    btn.classList.add("border-red-500", "text-red-500");
    btn.classList.remove("border-gray-300", "dark:border-gray-600", "text-gray-700", "dark:text-gray-300");
    icon.classList.add("fill-current");
    btn.innerHTML = `<i data-lucide="heart" class="h-5 w-5 fill-current"></i> Guardado`;
  } else {
    btn.classList.remove("border-red-500", "text-red-500");
    btn.classList.add("border-gray-300", "dark:border-gray-600", "text-gray-700", "dark:text-gray-300");
    icon.classList.remove("fill-current");
    btn.innerHTML = `<i data-lucide="heart" class="h-5 w-5"></i> Favorito`;
  }
  lucide.createIcons();
}

// Funciones de autenticación para acciones específicas
function requireAuthForPurchase(carId) {
  window.pendingPurchaseCarId = carId;
  closeCarDetail();
  openAuthModal("login");
  showToast("Inicia sesión para comprar este vehículo");
}

function requireAuthForOffer(carId) {
  window.pendingOfferCarId = carId;
  closeCarDetail();
  openAuthModal("login");
  showToast("Inicia sesión para hacer una oferta");
}

function requireAuthForTestDrive(carId) {
  window.pendingTestDriveCarId = carId;
  closeCarDetail();
  openAuthModal("login");
  showToast("Inicia sesión para reservar prueba");
}

function initiatePurchase(carId) {
  const car = cars.find(c => c.id === carId);
  showToast(`Iniciando proceso de compra para ${car.brand} ${car.model}`);
  // Aquí iría la lógica de checkout
}

function scheduleTestDrive(carId) {
  const car = cars.find(c => c.id === carId);
  showToast(`Prueba de conducción solicitada para ${car.brand} ${car.model}`);
  // Aquí iría el calendario de reservas
}

// Modificar makeOffer para que funcione desde el modal
function makeOffer(carId) {
  const car = cars.find(c => c.id === carId);
  const offer = prompt(`¿Cuánto ofreces por el ${car.brand} ${car.model}?\nPrecio actual: €${car.price.toLocaleString()}`);
  
  if (offer && !isNaN(offer) && offer > 0) {
    const offerData = {
      id: Date.now(),
      carId: car.id,
      carName: `${car.brand} ${car.model}`,
      carImage: car.image,
      originalPrice: car.price,
      offeredPrice: parseInt(offer),
      date: new Date().toLocaleDateString("es-ES"),
      status: "Pendiente"
    };
    
    let offers = JSON.parse(localStorage.getItem("offers")) || [];
    offers.push(offerData);
    localStorage.setItem("offers", JSON.stringify(offers));
    showToast(`Oferta de €${parseInt(offer).toLocaleString()} enviada`);
  }
}

      function toggleFavorite(carId) {
        if (!currentUser) {
          openAuthModal('login');
          return;
        }
        const index = favorites.indexOf(carId);
        if (index > -1) {
          favorites.splice(index, 1);
          showToast("Eliminado de favoritos");
        } else {
          favorites.push(carId);
          showToast("Añadido a favoritos");
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        updateFavoritesCount();
        renderCarsGrid();
        renderFeaturedCars();
      }

      function updateFavoritesCount() {
        const badge = document.getElementById("fav-count");
        if (badge) {
          badge.textContent = favorites.length;
          badge.classList.toggle("opacity-0", favorites.length === 0);
        }
      }

      function renderFavorites() {
        const grid = document.getElementById("favorites-grid");
        const empty = document.getElementById("no-favorites");
        
        if (favorites.length === 0) {
          grid.innerHTML = "";
          empty.classList.remove("hidden");
          return;
        }
        
        empty.classList.add("hidden");
        const favCars = cars.filter(c => favorites.includes(c.id));
        grid.innerHTML = favCars.map(car => createCarCard(car)).join("");
        lucide.createIcons();
      }

      function applyFilters() {
        renderCarsGrid();
      }

      function resetFilters() {
        document.getElementById("filter-brand").value = "";
        document.getElementById("filter-type").value = "";
        document.getElementById("filter-price").value = "";
        renderCarsGrid();
      }

      // ============================================
      // UTILS
      // ============================================

      function showToast(message) {
        const toast = document.getElementById("toast");
        document.getElementById("toast-message").textContent = message;
        toast.classList.remove("translate-y-20", "opacity-0");
        setTimeout(() => {
          toast.classList.add("translate-y-20", "opacity-0");
        }, 3000);
      }
   