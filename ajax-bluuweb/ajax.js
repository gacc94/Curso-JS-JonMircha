
const d=document;
const w=window;
const $cards    = d.getElementById('cards-dinamic');
const $template = d.getElementById('template-card').content;
const $fragmment = document.createDocumentFragment();

d.addEventListener('DOMContentLoaded',(e)=>{
    fechtData();
})


const fechtData = async()=>{
    try {
        loading(false);
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        resultData(data);

    } catch (error) {
        
    } finally {
        loading(true);
    }
};
const resultData = data => {
    const arrayResults = data.results;
    arrayResults.forEach((el)=> {
        $template.querySelector('.card__h3').textContent = `${el.name}`
        $template.querySelector('.card__p').textContent = `${el.species}`
        $template.querySelector('.card__img').setAttribute("src",el.image)
        const $clon = d.importNode($template,true);
        $fragmment.appendChild($clon);
    });
    $cards.appendChild($fragmment);
};

const loading = estatus =>{
    const loader = d.querySelector('.loader');
    return (estatus)
    ?loader.classList.remove('active')
    :loader.classList.add('active');
}






