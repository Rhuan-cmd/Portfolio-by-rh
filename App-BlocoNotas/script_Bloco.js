const Notas = document.getElementById("Bloco-Notas");
const App_Notas = document.getElementById("App-Notas");
const XN = Notas.querySelector(".x-conteiner");
const Barra_Janela_Notas = document.getElementById("Bar-Top-Bloco");

let arrastar_B = false;
let offsetXB = 0;
let offsetYB = 0;

function getBlo(){
    Janelas_Classe.forEach(j => {
        j.style.zIndex = 1;
    });
    Notas.style.zIndex = 2;
}

XN.addEventListener("click", () => {
    Notas.classList.remove("anim-abrir-notas");
    Notas.classList.add("anim-fechar-notas");
})

function open_notas(){
    if (Notas.classList.contains("anim-fechar-notas")){
        Notas.classList.remove("anim-fechar-notas");
        Notas.classList.add("anim-abrir-notas");
    }
}

App_Notas.addEventListener("click", open_notas);

Notas.addEventListener("animationend", (anim) => {
    if (anim.animationName == "abrir-notas"){
        Notas.classList.remove("anim-fechar-notas");
        Notas.classList.remove("anim-abrir-notas");
        Notas.style.left = '7%';
        Notas.style.top = '20%';
    }
});

document.addEventListener("mousedown", (b) => {
    if (Barra_Janela_Notas.contains(b.target) && !XN.contains(b.target)){
        arrastar_B = true;

        const rect = Notas.getBoundingClientRect();

        offsetXB = b.clientX - rect.left;
        offsetYB = b.clientY - rect.top;

        getBlo();
    }
});

document.addEventListener("mousemove", (m) => {
    if (arrastar_B){
        Notas.style.left = `${m.clientX - offsetXB}px`;
        Notas.style.top = `${m.clientY - offsetYB}px`;
    }
});

document.addEventListener("mouseup", () => {
    arrastar_B = false;
});