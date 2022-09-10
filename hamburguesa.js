export default function hamburguerMenu(panelBtn,panel,menuLink){
    const d=document;

    d.addEventListener('click',(e)=>{
        if(e.target.matches(panelBtn) ){
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('open');
            console.log(panelBtn);
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('open');
        }
    })
}