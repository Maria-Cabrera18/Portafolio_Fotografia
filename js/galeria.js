/* =========================================================
   GALERÍA — JAVASCRIPT VANILLA
   1. Lee la categoría desde la URL (?cat=slug).
   2. Pinta el hero, el panel de info y la cuadrícula según
      el "tipo" de la categoría (evento | simple).
   3. Maneja el lightbox (abrir, cerrar, anterior, siguiente).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("cat");
    const datos = (typeof GALERIAS !== "undefined") ? GALERIAS[slug] : null;

    const heroImg = document.getElementById("cat-hero-img");
    const heroTag = document.getElementById("cat-hero-tag");
    const chapterEl = document.getElementById("galeria-chapter");
    const tituloEl = document.getElementById("galeria-titulo");
    const subtituloEl = document.getElementById("galeria-subtitulo");
    const detallesEl = document.getElementById("galeria-detalles");
    const descripcionEl = document.getElementById("galeria-descripcion");
    const gridEl = document.getElementById("galeria-grid");
    const vacioEl = document.getElementById("galeria-vacio");

    /* =========================
       CATEGORÍA NO ENCONTRADA
    ========================= */

    if (!datos) {

        if (tituloEl) tituloEl.textContent = "GALERÍA NO ENCONTRADA";
        if (vacioEl) vacioEl.hidden = false;
        if (gridEl) gridEl.hidden = true;

        const heroSection = document.getElementById("cat-hero");
        if (heroSection) heroSection.hidden = true;

        return;
    }

    /* =========================
       PINTAR HERO Y TÍTULO
    ========================= */

    document.title = datos.titulo + " — Randy Roseler";

    if (heroImg && datos.portada) {
        heroImg.src = datos.portada;
        heroImg.alt = datos.titulo;
    }

    if (heroTag) heroTag.textContent = "GALERÍA";
    if (chapterEl) chapterEl.textContent = datos.tipo === "simple" ? "GALERÍA" : "EVENTO";
    if (tituloEl) tituloEl.textContent = datos.titulo;

    if (subtituloEl) {
        subtituloEl.textContent = datos.subtitulo || "";
        subtituloEl.hidden = !datos.subtitulo;
    }

    if (descripcionEl) {
        descripcionEl.textContent = datos.descripcion || "";
        descripcionEl.hidden = !datos.descripcion;
    }

    /* =========================
       PANEL DE DETALLES
       (solo se muestra en categorías tipo "evento")
    ========================= */

    if (detallesEl) {

        if (datos.tipo === "evento" && Array.isArray(datos.detalles) && datos.detalles.length > 0) {

            datos.detalles.forEach((item) => {

                const fila = document.createElement("div");

                const dt = document.createElement("dt");
                dt.textContent = item.label;

                const dd = document.createElement("dd");
                dd.textContent = item.valor;

                fila.appendChild(dt);
                fila.appendChild(dd);
                detallesEl.appendChild(fila);
            });

            detallesEl.hidden = false;

        } else {
            detallesEl.hidden = true;
        }
    }

    /* =========================
       PINTAR CUADRÍCULA
    ========================= */

    const fotos = datos.fotos || [];
    const esEvento = datos.tipo === "evento";

    /* Secuencia de tamaños para la cuadrícula asimétrica.
       Se repite si hay más fotos de las que cubre un ciclo. */
    const patronAsimetrico = ["g1", "g2", "g3", "g4", "g6", "g7", "g8"];

    if (gridEl) {
        gridEl.classList.toggle("cat-grid--simple", !esEvento);
    }

    if (fotos.length === 0) {

        if (vacioEl) vacioEl.hidden = false;
        if (gridEl) gridEl.hidden = true;

    } else {

        fotos.forEach((src, index) => {

            const figure = document.createElement("figure");

            if (esEvento) {
                figure.classList.add(patronAsimetrico[index % patronAsimetrico.length]);
            }

            const img = document.createElement("img");
            img.src = src;
            img.alt = `${datos.titulo} — foto ${index + 1}`;
            img.loading = "lazy";

            figure.appendChild(img);

            figure.addEventListener("click", () => {
                abrirLightbox(index);
            });

            gridEl.appendChild(figure);

            /* Insertamos la tarjeta de cita después de la 4ta foto,
               solo en categorías tipo "evento" que tengan cita. */
            if (esEvento && index === 3 && datos.cita) {

                const caption = document.createElement("div");
                caption.className = "cat-caption";

                const label = document.createElement("span");
                label.textContent = "Nota del fotógrafo";

                const quote = document.createElement("p");
                quote.textContent = `“${datos.cita}”`;

                caption.appendChild(label);
                caption.appendChild(quote);
                gridEl.appendChild(caption);
            }
        });
    }

    /* =========================
       LIGHTBOX
    ========================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCounter = document.getElementById("lightbox-counter");
    const btnClose = document.querySelector(".lightbox-close");
    const btnPrev = document.querySelector(".lightbox-prev");
    const btnNext = document.querySelector(".lightbox-next");

    let indiceActual = 0;

    function abrirLightbox(index) {

        if (!lightbox || fotos.length === 0) return;

        indiceActual = index;
        actualizarLightbox();

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function cerrarLightbox() {

        if (!lightbox) return;

        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function actualizarLightbox() {

        if (!lightboxImg) return;

        lightboxImg.src = fotos[indiceActual];
        lightboxImg.alt = `${datos.titulo} — foto ${indiceActual + 1}`;

        if (lightboxCounter) {
            lightboxCounter.textContent = `${indiceActual + 1} / ${fotos.length}`;
        }
    }

    function fotoAnterior() {
        indiceActual = (indiceActual - 1 + fotos.length) % fotos.length;
        actualizarLightbox();
    }

    function fotoSiguiente() {
        indiceActual = (indiceActual + 1) % fotos.length;
        actualizarLightbox();
    }

    if (btnClose) btnClose.addEventListener("click", cerrarLightbox);
    if (btnPrev) btnPrev.addEventListener("click", fotoAnterior);
    if (btnNext) btnNext.addEventListener("click", fotoSiguiente);

    if (lightbox) {

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                cerrarLightbox();
            }
        });
    }

    document.addEventListener("keydown", (event) => {

        if (!lightbox || !lightbox.classList.contains("is-open")) return;

        if (event.key === "Escape") cerrarLightbox();
        if (event.key === "ArrowLeft") fotoAnterior();
        if (event.key === "ArrowRight") fotoSiguiente();
    });

});
