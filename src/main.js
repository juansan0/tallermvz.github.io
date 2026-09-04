import "./style.css";

document.querySelector("#app").innerHTML = /* html */ `
  <!-- HEADER RESPONSIVE -->
  <header class="fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 w-full">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
      
      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-3 z-50">
        <div class="flex flex-col leading-none">
          <span class="text-xs font-bold text-cyan-600 uppercase tracking-wider">Taller de Chapa y Pintura</span>
        </div>
      </a>

      <!-- Input invisible y label para manejar el menú responsive con CSS puro -->
      <input type="checkbox" id="menu-toggle" class="peer hidden" />
      
      <label for="menu-toggle" class="md:hidden order-3 z-50 p-2 cursor-pointer text-slate-700 hover:text-cyan-600 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>

      <!-- Navegación Adaptable -->
      <nav class="absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-b-0 border-slate-200 md:flex space-y-4 md:space-y-0 md:space-x-8 text-sm font-medium p-6 md:p-0 shadow-lg md:shadow-none hidden peer-checked:block md:block z-40 transition-all">
        <a href="#inicio" class="block hover:text-cyan-600 transition">Inicio</a>
        <a href="#que-hacemos" class="block hover:text-cyan-600 transition">Qué hacemos?</a>
        <a href="#trabajos" class="block hover:text-cyan-600 transition">Nuestros Trabajos</a>
        <a href="#ubicacion" class="block hover:text-cyan-600 transition">Dónde Estamos</a>
      </nav>

      <!-- Botón WhatsApp Dinámico (oculto por defecto al cargar) -->
      <a id="header-wsp" 
         href="https://wa.me/549299XXXXXXX?text=Hola!%20Vi%20los%20trabajos%20en%20la%20web%20y%20quer%C3%ADa%20consultar%20para%20pedir%20un%20turno%20para%20mi%20auto" 
         target="_blank" 
         class="inline-flex items-center justify-center p-3 md:px-5 md:py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-95 rounded-xl shadow-sm opacity-0 pointer-events-none translate-y-2 transition-all duration-300 z-50">
         <svg class="w-5 h-5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.173.001 6.154 1.24 8.396 3.486 2.241 2.247 3.477 5.23 3.474 8.403-.005 6.597-5.343 11.944-11.897 11.944-2.005-.001-3.974-.507-5.713-1.47L0 24zm6.59-4.846c1.656.983 3.283 1.493 4.79 1.494 5.332 0 9.68-4.295 9.684-9.574.002-2.557-.994-4.961-2.808-6.779-1.813-1.818-4.225-2.819-6.78-2.822-5.34 0-9.69 4.296-9.695 9.575-.002 1.848.5 3.654 1.455 5.252l-.994 3.63 3.734-.964z"/>
         </svg>
         <span class="hidden md:inline">Contactar por WhatsApp</span>
      </a>

    </div>
  </header>

  <!-- INICIO -->
  <section id="inicio" class="mt-10 py-12 md:py-24 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center reveal">
    <div class="text-center md:text-left order-2 md:order-1">
      <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
        Dejamos tu auto impecable, <span class="text-cyan-600">sin vueltas ni demoras.</span>
      </h1>
      <p class="text-slate-600 mt-6 text-base md:text-lg leading-relaxed">
        Especialistas en chapa, pintura y sacabollos. Pasanos las fotos por WhatsApp y te cotizamos en minutos.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <!-- Botón CTA principal del Hero con ID de referencia -->
        <a id="hero-cta"
           href="https://wa.me/5492990000000?text=Hola!%20Quiero%20pedir%20un%20presupuesto" 
           target="_blank" 
           class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-95 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-center w-full sm:w-auto">
          Cotizar por WhatsApp Ya
        </a>
      </div>
    </div>
    <div class="relative order-1 md:order-2">
      <img src="../public/assets/taller.jpeg" class="rounded-3xl shadow-xl object-cover w-full h-[250px] sm:h-[400px] border border-slate-200 transition-transform duration-500 hover:scale-[1.02]">
    </div>
  </section>

  <!-- QUÉ HACEMOS -->
  <section id="que-hacemos" class="py-12 md:py-16 bg-white border-y border-slate-200">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 md:gap-12 items-start">
      
      <!-- Bloque Trayectoria -->
      <div class="md:col-span-1 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 text-center md:text-left reveal">
        <span class="text-4xl font-black text-cyan-600 block mb-2">15+</span>
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Años de Trayectoria</h2>
        <p class="text-slate-600 mt-4 text-sm leading-relaxed">
          Somos un Taller Familiar Enfocado en la Excelencia. Contamos con Instalaciones Equipadas con Tecnología de Última Generación y Personal Altamente Capacitado para Devolverle a Tu Vehículo Su Estado Original, Garantizando Acabados de Fábrica.
        </p>
      </div>

      <!-- Especialidades -->
      <div class="md:col-span-2 text-center md:text-left reveal">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">¿Qué hacemos en el taller?</h2>
        
        <div class="grid sm:grid-cols-2 gap-6 text-left">
          <div class="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Pintura Automotriz Premium</h4>
              <p class="text-slate-600 text-sm mt-1">Laboratorio de color computarizado para lograr el tono exacto original. Pintado y horneado en cabina presurizada.</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Chapa y Estirado Estructural</h4>
              <p class="text-slate-600 text-sm mt-1">Reparación de choques medianos y pesados. Desabollado y encuadre perfecto de paneles y piezas móviles.</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Sistema Sacabollos (PDR)</h4>
              <p class="text-slate-600 text-sm mt-1">Arreglo de abolladuras por granizo o toques de estacionamiento sin necesidad de dañar ni repintar la pieza original.</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Tratamientos de Brillo y Pulido</h4>
              <p class="text-slate-600 text-sm mt-1">Eliminación de rayas superficiales, revivido de pintura y aplicación de tratamientos acrílicos o cerámicos protectores.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- NUESTROS TRABAJOS -->
  <section id="trabajos" class="py-12 md:py-16 max-w-6xl mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12 reveal">
      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Resultados que hablan por nosotros</h2>
      <p class="text-slate-600 mt-3 text-sm md:text-base">Transparencia absoluta. Mostramos el proceso real de desabollado, la precisión en el calce de piezas y el acabado final del color espejo.</p>
    </div>

    <!-- Grilla de Trabajos -->
    <div class="grid md:grid-cols-2 gap-6 md:gap-8">
      
      <!-- Trabajo 1 -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow z-10">ANTES</span>
            <img src="../public/assets/auto-antes.jpg" alt="Choque lateral Honda Fit antes de reparar" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow z-10">DESPUÉS</span>
            <img src="../public/assets/auto-despues.jpg" alt="Honda Fit reparado terminado" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Reparación de Choque Lateral Completo</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full">Chapa y Pintura</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">Honda Fit - Reconstrucción pesada de zócalo, panel lateral trasero y línea de puerta abollada por impacto. Acabado final con pintura poliuretánica a tono original de fábrica.</p>
      </div>

      <!-- Trabajo 2 -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow z-10">ANTES</span>
            <img src="../public/assets/auto-antes.jpg" alt="Trompa desalineada Volkswagen Polo antes" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow z-10">DESPUÉS</span>
            <img src="../public/assets/auto-despues.jpg" alt="Volkswagen Polo terminado e impecable" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Encuadre Frontal y Reconstrucción</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-cyan-50 text-cyan-700 rounded-full">Encuadre Óptico</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">Volkswagen Polo - Centrado y alineación de capot, paragolpes frontal y ópticas tras un choque de trompa leve. Ajuste milimétrico de las líneas de carrocería originales.</p>
      </div>

      <!-- Trabajo 3 -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow z-10">ANTES</span>
            <img src="../public/assets/auto-antes.jpg" alt="Panel de BMW E82 abollado" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow z-10">DESPUÉS</span>
            <img src="../public/assets/auto-despues.jpg" alt="Panel de Clio reparado a nuevo" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Desabollado de Guardabarros y Panel</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full">Reparación Fina</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">BMW E82 - Planchado artesanal de chapa en pasarruedas trasero afectado por un raspón profundo. Tratamiento de masillado ultraliviano y pintura con difuminado perfecto.</p>
      </div>

      <!-- Trabajo 4 -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow z-10">ANTES</span>
            <img src="../public/assets/auto-antes.jpg" alt="Portón trasero hundido de Voyage antes" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="relative overflow-hidden group">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow z-10">DESPUÉS</span>
            <img src="../public/assets/auto-despues.jpg" alt="Voyage con pintura espejo terminado" class="w-full h-36 sm:h-48 object-cover bg-slate-100 group-hover:scale-105 transition-transform duration-300">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Arreglo de Portón Trasero y Baúl</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded-full">Pintura Completa</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">Honda City - Reparación de un hundimiento profundo en la tapa del baúl. Desabollado completo, reinstalación de emblemas y repintado general con acabado espejo.</p>
      </div>

    </div>
  </section>

  <!-- SECCIÓN REVIEWS DE GOOGLE MAPS -->
  <section id="opiniones" class="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 reveal">
      
      <div class="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Lo que dicen nuestros clientes en Google Maps
        </h2>
        <div class="flex items-center justify-center gap-2 mt-3">
          <div class="flex text-amber-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <span class="text-sm font-bold text-slate-700">4.4 / 5</span>
        </div>
      </div>

      <!-- Grilla de Reseñas -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div class="flex text-amber-400 mb-3"><span class="text-lg">★★★★★</span></div>
            <p class="text-slate-600 text-sm italic leading-relaxed">"Excelente trabajo, muy rápidos, me resolvieron un tema que no le correspondía... 10/10 la atención"</p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold text-sm">J</div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Jorge Kategora</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div class="flex text-amber-400 mb-3"><span class="text-lg">★★★★★</span></div>
            <p class="text-slate-600 text-sm italic leading-relaxed">"Excelente atencion, es la segunda vez que voy y son muy prolijos y atentos. Siempre responden los mensajes."</p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">M</div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Mariana Mitoire</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div class="flex text-amber-400 mb-3"><span class="text-lg">★★★★★</span></div>
            <p class="text-slate-600 text-sm italic leading-relaxed">"Muy amables, super prolijo el trabajo que realizaron en mi auto. Rapidos... Súper recomendables!"</p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">V</div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Veronica Ponce</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <a href="https://maps.google.com/?cid=6687002016254546739" target="_blank" class="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition">
          <span>Ver todas las reseñas en Google Maps</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

    </div>
  </section>

  <!-- DÓNDE ESTAMOS -->
  <section id="ubicacion" class="bg-slate-900 text-slate-100 py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center reveal">
      <div class="text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white">¿Dónde estamos?</h2>
        <div class="mt-4 space-y-2 text-sm text-slate-300">
          <p><strong class="text-white mr-2">Horarios:</strong> Lunes a Viernes de 8:00 a 18:00 hs</p>
        </div>
      </div>
      <div class="w-full h-64 md:h-80 bg-slate-800 rounded-2xl overflow-hidden relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.575831544097!2d-68.1202011!3d-38.9565176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33cfb8a9cb6b%3A0x5ccd3adfa9cd5333!2sTaller%20De%20Chapa%20Y%20Pintura%20Mvz!5e0!3m2!1ses-419!2sar!4v1783191062346!5m2!1ses-419!2sar" class="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-950 text-slate-600 py-8 text-center text-xs border-t border-slate-900 px-4">
    <p>© 2026 MVZ & MRS Chapa y Pintura.</p>
    <p class="mt-1">Desarrollado por Juan Manuel Sanchez.</p>
  </footer>
`;

// Lógica de animaciones al hacer Scroll (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.12
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Observador para mostrar/ocultar el botón de WhatsApp del Header
const headerWspBtn = document.getElementById("header-wsp");
const heroCtaBtn = document.getElementById("hero-cta");

if (heroCtaBtn && headerWspBtn) {
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si el botón principal del Hero deja de verse (isIntersecting == false), mostramos el del header
      if (!entry.isIntersecting) {
        headerWspBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-2");
        headerWspBtn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      } else {
        // Si el botón del Hero vuelve a entrar en pantalla, ocultamos el del header
        headerWspBtn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
        headerWspBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-2");
      }
    });
  }, { threshold: 0 });

  ctaObserver.observe(heroCtaBtn);
}

// Control para forzar inicio en la parte superior al recargar
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});