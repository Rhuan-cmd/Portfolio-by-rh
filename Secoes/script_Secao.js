const textoDinamico = document.getElementById("Texto-Dinamico");
const ElementosEntry = document.querySelectorAll(".Elements-Entry");

let frases = ["Pronto para Compilar Ideias", "Paixão por programar", "Inovação em cada linha", "Criando o futuro"];
let fraseIndex = 0;
let charIndex = 0;

function digitarTexto() {
    if (charIndex <= frases[fraseIndex].length) {
        textoDinamico.textContent = frases[fraseIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(digitarTexto, 150);
    }else{
        setTimeout(apagarTexto, 5000);
    }
}

function apagarTexto() {
    if (charIndex >= 0) {
        textoDinamico.textContent = frases[fraseIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(apagarTexto, 100);
    }else{
        fraseIndex = (fraseIndex + 1) % frases.length;
        charIndex = 0;
        setTimeout(digitarTexto, 1000);
    }
}

setTimeout(digitarTexto, 2000);


const observer = new IntersectionObserver((entry) => {
    entry.forEach(ent => {
        if (ent.isIntersecting){
            ent.target.classList.add('active');
        }else{
            ent.target.classList.remove('active');
        }
    })
}, {
    threshold: 0.6
});

ElementosEntry.forEach(el => observer.observe(el));