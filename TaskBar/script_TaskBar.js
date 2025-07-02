const TaskBar = document.getElementById("Taskbar");
const Button_abrir_TaskBar = document.getElementById("Seta_Open").querySelector("img");
const Status_Clima = document.getElementById("Clima");
const Status_Hora_Dia = document.getElementById("Hora-Data");
const Apps = document.querySelectorAll(".Icones");
const Janela_Pesquisa = document.getElementById("Janela-Pesquisa");
const Barra_D_Pesquisa = document.getElementById("Barra-de-Pesquisa");
const Conteiner_D_Pesquisa = document.getElementById("eu-amo-ela");
const Conteiner_D_Aplicativos = document.getElementById("sherlock-holmes");
const Button_Apps = document.querySelectorAll(".button-apps");

let task_bar_aberta = false;
let anim_rodando = false;

let pesquisa_aberta = false;
let anim_pesquisa = false;

function abrir_fechar_Taksbar(){
    if (!anim_rodando){
        if (!task_bar_aberta){
            TaskBar.style.animation = "abrir-taskbar 0.5s ease-in-out both";
            Button_abrir_TaskBar.style.animation = "rotacionar-seta-open 0.5s ease-in-out both"
            task_bar_aberta = true;
        }
        else{
            TaskBar.style.animation = "fechar-taskbar 0.5s ease-in-out both";
            Button_abrir_TaskBar.style.animation = "rotacionar-seta-close 0.5s ease-in-out both"
            task_bar_aberta = false;
        }

        anim_rodando = true;
    }
}

TaskBar.addEventListener("animationend", () => {
    anim_rodando = false;
})

function atualizarDataHora() {
    const agora = new Date();
    let status = {
        Hora: agora.getHours(),
        Minutos: agora.getMinutes(),
        Dia: agora.getDate(),
        Mes: (agora.getMonth() + 1),
        Ano: agora.getFullYear()
    }

    if (status.Mes < 10){
        Status_Hora_Dia.innerHTML = `${status.Hora}:${status.Minutos}<br>${status.Dia}/0${status.Mes}/${status.Ano}`;
    }else{
        Status_Hora_Dia.innerHTML = `${status.Hora}:${status.Minutos}<br>${status.Dia}/${status.Mes}/${status.Ano}`;
    }
  }

setInterval(atualizarDataHora, 1000);

function abrir_fechar_Pesquisa(){
    if (!anim_pesquisa){
        if (!pesquisa_aberta){
            Janela_Pesquisa.classList.remove("fechar-pesquisa");
            Janela_Pesquisa.classList.add("abrir-pesquisa");
            pesquisa_aberta = true;
        }
        else{
            Janela_Pesquisa.classList.remove("abrir-pesquisa");
            Janela_Pesquisa.classList.add("fechar-pesquisa");
            Barra_D_Pesquisa.value = "";
            Conteiner_D_Pesquisa.innerHTML = "";
            Conteiner_D_Aplicativos.style.display = 'flex';
            Conteiner_D_Pesquisa.style.display = 'none';
            pesquisa_aberta = false;
        }

        anim_pesquisa = true;
    }
}

Janela_Pesquisa.addEventListener("animationend", () => {
    anim_pesquisa = false;
})


Barra_D_Pesquisa.addEventListener("click", () => {
    if (!pesquisa_aberta){
        abrir_fechar_Pesquisa();
    }
});

document.addEventListener("mousedown", (event) => {
    if (!Barra_D_Pesquisa.contains(event.target) && !Janela_Pesquisa.contains(event.target)){
        if (pesquisa_aberta){
            abrir_fechar_Pesquisa();
        }
    }
})

Button_Apps.forEach((b, index) => {
    b.addEventListener("click", () => {
        switch (index) {
            case 0:
                open_cmd();
                break;
            
            case 1:
                open_gerenciador();
                break;

            case 2:
                open_notas();
                break;
            
            default:
                break;
        }
    });
})


Barra_D_Pesquisa.addEventListener('input', pesquisar);

function pesquisar(){
    const termo = Barra_D_Pesquisa.value.toLowerCase();
    const secoes = document.querySelectorAll(".Pesquisavel");
    Conteiner_D_Pesquisa.innerHTML = "";

    Conteiner_D_Aplicativos.style.display = 'none';
    Conteiner_D_Pesquisa.style.display = 'flex';

    secoes.forEach(secao => {
        const elementos = secao.querySelectorAll("*");

        elementos.forEach(el => {
            if (
                el.children.length === 0 &&
                el.textContent.trim() !== "" &&
                getComputedStyle(el).display !== "none"
            ) {
                const palavras = el.textContent.trim().split(/\s+/);
                
                let idUnico = null;

                palavras.forEach((palavra, i) => {
                    const palavraLimpa = palavra.toLowerCase().replace(/[.,:;!?()]/g, "");

                    if (palavraLimpa.includes(termo) && termo.trim() !== "") {
                        if (!idUnico) {
                            idUnico = `ref-${Math.random().toString(36).substr(2, 9)}`;
                            el.setAttribute("id", idUnico);
                        }

                        const anterior = palavras[i - 1] || "";
                        const atual = palavras[i];
                        const proxima = palavras[i + 1] || "";

                        const item = document.createElement("li");
                        item.innerHTML = `${anterior} <mark>${atual}</mark> ${proxima}`;

                        item.addEventListener("click", () => {
                            document.getElementById(idUnico).scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });
                        });

                        Conteiner_D_Pesquisa.appendChild(item);
                    }
                });

            }
        });
    });

    if (Barra_D_Pesquisa.value === ""){
        Conteiner_D_Aplicativos.style.display = 'flex';
        Conteiner_D_Pesquisa.style.display = 'none';
    }
}