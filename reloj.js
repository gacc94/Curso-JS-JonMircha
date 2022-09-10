const d=document;

export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;

    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            console.log(e)
            clockTempo = setInterval(()=>{
                let clockHour=new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`;
            },1000)

            e.target.disabled=true
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnPlay).disabled=false;
            console.log('Stop')
        }
    })
}

export function alarm(sound,btnPlay,btnStop){
    let alarmTempo;
    const $alarma = d.createElement("audio");
    $alarma.src=sound;
        d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(()=>{
                $alarma.play();
            },2000)
            e.target.disabled=true
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector(btnPlay).disabled=false;
        }
    })

}