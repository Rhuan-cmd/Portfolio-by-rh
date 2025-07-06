const Line_1_X = document.querySelectorAll(".line-1");
const Line_2_X = document.querySelectorAll(".line-2");
const Conteiner_X = document.querySelectorAll(".x-conteiner");

//Animações da Barra da Janela (X)
let anim_end = true;
let anim_count = 0;

function resetAnimClasses() {
    Line_1_X.forEach(l => {
        l.classList.remove("rotacionar-positivo", "rotacionar-negativo");
        void l.offsetWidth;
    })

    Line_2_X.forEach(l => {
        l.classList.remove("rotacionar-positivo", "rotacionar-negativo");
        void l.offsetWidth;
    })
}

Conteiner_X.forEach(c => {
    let line1 = c.querySelector(".line-1");
    let line2 = c.querySelector(".line-2");
    c.addEventListener("mouseenter", () => {
        if (!anim_end) return;
        
        anim_end = false
        resetAnimClasses();
        line1.classList.add("rotacionar-positivo");
        line2.classList.add("rotacionar-negativo");
    });
})

Conteiner_X.forEach(c => {
    let line1 = c.querySelector(".line-1");
    let line2 = c.querySelector(".line-2");
    c.addEventListener("mouseleave", () => {
        if (!anim_end) return;
    
        anim_end = false
        resetAnimClasses();
        line1.classList.add("rotacionar-negativo");
        line2.classList.add("rotacionar-positivo");
    });
});

function AnimEnd(){
    anim_count++;

    if (anim_count >= 2){
        anim_end = true;
        anim_count = 0;
    }
}

Line_1_X.forEach(l => {
    l.addEventListener("animationend", AnimEnd);
});

Line_2_X.forEach(l => {
    l.addEventListener("animationend", AnimEnd);
});