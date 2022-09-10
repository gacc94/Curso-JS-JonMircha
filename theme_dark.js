const d=document;
const ls=localStorage;

export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");


    const lightMode = () =>{
        $themeBtn.classList.remove("fa-moon")
        $themeBtn.classList.add("fa-sun")
        $selectors.forEach(el=>{
            el.classList.add(classDark)
        })
        ls.setItem("themeDL","dark");

    }
    const darkMode = () => {
        $themeBtn.classList.add("fa-moon");
        $themeBtn.classList.remove("fa-sun");
        $selectors.forEach(el=>{
            el.classList.remove(classDark)
        })
        ls.setItem("themeDL","light");
    }

    d.addEventListener("click",e=>{

        if(e.target.matches(btn)){
            if(e.target.classList.contains("fa-moon")){
                lightMode();
                // console.log(e.target.children[0].className)
            }else{
                darkMode();
            }
            
            
            
        }
    });


    
    d.addEventListener("DOMContentLoaded",e=>{
        if(ls.getItem("themeDL") === null){
            ls.setItem("themeDL","light");
        }
        
        if(ls.getItem("themeDL") ==="light"){
            // console.log(ls.getItem("themeDL"));
            darkMode();
        }
        if(ls.getItem("themeDL") ==="dark"){
            lightMode();
            // console.log(ls.getItem("themeDL"));
            
        }
    });

}