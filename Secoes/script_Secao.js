const textoDinamico = document.getElementById("Texto-Dinamico");
const ElementosEntry = document.querySelectorAll(".Elements-Entry");
const Bolas = document.querySelectorAll(".bola");
const Mensagem_Pop_up = document.getElementById("Mensagem-Pop-up");
const Cerebro = document.getElementById("Cerebro");

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


Bolas.forEach((b, i) => {
    let mensagem = "";
    switch (i) {
        case 0:
            mensagem = "Godot";
            break;
        
        case 1:
            mensagem = "CSS";
            break;

        case 2:
            mensagem = "Java";
            break;

        case 3:
            mensagem = "Javascript";
            break;

        case 4:
            mensagem = "Python";
            break;

        case 5:
            mensagem = "HTML";
            break;

        case 6:
            mensagem = "Mysql";
            break;

        case 7:
            mensagem = "Gamemaker";
            break;
        default:
            break;
    }
    b.addEventListener("mouseenter", () => {
        Cerebro.style.display = "none";
        Mensagem_Pop_up.textContent = mensagem;
    });

    b.addEventListener("mouseleave", () => {
        Cerebro.style.display = "";
        Mensagem_Pop_up.textContent = ""
    });
});