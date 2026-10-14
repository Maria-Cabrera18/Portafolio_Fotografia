/* =========================================================
   MI PORTAFOLIO — JAVASCRIPT VANILLA
   Interacciones:
   1. Filtros de proyectos por categoría.
   2. Menú móvil.
   3. Cierre del menú al navegar.
   4. Entrada suave de tarjetas.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FILTROS
    ========================= */

    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".project-card");

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {

            const category = filter.dataset.filter;

            filters.forEach((item) => {
                item.classList.remove("active");
            });

            filter.classList.add("active");

            cards.forEach((card) => {

                const cardCategory = card.dataset.category;

                if (
                    category === "all" ||
                    cardCategory === category ||
                    cardCategory === "all"
                ) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }

            });
        });
    });


    /* =========================
       MENÚ MÓVIL
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        const setMenuState = (isOpen) => {
            mainNav.classList.toggle("is-open", isOpen);
            document.body.classList.toggle("menu-open", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        };

        menuToggle.addEventListener("click", () => {
            setMenuState(!mainNav.classList.contains("is-open"));
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                setMenuState(false);
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                setMenuState(false);
            }
        });
    }


    /* =========================
       ANIMACIÓN DE ENTRADA
    ========================= */

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });


    /* =========================
       VIDEO HERO
       Si el navegador bloquea autoplay,
       el video sigue funcionando como imagen
       mediante el poster.
    ========================= */

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.play().catch(() => {
            console.log("Autoplay bloqueado por el navegador.");
        });

    }

});
