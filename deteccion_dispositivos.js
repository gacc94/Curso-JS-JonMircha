const d = document;
const n=navigator;
const ua = n.userAgent; 

export default function deteccionDispositivo(id){
    const $id=d.getElementById(id)

    const isMobile = {
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();
        },
    };
    const isDesktop = {
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac|ipad|ipod/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();
        },
    };
    const isBrowser = {
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return (
            this.ie()||
            this.edge()||
            this.chrome()||
            this.safari()||
            this.firefox()||
            this.opera()

            );
        },
    };


    // console.log(ua)
    // console.log(isMobile.android());
    // console.log(ua)

    $id.innerHTML =
    ` <ul>
        <li>User Agent:<b> 
            ${ua}</b>
        </li>
        <li>Plataforma: <b>
            ${isMobile.any()?
            isMobile.any(): isDesktop.any()}
            </b>
        </li>
        <li>
            Navegador:
            <b>${isBrowser.any()}</b>
        </li>
    </ul>
    `

    // Contenido Exclusivo

    if(isBrowser.chrome()){
        $id.innerHTML+=`
        <p>
            <mark>Este contenido solo se ve en Chrome</mark> 
        </p>`
    }
    if(isDesktop.windows()){
        $id.innerHTML+=`
        <p>
            <mark>
            Descarga contenido exclusivo para Windows</mark> 
        </p>`
    }



    // Redireccion

    if(isMobile.android()){
        location.href = 'http://jonmircha.com';
    }
}