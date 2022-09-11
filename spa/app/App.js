 import api from "./helpers/wp_api.js";

 export function App(){
    document.getElementById('root').innerHTML = '<h1>Bienvenidos a mi primer aplicacion SPA con vanilla JS</h1>';

    console.log(api);
 }