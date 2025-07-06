const Gmail = document.getElementById("Gmail");
const XGM = Gmail.querySelector(".x-conteiner");
const textarea = document.getElementById("area-de-texto");
const Barra_Janela_Gmail = document.getElementById("Bar-Top-Gmail");
const App_Gmail = document.getElementById("App-Gmail");
const Button_Enviar = document.getElementById("Enviar-Email");
const Form_Email = document.getElementById("form-email");
const Tela_Obrigado = document.getElementById("Tela-Obrigado");


let valorAnterior = "";
let arrastar_GM = false;
let offsetXGM = 0;
let offsetYGM = 0;

textarea.addEventListener("input", () => {
    textarea.style.overflow = "hidden";

    if (textarea.scrollHeight > textarea.clientHeight) {
        textarea.value = valorAnterior;
    } else {
        valorAnterior = textarea.value;
    }
});

function open_Gmail(){
    if (Gmail.classList.contains("anim-fechar-gmail")){
        Gmail.classList.remove("anim-fechar-gmail");
        Gmail.classList.add("anim-abrir-gmail");
    }
}

App_Gmail.addEventListener("click", open_Gmail);

Gmail.addEventListener("animationend", (anim) => {
    if (anim.animationName == "abrir-gmail"){
        Gmail.classList.remove("anim-fechar-gmail");
        Gmail.classList.remove("anim-abrir-gmail");
        Gmail.style.left = '30%';
        Gmail.style.top = '25%';
    }
});

XGM.addEventListener("click", () => {
    Gmail.classList.remove("anim-abrir-gmail");
    Gmail.classList.add("anim-fechar-gmail");
});

function getGM(){
    Janelas_Classe.forEach(j => {
        j.style.zIndex = 1;
    });
    Gmail.style.zIndex = 2;
}

document.addEventListener("mousedown", (b) => {
    if (Barra_Janela_Gmail.contains(b.target) && !XGM.contains(b.target)){
        arrastar_GM = true;

        const rect = Gmail.getBoundingClientRect();

        offsetXGM = b.clientX - rect.left;
        offsetYGM = b.clientY - rect.top;

        getGM();
    }
});

document.addEventListener("mousemove", (m) => {
    if (arrastar_GM){
        Gmail.style.left = `${m.clientX - offsetXGM}px`;
        Gmail.style.top = `${m.clientY - offsetYGM}px`;
    }
});

document.addEventListener("mouseup", () => {
    arrastar_GM = false;
});

Form_Email.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(Form_Email);

    fetch("https://formsubmit.co/rhuanbrasilino@acad.ifma.edu.br", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        Form_Email.style.display = "none";
        Tela_Obrigado.style.display = "flex";
      } else {
        alert("❌ Erro ao enviar. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro ao enviar:", error);
    });
  });