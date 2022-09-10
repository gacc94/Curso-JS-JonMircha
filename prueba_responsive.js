const d = document;

export default function responsiveTester(id){
    const $form =d.getElementById(id);

    let tester;

    d.addEventListener('submit',(e)=>{
         if(e.target === $form){
            // alert('Fomrulario Enviar')
            e.preventDefault();
            tester = 
            window.open(
            $form.direccion.value,"tester",innerWidth=$form.ancho.value,innerHeight=$form.alto.value);  
        }


    });

    d.addEventListener('click',(e)=>{
        if(e.target===$form.cerrar){
            tester.close();
        }
    })
}