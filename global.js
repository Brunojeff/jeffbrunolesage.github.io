// Gestion background image2
function image2(){
    const bacground1=document.querySelector("header")
    bacground1.addEventListener("click",()=>{
        bacground1.classList.toggle("click")
    })
}
image2()
// Gestion des boites
function boite() {
    const boite1=document.querySelector("boite")
    boite1.addEventListener("click",()=>{
        boite1.classList.add("boite-1")
    })
}
boite()