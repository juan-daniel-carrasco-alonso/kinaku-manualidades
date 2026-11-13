// Configuración de Tailwind CSS (Colores de la paleta rosa salmón)
tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        lobster: ['Lobster', 'cursive'], // <-- Nueva fuente agregada
                    },
                    colors: {
                        brand: {
                            dark: '#fff0f2', // Fondo general (muy claro)
                            card: '#ffcdd4', // Fondo de tarjetas (claro)
                            accent: '#e57d90', // Acento principal (oscuro)
                            accentHover: '#f1889b', // Hover principal
                            textMain: '#333333', // Texto principal (oscuro para contraste)
                            textMuted: '#666666', // Texto secundario
                            softPink: '#fdb4bf',
                            midPink: '#f99aaa'
                        }
                    }
                }
            }
        }

// Aquí puedes añadir tus funciones de JavaScript adicionales en el futuro
// (por ejemplo, lógica para el carrito de compras o animación del slider)
// Cambiar el botón activo del menú al hacer scroll o clic
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('section[id]');

    // Activar al hacer clic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Activar automáticamente según la posición del scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });

        // Si estamos hasta arriba, marca "Inicio" (#)
        if (window.scrollY < 300) {
            currentSection = '#';
        }

        if (currentSection !== '') {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentSection) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Cambiar el botón activo del menú y controlar el menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('section[id]');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');

    // Función para cerrar el menú móvil
    const closeMobileMenu = () => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.classList.replace('ph-x', 'ph-list');
        }
    };

    // Abrir / Cerrar menú al tocar las barritas
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.toggle('hidden');
            if (isHidden) {
                mobileMenuIcon.classList.replace('ph-x', 'ph-list');
            } else {
                mobileMenuIcon.classList.replace('ph-list', 'ph-x');
            }
        });

        // Cerrar el menú si el usuario toca cualquier parte fuera de él
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // Activar botón al hacer clic (sincroniza PC y Móvil) y cerrar menú móvil
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetHref = link.getAttribute('href');
            navLinks.forEach(item => {
                item.classList.toggle('active', item.getAttribute('href') === targetHref);
            });
            closeMobileMenu();
        });
    });

    // Activar automáticamente según la posición del scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });

        if (window.scrollY < 300) {
            currentSection = '#';
        }

        if (currentSection !== '') {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === currentSection);
            });
        }
    });
});

// ==========================================
// BASE DE DATOS DEL CATÁLOGO
// ==========================================
// Categorías válidas: "Tejidos", "Trabajos Escolares", "Manualidades"
// Subcategorías de Tejidos: "Animales", "Personajes", "Personalizados", "Varios" (En las otras 2 categorías pon null)
// Estados válidos: "Disponible" (en stock) o "Entregado" (pedido entregado)

