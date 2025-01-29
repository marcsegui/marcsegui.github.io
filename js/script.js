function setupVisibilityToggle(imageSelector, textSelector) {
    const imageContainer = document.querySelector(imageSelector);
    const textContainer = document.querySelector(textSelector);

    if (imageContainer && textContainer) {

        textContainer.style.opacity = "0";
        textContainer.style.visibility = "hidden";
        textContainer.style.transition =
            "opacity 0.5s ease-in-out, visibility 0s ease-in-out 0.5s";

        imageContainer.addEventListener("mouseover", () => {
            textContainer.style.opacity = "1";
            textContainer.style.visibility = "visible";
            textContainer.style.transition = "opacity 0.5s ease-in-out";
        });

        imageContainer.addEventListener("mouseout", () => {
            textContainer.style.opacity = "0";
            textContainer.style.transition =
                "opacity 0.5s ease-in-out, visibility 0s ease-in-out 0.5s";
            setTimeout(() => {
                if (textContainer.style.opacity === "0") {
                    textContainer.style.visibility = "hidden";
                }
            }, 500);
        });
    }
}

const containerPairs = [
    {
        image: ".text-container-murakimi",
        text: ".image-container-murakimi",
    },
    {
        image: ".text-container-de-mi-pa-ti",
        text: ".image-container-de-mi-pa-ti",
    },
    {
        image: ".text-container-mariposas",
        text: ".image-container-mariposas",
    },
    {
        image: ".text-container-cinco-estrellas",
        text: ".image-container-cinco-estrellas",
    },
    {
        image: ".text-container-aaaaaa",
        text: ".image-container-aaaaaa",
    },
    {
        image: ".text-container-agua-salada",
        text: ".image-container-agua-salada",
    },
    {
        image: ".text-container-pinta-y-colorea",
        text: ".image-container-pinta-y-colorea",
    },
    {
        image: ".text-container-tiroteo-remix",
        text: ".image-container-tiroteo-remix",
    },
];

containerPairs.forEach((pair) => setupVisibilityToggle(pair.image, pair.text));

document.addEventListener("DOMContentLoaded", function () {
    const hrElement = document.querySelector('hr');
    hrElement.classList.add('loaded');
});

function makeElementDraggable(elmnt, stickersId) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var stickers = document.getElementById(stickersId);

    if (stickers) {
        stickers.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

makeElementDraggable(document.getElementById("mydiv-1"), "stickers-1");

makeElementDraggable(document.getElementById("mydiv-2"), "stickers-2");

makeElementDraggable(document.getElementById("mydiv-3"), "stickers-3");

makeElementDraggable(document.getElementById("mydiv-4"), "stickers-4");

makeElementDraggable(document.getElementById("mydiv-5"), "stickers-5");

makeElementDraggable(document.getElementById("mydiv-6"), "stickers-6");


function hideAllSections() {
    var sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        section.classList.add("d-none");
        section.classList.remove("d-xxl-block");
        section.classList.remove("d-xl-block");
        section.classList.remove("show");
    });
}

function toggleSection(sectionId) {
    hideAllSections();

    var hiddenSection = document.getElementById(sectionId);
    hiddenSection.classList.toggle('d-none');
    hiddenSection.classList.add('show');
}

function toggleHeart(elementId) {
    var heartImage = document.getElementById(elementId);
    var initialSrc = './img/heart.png';
    var redSrc = './img/heart-red.png';

    if (heartImage.getAttribute('src') === initialSrc) {
        heartImage.setAttribute('src', redSrc);
    } else {
        heartImage.setAttribute('src', initialSrc);
    }
}


/* SLIDE ALBUMS */

// Función para cambiar de sección hacia la izquierda
function cambiarIzquierda() {
    var secciones = [
        "HiddenSectionMuuurakami",
        "HiddenSectionDetiparami",
        "HiddenSectionMariposas",
        "HiddenSectionCincoestrellas",
        "HiddenSectionAaaaaa",
        "HiddenSectionAguasalada",
        "HiddenSectionPintaycolorea",
        "HiddenSectionTiroteoremix"
    ];

    // Encontrar la sección actualmente visible
    var seccionVisibleId = secciones.findIndex(id => document.getElementById(id).classList.contains("show"));
    var seccionActual = document.getElementById(secciones[seccionVisibleId]);

    // Encontrar la sección a la izquierda de la actual
    var nuevaSeccionId = (seccionVisibleId - 1 + secciones.length) % secciones.length;
    var nuevaSeccion = document.getElementById(secciones[nuevaSeccionId]);

    toggleSection(seccionActual.id);
    toggleSection(nuevaSeccion.id);
}

// Función para cambiar de sección hacia la derecha
function cambiarDerecha() {
    var secciones = [
        "HiddenSectionMuuurakami",
        "HiddenSectionDetiparami",
        "HiddenSectionMariposas",
        "HiddenSectionCincoestrellas",
        "HiddenSectionAaaaaa",
        "HiddenSectionAguasalada",
        "HiddenSectionPintaycolorea",
        "HiddenSectionTiroteoremix"
    ];

    // Encontrar la sección actualmente visible
    var seccionVisibleId = secciones.findIndex(id => document.getElementById(id).classList.contains("show"));
    var seccionActual = document.getElementById(secciones[seccionVisibleId]);

    // Encontrar la sección a la derecha de la actual
    var nuevaSeccionId = (seccionVisibleId + 1) % secciones.length;
    var nuevaSeccion = document.getElementById(secciones[nuevaSeccionId]);

    // Ocultar la sección actual
    toggleSection(seccionActual.id);
    // Mostrar la nueva sección
    toggleSection(nuevaSeccion.id);
}

