const TaskBar = document.getElementById("Taskbar");
const Button_abrir_TaskBar = document.getElementById("Seta_Open").querySelector("img");
const Status_Clima = document.getElementById("Clima");
const Status_Hora_Dia = document.getElementById("Hora-Data");
const Apps = document.querySelectorAll(".Icones");
const Janela_Pesquisa = document.getElementById("Janela-Pesquisa");
const Barra_D_Pesquisa = document.getElementById("Barra-de-Pesquisa");
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
            pesquisa_aberta = false;
        }

        anim_pesquisa = true;
    }
}

Janela_Pesquisa.addEventListener("animationend", () => {
    anim_pesquisa = false;
})


Barra_D_Pesquisa.addEventListener("click", abrir_fechar_Pesquisa);

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