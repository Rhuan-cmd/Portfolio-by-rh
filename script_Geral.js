const Cursor = document.getElementById("Cursor");
const Botao_Taskbar = document.getElementById("Seta_Open");
const Botoes_Icones = document.querySelectorAll(".Icones");
const Barra_Pesquisa = document.getElementById("Barra-de-Pesquisa");
const Fechar_X = document.querySelectorAll(".x-conteiner");
const Textos_Navbar = document.querySelectorAll(".TextoNav");
const Image_Project = document.getElementById("Image-Pasta-Project");
const Image_Pasta_Project= document.querySelectorAll(".Image-Pasta-Project");

document.addEventListener("mousemove", (m) => {
    Cursor.style.left = m.pageX + "px";
    Cursor.style.top = m.pageY + "px";
    Cursor.style.opacity = 1;
});

document.addEventListener("mouseenter", () => {
    Mouse_Normal();
});

document.addEventListener("mouseleave", () => {
    Cursor.style.opacity = 0;
    Remove_Mouse();
});

document.addEventListener("scroll", () => {
    Cursor.style.opacity = 0;
})

function Mouse_Normal(){
    Cursor.classList.remove("cursor-select-anim");
    Cursor.classList.add("cursor-anim");
}

function Mouse_Point(){
    Cursor.classList.remove("cursor-anim");
    Cursor.classList.add("cursor-select-anim");
}

function Remove_Mouse(){
    Cursor.classList.remove("cursor-anim");
    Cursor.classList.remove("cursor-select-anim");
}

//Efeitos da Taksbar Cursor
Botao_Taskbar.addEventListener("mouseenter", Mouse_Point);

Botao_Taskbar.addEventListener("mouseleave", Mouse_Normal);

Botoes_Icones.forEach(btn => {
    btn.addEventListener("mouseenter", Mouse_Point);
    btn.addEventListener("mouseleave", Mouse_Normal);
});

Barra_Pesquisa.addEventListener("mouseenter", Remove_Mouse);

Barra_Pesquisa.addEventListener("mouseleave", Mouse_Normal);


//Efeitos da Navbar Cursor
Fechar_X.forEach(f => {
    f.addEventListener("mouseenter", Mouse_Point);
    f.addEventListener("mouseleave", Mouse_Normal);
})

Image_Project.addEventListener("mouseenter", Mouse_Point);
Image_Project.addEventListener("mouseleave", Mouse_Normal);

Image_Pasta_Project.forEach(i => {
    i.addEventListener("mouseenter", Mouse_Point);
    i.addEventListener("mouseleave", Mouse_Normal);
});

Textos_Navbar.forEach(txt => {
    txt.addEventListener("mouseenter", Mouse_Point);
    txt.addEventListener("mouseleave", Mouse_Normal);
})

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Ano-Rodape").textContent = new Date().getFullYear();
});