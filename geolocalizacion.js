const d = document;
const n=navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id);
    const options ={
        enableHightAccuracy:true,
        timeout:8000,
        maximumAge: 0,
    };


    const success = position => {
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML=
        `<p>
        Tu poscion actual es:
        </p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b></li>
        </ul>

        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" >Ver en Google Maps</a>
        `

        
    };

    const error = err => {
        $id.innerHTML = `<p>
        <mark>Error ${err.code}: ${err.message}</mark></p>`


        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);
}