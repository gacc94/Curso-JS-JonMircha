const d=document;
const n=navigator;

export default function webCam(id){
    const $video = d.getElementById(id);

    // console.log(n.mediaDevices.getUserMedia);


    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({
            vide:true,
            audio:true,
        }).then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        }).catch((err)=>{
            $video.insertAdjacentHTML('afterend',`<p>${err}</p>`)
            // console.log(`!Sucedio el siguiente erro: ${err}`)
        })
    }

}