const catalogoProductos = [
    {
        id: 1,
        nombre: "Sonic Tejido",
        descripcion: "El famoso erizo azul tejido a mano con estambre suave, cuidando cada detalle de sus púas, guantes y sus clásicos tenis rojos.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/1.webp"
    },
    {
        id: 2,
        nombre: "Goku Tejido",
        descripcion: "Versión tejida de Goku con su icónico traje naranja de entrenamiento y cabello detallado a crochet, ideal para fans del anime.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/2.jpeg"
    },
    {
        id: 3,
        nombre: "Gatito Negro con Collar",
        descripcion: "Tierno gatito negro tejido a crochet con un delicado collar rosa y bigotes bordados a mano, perfecto para decorar o regalar.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/3.jpeg"
    },
    {
        id: 4,
        nombre: "Plumas y Lápices Decorados",
        descripcion: "Capuchones tejidos a crochet con diseños de tulipanes, emoji y perrito para darle un toque único y divertido a tus útiles o regalos.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/4.jpeg"
    },
    {
        id: 5,
        nombre: "Pajarita Lila con Moño",
        descripcion: "Adorable pajarita rechoncha tejida en estambre ultra suave tipo chenille color lila, decorada con un tierno moño en la cabeza.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/5.jpeg"
    },
    {
        id: 6,
        nombre: "Paquete Tortugas Ninja",
        descripcion: "Colección completa de las cuatro Tortugas Ninja tejidas a mano con sus clásicos antifaces de colores y caparazón detallado.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/6.jpeg"
    },
    {
        id: 7,
        nombre: "Colibrí Rosa",
        descripcion: "Delicado colibrí en tonos rosa y fucsia con alas matizadas en verde y negro, tejido a crochet para colgar o decorar cualquier rincón especial.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/7.jpeg"
    },
    {
        id: 8,
        nombre: "Colibrí Esmeralda",
        descripcion: "Colorido colibrí tejido a mano en tonos verdes vibrantes con detalles en el pecho y pico largo, ideal para dar vida y naturaleza a tu hogar.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/8.jpeg"
    },
    {
        id: 9,
        nombre: "Gatitos en Tacita",
        descripcion: "Tiernos gatitos asomándose desde su propia taza de café tejida a crochet. Un detalle original y encantador para los amantes de los michis.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/9.jpeg"
    },
    {
        id: 10,
        nombre: "Muñeca Graduada en Rosa",
        descripcion: "Muñeca personalizada de graduación con toga, birrete y estola en tonos pastel, tejida especialmente para celebrar e inmortalizar un gran logro académico.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/10.jpeg"
    },
    {
        id: 11,
        nombre: "Muñeca de Graduación Clásica",
        descripcion: "Muñeca conmemorativa de graduación con toga negra tradicional, estola dorada y birrete, el regalo perfecto para felicitar al nuevo profesionista.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/11.jpeg"
    },
    {
        id: 12,
        nombre: "Ramo de Rosas",
        descripcion: "Hermoso ramo de rosas eternas en tonos rosados envuelto en tejido artesanal con moño, pensado para sorprender con flores que duran para siempre.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/12.webp"
    },
    {
        id: 13,
        nombre: "Ramo de Rosas Eternas (Individual)",
        descripcion: "Arreglo floral tejido a crochet con rosas detalladas con moño. Disponible en distintos colores a elegir (venta individual por pieza).",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/13.webp"
    },
    {
        id: 14,
        nombre: "Búho de Graduación",
        descripcion: "Simpático búho sabio tejido a mano portando su birrete de graduado, un obsequio tierno y significativo para celebrar el fin de cursos.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Disponible",
        imagen: "assets/img/catalogo/14.jpeg"
    },
    {
        id: 15,
        nombre: "Calavera Decorativa en Cartón Reciclado",
        descripcion: "Creativa manualidad de Día de Muertos elaborada con cartón de huevo reciclado, pintada a mano y coronada con flores de papel. Ideal para proyectos escolares y altares.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/15.jpeg"
    },
    {
        id: 16,
        nombre: "Calabazas Decorativas de Temporada",
        descripcion: "Calabazas tejidas a crochet en distintos tamaños y vibrantes tonos naranjas con tallo verde, perfectas para ambientar espacios en otoño.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/16.jpeg"
    },
    {
        id: 17,
        nombre: "Recuerdo en Macetita con Globos",
        descripcion: "Detalle artesanal en maceta de barro decorada con moño azul, corazón y globos en tonos pastel, ideal como recuerdo o centro de mesa para bautizo y baby shower.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/17.jpeg"
    },
    {
        id: 18,
        nombre: "Recuerdos de Osito en Maceta",
        descripcion: "Tiernos recuerdos para evento con figura de osito azul en macetita decorada artesanalmente, pensados para agradecer a tus invitados en ocasiones especiales.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/18.jpeg"
    },
    {
        id: 19,
        nombre: "Muñeco Barbero Personalizado",
        descripcion: "Muñeco personalizado de estilista o barbero tejido a mano, equipado con su peine y su clásico poste de barbería en miniatura sobre base.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/19.jpeg"
    },
    {
        id: 20,
        nombre: "Conjunto de Gorrito y Cuello Tejido",
        descripcion: "Cálido set invernal en color rosa tejido a punto, compuesto por gorrito con orejitas y cuello abotonado suave y cómodo para proteger del frío.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/20.jpeg"
    },
    {
        id: 21,
        nombre: "Caballito Tejido con Montura",
        descripcion: "Hermoso caballo tejido en tonos café con crin oscura, riendas amarillas y alforjas tejidas con detalles tradicionales.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/21.jpeg"
    },
    {
        id: 22,
        nombre: "Gnomos de Graduación (Llaveros)",
        descripcion: "Simpáticos mini gnomos tejidos a crochet con su birrete y borla en distintos colores, ideales como llavero o recuerdo de fin de cursos.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/22.jpeg"
    },
    {
        id: 23,
        nombre: "Muñeca Reversible a Ramo (Tonos Rosa y Lila)",
        descripcion: "Diseño mágico 2 en 1 tejido a mano: con la falda hacia abajo luce como una tierna muñeca con corona floral, y al subir su vestido se transforma en un hermoso ramo de rosas.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/23.jpeg"
    },
    {
        id: 24,
        nombre: "Muñeca Reversible a Ramo (Vestido Amarillo)",
        descripcion: "Sorprendente muñeca tejida reversible que al voltear su vestido amarillo se convierte en un elegante ramo de flores eternas en tonos pastel.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/24.jpeg"
    },
    {
        id: 25,
        nombre: "Boo de Monsters, Inc. con Disfraz y Osito (Set Completo)",
        descripcion: "Tierna versión tejida de Boo que incluye todas sus piezas desmontables: la muñeca con su blusa rosa y coletas, su inseparable osito de peluche y su icónico traje de monstruo morado para vestirla.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/25.jpeg"
    },
    {
        id: 26,
        nombre: "Recuerdos de Graduación con Búho",
        descripcion: "Originales recuerdos de fin de cursos decorados con simpáticos búhos graduados, birretes y diplomas en miniatura, ideales para celebrar e inmortalizar tu evento escolar.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/26.jpeg"
    },
    {
        id: 27,
        nombre: "Llavero de Búho Dormilón",
        descripcion: "Tierno llavero tejido a crochet en tonos claros con detalles matizados y penacho morado en las orejas, perfecto para decorar tu bolso, mochila o llaves.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/27.jpeg"
    },
    {
        id: 28,
        nombre: "Adorno de Payasito para Puerta",
        descripcion: "Colorido cartel decorativo de payasito con sombrero y moño elaborado en fieltro y foami sobre fondo amarillo, ideal para ambientar puertas de salones escolares o fiestas.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/28.jpeg"
    },
    {
        id: 29,
        nombre: "Dulcero de Payasito en Fieltro",
        descripcion: "Alegre dulcero de payasito tridimensional confeccionado a mano con texturas suaves, cabello azul esponjoso, nariz roja y sombrero.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/29.jpeg"
    },
    {
        id: 30,
        nombre: "Diadema de Trenza con Listones Multicolor",
        descripcion: "Accesorio artesanal de trenza larga entretejida con listones vibrantes y moños satinados, diseñada especialmente para complementar vestuarios de bailables y festivales.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/30.jpeg"
    },
    {
        id: 31,
        nombre: "Diadema Folklórica de Listones",
        descripcion: "Vistosa diadema forrada artesanalmente con listones entrelazados en colores vivos, ideal como accesorio de vestuario para presentaciones escolares y danzas tradicionales.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/31.jpeg"
    },
    {
        id: 32,
        nombre: "Dulcero tipo Sombrero de Copa Decorado en Foami",
        descripcion: "Dulcero tipo sombrero negro de copa alta personalizado con un gran moño naranja y estrellas de colores en foami, perfecto para fiestas infantiles.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/32.jpeg"
    },
    {
        id: 33,
        nombre: "Llaveros de Mariposas y Gatitos Tejidos",
        descripcion: "Mini figuras tejidas a crochet de tiernos gatitos y mariposas en distintos colores, ideales como llaveros personalizados o recuerdos.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/33.jpeg"
    },
    {
        id: 34,
        nombre: "Chalecos Didácticos de Motricidad Fina",
        descripcion: "Baberos y chalecos sensoriales confeccionados en tela y manta con cierres, botones y agujetas, diseñados como material escolar para estimular el aprendizaje y la motricidad infantil.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/34.jpeg"
    },
    {
        id: 35,
        nombre: "Totoro y Amigos Tejidos",
        descripcion: "Encantador set inspirado en Mi Vecino Totoro tejido a mano en sus diferentes tamaños, cuidando cada detalle de sus orejas, bigotes y las marquitas de su pancita.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/35.jpeg"
    },
    {
        id: 36,
        nombre: "Muñeca Frida Kahlo con Rebozo Rojo",
        descripcion: "Muñeca Frida Kahlo tejida de inspiración mexicana con vestido negro, cabello trenzado con tocado floral y un hermoso rebozo tejido en color rojo.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/36.jpeg"
    },
    {
        id: 37,
        nombre: "Dulcero y Adorno de Santa Claus",
        descripcion: "Recipiente decorativo forrado artesanalmente en fieltro y tela suave con el rostro y la barba blanca de Santa Claus, ideal para decorar o regalar dulces en Navidad.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/37.jpeg"
    },
    {
        id: 38,
        nombre: "Rosario y Angelitos para Recuerdo",
        descripcion: "Delicado rosario tejido acompañado de tiernos angelitos en miniatura, pensados como recuerdos especiales para bautizo, primera comunión o baby shower.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/38.jpeg"
    },
    {
        id: 39,
        nombre: "Muñeca Fantasía de Cabello Rosa",
        descripcion: "Muñeca tejida personalizada con larga cabellera rosa fucsia, orejitas blancas y vestido morado, tejida a mano con estambre suave.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/39.jpeg"
    },
    {
        id: 40,
        nombre: "Llavero de Mariposa Sonriente",
        descripcion: "Tierna mariposa tejida a crochet en tonos pastel rosa y gris con antenitas y carita bordada, perfecta para llevar como llavero o colgar en tu mochila.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/40.jpeg"
    },
    {
        id: 41,
        nombre: "Llavero de Muñequita Enfermera con Capa Negra",
        descripcion: "Mini muñeca enfermera personalizada con chongo alto y vestimenta oscura tejida a detalle, equipada con argolla metálica para usar como llavero.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/41.jpeg"
    },
    {
        id: 42,
        nombre: "Muñeco Guardia Nacional Personalizado",
        descripcion: "Muñeco guardia nacional personalizado tejido a mano con gorra blanca, playera negra con iniciales bordadas y pantalón claro, creado a partir de los rasgos y estilo de una persona especial.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/42.jpeg"
    },
    {
        id: 43,
        nombre: "Nico Robin Tejida (One Piece)",
        descripcion: "Recreación tejida a crochet de Nico Robin con su atuendo característico: top azul, pareo naranja bordado a mano con detalles florales, lentes de sol en la cabeza y su mochila rosa en la espalda.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/43.jpeg"
    },
    {
        id: 44,
        nombre: "Muñeca Doctora Personalizada",
        descripcion: "Profesionista de la salud equipada con su bata médica blanca, estetoscopio tejido al cuello y cubrebocas desmontable, el regalo ideal para médicos y enfermeras.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/44.jpeg"
    },
    {
        id: 45,
        nombre: "Girasol y Tulipán en Macetita",
        descripcion: "Dúo de flores eternas tejidas a crochet en sus propias macetas pequeñas: un radiante girasol amarillo y un delicado tulipán morado que alegran cualquier escritorio.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/45.jpeg"
    },
    {
        id: 46,
        nombre: "Ballenitas de Colores para Recuerdos",
        descripcion: "Pedido especial por lote de tiernas ballenitas miniatura tejidas a crochet en vibrantes tonos amarillo, rosa y azul, ideales como llaveros, detalles o recuerdos para fiestas y eventos.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/46.jpeg"
    },
    {
        id: 47,
        nombre: "Muñeca Caperucita Roja Tejida",
        descripcion: "Encantadora muñeca inspirada en Caperucita Roja con su vestido rojo con delantal blanco, largas trenzas cafés y su clásica capa con capucha tejida a crochet.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/47.jpeg"
    },
    {
        id: 48,
        nombre: "Flor Sonriente en Maceta",
        descripcion: "Simpática flor de pétalos morados con centro amarillo y carita feliz bordada sobre su maceta tejida, un detalle lleno de ternura para regalar.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/48.jpeg"
    },
    {
        id: 49,
        nombre: "Colección The Beatles (Sgt. Pepper's)",
        descripcion: "Cuarteto completo de The Beatles tejidos luciendo sus icónicos uniformes coloridos de la era Sgt. Pepper's, con peinados, bigotes y lentes detallados.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/49.jpeg"
    },
    {
        id: 50,
        nombre: "Sackboy Tejido (LittleBigPlanet)",
        descripcion: "Fiel recreación tejida a crochet del famoso personaje Sackboy en tono café con sus costuras características, cierre frontal detallado y gran sonrisa.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/50.jpeg"
    },
    {
        id: 51,
        nombre: "Batman Tejido (Traje Clásico)",
        descripcion: "El Caballero de la Noche tejido a mano con capucha y capa oscura, ojos blancos expresivos, cinturón amarillo y su clásico escudo del murciélago en el pecho.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/51.jpeg"
    },
    {
        id: 52,
        nombre: "Corona Infantil Personalizada para Puerta",
        descripcion: "Hermosa corona decorativa acolchada con nombre personalizado, decorada artesanalmente con figuras en relieve de avioncito, globo aerostático, cochecitos, nubes y muñeco con papalote.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Disponible",
        imagen: "assets/img/catalogo/52.jpeg"
    },
    {
        id: 53,
        nombre: "Antifaz de Ratoncito en Foami",
        descripcion: "Simpático antifaz de ratoncito elaborado artesanalmente con orejas rosadas, nariz en relieve y bigotes detallados, ideal para festivales escolares, obras de teatro y disfraces.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/53.jpeg"
    },
    {
        id: 54,
        nombre: "Gorro Vikingo Tejido (Negro y Dorado)",
        descripcion: "Original gorro de casco vikingo tejido a crochet en color negro con franjas doradas, protector nasal y cuernos laterales detallados.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/54.jpeg"
    },
    {
        id: 55,
        nombre: "Gorro Tejido con Cuernos (Tono Café)",
        descripcion: "Cálido gorrito tejido a mano en estambre color café claro con pequeños cuernos blancos a los lados, perfecto para sesiones de fotos infantiles o abrigarse con un estilo divertido.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/55.jpeg"
    },
    {
        id: 56,
        nombre: "Figuras Navideñas y Esferas en Foami",
        descripcion: "Coloridas manualidades navideñas en foami de Santa Claus, la Sra. Claus con nombres personalizados y esferas decoradas, ideales para ambientar puertas, salones o el hogar.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/56.jpeg"
    },
    {
        id: 57,
        nombre: "Maqueta y Mampara Escolar (Exposición Yucatán)",
        descripcion: "Proyecto escolar completo elaborado con mampara tríptica ilustrada y maqueta representativa con figuras y elementos culturales a escala para exposiciones académicas.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/57.jpeg"
    },
    {
        id: 58,
        nombre: "Pinitos Navideños Colgantes a Crochet",
        descripcion: "Alegres arbolitos de Navidad tejidos a mano en color verde con esferas bordadas y tronco en foami, listos para colgar en el pino o regalar como detalle decembrino.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/58.jpeg"
    },
    {
        id: 59,
        nombre: "Tulipanes Miniatura Tejidos",
        descripcion: "Tiernos botones de tulipán tejidos a crochet en vibrantes tonos rojo, morado y rosa con tallo y hojitas verdes, pensados como detalles o recuerdos especiales.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/59.jpeg"
    },
    {
        id: 60,
        nombre: "Llaveros de Frida Kahlo",
        descripcion: "Cabecitas tejidas a crochet inspiradas en Frida Kahlo con su característica ceja bordada y tocado de flores de colores en el cabello.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/60.jpeg"
    },
    {
        id: 61,
        nombre: "Barquillos de Helado y Dulces Tejidos",
        descripcion: "Colorida colección de helados en cono, cupcakes y flores tejidas a crochet en tonos pastel, ideales para recuerdos de fiestas infantiles o llaveros.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/61.jpeg"
    },
    {
        id: 62,
        nombre: "Set de Calabazas Tejidas Multicolor",
        descripcion: "Calabazas decorativas tejidas a mano en distintos tamaños y combinaciones de estambre matizado, crema, rosa y naranja con tallo en espiral.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/62.jpeg"
    },
    {
        id: 63,
        nombre: "Gorro Vikingo Tejido (Vino y Mostaza)",
        descripcion: "Divertido gorro estilo casco nórdico tejido a crochet en color vino con detalles en amarillo mostaza y cuernos curvos tejidos en relieve.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/63.jpeg"
    },
    {
        id: 64,
        nombre: "Gorro Vikingo con Trenzas Largas",
        descripcion: "Gorro tejido tipo casco vikingo en gris y amarillo con cuernos blancos, complementado con dos largas trenzas tejidas en color café.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/64.jpeg"
    },
    {
        id: 65,
        nombre: "Gorro Rústico con Cuernos y Borde Peludo",
        descripcion: "Gorro abrigador tejido a mano en tonos tierra con borde texturizado tipo peluche y cuernos laterales blancos, ideal para el frío o caracterizaciones.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/65.jpeg"
    },
    {
        id: 66,
        nombre: "Distintivos de Tortugas Ninja en Foami",
        descripcion: "Manualidad de caritas de las Tortugas Ninja elaboradas en foami con sus antifaces rojo y azul, perfectas como distintivos, apliques decorativos o recuerdos para fiestas temáticas.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/66.jpeg"
    },
    {
        id: 67,
        nombre: "Ramo Especial con Muñeco de Harry Styles Desmontable",
        descripcion: "Original ramo decorado con flores y detalles que incluye una figura tejida de Harry Styles tejida a mano, la cual se puede sacar del ramo para conservarla como muñeco de colección.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/67.jpeg"
    },
    {
        id: 68,
        nombre: "Guirnaldas Navideñas de Pinitos y Esferas",
        descripcion: "Series decorativas tejidas a crochet compuestas por pinitos verdes con estrella y esferas multicolores entrelazadas, ideales para adornar el árbol, repisas o paredes en Navidad.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/68.jpeg"
    },
    {
        id: 69,
        nombre: "Conejito con Overol y Gorra",
        descripcion: "Tierno muñeco de conejito tejido a mano luciendo un overol de mezclilla azul, playera blanca y gorra, diseñado con detalles personalizados.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/69.jpeg"
    },
    {
        id: 70,
        nombre: "Pulpitos Sujetadores de Lápices y Colores",
        descripcion: "Creativos organizadores escolares tejidos a crochet con diseño de pulpito lila y versión Minion, cuyos tentáculos largos sirven para amarrar y sujetar cada uno de tus colores o plumones.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/70.jpeg"
    },
    {
        id: 71,
        nombre: "Calaveritas y Vela de Día de Muertos en Foami",
        descripcion: "Coloridas figuras decorativas elaboradas artesanalmente en foami de catrinas, calaveras adornadas y vela encendida, ideales para ambientar altares y espacios escolares.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/71.jpeg"
    },
    {
        id: 72,
        nombre: "Frascos Dulceros con Funda de Conejito",
        descripcion: "Tiernos dulceros de vidrio vestidos con fundas tejidas a crochet en tonos rosa pastel y blanco con carita y orejas largas de conejito, perfectos como recuerdos para eventos infantiles o Pascua.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/72.jpeg"
    },
    {
        id: 73,
        nombre: "Set de Mini Helados, Cupcakes y Flor a Crochet",
        descripcion: "Encantadoras figuras miniatura tejidas a mano de barquillos de helado, pastelitos con cereza y flor rosada, ideales para llaveros, apliques o pequeños obsequios.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/73.jpeg"
    },
    {
        id: 74,
        nombre: "Calendario de Adviento Navideño en Forma de Pino",
        descripcion: "Árbol de Navidad interactivo elaborado con bolsitas numeradas día por día y coronado con una estrella amarilla, pensado para descubrir una sorpresa o regalo diario antes de Nochebuena.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/74.jpeg"
    },
    {
        id: 75,
        nombre: "Memo Ochoa Tejido",
        descripcion: "Versión tejida del arquero Memo Ochoa tejida a mano con su uniforme azul de portero, dorsal bordado en la espalda, cabellera rizada característica con banda y guantes listos para atajar.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/75.jpeg"
    },
    {
        id: 76,
        nombre: "Flor Lirio Matizada Tejida a Crochet",
        descripcion: "Vistosa flor eterna tejida a mano con pétalos amarillos matizados, centro morado en relieve y tallo largo con hojas verdes, ideal para iluminar cualquier espacio.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/76.jpeg"
    },
    {
        id: 77,
        nombre: "Muñeco Guardia Nacional Tejido",
        descripcion: "Figura personalizada de elemento de la Guardia Nacional tejida a crochet con su uniforme táctico en blanco y negro, chaleco con insignias, casco, pasamontañas y equipamiento detallado.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/77.jpeg"
    },
    {
        id: 78,
        nombre: "Sanji Tejido (One Piece)",
        descripcion: "Recreación tejida a mano de Sanji de la serie One Piece, luciendo su elegante traje negro de doble botonadura dorada, cabello rubio característico y su icónica ceja en espiral.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/78.jpeg"
    },
    {
        id: 79,
        nombre: "Maqueta Escolar de Acuario y Ecosistema Marino",
        descripcion: "Diorama escolar tipo acuario elaborado en caja decorada con fondo marino, iluminación superior y figuras ilustradas de especies acuáticas con sus nombres para exposición.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/79.jpeg"
    },
    {
        id: 80,
        nombre: "Manta Circular a Ramo de Rosas Azules",
        descripcion: "Ingenioso tejido artesanal 2 en 1: extendido luce como un hermoso mantel o carpeta circular con borde de flores, y al doblarlo y recogerlo se transforma en un impresionante ramo de rosas azules.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/80.jpeg"
    },
    {
        id: 81,
        nombre: "Arreglo Floral Multicolor en Foami",
        descripcion: "Vistoso arreglo floral elaborado artesanalmente en foami termoformado, combinando girasoles y flores en vibrantes tonos rojos, morados, rosas y amarillos sobre base decorativa, ideal como centro de mesa o regalo especial.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/81.jpeg"
    },
    {
        id: 82,
        nombre: "Hadas Mágicas con Alas a Crochet",
        descripcion: "Delicadas muñequitas tipo hada tejidas a mano con vestidos en tonos pastel, alas detalladas en la espalda y tocados florales en el peinado.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/82.jpeg"
    },
    {
        id: 83,
        nombre: "Patito con Traje y Gorro de Ranita",
        descripcion: "Adorable patito blanco tejido con pico naranja vestido con un simpático overol y gorrito verde de rana con ojos saltones.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/83.jpeg"
    },
    {
        id: 84,
        nombre: "Tortuga Centro de Mesa y Mantel Tejido",
        descripcion: "Creativo centro de mesa o carpeta decorativa tejida a crochet con forma de tortuga, combinando un caparazón circular morado con cabecita y aletas en verde menta sobre base calada rosa.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/84.jpeg"
    },
    {
        id: 85,
        nombre: "Gerberas Rosas Tejidas a Crochet",
        descripcion: "Hermosas flores eternas en vibrantes tonos rosa con tallo y hojas verdes tejidas a mano, listas para regalar en envoltura individual o decorar cualquier espacio.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/85.jpeg"
    },
    {
        id: 86,
        nombre: "Llaveros y Mini Ramo de Girasoles",
        descripcion: "Alegres girasoles miniatura tejidos a crochet en distintas presentaciones: llaveros individuales, flor con tallo y mini ramo envuelto con moño.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/86.jpeg"
    },
    {
        id: 87,
        nombre: "Colección de Gatitos Tejidos en Diferentes Diseños",
        descripcion: "Tiernos michis tejidos a mano en variedad de estilos, posturas y colores (lila, rosado, atigrado, amarillo y gris), ideales para coleccionar o regalar a amantes de los gatos.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/87.jpeg"
    },
    {
        id: 88,
        nombre: "Stitch Tejido Sentado",
        descripcion: "Adorable recreación tejida a crochet de Stitch en tonos azules con sus grandes orejas características con interior rosado y nariz prominente.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/88.jpeg"
    },
    {
        id: 89,
        nombre: "Rafael de las Tortugas Ninja Tejido",
        descripcion: "Versión tejida a mano de Rafael luciendo su icónico antifaz rojo, cinturón con inicial y caparazón café detallado en relieve por la parte trasera.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/89.jpeg"
    },
    {
        id: 90,
        nombre: "Maqueta Escolar de los Estados del Agua",
        descripcion: "Proyecto escolar tridimensional que representa de forma visual y didáctica los estados líquido, sólido y gaseoso del agua con etiquetas y materiales creativos.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/90.jpeg"
    },
    {
        id: 91,
        nombre: "Cabeza de Muñeco de Nieve con Orejeras",
        descripcion: "Simpático adorno navideño de muñeco de nieve elaborado con nariz de zanahoria tejida, mejillas rosadas y abrigadoras orejeras verdes.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/91.jpeg"
    },
    {
        id: 92,
        nombre: "Teléfono Susurrador Didáctico (Material Auditivo Escolar)",
        descripcion: "Herramienta escolar interactiva elaborada con manguera acústica y bocinas decoradas a los extremos, diseñada para actividades auditivas, de lectura y pronunciación en clase.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/92.jpeg"
    },
    {
        id: 93,
        nombre: "Lote de Girasoles Tejidos para Recuerdos",
        descripcion: "Pedido especial de girasoles tejidos a crochet en color amarillo vibrante con centro café, ideales para entregar como distintivos, llaveros o recuerdos en eventos.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/93.jpeg"
    },
    {
        id: 94,
        nombre: "Dulceros y Lapiceros de Five Nights at Freddy's",
        descripcion: "Coloridos cilindros decorativos elaborados a mano con los personajes de Five Nights at Freddy's en relieve, perfectos como centros de mesa o dulceros para fiestas infantiles.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/94.jpeg"
    },
    {
        id: 95,
        nombre: "Antifaz de Perrito Dálmata en Foami",
        descripcion: "Divertido antifaz infantil de perrito blanco con manchas negras y orejas caídas elaborado en foami, ideal para bailables, obras de teatro y festivales escolares.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/95.jpeg"
    },
    {
        id: 96,
        nombre: "Muñeco de Nieve Colgante con Patitas Móviles",
        descripcion: "Alegre adorno navideño de muñeco de nieve elaborado en fieltro y tela con sombrero negro, bufanda amarilla y piernas colgantes de listón.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/96.jpeg"
    },
    {
        id: 97,
        nombre: "Duendecillos y Santa Claus Miniatura a Crochet",
        descripcion: "Dúo de tiernos personajes navideños tejidos a mano con gorritos altos en rojo y rosa pastel y barbas blancas esponjosas para decorar en Navidad.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Disponible",
        imagen: "assets/img/catalogo/97.jpeg"
    },
    {
        id: 98,
        nombre: "Angelitas de Guarda Tejidas a Crochet",
        descripcion: "Delicadas muñequitas de ángel en dos tamaños tejidas con vestido blanco con detalles dorados, alas en la espalda y cabello recogido, ideales para bautizo o primera comunión.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Disponible",
        imagen: "assets/img/catalogo/98.jpeg"
    },
    {
        id: 99,
        nombre: "Muñeco Personalizado de Valuador Presta Prenda",
        descripcion: "Muñeco personalizado tejido a mano con el uniforme gris de camisa con logotipo bordado y pantalón oscuro, creado a medida como un regalo laboral único.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/99.jpeg"
    },
    {
        id: 100,
        nombre: "Muñeca Sobrecargo Personalizada con Avión",
        descripcion: "Set tejido de azafata tejida a detalle con su elegante uniforme oscuro, pañuelo rojo al cuello y maleta de viaje, acompañada de un tierno avioncito tejido a juego.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/100.jpeg"
    },
    {
        id: 101,
        nombre: "Muñeca Candy Candy Tejida",
        descripcion: "Nostálgica recreación tejida a crochet de Candy Candy con sus clásicas coletas rubias rizadas con moños rojos, vestido blanco con azul estilo marinero y grandes ojos expresivos.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/101.jpeg"
    },
    {
        id: 102,
        nombre: "Fede Vigevani Tejido",
        descripcion: "Figura personalizada del youtuber Fede Vigevani tejida a mano, luciendo su sudadera azul con el logo amarillo de carita feliz al frente, pantalón beige, barba y peinado característico.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/102.jpeg"
    },
    {
        id: 103,
        nombre: "Muñeco Ingeniero Civil / Arquitecto Personalizado",
        descripcion: "Muñeco personalizado tejido a mano equipado con casco blanco de seguridad, chaleco naranja con franjas reflejantes, lentes y planos enrollados bajo el brazo, ideal para festejar a profesionistas de la construcción.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Disponible",
        imagen: "assets/img/catalogo/103.jpeg"
    },
    {
        id: 104,
        nombre: "Dúo de Tulipanes Grandes Tejidos",
        descripcion: "Tiernos tulipanes tejidos a crochet en tonos amarillo pastel y rosa suave con tallo verde y moño satinado, perfectos para regalar un detalle floral que nunca se marchita.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/104.jpeg"
    },
    {
        id: 105,
        nombre: "Mantel Individual Navideño de Santa Claus",
        descripcion: "Original mantel y centro de mesa circular tejido a crochet con el rostro, barba blanca y gorro rojo de Santa Claus, pensado para vestir tu comedor con calidez en la temporada decembrina.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/105.jpeg"
    },
    {
        id: 106,
        nombre: "Muñeca Psicóloga Personalizada",
        descripcion: "Muñeca personalizada tejida a detalle con uniforme rosa pastel, símbolo de Psicología bordado en el pecho y libreta en mano, un obsequio único para celebrar su vocación.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/106.jpeg"
    },
    {
        id: 107,
        nombre: "Mantel y Centro de Mesa de Calabaza Otoñal",
        descripcion: "Carpeta circular tejida a mano en estambre matizado de tonos naranjas y cafés con tallo verde superior, ideal para decorar mesas y superficies durante el otoño.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/107.jpeg"
    },
    {
        id: 108,
        nombre: "Mantel Tejido de Dinosaurio Verde",
        descripcion: "Simpático mantel o centro de mesa tejido a crochet con diseño de dinosaurio en color verde esmeralda y detalles amarillos en las escamas y las patas.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/108.jpeg"
    },
    {
        id: 109,
        nombre: "Llaveros de Vaquitas Tejidas",
        descripcion: "Adorables cabecitas de vaca tejidas a mano en combinación café con blanco, hocico rosado y pequeños cuernos, ideales para llevar en tus llaves o mochila.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/109.jpeg"
    },
    {
        id: 110,
        nombre: "Colección de Sujetadores de Lápices y Colores",
        descripcion: "Divertidos organizadores escolares tipo pulpo tejidos a crochet con diseños de ajolote rosa, Frida Kahlo, pajarito azul, Minion y unicornio, cuyos tentáculos sujetan cada uno de tus lápices o colores.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/110.jpeg"
    },
    {
        id: 111,
        nombre: "Unicornio Mágico de Pelo Multicolor",
        descripcion: "Tierno unicornio blanco tejido a crochet con hocico y patitas rosas, cuerno dorado y una vistosa melena de colores arcoíris.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/111.jpeg"
    },
    {
        id: 112,
        nombre: "Trío de Angelitos de la Guarda a Crochet",
        descripcion: "Hermosos ángeles tejidos a mano con túnicas en blanco y azul rey con bordes dorados y alas desplegadas, ideales como recuerdo de bautizo, primera comunión o protección del hogar.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/112.jpeg"
    },
    {
        id: 113,
        nombre: "Peter Parker / Spider-Man con Máscara Desmontable",
        descripcion: "Increíble versión tejida de Peter Parker con su traje rojo y azul de Spider-Man, acompañado de su máscara tejida intercambiable con telarañas bordadas.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/113.jpeg"
    },
    {
        id: 114,
        nombre: "Franky Tejido (One Piece)",
        descripcion: "Espectacular recreación tejida a mano del ciborg Franky de One Piece, cuidando cada detalle de sus enormes brazos rojos y azules marcados con BF-37, lentes oscuros y peinado característico.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/114.jpeg"
    },
    {
        id: 115,
        nombre: "BMO Tejido (Hora de Aventura)",
        descripcion: "Fiel figura tejida a crochet de la consola BMO en color verde agua con todos sus botones de colores en relieve, pantalla con carita sonriente y brazos y piernas articuladas.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/115.jpeg"
    },
    {
        id: 116,
        nombre: "Lote de Dulceros Navideños de Santa Claus",
        descripcion: "Pedido especial de botes dulceros decorados artesanalmente con el rostro, barba blanca y gorro rojo de Santa Claus, listos para rellenar de dulces y regalar en posadas o eventos navideños.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/116.jpeg"
    },
    {
        id: 117,
        nombre: "Vikingo Personalizado con Hot Dog (Mascota de Negocio)",
        descripcion: "Muñeco tejido temático creado a medida para local de comida Dog-kingos, luciendo casco con cuernos, barba pelirroja trenzada, hacha en mano y un detallado hot dog tejido con mostaza.",
        categoria: "Tejidos",
        subcategoria: "Personalizados",
        estado: "Entregado",
        imagen: "assets/img/catalogo/117.jpeg"
    },
    {
        id: 118,
        nombre: "Virgen de Guadalupe Tejida a Crochet",
        descripcion: "Devota representación de la Virgen de Guadalupe tejida a mano con túnica rosa, manto azul estrellado con resplandor dorado alrededor y querubín en la base.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/118.jpeg"
    },
    {
        id: 119,
        nombre: "Gatito Gris y Cabecitas Calicó para Llavero",
        descripcion: "Tierno gatito gris sentado de cuerpo completo acompañado de dos cabecitas de michis manchados tejidas a crochet, ideales para usar como llaveros o regalar.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/119.jpeg"
    },
    {
        id: 120,
        nombre: "Llaveros de Cerezas a Crochet",
        descripcion: "Simpáticos pares de cerezas tejidas a mano en tonos rojo intenso y rosa pastel con sus hojitas verdes, perfectas para decorar bolsos, mochilas o llaves.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/120.jpeg"
    },
    {
        id: 121,
        nombre: "Llavero de Virgencita Tejida a Crochet",
        descripcion: "Delicada Virgencita en versión miniatura tejida a mano con manto oscuro, borde amarillo dorado, corona y manos en oración, lista para llevar como llavero o recuerdo.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/121.jpeg"
    },
    {
        id: 122,
        nombre: "Corona Real Infantil en Foami Diamantado",
        descripcion: "Vistosa corona dorada elaborada artesanalmente en foami brillante con figura central personalizada, ideal para cumpleaños, festivales escolares o sesiones de fotos.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/122.jpeg"
    },
    {
        id: 123,
        nombre: "Centros de Mesa en Maceta con Tulipanes",
        descripcion: "Elegantes arreglos para evento en macetas decoradas con listón verde menta, etiqueta conmemorativa y tulipanes blancos y verdes, pensados como recuerdos o centros de mesa.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/123.jpeg"
    },
    {
        id: 124,
        nombre: "Lote de Llaveros de Virgencitas para Recuerdo",
        descripcion: "Juego de mini Virgencitas tejidas a crochet con resplandor dorado y corona, ideales para entregar a tus invitados como recuerdo de bautizo, primera comunión o confirmación.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/124.jpeg"
    },
    {
        id: 125,
        nombre: "Portavasos del Águila del Club América",
        descripcion: "Original portavasos tejido a crochet con el diseño de la mascota del Club América en colores amarillo y azul con cabecita y alas en relieve, el detalle perfecto para aficionados azulcremas.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/125.jpeg"
    },
    {
        id: 126,
        nombre: "Rosarios Completos Tejidos a Crochet",
        descripcion: "Hermosos rosarios artesanales tejidos punto por punto en tonos azul cielo y rosa pastel con su cruz tejida, pensados como recuerdos significativos para eventos religiosos.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/126.jpeg"
    },
    {
        id: 127,
        nombre: "Guías Decorativas de Hojas en Papel Crepé",
        descripcion: "Largas tiras de follaje verde elaboradas a mano con hojas de papel crepé, ideales para ambientar salones, fondos fotográficos, carros alegóricos o eventos escolares.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/127.jpeg"
    },
    {
        id: 128,
        nombre: "Colección de Gatitos Siameses y Blancos Tejidos",
        descripcion: "Pequeños gatitos tejidos a crochet de cuerpo completo en estilo siamés y blanco con manchas, cuidando cada detalle de sus orejitas, colitas y patitas.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/128.jpeg"
    },
    {
        id: 129,
        nombre: "Esfera Colgante de Muñeco de Nieve",
        descripcion: "Tierna esfera navideña artesanal con carita sonriente de muñeco de nieve, nariz roja abultada y gorrito de Santa Claus, lista para colgar en el árbol o decorar el hogar.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/129.jpeg"
    },
    {
        id: 130,
        nombre: "Adornos de Mesa Florales con Sombrero",
        descripcion: "Lote de centros de mesa en macetas rojas con flores y follaje coronados por sombreros de estilo campirano, diseñados especialmente para ambientar fiestas temáticas y eventos.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/130.jpeg"
    },
    {
        id: 131,
        nombre: "Juguetes Escolares con Material Reciclado",
        descripcion: "Creativos juguetes didácticos elaborados con botellas, taparroscas y envases reciclados, incluyendo un carrito azul y un balero artesanal para proyectos escolares de ecología.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/131.jpeg"
    },
    {
        id: 132,
        nombre: "Llavero para Maestra con Crayolas, Lápiz y Girasol",
        descripcion: "Colorido llavero múltiple tejido a crochet que reúne crayolas de distintos tonos, lápiz, manzana roja y un girasol, el obsequio ideal para agradecer a maestras y educadoras.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/132.jpeg"
    },
    {
        id: 133,
        nombre: "Mini Bolsita Tejida en Tonos Morados",
        descripcion: "Coqueta bolsita de mano tejida a crochet con estambre matizado en morado, lila y blanco, decorada con una pequeña flor en relieve.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/133.jpeg"
    },
    {
        id: 134,
        nombre: "Mini Tulipán Amarillo a Crochet",
        descripcion: "Delicado tulipán tejido a mano en color amarillo suave con base verde, ideal para combinar en arreglos, usar como aplique o regalar un detalle luminoso.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/134.jpeg"
    },
    {
        id: 135,
        nombre: "Marioneta de Zorrito con Cartón Reciclado",
        descripcion: "Ingenioso títere articulado de zorrito elaborado con rollo de cartón, hilos y fichas rojas en las patitas, excelente para actividades escolares y cuentacuentos.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/135.jpeg"
    },
    {
        id: 136,
        nombre: "Barco Pirata Escolar (Going Merry)",
        descripcion: "Manualidad de barco pirata tridimensional elaborado en cartón y foami con vela blanca ilustrada con emblema pirata y banderín rojo en el mástil.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/136.jpeg"
    },
    {
        id: 137,
        nombre: "Llaveros Variados a Crochet (Ballenitas, Abejitas, Tulipanes y Gorritos)",
        descripcion: "Colorido surtido de mini llaveros tejidos a mano que incluye tiernas ballenitas, abejitas, botones de tulipán y gorritos en colores vibrantes, ideales para recuerdos o regalos.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/137.jpeg"
    },
    {
        id: 138,
        nombre: "Piñata Navideña de Galleta de Jengibre",
        descripcion: "Simpática piñata artesanal con diseño de carita de galleta de jengibre sonriente, decorada en tonos café con detalles de glaseado blanco y mejillas rosadas para fiestas y posadas.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/138.jpeg"
    },
    {
        id: 139,
        nombre: "Colección de Slimes Elementales (Genshin Impact)",
        descripcion: "Set completo de los adorables Slimes elementales del videojuego Genshin Impact tejidos a crochet en todos sus colores y expresiones características.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/139.jpeg"
    },
    {
        id: 140,
        nombre: "Moños Patrios Tricolor Tejidos a Crochet",
        descripcion: "Hermosos moños y accesorios para el cabello tejidos a mano en colores verde, blanco y rojo, perfectos para lucir en fiestas patrias, bailables y eventos escolares.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/140.jpeg"
    },
    {
        id: 141,
        nombre: "Antifaz de Periquito / Ave en Foami",
        descripcion: "Vistoso antifaz infantil de ave elaborado artesanalmente en foami en tonos verde, amarillo y azul con pico en relieve, ideal para disfraces y festivales de primavera.",
        categoria: "Trabajos Escolares",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/141.jpeg"
    },
    {
        id: 142,
        nombre: "Llavero de Cabecita de Frida Kahlot",
        descripcion: "Tierna cabecita de Frida Kahlo tejida a crochet con su icónica ceja bordada y tocado de flores tejidas en verde, blanco y rojo.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/142.jpeg"
    },
    {
        id: 143,
        nombre: "Disfraz de Concha de Chocolate en Fieltro",
        descripcion: "Original y divertido disfraz artesanal de pan dulce mexicano tipo concha de chocolate confeccionado en fieltro suave, ideal para concursos de Halloween o festivales.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/143.jpeg"
    },
    {
        id: 144,
        nombre: "Richard Watterson Tejido (El Increíble Mundo de Gumball)",
        descripcion: "Divertida recreación tejida a mano de Richard Watterson en color rosa con su camisa blanca, corbata pequeña, pantalón café y su gran sonrisa característica.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/144.jpeg"
    },
    {
        id: 145,
        nombre: "Robin Arellano Tejido (El Teléfono Negro)",
        descripcion: "Muñeco tejido de Robin Arellano de la película El Teléfono Negro tejido a detalle con su paliacate oscuro en la frente, chaleco de mezclilla, playera amarilla y jeans.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/145.jpeg"
    },
    {
        id: 146,
        nombre: "Katsuki Bakugo Tejido (My Hero Academia)",
        descripcion: "Versión tejida de Katsuki Bakugo tejida a crochet con su característico cabello rubio en picos y su traje de héroe en negro, verde y naranja.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/146.jpeg"
    },
    {
        id: 147,
        nombre: "Eren Yeager / Levi Ackerman Tejido (Attack on Titan)",
        descripcion: "Figura tejida a mano con el icónico uniforme del Cuerpo de Exploración: chaqueta corta café, arnés de maniobras detallado en las piernas y botas oscuras.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/147.jpeg"
    },
    {
        id: 148,
        nombre: "Cartel de Cumpleaños y Graduación Personalizado",
        descripcion: "Emotiva lámina decorativa hecha a mano con letras de colores en foami, ilustraciones personalizadas y dedicatorias especiales para celebrar un gran logro en familia.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/148.jpeg"
    },
    {
        id: 149,
        nombre: "Mini Cabecitas de Halloween y Cempasúchil a Crochet",
        descripcion: "Colección de pequeños apliques y llaveros de temporada tejidos a mano con diseños de momias, brujitas, Frankenstein y flores de cempasúchil.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Disponible",
        imagen: "assets/img/catalogo/149.jpeg"
    },
    {
        id: 150,
        nombre: "Portavasos de Scrat Aplastado (La Era de Hielo)",
        descripcion: "Ingenioso y divertido portavasos tejido a crochet con la forma de la ardilla Scrat de La Era de Hielo, diseñado para que al colocar tu vaso o termo parezca que lo está aplastando.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/150.jpeg"
    },
    {
        id: 151,
        nombre: "Gumball Watterson Tejido",
        descripcion: "Fiel recreación tejida a crochet de Gumball Watterson en tono azul vibrante con su suéter beige con café, pantalón gris, bigotes y grandes ojos expresivos.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/151.jpeg"
    },
    {
        id: 152,
        nombre: "Dúo Sua e Ivan Tejidos (Alien Stage)",
        descripcion: "Pareja de muñecos tejidos a mano de la serie animada Alien Stage: Sua con su vestido blanco, cabello negro y accesorio, acompañada de Ivan con su traje en negro y blanco y pequeño bolso temático.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/152.jpeg"
    },
    {
        id: 153,
        nombre: "Portavasos de Scrat y Ranitas Aplastadas a Crochet",
        descripcion: "Divertidos posavasos tejidos a mano con diseño de ranitas verdes y ardillas Scrat con patitas extendidas y ojos saltones, listos para sostener tus bebidas con mucho humor.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Disponible",
        imagen: "assets/img/catalogo/153.jpeg"
    },
    {
        id: 154,
        nombre: "Llaveros de Muñequitas Mexicanas con Trenzas Tricolor",
        descripcion: "Adorables muñequitas de cabecita tejidas a crochet con largas trenzas negras decoradas con listones patrios en verde, blanco y rojo, ideales para llavero o mochila.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/154.jpeg"
    },
    {
        id: 155,
        nombre: "Cartel Interactivo Muro de los Deseos",
        descripcion: "Creativo mural decorativo elaborado a mano sobre papel kraft con ilustración central de gatito delineado en relieve, letras multicolores, pasto texturizado y guías de hojas, ideal para dinámicas escolares y eventos especiales.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/155.jpeg"
    },
    {
        id: 156,
        nombre: "Variedad de Flores Eternas Tejidas a Crochet",
        descripcion: "Delicada colección de flores individuales y mini ramo tejidos a mano que incluye rosas, tulipanes y lavandas en tonos lila, azul cielo, rojo y naranja con tallos y hojas verdes, perfectas para armar arreglos personalizados o regalar.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/156.jpeg"
    },
    {
        id: 157,
        nombre: "Quico Tejido (El Chavo del 8)",
        descripcion: "Clásica y simpática recreación tejida a crochet de Quico con su tradicional traje de marinero negro con detalles rojos y amarillos, calcetas blancas y su inconfundible gorra multicolor.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/157.jpeg"
    },
    {
        id: 158,
        nombre: "Portabotellas Tejido de Ratoncito con Elote",
        descripcion: "Práctico y tierno portabotellas tejido a mano en color rosa con diseño de ratoncito, correa larga para colgar al hombro y un simpático elote tejido a un costado.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/158.jpeg"
    },
    {
        id: 159,
        nombre: "Harry Styles Tejido con Tatuajes Bordados",
        descripcion: "Muñeco personalizado de Harry Styles tejido a crochet con playera blanca y jeans azules, destacando por sus icónicos tatuajes bordados a mano con gran precisión en ambos brazos.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/159.jpeg"
    },
    {
        id: 160,
        nombre: "Portabotellas de Gatito Amarillo con Elote",
        descripcion: "Divertida funda portabotellas con correa tejida a crochet con forma de gatito amarillo abrazando su elote, ideal para llevar tu agua o termo a todas partes con un estilo único.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/160.jpeg"
    },
    {
        id: 161,
        nombre: "Virgencita Tejida sobre Base con Rosas",
        descripcion: "Hermosa Virgen tejida a mano con túnica roja y manto café con borde dorado, colocada sobre una base circular verde decorada con delicadas rosas tejidas a sus pies.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/161.jpeg"
    },
    {
        id: 162,
        nombre: "Gatito Blanco en Taza de Café Roja",
        descripcion: "Tierno gatito blanco tejido asomándose desde el interior de una taza de café roja tejida a crochet, un detalle decorativo perfecto para escritorios o amantes del café y los michis.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/162.jpeg"
    },
    {
        id: 163,
        nombre: "Lorito Verde Tejido",
        descripcion: "Vistoso periquito tejido a mano en tono verde brillante con detalles rojos alrededor de los ojos, pico amarillo y patitas posadas, lleno de color y realismo artesanal.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/163.jpeg"
    },
    {
        id: 164,
        nombre: "Ajolote Rosa en Estambre Chenille",
        descripcion: "Adorable ajolote mexicano tejido a crochet con estambre tipo chenille ultra suave y esponjoso en tonos rosa pastel y fucsia, perfecto para abrazar o regalar.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/164.jpeg"
    },
    {
        id: 165,
        nombre: "Ramo de Tulipanes Rosas a Crochet",
        descripcion: "Elegante ramo de tulipanes tejidos a mano en tono rosa suave con tallos y hojas verdes, envuelto en papel coreano bicolor con moño listo para sorprender en una fecha especial.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Entregado",
        imagen: "assets/img/catalogo/165.jpeg"
    },
    {
        id: 166,
        nombre: "Gatito Bicolor en Taza con Corazones",
        descripcion: "Encantador gatito tejido en tonos amarillo y crema posando dentro de su taza color vino decorada con corazones tejidos en relieve.",
        categoria: "Tejidos",
        subcategoria: "Animales",
        estado: "Entregado",
        imagen: "assets/img/catalogo/166.jpeg"
    },
    {
        id: 167,
        nombre: "Peces Coloridos en Foami para Festival Escolar",
        descripcion: "Lote de alegres peces multicolores elaborados artesanalmente en foami con bastón de madera y tiras brillantes, diseñados para bailables, desfiles y festivales escolares.",
        categoria: "Manualidades",
        subcategoria: null,
        estado: "Entregado",
        imagen: "assets/img/catalogo/167.jpeg"
    },
    {
        id: 168,
        nombre: "Ramos de Flores Amarillas Tejidas con Frases",
        descripcion: "Variedad de hermosos ramos de girasoles y tulipanes amarillos tejidos a crochet, presentados en envolturas decoradas con tarjetas de frases bonitas para regalar.",
        categoria: "Tejidos",
        subcategoria: "Varios",
        estado: "Disponible",
        imagen: "assets/img/catalogo/168.jpeg"
    },
    {
        id: 169,
        nombre: "Pareja de Ositos Bubu y Dudu Tejidos",
        descripcion: "Tierno dúo de los famosos ositos Bubu y Dudu tejidos a mano con sus expresiones traviesas y mejillas ruborizadas, el regalo ideal para compartir en pareja o con tu persona favorita.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/169.jpeg"
    },
    {
        id: 170,
        nombre: "Costalito Tejido (Mascota de Cruz Azul)",
        descripcion: "Original recreación tejida a crochet de Costalito, la carismática mascota cementera de Cruz Azul, con su gorra azul, escudo oficial en el frente, guantes blancos y botines azules.",
        categoria: "Tejidos",
        subcategoria: "Personajes",
        estado: "Entregado",
        imagen: "assets/img/catalogo/170.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Elementos de la imagen grande (Fija con el último modelo)
    const featuredCard = document.getElementById('featuredCard');
    const featuredImg = document.getElementById('featuredImg');
    const featuredTitle = document.getElementById('featuredTitle');
    const featuredDesc = document.getElementById('featuredDesc');
    const featuredCategory = document.getElementById('featuredCategory');
    const featuredBadgeText = document.getElementById('featuredBadgeText');
    
    // Elementos del carrusel de tarjetas
    const cardsContainer = document.getElementById('cardsContainer');
    const prevBtn = document.getElementById('prevCarouselBtn');
    const nextBtn = document.getElementById('nextCarouselBtn');

    // Elementos de la ventana Pop-up (Modal)
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImg = document.getElementById('modalImg');
    const modalIdBadge = document.getElementById('modalIdBadge');
    const modalCategory = document.getElementById('modalCategory');
    const modalStatusBadge = document.getElementById('modalStatusBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalWaBtn = document.getElementById('modalWaBtn');
    const modalWaBtnText = document.getElementById('modalWaBtnText');

    if (!featuredImg || !cardsContainer || catalogoProductos.length === 0) return;

    // Función auxiliar para formatear Categoría + Subcategoría (ej. "Tejidos • Personajes")
    function formatearCategoria(prod) {
        return prod.subcategoria ? `${prod.categoria} • ${prod.subcategoria}` : prod.categoria;
    }

    // 1. Ordenar de mayor a menor según el ID (5, 4, 3, 2, 1)
    const productosOrdenados = [...catalogoProductos].sort((a, b) => b.id - a.id);

    // 2. El número más alto siempre queda fijo en la imagen grande
    const ultimoProducto = productosOrdenados[0];

    // 3. Los demás pasan a las tarjetas pequeñas
    const productosTarjetas = productosOrdenados.slice(1);

    // Configuración de paginación (2 tarjetas visibles a la vez)
    const tarjetasPorVista = 2;
    let paginaActual = 0;
    const totalPaginas = Math.ceil(productosTarjetas.length / tarjetasPorVista) || 1;

    // Pintar el último producto en la imagen grande de forma fija
    featuredImg.src = ultimoProducto.imagen;
    featuredImg.alt = ultimoProducto.nombre;
    featuredTitle.textContent = ultimoProducto.nombre;
    featuredDesc.textContent = ultimoProducto.descripcion;
    featuredCategory.textContent = formatearCategoria(ultimoProducto);
    if (featuredBadgeText) {
        featuredBadgeText.textContent = ultimoProducto.estado === "Disponible" 
            ? "Nuevo • Disponible en stock" 
            : "Nuevo • Pedido entregado";
    }

    // Función para abrir la ventana Pop-up con la info del producto
    function abrirModalProducto(producto) {
        modalImg.src = producto.imagen;
        modalImg.alt = producto.nombre;
        modalIdBadge.textContent = `Modelo #${producto.id}`;
        modalCategory.textContent = formatearCategoria(producto);
        modalTitle.textContent = producto.nombre;
        modalDesc.textContent = producto.descripcion;

        // Configurar la etiqueta de Estado ("Entregado" en verde o "Disponible" en stock)
        if (producto.estado === "Entregado") {
            modalStatusBadge.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300";
            modalStatusBadge.innerHTML = `<i class="ph-fill ph-check-circle text-sm text-emerald-600"></i> Entregado`;
            if (modalWaBtnText) modalWaBtnText.textContent = "Encargar uno igual";
        } else {
            modalStatusBadge.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30";
            modalStatusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span> Disponible`;
            if (modalWaBtnText) modalWaBtnText.textContent = "¡Lo quiero! (En stock)";
        }

        // Enlace personalizado de WhatsApp según disponibilidad
        const textoAccion = producto.estado === "Entregado"
            ? `me gustaría cotizar o encargar uno igual al modelo "${producto.nombre}" (#${producto.id})`
            : `me interesa adquirir el modelo "${producto.nombre}" (#${producto.id}) que vi disponible en stock`;
            
        const mensajeWa = encodeURIComponent(`Hola! Vi el catálogo de KINAKU Manualidades y ${textoAccion}.`);
        modalWaBtn.href = `https://wa.me/522471036965?text=${mensajeWa}`;

        productModal.classList.remove('hidden');
        productModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar la ventana Pop-up
    function cerrarModalProducto() {
        productModal.classList.add('hidden');
        productModal.classList.remove('flex');
        document.body.style.overflow = '';
    }

    // Eventos para cerrar el Pop-up (Botón X, clic afuera o tecla Escape)
    if (closeModalBtn && productModal) {
        closeModalBtn.addEventListener('click', cerrarModalProducto);
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) cerrarModalProducto();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !productModal.classList.contains('hidden')) {
                cerrarModalProducto();
            }
        });
    }

    // Si dan clic en la imagen grande, también abre su Pop-up
    if (featuredCard) {
        featuredCard.addEventListener('click', () => abrirModalProducto(ultimoProducto));
    }

    // Función para dibujar las 2 tarjetas pequeñas
    function renderizarTarjetas() {
        cardsContainer.innerHTML = '';

        const inicio = paginaActual * tarjetasPorVista;
        const fin = inicio + tarjetasPorVista;
        const grupoActual = productosTarjetas.slice(inicio, fin);

        grupoActual.forEach((prod, index) => {
            const esSegundaTarjeta = index === 1;
            const claseFondo = esSegundaTarjeta ? 'bg-white/40' : '';
            const claseBoton = esSegundaTarjeta 
                ? 'bg-white hover:bg-brand-card text-brand-textMain border border-brand-accent/20' 
                : 'bg-brand-accent hover:bg-brand-accentHover text-white shadow-md';

            // Pequeño indicador de estado en la miniatura de la tarjeta
            const badgeEstadoMini = prod.estado === "Entregado"
                ? `<span class="bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><i class="ph-bold ph-check"></i> Entregado</span>`
                : `<span class="bg-brand-accent/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">Disponible</span>`;

            const cardHTML = document.createElement('div');
            cardHTML.className = `glass-card p-4 rounded-3xl cursor-pointer group flex flex-col justify-between card-fade-in ${claseFondo}`;
            cardHTML.innerHTML = `
                <div>
                    <div class="w-full h-32 sm:h-40 rounded-2xl overflow-hidden mb-4 relative bg-white/50">
                        <img src="${prod.imagen}" alt="${prod.nombre}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                            ${badgeEstadoMini}
                            <span class="bg-white/85 backdrop-blur-sm text-brand-textMain text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                #${prod.id}
                            </span>
                        </div>
                    </div>
                    <h3 class="font-medium text-lg mb-1.5 text-brand-textMain">${prod.nombre}</h3>
                    <p class="text-sm text-brand-textMuted mb-5 line-clamp-2">${prod.descripcion}</p>
                </div>
                <button type="button" class="${claseBoton} px-5 py-2.5 rounded-full text-sm font-semibold transition-colors w-max">
                    Ver más
                </button>
            `;

            cardHTML.addEventListener('click', () => {
                abrirModalProducto(prod);
            });

            cardsContainer.appendChild(cardHTML);
        });
    }

    // Eventos de las flechas (Solo rotan las tarjetas pequeñas)
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            paginaActual = (paginaActual - 1 + totalPaginas) % totalPaginas;
            renderizarTarjetas();
        });

        nextBtn.addEventListener('click', () => {
            paginaActual = (paginaActual + 1) % totalPaginas;
            renderizarTarjetas();
        });
    }

    // Dibujar tarjetas iniciales
    renderizarTarjetas();
});

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. LÓGICA COMPARTIDA: VENTANA POP-UP (MODAL) + ZOOM
    // ==========================================
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImg = document.getElementById('modalImg');
    const modalIdBadge = document.getElementById('modalIdBadge');
    const modalCategory = document.getElementById('modalCategory');
    const modalStatusBadge = document.getElementById('modalStatusBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalWaBtn = document.getElementById('modalWaBtn');
    const modalWaBtnText = document.getElementById('modalWaBtnText');

    // Elementos del Visor Zoom (Tamaño Completo)
    const zoomImgBtn = document.getElementById('zoomImgBtn');
    const imageLightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');

    function formatearCategoria(prod) {
        return prod.subcategoria ? `${prod.categoria} • ${prod.subcategoria}` : prod.categoria;
    }

    function abrirModalProducto(producto) {
        if (!productModal) return;

        modalImg.src = producto.imagen;
        modalImg.alt = producto.nombre;
        modalIdBadge.textContent = `Modelo #${producto.id}`;
        modalCategory.textContent = formatearCategoria(producto);
        modalTitle.textContent = producto.nombre;
        modalDesc.textContent = producto.descripcion;

        if (producto.estado === "Entregado") {
            modalStatusBadge.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300";
            modalStatusBadge.innerHTML = `<i class="ph-fill ph-check-circle text-sm text-emerald-600"></i> Entregado`;
            if (modalWaBtnText) modalWaBtnText.textContent = "Encargar uno igual";
        } else {
            modalStatusBadge.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30";
            modalStatusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span> Disponible`;
            if (modalWaBtnText) modalWaBtnText.textContent = "¡Lo quiero! (En stock)";
        }

        const textoAccion = producto.estado === "Entregado"
            ? `me gustaría cotizar o encargar uno igual al modelo "${producto.nombre}" (#${producto.id})`
            : `me interesa adquirir el modelo "${producto.nombre}" (#${producto.id}) que vi disponible en stock`;
            
        const mensajeWa = encodeURIComponent(`Hola! Vi el catálogo de KINAKU Manualidades y ${textoAccion}.`);
        modalWaBtn.href = `https://wa.me/522471036965?text=${mensajeWa}`;

        productModal.classList.remove('hidden');
        productModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    function cerrarModalProducto() {
        if (!productModal) return;
        productModal.classList.add('hidden');
        productModal.classList.remove('flex');
        document.body.style.overflow = '';
    }

    // Funciones para abrir y cerrar el Zoom en tamaño completo
    function abrirZoomImagen() {
        if (!imageLightbox || !lightboxImg || !modalImg) return;
        lightboxImg.src = modalImg.src;
        lightboxImg.alt = modalImg.alt;
        imageLightbox.classList.remove('hidden');
        imageLightbox.classList.add('flex');
    }

    function cerrarZoomImagen() {
        if (!imageLightbox) return;
        imageLightbox.classList.add('hidden');
        imageLightbox.classList.remove('flex');
    }

    // Eventos del botón de Zoom y clic en la imagen del modal
    if (zoomImgBtn) zoomImgBtn.addEventListener('click', abrirZoomImagen);
    if (modalImg) modalImg.addEventListener('click', abrirZoomImagen);

    if (closeLightboxBtn && imageLightbox) {
        closeLightboxBtn.addEventListener('click', cerrarZoomImagen);
        imageLightbox.addEventListener('click', (e) => {
            if (e.target === imageLightbox) cerrarZoomImagen();
        });
    }

    if (closeModalBtn && productModal) {
        closeModalBtn.addEventListener('click', cerrarModalProducto);
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) cerrarModalProducto();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Si el zoom está abierto, primero cierra el zoom; si no, cierra el pop-up
                if (imageLightbox && !imageLightbox.classList.contains('hidden')) {
                    cerrarZoomImagen();
                } else if (!productModal.classList.contains('hidden')) {
                    cerrarModalProducto();
                }
            }
        });
    }

    // Ordenar productos de mayor a menor ID por defecto
    const productosOrdenados = [...catalogoProductos].sort((a, b) => b.id - a.id);

    // ==========================================
    // 2. LÓGICA PARA INDEX.HTML (HERO CARRUSEL)
    // ==========================================
    const featuredCard = document.getElementById('featuredCard');
    const featuredImg = document.getElementById('featuredImg');
    const featuredTitle = document.getElementById('featuredTitle');
    const featuredDesc = document.getElementById('featuredDesc');
    const featuredCategory = document.getElementById('featuredCategory');
    const featuredBadgeText = document.getElementById('featuredBadgeText');
    const cardsContainer = document.getElementById('cardsContainer');
    const prevBtn = document.getElementById('prevCarouselBtn');
    const nextBtn = document.getElementById('nextCarouselBtn');

    if (featuredImg && cardsContainer && productosOrdenados.length > 0) {
        const ultimoProducto = productosOrdenados[0];
        const productosTarjetas = productosOrdenados.slice(1);
        const tarjetasPorVista = 2;
        let paginaActualHero = 0;
        const totalPaginasHero = Math.ceil(productosTarjetas.length / tarjetasPorVista) || 1;

        featuredImg.src = ultimoProducto.imagen;
        featuredImg.alt = ultimoProducto.nombre;
        featuredTitle.textContent = ultimoProducto.nombre;
        featuredDesc.textContent = ultimoProducto.descripcion;
        featuredCategory.textContent = formatearCategoria(ultimoProducto);
        if (featuredBadgeText) {
            featuredBadgeText.textContent = ultimoProducto.estado === "Disponible" 
                ? "Nuevo • Disponible en stock" 
                : "Nuevo • Pedido entregado";
        }

        if (featuredCard) {
            featuredCard.addEventListener('click', () => abrirModalProducto(ultimoProducto));
        }

        function renderizarTarjetasHero() {
            cardsContainer.innerHTML = '';
            const inicio = paginaActualHero * tarjetasPorVista;
            const grupoActual = productosTarjetas.slice(inicio, inicio + tarjetasPorVista);

            grupoActual.forEach((prod, index) => {
                const esSegundaTarjeta = index === 1;
                const claseFondo = esSegundaTarjeta ? 'bg-white/40' : '';
                const claseBoton = esSegundaTarjeta 
                    ? 'bg-white hover:bg-brand-card text-brand-textMain border border-brand-accent/20' 
                    : 'bg-brand-accent hover:bg-brand-accentHover text-white shadow-md';

                const badgeEstadoMini = prod.estado === "Entregado"
                    ? `<span class="bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><i class="ph-bold ph-check"></i> Entregado</span>`
                    : `<span class="bg-brand-accent/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">Disponible</span>`;

                const cardHTML = document.createElement('div');
                cardHTML.className = `glass-card p-4 rounded-3xl cursor-pointer group flex flex-col justify-between card-fade-in ${claseFondo}`;
                cardHTML.innerHTML = `
                    <div>
                        <div class="w-full h-32 sm:h-40 rounded-2xl overflow-hidden mb-4 relative bg-white/50">
                            <img src="${prod.imagen}" alt="${prod.nombre}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                                ${badgeEstadoMini}
                                <span class="bg-white/85 backdrop-blur-sm text-brand-textMain text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                    #${prod.id}
                                </span>
                            </div>
                        </div>
                        <h3 class="font-medium text-lg mb-1.5 text-brand-textMain">${prod.nombre}</h3>
                        <p class="text-sm text-brand-textMuted mb-5 line-clamp-2">${prod.descripcion}</p>
                    </div>
                    <button type="button" class="${claseBoton} px-5 py-2.5 rounded-full text-sm font-semibold transition-colors w-max">
                        Ver más
                    </button>
                `;

                cardHTML.addEventListener('click', () => abrirModalProducto(prod));
                cardsContainer.appendChild(cardHTML);
            });
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                paginaActualHero = (paginaActualHero - 1 + totalPaginasHero) % totalPaginasHero;
                renderizarTarjetasHero();
            });
            nextBtn.addEventListener('click', () => {
                paginaActualHero = (paginaActualHero + 1) % totalPaginasHero;
                renderizarTarjetasHero();
            });
        }

        renderizarTarjetasHero();
    }

    // ==========================================
    // 3. LÓGICA PARA CATALOGO.HTML (BUSCADOR, FILTROS Y PAGINACIÓN)
    // ==========================================
    const catalogGrid = document.getElementById('catalogGridContainer');
    if (catalogGrid) {
        const searchInput = document.getElementById('catalogSearchInput');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const sortSelect = document.getElementById('catalogSortSelect');
        const resetFiltersBtn = document.getElementById('resetFiltersBtn');
        const emptyResetBtn = document.getElementById('emptyResetBtn');
        
        // Elementos del panel de filtros móvil (Estilo Coppel)
        const filterSidebar = document.getElementById('catalogFilterSidebar');
        const filterBackdrop = document.getElementById('mobileFilterBackdrop');
        const openMobileFiltersBtn = document.getElementById('openMobileFiltersBtn');
        const closeMobileFiltersBtn = document.getElementById('closeMobileFiltersBtn');
        const applyMobileFiltersBtn = document.getElementById('applyMobileFiltersBtn');
        const mobileFilterBtnText = document.getElementById('mobileFilterBtnText');

        const catButtons = document.querySelectorAll('.filter-cat-btn');
        const subcatButtons = document.querySelectorAll('.filter-subcat-pill');
        const statusButtons = document.querySelectorAll('.filter-status-pill');
        const subcatAccordionWrapper = document.getElementById('subcatAccordionWrapper');

        const catalogMainTitle = document.getElementById('catalogMainTitle');
        const catalogCountText = document.getElementById('catalogCountText');
        const breadcrumbCat = document.getElementById('breadcrumbCategory');
        const breadcrumbCatText = document.getElementById('breadcrumbCategoryText');
        const emptyState = document.getElementById('catalogEmptyState');
        
        const paginationWrap = document.getElementById('catalogPagination');
        const paginationInfoText = document.getElementById('paginationInfoText');
        const prevPageBtn = document.getElementById('prevPageBtn');
        const nextPageBtn = document.getElementById('nextPageBtn');
        const pageNumbersContainer = document.getElementById('pageNumbersContainer');

        const PRODUCTOS_POR_PAGINA = 16;
        let filtroCategoria = 'Todas';
        let filtroSubcategoria = 'Todas';
        let filtroEstado = 'Todos';
        let textoBusqueda = '';
        let ordenActual = 'recientes';
        let paginaCatalogo = 1;

        // Funciones para abrir y cerrar el menú de filtros en celular
        function abrirFiltrosMovil() {
            if (!filterSidebar || !filterBackdrop) return;
            filterSidebar.classList.remove('hidden');
            filterSidebar.classList.add('flex');
            filterBackdrop.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function cerrarFiltrosMovil() {
            if (!filterSidebar || !filterBackdrop) return;
            filterSidebar.classList.add('hidden');
            filterSidebar.classList.remove('flex');
            filterBackdrop.classList.add('hidden');
            document.body.style.overflow = '';
        }

        if (openMobileFiltersBtn) openMobileFiltersBtn.addEventListener('click', abrirFiltrosMovil);
        if (closeMobileFiltersBtn) closeMobileFiltersBtn.addEventListener('click', cerrarFiltrosMovil);
        if (applyMobileFiltersBtn) applyMobileFiltersBtn.addEventListener('click', cerrarFiltrosMovil);
        if (filterBackdrop) filterBackdrop.addEventListener('click', cerrarFiltrosMovil);

        // Actualizar el texto "Filtrar (0)" y colores según cuántos filtros estén activos
        function actualizarBotonFiltroMovil() {
            let activos = 0;
            if (filtroCategoria !== 'Todas') activos++;
            if (filtroSubcategoria !== 'Todas') activos++;
            if (filtroEstado !== 'Todos') activos++;

            if (mobileFilterBtnText) {
                mobileFilterBtnText.textContent = `Filtrar (${activos})`;
            }
            if (openMobileFiltersBtn) {
                if (activos > 0) {
                    // Cuando hay filtros activos: Fondo rosa sólido y texto/icono blancos
                    openMobileFiltersBtn.style.backgroundColor = '#e57d90';
                    openMobileFiltersBtn.style.color = '#ffffff';
                    openMobileFiltersBtn.style.borderColor = '#e57d90';
                } else {
                    // Cuando está en (0): Vuelve a su fondo blanco original y letras rosas
                    openMobileFiltersBtn.style.backgroundColor = '';
                    openMobileFiltersBtn.style.color = '';
                    openMobileFiltersBtn.style.borderColor = '';
                }
            }
        }

        // Actualizar contadores laterales de cada categoría
        function actualizarContadoresCategorias() {
            const total = catalogoProductos.length;
            const elTodas = document.getElementById('count-cat-Todas');
            if (elTodas) elTodas.textContent = total;

            ['Tejidos', 'Manualidades', 'Trabajos Escolares'].forEach(cat => {
                const count = catalogoProductos.filter(p => p.categoria === cat).length;
                const el = document.getElementById(`count-cat-${cat}`);
                if (el) el.textContent = count;
            });
        }

        // Desplegables (Acordeones) del panel izquierdo
        document.querySelectorAll('.filter-accordion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const content = document.getElementById(targetId);
                const icon = btn.querySelector('i');
                if (content) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                }
            });
        });

        // Función principal que filtra, ordena y dibuja las tarjetas
        function renderizarCatalogoCompleto() {
            actualizarBotonFiltroMovil();

            // 1. Filtrar
            let filtrados = catalogoProductos.filter(prod => {
                const coincideCat = filtroCategoria === 'Todas' || prod.categoria === filtroCategoria;
                const coincideSubcat = filtroSubcategoria === 'Todas' || prod.subcategoria === filtroSubcategoria;
                const coincideEstado = filtroEstado === 'Todos' || prod.estado === filtroEstado;

                const termino = textoBusqueda.trim().toLowerCase();
                const coincideBusqueda = termino === '' ||
                    prod.nombre.toLowerCase().includes(termino) ||
                    prod.descripcion.toLowerCase().includes(termino) ||
                    prod.categoria.toLowerCase().includes(termino) ||
                    (prod.subcategoria && prod.subcategoria.toLowerCase().includes(termino)) ||
                    `#${prod.id}`.includes(termino) ||
                    String(prod.id) === termino;

                return coincideCat && coincideSubcat && coincideEstado && coincideBusqueda;
            });

            // 2. Ordenar
            filtrados.sort((a, b) => {
                if (ordenActual === 'recientes') return b.id - a.id;
                if (ordenActual === 'antiguos') return a.id - b.id;
                if (ordenActual === 'az') return a.nombre.localeCompare(b.nombre);
                if (ordenActual === 'disponibles') {
                    if (a.estado === b.estado) return b.id - a.id;
                    return a.estado === 'Disponible' ? -1 : 1;
                }
                return 0;
            });

            // 3. Actualizar títulos y migas de pan
            let tituloVista = filtroCategoria === 'Todas' ? 'Todos los Productos' : filtroCategoria;
            if (filtroCategoria === 'Tejidos' && filtroSubcategoria !== 'Todas') {
                tituloVista = `Tejidos • ${filtroSubcategoria}`;
            }
            catalogMainTitle.textContent = tituloVista;
            catalogCountText.textContent = `${filtrados.length} ${filtrados.length === 1 ? 'resultado' : 'resultados'}`;

            if (filtroCategoria !== 'Todas') {
                breadcrumbCat.classList.remove('hidden');
                breadcrumbCat.classList.add('inline-flex');
                breadcrumbCatText.textContent = tituloVista;
            } else {
                breadcrumbCat.classList.add('hidden');
                breadcrumbCat.classList.remove('inline-flex');
            }

            // 4. Calcular paginación
            const totalResultados = filtrados.length;
            const totalPaginas = Math.ceil(totalResultados / PRODUCTOS_POR_PAGINA) || 1;
            if (paginaCatalogo > totalPaginas) paginaCatalogo = 1;

            const indiceInicio = (paginaCatalogo - 1) * PRODUCTOS_POR_PAGINA;
            const indiceFin = Math.min(indiceInicio + PRODUCTOS_POR_PAGINA, totalResultados);
            const productosPagina = filtrados.slice(indiceInicio, indiceFin);

            if (applyMobileFiltersBtn) {
                applyMobileFiltersBtn.textContent = `Ver resultados (${totalResultados})`;
            }

            // 5. Mostrar estado vacío o dibujar tarjetas
            catalogGrid.innerHTML = '';

            if (totalResultados === 0) {
                catalogGrid.classList.add('hidden');
                paginationWrap.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }

            catalogGrid.classList.remove('hidden');
            paginationWrap.classList.remove('hidden');
            emptyState.classList.add('hidden');

            productosPagina.forEach(prod => {
                const badgeEstado = prod.estado === "Entregado"
                    ? `<span class="bg-emerald-500/95 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><i class="ph-bold ph-check"></i> Entregado</span>`
                    : `<span class="bg-brand-accent text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Disponible</span>`;

                const card = document.createElement('article');
                card.className = 'catalog-product-card rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 flex flex-col justify-between cursor-pointer group card-fade-in';
                card.innerHTML = `
                    <div>
                        <!-- Imagen cuadrada estilo catálogo e-commerce -->
                        <div class="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3.5 relative bg-brand-dark/50">
                            <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                                ${badgeEstado}
                                <span class="bg-white/90 backdrop-blur-sm text-brand-textMain text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                    #${prod.id}
                                </span>
                            </div>
                        </div>

                        <!-- Etiqueta de Categoría / Subcategoría -->
                        <span class="block text-[10px] sm:text-[11px] font-semibold text-brand-accent uppercase tracking-wider mb-0.5 truncate">
                            ${formatearCategoria(prod)}
                        </span>

                        <!-- Nombre del Modelo -->
                        <h3 class="font-bold text-sm sm:text-base text-brand-textMain group-hover:text-brand-accent transition-colors mb-1 line-clamp-1">
                            ${prod.nombre}
                        </h3>

                        <!-- Descripción corta -->
                        <p class="text-[11px] sm:text-xs text-brand-textMuted line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
                            ${prod.descripcion}
                        </p>
                    </div>

                    <!-- Botón inferior ancho -->
                    <button type="button" class="w-full py-2 sm:py-2.5 px-3 rounded-full bg-brand-accent hover:bg-brand-accentHover text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5">
                        <i class="ph-bold ph-eye"></i>
                        <span>Ver detalles</span>
                    </button>
                `;

                card.addEventListener('click', () => abrirModalProducto(prod));
                catalogGrid.appendChild(card);
            });

            // 6. Actualizar controles de paginación
            paginationInfoText.textContent = `Mostrando ${indiceInicio + 1} - ${indiceFin} de ${totalResultados} productos`;
            prevPageBtn.disabled = paginaCatalogo === 1;
            nextPageBtn.disabled = paginaCatalogo === totalPaginas;

            pageNumbersContainer.innerHTML = '';
            for (let i = 1; i <= totalPaginas; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.type = 'button';
                pageBtn.className = `page-num-btn ${i === paginaCatalogo ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    paginaCatalogo = i;
                    renderizarCatalogoCompleto();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                pageNumbersContainer.appendChild(pageBtn);
            }
        }

        // Eventos: Categoría Principal
        catButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                catButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filtroCategoria = btn.getAttribute('data-category');

                if (filtroCategoria === 'Manualidades' || filtroCategoria === 'Trabajos Escolares') {
                    filtroSubcategoria = 'Todas';
                    subcatButtons.forEach(sb => sb.classList.toggle('active', sb.getAttribute('data-subcategory') === 'Todas'));
                    if (subcatAccordionWrapper) subcatAccordionWrapper.classList.add('hidden');
                } else {
                    if (subcatAccordionWrapper) subcatAccordionWrapper.classList.remove('hidden');
                }

                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        });

        // Eventos: Subcategorías de Tejidos
        subcatButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                subcatButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filtroSubcategoria = btn.getAttribute('data-subcategory');

                if (filtroSubcategoria !== 'Todas' && filtroCategoria !== 'Tejidos') {
                    filtroCategoria = 'Tejidos';
                    catButtons.forEach(cb => cb.classList.toggle('active', cb.getAttribute('data-category') === 'Tejidos'));
                }

                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        });

        // Eventos: Disponibilidad
        statusButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                statusButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filtroEstado = btn.getAttribute('data-status');
                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        });

        // Eventos: Buscador de texto en tiempo real
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                textoBusqueda = e.target.value;
                if (clearSearchBtn) {
                    clearSearchBtn.classList.toggle('hidden', textoBusqueda.trim() === '');
                }
                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                textoBusqueda = '';
                clearSearchBtn.classList.add('hidden');
                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        }

        // Evento: Selector de Orden
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                ordenActual = e.target.value;
                paginaCatalogo = 1;
                renderizarCatalogoCompleto();
            });
        }

        // Función para limpiar todos los filtros
        function limpiarTodosLosFiltros() {
            filtroCategoria = 'Todas';
            filtroSubcategoria = 'Todas';
            filtroEstado = 'Todos';
            textoBusqueda = '';
            ordenActual = 'recientes';
            paginaCatalogo = 1;

            if (searchInput) searchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            if (sortSelect) sortSelect.value = 'recientes';
            if (subcatAccordionWrapper) subcatAccordionWrapper.classList.remove('hidden');

            catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'Todas'));
            subcatButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-subcategory') === 'Todas'));
            statusButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-status') === 'Todos'));

            renderizarCatalogoCompleto();
        }

        if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', limpiarTodosLosFiltros);
        if (emptyResetBtn) emptyResetBtn.addEventListener('click', limpiarTodosLosFiltros);

        // Eventos: Botones Anterior / Siguiente Página
        if (prevPageBtn && nextPageBtn) {
            prevPageBtn.addEventListener('click', () => {
                if (paginaCatalogo > 1) {
                    paginaCatalogo--;
                    renderizarCatalogoCompleto();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });

            nextPageBtn.addEventListener('click', () => {
                paginaCatalogo++;
                renderizarCatalogoCompleto();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Inicializar vista del catálogo completo
        actualizarContadoresCategorias();
        renderizarCatalogoCompleto();
    }
});

// ==========================================
// 4. CARRUSEL DE LA SECCIÓN "ACERCA DE" (4 IMÁGENES)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const aboutCarousel = document.getElementById('aboutCarousel');
    if (!aboutCarousel) return;

    const slides = aboutCarousel.querySelectorAll('.about-slide');
    const dots = aboutCarousel.querySelectorAll('.about-dot');
    const prevAboutBtn = document.getElementById('aboutPrevBtn');
    const nextAboutBtn = document.getElementById('aboutNextBtn');
    
    let currentAboutSlide = 0;
    let aboutInterval = null;
    const totalAboutSlides = slides.length;

    if (totalAboutSlides === 0) return;

    function mostrarSlideAcerca(index) {
        currentAboutSlide = (index + totalAboutSlides) % totalAboutSlides;

        slides.forEach((slide, i) => {
            const esActivo = i === currentAboutSlide;
            // Aplicamos directamente en style para garantizar que se mueva sin depender de clases
            slide.style.opacity = esActivo ? '1' : '0';
            slide.style.transform = esActivo ? 'scale(1)' : 'scale(1.05)';
            slide.style.zIndex = esActivo ? '10' : '0';
            slide.style.pointerEvents = esActivo ? 'auto' : 'none';
        });

        dots.forEach((dot, i) => {
            const esActivo = i === currentAboutSlide;
            dot.style.width = esActivo ? '24px' : '8px';
            dot.style.backgroundColor = esActivo ? '#ffffff' : 'rgba(255, 255, 255, 0.5)';
        });
    }

    function iniciarAutoplayAcerca() {
        detenerAutoplayAcerca();
        aboutInterval = setInterval(() => {
            mostrarSlideAcerca(currentAboutSlide + 1);
        }, 4500);
    }

    function detenerAutoplayAcerca() {
        if (aboutInterval) {
            clearInterval(aboutInterval);
            aboutInterval = null;
        }
    }

    if (prevAboutBtn) {
        prevAboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSlideAcerca(currentAboutSlide - 1);
            iniciarAutoplayAcerca();
        });
    }

    if (nextAboutBtn) {
        nextAboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSlideAcerca(currentAboutSlide + 1);
            iniciarAutoplayAcerca();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSlideAcerca(index);
            iniciarAutoplayAcerca();
        });
    });

    // Pausar cuando pasan el mouse encima y reanudar al quitarlo
    aboutCarousel.addEventListener('mouseenter', detenerAutoplayAcerca);
    aboutCarousel.addEventListener('mouseleave', iniciarAutoplayAcerca);

    // Soporte para deslizar con el dedo en celular (Swipe)
    let touchStartX = 0;
    aboutCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        detenerAutoplayAcerca();
    }, { passive: true });

    aboutCarousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) {
            mostrarSlideAcerca(currentAboutSlide + 1);
        } else if (touchEndX - touchStartX > 40) {
            mostrarSlideAcerca(currentAboutSlide - 1);
        }
        iniciarAutoplayAcerca();
    }, { passive: true });

    // Inicializar estado de la primera imagen y arrancar el carrusel
    mostrarSlideAcerca(0);
    iniciarAutoplayAcerca();
});