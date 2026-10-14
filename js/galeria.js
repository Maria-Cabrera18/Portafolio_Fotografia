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
    const heroTag = document.getElementById("cat-hero-hover-tag");
    const chapterEl = document.getElementById("galeria-chapter");
    const tituloEl = document.getElementById("galeria-titulo");
    const subtituloEl = document.getElementById("galeria-subtitulo");
    const detallesEl = document.getElementById("galeria-detalles");
    const descripcionEl = document.getElementById("galeria-descripcion");
    const gridEl = document.getElementById("galeria-grid");
    const vacioEl = document.getElementById("galeria-vacio");
    const rollEl = document.getElementById("cat-hero-roll");
    const frameEl = document.getElementById("cat-hero-frame");
    const heroTitleEl = document.getElementById("cat-hero-hover-title");
    const heroRoleEl = document.getElementById("cat-hero-hover-role");

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

    const heroPhoto = heroImg.closest(".media-photo");

    if (heroPhoto) {
        heroPhoto.style.setProperty(
            "--hero-background",
            `url("${datos.portada}")`
        );
    }
    }

    if (heroTag) heroTag.textContent = "GALERÍA";
    if (chapterEl) chapterEl.textContent = datos.tipo === "simple" ? "GALERÍA" : "EVENTO";
    if (tituloEl) tituloEl.textContent = datos.titulo;
    if (rollEl) rollEl.textContent = datos.roll || "ROLL 01";
    if (frameEl) frameEl.textContent = datos.frame || "FRAME 001";
    if (heroTitleEl) heroTitleEl.textContent = datos.hoverTitle || datos.titulo;
    if (heroRoleEl) heroRoleEl.textContent = datos.hoverRole || "FOTOGRAFÍA";

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
       (categorías "evento" / "simple" — una sola cuadrícula)
    ========================= */

    const fotos = datos.fotos || [];
    const esEvento = datos.tipo === "evento";
    const esMedios = datos.tipo === "medios";

    /* Secuencia de tamaños para la cuadrícula asimétrica.
       Se repite si hay más fotos de las que cubre un ciclo. */
    const patronAsimetrico = ["g1", "g2", "g3", "g4", "g6", "g7", "g8"];

    if (esMedios) {

        /* Las categorías tipo "medios" no usan la cuadrícula ni el
           panel de detalles de arriba: cada cobertura arma el suyo
           dentro de #galeria-secciones. */
        if (gridEl) gridEl.hidden = true;

        const contenedorSecciones = document.getElementById("galeria-secciones");

        if (contenedorSecciones && Array.isArray(datos.secciones)) {

            datos.secciones.forEach((seccion, indice) => {

                if (indice > 0) {
                    const divisor = document.createElement("hr");
                    divisor.className = "media-divider";
                    contenedorSecciones.appendChild(divisor);
                }

                contenedorSecciones.appendChild(
                    crearSeccionMedios(seccion, indice, patronAsimetrico)
                );
            });
        }

    } else if (gridEl) {

        gridEl.classList.toggle("cat-grid--simple", !esEvento);

        if (fotos.length === 0) {

            if (vacioEl) vacioEl.hidden = false;
            gridEl.hidden = true;

        } else {

            fotos.forEach((src, index) => {

                const figure = document.createElement("figure");

                const foto = typeof src === "string"
                    ? { src: src, tipo: "horizontal" }
                    : src;

                if (esEvento) {
                    figure.classList.add(
                        patronAsimetrico[index % patronAsimetrico.length]
                    );
                }

                figure.classList.add(`foto-${foto.tipo}`);

                /* =========================
                   IMAGEN O VIDEO
                ========================= */

                if (foto.formato === "video") {

                    const video = document.createElement("video");

                    video.src = foto.src;
                    video.muted = true;
                    video.loop = true;
                    video.autoplay = true;
                    video.playsInline = true;

                    figure.appendChild(video);

                } else {

                    const img = document.createElement("img");

                    img.src = foto.src;
                    img.alt = `${datos.titulo} — foto ${index + 1}`;
                    img.loading = "lazy";
                    img.decoding = "async";

                    figure.appendChild(img);
                }

                figure.addEventListener("click", () => {
                    abrirLightbox(fotos, index, datos.titulo);
                });

                gridEl.appendChild(figure);
            });
        }
    }

    /* =========================
       ARMA UNA SECCIÓN INTERNA
       (usado solo por categorías tipo "medios")
    ========================= */

    function crearSeccionMedios(seccion, indice, patronAsimetrico) {

        const wrapper = document.createElement("section");
        wrapper.className = "cat-body media-section";

        /* --- Panel de info de la sección --- */
        const aside = document.createElement("aside");
        aside.className = "cat-info";

        const eyebrow = document.createElement("span");
        eyebrow.className = "eyebrow";
        eyebrow.textContent = `COBERTURA ${indice + 1}`;
        aside.appendChild(eyebrow);

        const h2 = document.createElement("h1");
        h2.textContent = seccion.titulo;
        aside.appendChild(h2);

        if (seccion.subtitulo) {
            const meta = document.createElement("p");
            meta.className = "cat-meta";
            meta.textContent = seccion.subtitulo;
            aside.appendChild(meta);
        }

        if (Array.isArray(seccion.detalles) && seccion.detalles.length > 0) {

            const dl = document.createElement("dl");
            dl.className = "cat-details";

            seccion.detalles.forEach((item) => {

                const fila = document.createElement("div");

                const dt = document.createElement("dt");
                dt.textContent = item.label;

                const dd = document.createElement("dd");
                dd.textContent = item.valor;

                fila.appendChild(dt);
                fila.appendChild(dd);
                dl.appendChild(fila);
            });

            aside.appendChild(dl);
        }

        if (seccion.descripcion) {
            const desc = document.createElement("p");
            desc.className = "cat-desc";
            desc.textContent = seccion.descripcion;
            aside.appendChild(desc);
        }

        wrapper.appendChild(aside);

        /* --- Cuadrícula propia de la sección --- */
        const grid = document.createElement("div");
        grid.className = "cat-grid";

        const fotosSeccion = seccion.fotos || [];

        /*
           Conservamos los objetos completos para que el lightbox
           pueda saber si cada elemento es una imagen o un video.
        */
        const rutasSeccion = fotosSeccion.map((f) =>
            typeof f === "string"
                ? { src: f, tipo: "horizontal" }
                : f
        );

        fotosSeccion.forEach((item, index) => {

            const foto = typeof item === "string"
                ? { src: item, tipo: "horizontal" }
                : item;

            const figure = document.createElement("figure");

            figure.classList.add(
                patronAsimetrico[index % patronAsimetrico.length]
            );

            figure.classList.add(`foto-${foto.tipo}`);

            /* =========================
               VIDEO O IMAGEN
            ========================= */

            if (foto.formato === "video") {

                const video = document.createElement("video");

                video.src = foto.src;
                video.muted = true;
                video.loop = true;
                video.autoplay = true;
                video.playsInline = true;

                figure.appendChild(video);

            } else {

                const img = document.createElement("img");

                img.src = foto.src;
                img.alt = `${datos.titulo} — foto ${index + 1}`;
                img.loading = "lazy";
                img.decoding = "async";

                figure.appendChild(img);
            }

            figure.addEventListener("click", () => {
                abrirLightbox(
                    rutasSeccion,
                    index,
                    seccion.titulo
                );
            });

            grid.appendChild(figure);
        });

        wrapper.appendChild(grid);

        return wrapper;
    }

    /* =========================
       LIGHTBOX
    ========================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxVideo = document.getElementById("lightbox-video");
    const lightboxCounter = document.getElementById("lightbox-counter");
    const btnClose = document.querySelector(".lightbox-close");
    const btnPrev = document.querySelector(".lightbox-prev");
    const btnNext = document.querySelector(".lightbox-next");

    let fotosActivas = [];
    let tituloActivo = datos.titulo;
    let indiceActual = 0;

    function abrirLightbox(arrFotos, index, tituloSeccion) {

        if (!lightbox || !arrFotos || arrFotos.length === 0) return;

        /*
           Conservamos el objeto completo.

           Antes:
           { src, tipo, formato }
                    ↓
           solo se guardaba "src"

           Ahora:
           { src, tipo, formato }
                    ↓
           se conserva completo para detectar videos.
        */
        fotosActivas = arrFotos.map((f) =>
            typeof f === "string"
                ? { src: f, tipo: "horizontal" }
                : f
        );

        tituloActivo = tituloSeccion || datos.titulo;
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

        /* Detener y limpiar cualquier video */
        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.removeAttribute("src");
            lightboxVideo.load();
        }

        document.body.style.overflow = "";
    }

    function actualizarLightbox() {

        if (!lightboxImg) return;

        const itemActual = fotosActivas[indiceActual];

        const esVideo = itemActual.formato === "video";

        /* =========================
           MOSTRAR VIDEO
        ========================= */

        if (esVideo && lightboxVideo) {

            lightboxImg.hidden = true;

            lightboxVideo.hidden = false;
            lightboxVideo.src = itemActual.src;

            lightboxVideo.load();

            /*
               Algunos navegadores pueden bloquear el autoplay.
               Por eso usamos catch() para evitar que un bloqueo
               del navegador genere un error en consola.
            */
            lightboxVideo.play().catch(() => {});

        } else {

            /* =========================
               MOSTRAR IMAGEN
            ========================= */

            if (lightboxVideo) {

                lightboxVideo.hidden = true;

                lightboxVideo.pause();
                lightboxVideo.removeAttribute("src");
                lightboxVideo.load();
            }

            lightboxImg.hidden = false;

            lightboxImg.src = itemActual.src;
            lightboxImg.alt =
                `${tituloActivo} — foto ${indiceActual + 1}`;
        }

        if (lightboxCounter) {
            lightboxCounter.textContent =
                `${indiceActual + 1} / ${fotosActivas.length}`;
        }
    }

    function fotoAnterior() {

        indiceActual =
            (indiceActual - 1 + fotosActivas.length)
            % fotosActivas.length;

        actualizarLightbox();
    }

    function fotoSiguiente() {

        indiceActual =
            (indiceActual + 1)
            % fotosActivas.length;

        actualizarLightbox();
    }

    if (btnClose) {
        btnClose.addEventListener("click", cerrarLightbox);
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", fotoAnterior);
    }

    if (btnNext) {
        btnNext.addEventListener("click", fotoSiguiente);
    }

    if (lightbox) {

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {
                cerrarLightbox();
            }
        });
    }

    document.addEventListener("keydown", (event) => {

        if (!lightbox || !lightbox.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            cerrarLightbox();
        }

        if (event.key === "ArrowLeft") {
            fotoAnterior();
        }

        if (event.key === "ArrowRight") {
            fotoSiguiente();
        }
    });

});