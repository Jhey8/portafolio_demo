const btnHam = document.getElementById("btnHamb");
const menu = document.getElementById("menu");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
const texto = "soy Jheymy";
const typingEl = document.getElementById("typing");


//btn hamburguesa
btnHam.addEventListener("click", () => {
    const abierto = menu.classList.toggle("is-open");

    btnHam.classList.toggle("is-open", abierto);
    btnHam.setAttribute("aria-expanded", abierto ? "true" : "false");

});

menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        btnHam.classList.remove("is-open");
        btnHam.setAttribute("aria-expanded", "false");
    });
});



//efecto typing
let i = 0;
function escribir() {
    if (i < texto.length) {
        typingEl.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 120);
    }
}

escribir();


//particulas
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const puntos = [];
const cantidad = 80;

for (let i = 0; i < cantidad; i++) {
    puntos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2
    });
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of puntos) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
    }

    requestAnimationFrame(animar);
}

animar();

//boton whatsApp
const btnWhatsApp = document.getElementById("btnWhatsApp");
const numero = "942231107";
const mensaje = "Hola Jhey, buen día. Estoy interesado(a) en el desarrollo de una página web y me gustaría recibir información sobre tus servicios, costos y tiempos de entrega. Quedo atento a tu respuesta.";

btnWhatsApp.addEventListener("click", ()=>{
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, target= "_blank");
});