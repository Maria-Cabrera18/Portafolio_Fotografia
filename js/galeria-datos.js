/* =========================================================
   DATOS DE GALERÍAS
   -----------------------------------------------------------
   Cada categoría vive acá como un objeto. Dos tipos posibles:

   - "evento": layout completo (foto principal grande, panel
     con ubicación/rol, descripción y cuadrícula asimétrica). Úsalo para coberturas con
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
        roll: "ROLL 02",
        frame: "FRAME 001",
        titulo: "PRIMAVERA SOUND",
        subtitulo: "Barcelona · Junio 2026",
        portada: "img/galeria/Primavera_sound/Portada.webp",
        detalles: [
            { label: "Ubicación", valor: "Parc del Fòrum, Barcelona" },
            { label: "Rol", valor: "Cobertura fotográfica" }
        ],
        descripcion: "Una jornada del Primavera Sound Barcelona junto a Resumido, documentando a sus artistas y la energía del festival a través de una cobertura fotográfica de mirada editorial.",
        fotos: [
            {src:"img/galeria/Primavera_sound/foto1.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto2.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto3.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto4.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto7.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto8.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto9.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto10.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto11.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto12.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto13.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto14.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto15.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto16.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto17.webp", tipo: "vertical"},
            {src: "img/galeria/Primavera_sound/foto18.webp", tipo: "vertical"},
        ],
        
    },

    /* Galería combinada: agrupa dos coberturas que se muestran
       como secciones separadas dentro de la misma página, cada
       una con su propio título, detalles, cuadrícula y lightbox
       independiente. Las entradas viejas "fm-luzu-barcelona-2026"
       y "resumido-dqt" se dejan más abajo sin usar, por si hace
       falta volver atrás — no rompen nada estando ahí. */
    "contenido-para-medios": {
        tipo: "medios",
        roll: "ROLL 10",
        frame: "FRAME 001",
        titulo: "CONTENIDO PARA MEDIOS",
        subtitulo: "Barcelona · 2026",
        portada: "img/galeria/FM_Luzu/Portada.webp",
        descripcion: "Una selección de trabajos realizados para medios y plataformas digitales, donde cada proyecto exige adaptabilidad, rapidez y una mirada capaz de responder a las exigencias del momento.",
        secciones: [
            {
                titulo: "FM LÚZU",
                subtitulo: "Barcelona · 2026",
                detalles: [
                    { label: "Ubicación", valor: "Barcelona" },
                    { label: "Rol", valor: "Cobertura audiovisual" }
                ],
                descripcion: "Registro del programa en vivo, transmite la energía espontánea y el calor de una transmisión en vivo rodeada de gente y música, poniendo al equipo en contacto directo con la audiencia.",
                fotos: [
                    {src: "img/galeria/FM_Luzu/foto1.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto2.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto3.webp", tipo: "vertical"},
                    {src: "img/galeria/FM_Luzu/foto8.webp", tipo: "vertical"},
                    {src: "img/galeria/FM_Luzu/foto9.webp", tipo: "vertical"},
                    {src: "img/galeria/FM_Luzu/foto4.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto5.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto6.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto7.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto10.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto11.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto12.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto13.webp", tipo: "horizontal"},
                    {src: "img/galeria/FM_Luzu/foto14.webp", tipo: "horizontal"}

                ]
            },
            {
                titulo: "RESUMIDO",
                subtitulo: "DQT",
                detalles: [
                    { label: "Cliente", valor: "DQT" },
                    { label: "Rol", valor: "Dirección y edición" }
                ],
                descripcion: "Resumen visual de la producción de DQT, capturando la esencia de la marca y su propuesta a través de una narrativa visual que combina fotografía y edición para transmitir su identidad.",
                fotos: [
                    {src: "img/galeria/Resumido/Portada.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto1.webp", tipo: "horizontal"},
                    {src: "img/galeria/Resumido/foto2.webp", tipo: "horizontal"},
                    {src: "img/galeria/Resumido/foto3.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto4.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto5.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto6.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto7.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto8.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto9.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto10.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto11.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto12.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto13.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto14.webp", tipo: "horizontal"},
                    {src: "img/galeria/Resumido/foto15.webp", tipo: "vertical"},
                    {src: "img/galeria/Resumido/foto16.webp", tipo: "vertical"},
                ]
            }
        ]
    },

    "asuncion-fashion-week-2025": {
        tipo: "evento",
        roll: "ROLL 05",
        frame: "FRAME 001",
        titulo: "ASUNCIÓN FASHION WEEK",
        subtitulo: "2025",
        portada: "img/galeria/Asuncion_Fashion_Week/foto_principal.webp",
        detalles: [
            { label: "Ubicación", valor: "Asunción, Paraguay" },
            { label: "Rol", valor: "Cobertura de pasarela" }
        ],
        descripcion: "Una cobertura fotográfica del Asunción Fashion Week 2025, capturando la moda, el movimiento y la energía de la pasarela en medio del ritmo y las exigencias de un evento de gran escala.",
       fotos: [
    {
        src: "img/galeria/Asuncion_Fashion_week/foto1.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto4.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto2.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto3.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto5.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto6.webp",
        tipo: "vertical"
    },
    {
        src: "img/galeria/Asuncion_Fashion_week/foto7.webp",
        tipo: "horizontal"
    }
]
    },

    "bodas": {
        tipo: "evento",
        roll: "ROLL 06",
        frame: "FRAME 001", 
        titulo: "BODAS",
        subtitulo: "",
        portada: "img/galeria/Bodas/portada.webp",
        detalles: [
            { label: "Cobertura", valor: "Ceremonia y fiesta" },
            { label: "Rol", valor: "Fotografía principal" }
        ],
        descripcion: "Historias de amor contadas a través de momentos espontáneos, emociones y pequeños detalles. Una mirada documental para preservar cada instante de un día que no vuelve a repetirse.",
        fotos: [
            {src:"img/galeria/Bodas/foto1.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto2.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto3.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto4.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto5.webp", tipo:"horizontal"},
            {src:"img/galeria/Bodas/foto6.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto7.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto8.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto9.webp", tipo:"vertical"},
            {src:"img/galeria/Bodas/foto10.webp", tipo:"horizontal"},
        ]
    },

    "eventos-sociales": {
        tipo: "evento",
        titulo: "EVENTOS SOCIALES",
        subtitulo: "",
        portada: "img/galeria/Eventos_sociales/portada.webp",
        detalles: [
            { label: "Cobertura", valor: "Evento social" },
            { label: "Rol", valor: "Fotografía de cobertura" }
        ],
        descripcion: "Cobertura de eventos sociales desde una mirada espontánea y documental, capturando la energía del momento, las personas y esos instantes que suceden una sola vez.",
        fotos: [
            {src:"img/galeria/Eventos_sociales/foto1.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto2.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto3.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto4.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto5.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto6.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto7.webp", tipo:"horizontal"},
            {src:"img/galeria/Eventos_sociales/foto8.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto9.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto10.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto12.webp", tipo:"horizontal"},
            {src:"img/galeria/Eventos_sociales/foto11.webp", tipo:"vertical"},
            {src:"img/galeria/Eventos_sociales/foto13.webp", tipo:"vertical"}
      
        ]
    },

    "productos": {
        tipo: "simple",
        roll: "ROLL 07",
        frame: "FRAME 001",
        titulo: "PRODUCTOS",
        subtitulo: "",
        portada: "img/galeria/Productos/portada.webp",
        descripcion: "Fotografía de producto pensada para destacar cada objeto desde su forma, textura y detalles, creando imágenes que comunican y atraen.",
        fotos: [
            {src:"img/galeria/Productos/foto1.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto2.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto3.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto4.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto5.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto6.webp", tipo:"vertical"},
            {src:"img/galeria/Productos/foto7.webp", tipo:"vertical"},
        ]
    },

    "retratos": {
        tipo: "simple",
        roll: "ROLL 08",
        frame: "FRAME 001",
        titulo: "RETRATOS",
        subtitulo: "",
        portada: "img/galeria/Retratos/Portada.jpg",
        descripcion: "Una mirada puesta en la persona. Retratos que buscan capturar personalidad, expresión y presencia más allá de una simple imagen.",
        fotos: [
            {src:"img/galeria/Retratos/foto1.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto2.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto3.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto4.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto5.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto6.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto7.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto8.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto9.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto10.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto11.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto12.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto13.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto14.webp", tipo:"vertical"},
            {src:"img/galeria/Retratos/foto15.webp", tipo:"vertical"},
        ]
    },

    "audiovisual": {
        tipo: "evento",
        roll: "ROLL 09",
        frame: "FRAME 001", 
        titulo: "AUDIOVISUAL",
        subtitulo: "",
        portada: "img/galeria/Audiovisual/foto_principal.jpg",
        detalles: [
            { label: "Formato", valor: "Video" },
            { label: "Rol", valor: "Dirección y producción" }
        ],
        descripcion: "Del encuadre a la historia. Proyectos audiovisuales donde la imagen, el movimiento y la narrativa se encuentran para contar algo.",
        fotos: [
           {src: "img/galeria/Audiovisual/audiovisual1.mp4", tipo: "vertical", formato: "video"},
        ]
    }

};

