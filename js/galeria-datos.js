/* =========================================================
   DATOS DE GALERÍAS
   -----------------------------------------------------------
   Cada categoría vive acá como un objeto. Dos tipos posibles:

   - "evento": layout completo (foto principal grande, panel
     con ubicación/rol, descripción, cuadrícula asimétrica y
     tarjeta con una frase/nota). Úsalo para coberturas con
     contexto propio (festivales, bodas, fashion week, etc).

   - "simple": layout liviano (foto principal, título,
     descripción corta y cuadrícula pareja). Úsalo para
     categorías tipo catálogo (Retratos, Productos).

   CAMPOS:
     tipo         "evento" | "simple"
     titulo       Nombre de la categoría
     subtitulo    Línea corta debajo del título (fecha/lugar)
     portada      Foto principal (hero)
     detalles     [{label, valor}] — solo se usa en tipo "evento"
     descripcion  Texto corto de presentación
     cita         Frase/nota corta — solo se usa en tipo "evento"
     fotos        Arreglo de rutas de imagen para la cuadrícula

   -----------------------------------------------------------
   Para publicar fotos reales:
   1. Crea una carpeta en /img/galerias/<categoria>/
   2. Copia ahí las fotos finales.
   3. Reemplaza "portada" y las rutas de "fotos" por las reales.
   No hace falta tocar HTML ni CSS.
   ========================================================= */

