const Gerenciador = document.getElementById("Gerenciador-Projetos");
const App_Ger = document.getElementById("App-Gerenciador");
const XG = Gerenciador.querySelector(".x-conteiner");
const Gerenciador_Secao = document.getElementById("Image-Pasta-Project");
const Pastas_Projetos = document.querySelectorAll(".Image-Pasta-Project");
const Barra_Janela_Gerenciador = document.getElementById("Top-Bar-Project");

let arrastar_G = false
let offsetXG = 0;
let offsetYG = 0;

function getGer(){
    Janelas_Classe.forEach(j => {
        j.style.zIndex = 1;
    });
    Gerenciador.style.zIndex = 2;
}

XG.addEventListener("click", () => {
    Gerenciador.classList.remove("anim-abrir-gerenciador");
    Gerenciador.classList.add("anim-fechar-gerenciador");
})

function open_gerenciador(){
    if (Gerenciador.classList.contains("anim-fechar-gerenciador")){
        Gerenciador.classList.remove("anim-fechar-gerenciador");
        Gerenciador.classList.add("anim-abrir-gerenciador");
    }
}

App_Ger.addEventListener("click", open_gerenciador);

Gerenciador_Secao.addEventListener("click", open_gerenciador);

Gerenciador.addEventListener("animationend", (anim) => {
    if (anim.animationName == "abrir-gerenciador"){
        Gerenciador.classList.remove("anim-fechar-gerenciador");
        Gerenciador.classList.remove("anim-abrir-gerenciador");
        Gerenciador.style.left = 'calc(80% - 500px)';
        Gerenciador.style.top = '15%';
    }
});


document.addEventListener("mousedown", (b) => {
    if (Barra_Janela_Gerenciador.contains(b.target) && !XG.contains(b.target)){
        arrastar_G = true;

        const rect = Gerenciador.getBoundingClientRect();

        offsetXG = b.clientX - rect.left;
        offsetYG = b.clientY - rect.top;

        getGer();
    }
});

document.addEventListener("mousemove", (m) => {
    if (arrastar_G){
        Gerenciador.style.left = `${m.clientX - offsetXG}px`;
        Gerenciador.style.top = `${m.clientY - offsetYG}px`;
    }
});

document.addEventListener("mouseup", () => {
    arrastar_G = false;
});

Pastas_Projetos.forEach((p, index) => {
    p.addEventListener("click", () => {
        switch (index) {
            case 0:
                window.open("https://github.com/Rhuan-cmd/JogodeDamaJava", "_blank");
                break;
            
            case 1:

                break;

            case 2:
                break;

            case 3:
                
                break;
        
            default:
                break;
        }
    });
});