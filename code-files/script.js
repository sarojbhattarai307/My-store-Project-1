let menuBtn = document.querySelector(".menu-btn")
let navBar = document.querySelector(".navbar")
let lists = document.querySelectorAll(".nav-item")
let click = true;

menuBtn.addEventListener("click",()=>{
    if(click){
navBar.classList.toggle("nav-menu");
click = false;
}
}
)


    lists.forEach((list)=>{
        list.addEventListener("click",()=>{
            if(click===false){
                navBar.classList.remove("nav-menu")
                click=true;
            }
            
        })
    })