const GALERIAS = {

    "primavera-sound-barcelona-2026": {
        tipo: "evento",
        titulo: "PRIMAVERA SOUND",
        subtitulo: "Barcelona · Junio 2026",
        portada: "img/galeria/Primavera_Sound/foto_principal.jpg",
        detalles: [
            { label: "Ubicación", valor: "Parc del Fòrum, Barcelona" },
            { label: "Rol", valor: "Cobertura fotográfica" }
        ],
        descripcion: "Tres noches de festival documentadas entre el escenario y el backstage: luz, movimiento y la energía del público en formato editorial.",
        cita: "El público terminó siendo tan protagonista como el escenario.",
        fotos: [
            "img/galeria/Primavera_Sound/foto1.jpg",
            "img/galeria/Primavera_Sound/foto2.jpg",
            "img/galeria/Primavera_Sound/foto3.jpg",
            "img/galeria/Primavera_Sound/foto4.jpg",
            "img/galeria/Primavera_Sound/foto5.jpg",
            "img/galeria/Primavera_Sound/foto6.jpg",
            "img/galeria/Primavera_Sound/foto7.jpg"
        ]
    },

    "fm-luzu-barcelona-2026": {
        tipo: "evento",
        titulo: "FM LÚZU",
        subtitulo: "Barcelona · 2026",
        portada: "img/portada2.jpg",
        detalles: [
            { label: "Ubicación", valor: "Barcelona" },
            { label: "Rol", valor: "Cobertura audiovisual" }
        ],
        descripcion: "Registro del programa en vivo, entre cámaras, cabina y el detrás de escena del equipo.",
        cita: "Cada corte al aire tenía su propia escena detrás.",
        fotos: [
            "img/portada3.jpg",
            "img/portada4.jpg",
            "img/portada5.jpg",
            "img/portada1.jpg",
            "img/portada2.jpg",
            "img/portada3.jpg",
            "img/portada4.jpg"
        ]
    },

    "resumido-dqt": {
        tipo: "evento",
        titulo: "RESUMIDO",
        subtitulo: "DQT",
        portada: "img/portada3.jpg",
        detalles: [
            { label: "Cliente", valor: "DQT" },
            { label: "Rol", valor: "Dirección y edición" }
        ],
        descripcion: "Resumen visual de la producción, pensado para redes: ritmo corto y planos que cuentan la historia completa en segundos.",
        cita: "Contar todo en el tiempo de un scroll.",
        fotos: [
            "img/portada4.jpg",
            "img/portada5.jpg",
            "img/portada1.jpg",
            "img/portada2.jpg",
            "img/portada3.jpg",
            "img/portada4.jpg",
            "img/portada5.jpg"
        ]
    },

    "asuncion-fashion-week-2025": {
        tipo: "evento",
        titulo: "ASUNCIÓN FASHION WEEK",
        subtitulo: "2025",
        portada: "img\\galeria\\Asuncion_Fashion_Week\\foto_principal.jpg",
        detalles: [
            { label: "Ubicación", valor: "Asunción, Paraguay" },
            { label: "Rol", valor: "Cobertura de pasarela" }
        ],
        descripcion: "Backstage, pasarela y detalles de vestuario durante las jornadas de la fashion week.",
        cita: "El backstage tenía tanto que contar como la pasarela.",
        fotos: [
            "img/galeria/Asuncion_Fashion_Week/foto1.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto2.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto3.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto4.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto5.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto6.jpg",
            "img/galeria/Asuncion_Fashion_Week/foto7.jpg"
        ]
    },

    "bodas": {
        tipo: "evento",
        titulo: "BODAS",
        subtitulo: "",
        portada: "img/galeria/Bodas/foto_principal.jpg",
        detalles: [
            { label: "Cobertura", valor: "Ceremonia y fiesta" },
            { label: "Rol", valor: "Fotografía principal" }
        ],
        descripcion: "Momentos espontáneos y retratos armados a lo largo del día, con foco en la luz natural y los gestos genuinos.",
        cita: "Las mejores fotos casi nunca son las posadas.",
        fotos: [
            "img/galeria/Bodas/foto1.jpg",
            "img/galeria/Bodas/foto2.jpg",
            "img/galeria/Bodas/foto3.jpg",
            "img/galeria/Bodas/foto4.jpg",
            "img/galeria/Bodas/foto5.jpg",
            "img/galeria/Bodas/foto6.jpg",
            "img/galeria/Bodas/foto7.jpg"
        ]
    },

    "cumpleanos-eventos": {
        tipo: "evento",
        titulo: "CUMPLEAÑOS & EVENTOS",
        subtitulo: "",
        portada: "img/placeholder_sobre-mi.jpg",
        detalles: [
            { label: "Cobertura", valor: "Evento social" },
            { label: "Rol", valor: "Fotografía de cobertura" }
        ],
        descripcion: "Retrato de la celebración completa: decoración, invitados y los pequeños detalles que arman el ambiente.",
        cita: "Siempre hay una foto que nadie sabía que necesitaba.",
        fotos: [
            "img/portada1.jpg",
            "img/portada2.jpg",
            "img/portada3.jpg",
            "img/portada4.jpg",
            "img/portada5.jpg",
            "img/portada1.jpg",
            "img/portada2.jpg"
        ]
    },

    "productos": {
        tipo: "simple",
        titulo: "PRODUCTOS",
        subtitulo: "",
        portada: "img/portada1.jpg",
        descripcion: "Fotografía de producto para catálogo y redes: luz controlada y foco en el detalle.",
        fotos: [
            "img/portada1.jpg",
            "img/portada3.jpg",
            "img/portada5.jpg",
            "img/portada2.jpg",
            "img/portada4.jpg",
            "img/portada1.jpg"
        ]
    },

    "retratos": {
        tipo: "simple",
        titulo: "RETRATOS",
        subtitulo: "",
        portada: "img/galeria/Retratos/foto_principal.jpg",
        descripcion: "Sesiones de retrato individual, con foco en la expresión natural y la iluminación de autor.",
        fotos: [
            "img/galeria/Retratos/foto1.jpg",
            "img/galeria/Retratos/foto2.jpg",
            "img/galeria/Retratos/foto3.jpg",
            "img/galeria/Retratos/foto4.jpg",
            "img/galeria/Retratos/foto5.jpg",
            "img/galeria/Retratos/foto6.jpg"
        ]
    },

    "audiovisual": {
        tipo: "evento",
        titulo: "AUDIOVISUAL",
        subtitulo: "",
        portada: "img/portada3.jpg",
        detalles: [
            { label: "Formato", valor: "Video" },
            { label: "Rol", valor: "Dirección y producción" }
        ],
        descripcion: "Selección de piezas audiovisuales: comerciales, coberturas de evento y contenido de marca.",
        cita: "Cada plano tiene que ganarse su lugar en el corte.",
        fotos: [
            "img/portada1.jpg",
            "img/portada4.jpg",
            "img/portada5.jpg",
            "img/portada2.jpg",
            "img/portada3.jpg",
            "img/portada1.jpg",
            "img/portada4.jpg"
        ]
    }

};
