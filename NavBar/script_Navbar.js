const NavBar = document.getElementById("NavBar");
const App_CMD = document.getElementById("App-cmd");
const X = NavBar.querySelector(".x-conteiner");
const Barra_Janela_NavBar = document.getElementById("Barra-Janela");
const Janelas_Classe = document.querySelectorAll(".Janelas");

let arrastar = false;
let offsetX = 0;
let offsetY = 0;

function getNav(){
    Janelas_Classe.forEach(j => {
        j.style.zIndex = 1;
    });
    NavBar.style.zIndex = 2;
}

function open_cmd(){
    if (NavBar.classList.contains("anim-fechar-navbar")){
        NavBar.classList.remove("anim-fechar-navbar");
        NavBar.classList.add("anim-abrir-navbar");
    }
}

X.addEventListener("click", () => {
    NavBar.classList.remove("anim-abrir-navbar");
    NavBar.classList.add("anim-fechar-navbar");
})

App_CMD.addEventListener("click", open_cmd);

NavBar.addEventListener("animationend", (anim) => {
    if (anim.animationName == "abrir-navbar"){
        NavBar.classList.remove("anim-fechar-navbar");
        NavBar.classList.remove("anim-abrir-navbar");
        NavBar.style.left = 'calc(50% - 250px)';
        NavBar.style.top = '3%';
    }
});

document.addEventListener("mousedown", (b) => {
    if (Barra_Janela_NavBar.contains(b.target) && !X.contains(b.target)){
        arrastar = true;

        const rect = NavBar.getBoundingClientRect();

        offsetX = b.clientX - rect.left;
        offsetY = b.clientY - rect.top;

        getNav();
    }
});

document.addEventListener("mousemove", (m) => {
    if (arrastar){
        NavBar.style.left = `${m.clientX - offsetX}px`;
        NavBar.style.top = `${m.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    arrastar = false;
});