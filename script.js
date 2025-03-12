document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    let nombre = document.querySelector("input[name='nombre']").value.trim();
    let correo = document.querySelector("input[name='correo']").value.trim();
    let mensaje = document.querySelector("textarea[name='mensaje']").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (!correo.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        event.preventDefault();
    } else {
        let whatsappURL = `https://wa.me/1234567890?text=Hola, mi nombre es ${encodeURIComponent(nombre)} y mi correo es ${encodeURIComponent(correo)}. ${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, "_blank");
    }
});

// Agregar animación al botón de contacto
const botonContacto = document.querySelector(".boton-contacto");
if (botonContacto) {
    botonContacto.addEventListener("mouseover", () => {
        botonContacto.style.transform = "scale(1.1)";
        botonContacto.style.transition = "transform 0.3s ease";
    });
    botonContacto.addEventListener("mouseout", () => {
        botonContacto.style.transform = "scale(1)";
    });
}

// Ajustar visibilidad del texto en el banner de inicio
window.addEventListener("load", () => {
    const textoInicio = document.querySelector(".inicio-contenido");
    if (textoInicio) {
        textoInicio.style.opacity = "1";
        textoInicio.style.transform = "translateY(0)";
        textoInicio.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    }
});

// Mejorar la sección "Sobre Nosotros"
window.addEventListener("load", () => {
    const sobreNosotros = document.querySelector(".sobre-nosotros");
    if (sobreNosotros) {
        sobreNosotros.innerHTML = `
            <div class="sobre-nosotros-container">
                <img src="assets/sobre-nosotros.jpg" alt="Nuestra Empresa" class="sobre-nosotros-img">
                <div class="sobre-nosotros-texto">
                    <h2>Sobre Nosotros</h2>
                    <p><strong>Misión:</strong> Brindar soluciones tecnológicas seguras, innovadoras y efectivas para empresas en crecimiento.</p>
                    <p><strong>Visión:</strong> Ser la empresa líder en desarrollo digital, destacándonos por calidad, seguridad y excelencia en cada proyecto.</p>
                    <a href="#contacto" class="boton-mas-info">Conócenos más</a>
                </div>
            </div>
        `;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".nav-menu");
    const menuLinks = document.querySelectorAll(".nav-menu li a");

    if (menuToggle && menuNav) {
        menuToggle.addEventListener("click", function () {
            menuNav.classList.toggle("active");
        });

        // Cerrar el menú al hacer clic en un enlace
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                menuNav.classList.remove("active");
            });
        });
    }
});
