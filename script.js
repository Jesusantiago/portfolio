let list = document.querySelectorAll(".nav li");
function active(){
        list.forEach((i) =>
        i.classList.remove("active"))
    this.classList.add("active")
}
list.forEach((i) =>
    i.addEventListener(("click"), active))

let burger = document.querySelector(".menuToggle");
let header = document.querySelector(".header");

burger.onclick = function(){
    header.classList.toggle("active")
    
}

// const cv = document.getElementById("btncv")

// cv.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("hola")
//     fetch("./styles/access/CV.pdf")
//     .then(res=>res.blob())
//     // .then(res=>{
//     //     cv.href =  URL.createObjectURL(res)
//     // })
    
// })