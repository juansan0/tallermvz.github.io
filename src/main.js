import "./style.css";

document.querySelector("#app").innerHTML = /* html */ `
  <!-- HEADER RESPONSIVE -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
      
      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-3 z-50">
        <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t39.30808-6/277785878_464639365461248_2415169011581825351_n.jpg?stp=dst-jpg_tt6&cstp=mx490x490&ctp=s490x490&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eNDKpBnezLIQ7kNvwFirfFC&_nc_oc=AdpfA-3u4L_XMDg_EPI94ROmymXDCGmJQmerVpy9dnGJX2MkylWZPvGXdz-xYRWd_Nk&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=NngYd49FYRkmCRmlUrZlxQ&_nc_ss=7b289&oh=00_AQCu6k9kKI6oD-qVT-wLMNl6PwzkUHd2rKR4GO6cmBptCg&oe=6A4F4272" alt="Logo" class="h-10 w-auto">
        <div class="flex flex-col leading-none">
          <span class="text-xs font-bold text-cyan-600 uppercase tracking-wider">Chapa y Pintura</span>
        </div>
      </a>

      <!-- Input invisible y label para manejar el menú responsive con CSS puro -->
      <input type="checkbox" id="menu-toggle" class="peer hidden" />
      
      <label for="menu-toggle" class="md:hidden order-3 z-50 p-2 cursor-pointer text-slate-700 hover:text-cyan-600 transition">
        <!-- Ícono Hamburgesa (Se transforma gracias al CSS de Tailwind y el peer) -->
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

      <!-- Botón WhatsApp Dinámico (Texto en compu, ícono flotante/compacto en celu) -->
      <a href="https://wa.me/549299XXXXXXX?text=Hola!%20Vi%20los%20trabajos%20en%20la%20web%20y%20quer%C3%ADa%20consultar%20para%20pedir%20un%20turno%20para%20mi%20auto" 
         target="_blank" 
         class="inline-flex items-center justify-center p-3 md:px-5 md:py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors duration-200 z-50">
         <svg class="w-5 h-5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.173.001 6.154 1.24 8.396 3.486 2.241 2.247 3.477 5.23 3.474 8.403-.005 6.597-5.343 11.944-11.897 11.944-2.005-.001-3.974-.507-5.713-1.47L0 24zm6.59-4.846c1.656.983 3.283 1.493 4.79 1.494 5.332 0 9.68-4.295 9.684-9.574.002-2.557-.994-4.961-2.808-6.779-1.813-1.818-4.225-2.819-6.78-2.822-5.34 0-9.69 4.296-9.695 9.575-.002 1.848.5 3.654 1.455 5.252l-.994 3.63 3.734-.964z"/>
         </svg>
         <span class="hidden md:inline">Contactar por WhatsApp</span>
      </a>

    </div>
  </header>

  <!-- INICIO -->
  <section id="inicio" class="py-12 md:py-24 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div class="text-center md:text-left order-2 md:order-1">
      <span class="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">
        Reparación Profesional Premium
      </span>
      <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
        Dejamos tu auto impecable, <span class="text-cyan-600">sin vueltas ni demoras.</span>
      </h1>
      <p class="text-slate-600 mt-6 text-base md:text-lg leading-relaxed">
        Especialistas en chapa, pintura y sacabollos. Pasanos las fotos por WhatsApp y te cotizamos en minutos.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <a href="https://wa.me/5492990000000?text=Hola!%20Quiero%20pedir%20un%20presupuesto" 
           target="_blank" 
           class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-center w-full sm:w-auto">
          Cotizar por WhatsApp Ya
        </a>
      </div>
    </div>
    <div class="relative order-1 md:order-2">
      <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFQ5-zk3QXVzJHbH_PTbeBfhHkjCjzCVYaC2hWY680FiR2T1wCIESOjeI5EGgXrg0is0LFuAqTIDECXJjDY_GdSjZ5A7EbcOj0-wkpJLphPpWAKDvsyHQoRrWmZmSNIYd1Raumx=s914-k-" class="rounded-3xl shadow-xl object-cover w-full h-[250px] sm:h-[400px] border border-slate-200">
    </div>
  </section>

  <!-- QUÉ HACEMOS -->
  <section id="que-hacemos" class="py-12 md:py-16 bg-white border-y border-slate-200">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 md:gap-12 items-start">
      
      <!-- Bloque Trayectoria -->
      <div class="md:col-span-1 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 text-center md:text-left">
        <span class="text-4xl font-black text-cyan-600 block mb-2">15+</span>
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Años de Trayectoria</h2>
        <p class="text-slate-600 mt-4 text-sm leading-relaxed">
          Somos un Taller Familiar Enfocado en la Excelencia. Contamos con Instalaciones Equipadas con Tecnología de Última Generación y Personal Altamente Capacitado para Devolverle a Tu Vehículo Su Estado Original, Garantizando Acabados de Fábrica.
        </p>
      </div>

      <!-- Especialidades -->
      <div class="md:col-span-2 text-center md:text-left">
        <h3 class="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block mb-4">
          Nuestras Especialidades
        </h3>
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">¿Qué hacemos en el taller?</h2>
        
        <div class="grid sm:grid-cols-2 gap-6 text-left">
          <div class="flex items-start gap-3">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Pintura Automotriz Premium</h4>
              <p class="text-slate-600 text-sm mt-1">Laboratorio de color computarizado para lograr el tono exacto original. Pintado y horneado en cabina presurizada.</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Chapa y Estirado Estructural</h4>
              <p class="text-slate-600 text-sm mt-1">Reparación de choques medianos y pesados. Desabollado y encuadre perfecto de paneles y piezas móviles.</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-900">Sistema Sacabollos (PDR)</h4>
              <p class="text-slate-600 text-sm mt-1">Arreglo de abolladuras por granizo o toques de estacionamiento sin necesidad de dañar ni repintar la pieza original.</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="bg-cyan-100 text-cyan-600 p-2 rounded-lg mt-0.5 shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Resultados que hablan por nosotros</h2>
      <p class="text-slate-600 mt-3 text-sm md:text-base">Transparencia absoluta. Mostramos el proceso real de desabollado, la precisión en el calce de piezas y el acabado final del color espejo.</p>
    </div>

    <!-- Grilla de Trabajos -->
    <div class="grid md:grid-cols-2 gap-6 md:gap-8">
      
      <!-- Trabajo 1: Honda Fit -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow">ANTES</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/59888209_1316254798535502_2015764899476537344_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=halXyJtf6HgQ7kNvwHGdLCF&_nc_oc=AdpUonngmFEUvzCsC-XdDHONhCbe2XZXQdJDPi5XLiHkA-egBkxAD0FTYuBh7yP-8hg&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=c5qHRecFFkrH9tXJa0e2Sg&_nc_ss=7b289&oh=00_AQBTS-Txc3KiLpttCRTJBwTTIyINblBEeyDwGsR0Huo7ag&oe=6A70D2BC" alt="Choque lateral Honda Fit antes de reparar" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow">DESPUÉS</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/59990864_1316254401868875_8275608101931974656_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-I9XBJs3-b4Q7kNvwHtWCUx&_nc_oc=Adpa0dUZxNGNJjhQ1B-aQR4tLP-cJaCF3COL3756JRm2H2tFqaTYYFs8kbtwx7GsTjU&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=P3H1nawVm-2Wgcmk3i88gw&_nc_ss=7b289&oh=00_AQBm5zLLuEizDdrqa73amcJj0HxHZnH7vh9C1xnwMSI-1A&oe=6A70CA17" alt="Honda Fit reparado terminado" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Reparación de Choque Lateral Completo</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full">Chapa y Pintura</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">Honda Fit - Reconstrucción pesada de zócalo, panel lateral trasero y línea de puerta abollada por impacto. Acabado final con pintura poliuretánica a tono original de fábrica.</p>
      </div>

      <!-- Trabajo 2: Volkswagen Polo -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow">ANTES</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/45596950_1178640128963637_6294326416838230016_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U6DekBLHShwQ7kNvwFcPy2k&_nc_oc=Adps6VYzKYLk0MjfcXEcfYK_-v2WxgXNj-zjwNx8z8ZYE8LdcpVXMrZdaNk_Rb0n3dg&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=KukR1-GnG1hXY6VJ7xJGMA&_nc_ss=7b289&oh=00_AQAuoY8ep0zk7VBLylWuqor6JKv8Z2DZ3ve-yfqOig7lRQ&oe=6A70E458" alt="Trompa desalineada Volkswagen Polo antes" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow">DESPUÉS</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/45642443_1178639522297031_288680690587795456_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b0JxDwRNLtkQ7kNvwGmSqko&_nc_oc=AdpcWYCtxzxH53PlxWg_1u-EWqKni6eAu9v9qrhYrrt3cG09-gLdB9Rf3MG6zp-5TUQ&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=ZraAnO3uqsFQDxuc8uxTOQ&_nc_ss=7b289&oh=00_AQDLUuRO3IRQiheHj8jO8lXn9dBVKPp4OCTH8lMkiKgfeQ&oe=6A70E314" alt="Volkswagen Polo terminado e impecable" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Encuadre Frontal y Reconstrucción</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-cyan-50 text-cyan-700 rounded-full">Encuadre Óptico</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">Volkswagen Polo - Centrado y alineación de capot, paragolpes frontal y ópticas tras un choque de trompa leve. Ajuste milimétrico de las líneas de carrocería originales.</p>
      </div>

      <!-- Trabajo 3: BMW E82 -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow">ANTES</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/145887565_1871172606377049_4712967084054240107_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PyI92BiQ3HIQ7kNvwFC4yTs&_nc_oc=AdrDhcaee9aMBbFBfW4SRqVkhVGw20cBrAE3Uc2WjG4nh9enzyUTrzNWj8YmS7epOIs&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=bHZ6Z5KNnHF2uiNYcY8KPg&_nc_ss=7b289&oh=00_AQBKz7moLTGJVpSh-H_IqAL3nZ6FJLPL-HgCYXFmdkhbeA&oe=6A70D743" alt="Panel de BMW E82 abollado" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow">DESPUÉS</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/145535053_1871172409710402_9166592138248116243_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XbD0HZ_4TxwQ7kNvwFfVoUe&_nc_oc=AdovwIEc9IFgr368fbmN2cP8Gv6m5BS18rmrD2Wg4u3D8f8UG1xgyxY-rqy_kxjUrmU&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=eK-hZy4BTWERh0o2tCXwog&_nc_ss=7b289&oh=00_AQBB7pzFIEkWFDxqgcVhPbybbMyRJ9lvkmU1G902NEcQIA&oe=6A70ED5E" alt="Panel de Clio reparado a nuevo" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base md:text-lg">Desabollado de Guardabarros y Panel</h3>
          <span class="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full">Reparación Fina</span>
        </div>
        <p class="text-xs md:text-sm text-slate-600 mt-2">BMW E82 - Planchado artesanal de chapa en pasarruedas trasero afectado por un raspón profundo. Tratamiento de masillado ultraliviano y pintura con difuminado perfecto.</p>
      </div>

      <!-- Trabajo 4: Honda City -->
      <div class="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200">
        <div class="grid grid-cols-2 gap-2 md:gap-3 rounded-xl overflow-hidden mb-4">
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded shadow">ANTES</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/37668068_1026565957504389_288742589656465408_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DoQCxAXhYHoQ7kNvwHyLx57&_nc_oc=AdpgLXLAAUBm1KtobKd4fhmRU_6S29D7_RapMXXvKtl3uuzJZnzNBJYb0ROnDBZ_H2Y&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=HO6MMIr3U2CxWvzLli1oIw&_nc_ss=7b289&oh=00_AQCtPM8uL8i_3dK7CxYTV1ht6TevZm73Q7nsV1dVZ36Qyw&oe=6A70F044" alt="Portón trasero hundido de Voyage antes" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
          </div>
          <div class="relative">
            <span class="absolute top-2 left-2 text-[9px] md:text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded shadow">DESPUÉS</span>
            <img src="https://scontent.fnqn11-2.fna.fbcdn.net/v/t1.6435-9/37641174_1026558800838438_2493359455995953152_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=USiV9LFLn5MQ7kNvwGTGX-K&_nc_oc=AdpWPZVDPfndANXwtal6VVznINKgbu-6BYc5_K3IZH1CX8QCJ6rNeqiugmhg0JTX0VU&_nc_zt=23&_nc_ht=scontent.fnqn11-2.fna&_nc_gid=vKZxpK-dcio1liw7FptYOg&_nc_ss=7b289&oh=00_AQD1akx2LWz3q9VRo7sQgKRVuJLKQXwBy6LiqLBsPTD1mw&oe=6A70C8EE" alt="Voyage con pintura espejo terminado" class="w-full h-36 sm:h-48 object-cover bg-slate-100">
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
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Encabezado de la sección -->
      <div class="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block mb-3">
          Opiniones Reales
        </span>
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Lo que dicen nuestros clientes en Google Maps
        </h2>
        <div class="flex items-center justify-center gap-2 mt-3">
          <div class="flex text-amber-400">
            <!-- 5 Estrellas -->
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
        
        <!-- Review 1 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 mb-3">
              <!-- 5 estrellitas compactas -->
              <span class="text-lg">★★★★★</span>
            </div>
            <p class="text-slate-600 text-sm italic leading-relaxed">
              "Excelente trabajo, muy rápidos, me resolvieron un tema que no le correspondía, fueron de intermediaron con el Seguro para resolverme una situación que ya no estaba en sus manos, simpre muy atentos

10/10 la atención"
            </p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold text-sm">
              J
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Jorge Kategora</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 mb-3">
              <span class="text-lg">★★★★★</span>
            </div>
            <p class="text-slate-600 text-sm italic leading-relaxed">
              "Excelente atencion, es la segunda vez que voy y son muy prolijos y atentos. Siempre responden los mensajes."
            </p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
              M
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Mariana Mitoire</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 mb-3">
              <span class="text-lg">★★★★★</span>
            </div>
            <p class="text-slate-600 text-sm italic leading-relaxed">
              "Muy amables, super prolijo el trabajo que realizaron en mi auto. Rapidos (eran varias cosas a reparar y en 2 días ya lo tenían terminado). Súper recomendables!"
            </p>
          </div>
          <div class="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div class="w-9 h-9 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">
              V
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-xs">Veronica Ponce</h4>
              <span class="text-[10px] text-slate-400">Cliente Local</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Enlace para ver más en Maps (opcional) -->
      <div class="text-center mt-8">
        <a href="https://maps.google.com/?cid=6687002016254546739" 
           target="_blank" 
           class="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition">
          <span>Ver todas las reseñas en Google Maps</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

    </div>
  </section>

  <!-- DÓNDE ESTAMOS -->
  <section id="ubicacion" class="bg-slate-900 text-slate-100 py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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