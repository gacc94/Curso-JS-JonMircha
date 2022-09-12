export function Loader(){
    const $loader = document.createElement('img');
    $loader.src = 'app/assets/spiner.svg';
    $loader.alt = 'loading...';
    $loader.classList.add('loader');

    return $loader;
}