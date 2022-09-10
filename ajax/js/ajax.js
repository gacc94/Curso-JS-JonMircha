
// XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById('xhr');
    const $fragmment = document.createDocumentFragment();


    xhr.addEventListener('readystatechange',(e)=>{

        if(xhr.readyState !== 4 ) {
            return
        };
        // console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300){
            // console.log('Exito')
            // console.log(xhr.response)

            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach(el => {
                const $li = document.createElement('li');

                $li.innerHTML = `
                ${el.name}--
                ${el.email}--
                ${el.phone}
                `

                $fragmment.appendChild($li)
            });

            $xhr.appendChild($fragmment);
        }else{
            
            // console.log('Error')
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error: $${xhr.status}: {message}`
        }


        // console.log('Este mensaje se cargara de cualquier forma');
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    // xhr.open('GET', '../../asset/usuarios.json')

    xhr.send();

})();

// fetch
(()=>{
    const $fetch = document.getElementById('fetch');
    const $fragmment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return (res.ok)
        ? res.json()
        : Promise.reject(res)
    })
    .then((json)=>{
        // console.log(json);
        // $fetch.innerHTML = json
        json.forEach(el => {
            const $li = document.createElement('li');
            $li.innerHTML += `
            ${el.name}--
            ${el.email}--
            ${el.phone}`
            $fragmment.appendChild($li);
        });
        $fetch.appendChild($fragmment)
    })
    .catch((err)=>{
        console.log(err);
        let message = err.statusText || 'Ocurrio un error ';
        $fetch.innerHTML = `Error: 
        ${err.status }: ${message}`;
    })
    .finally(()=>{
        // console.log('Esto se ejecutara independienteme del resultado de la promesa')
    });
})();

// fetchAsync
(()=>{
    const $fetchAsync = document.getElementById('fetch-async');
    const $fragmment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let json =await res.json();

            // if(!res.ok){
                //     throw new Error('Ocurrio un error')
            // }

            if(!res.ok) throw{
                status: res.status,
                statusText: res.statusText,
            }

            // console.log(res,json);

            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `
                ${el.name}--
                ${el.email}--
                ${el.phone}`
                $fragmment.append($li);
            });
            $fetchAsync.append($fragmment)

        }catch(err){

            console.log(err);
            let message = err.statusText || 'Ocurrio un error ';

            $fetchAsync.innerHTML = `Error ${err.status}:  ${message}`;

        }finally{

        }

    }

    getData();



})();

// Axios 
(()=>{
    const $axios = document.getElementById('axios');
    const $fragmment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        // console.log(res);
        let json = res.data;
        json.forEach(el => {
            const $li = document.createElement('li');
            $li.innerHTML = `
                ${el.name}--
                ${el.email}--
                ${el.phone}`

            $fragmment.appendChild($li);
        });
        $axios.appendChild($fragmment)
    })
    .catch((err)=>{

        console.log('Estamos en el catch',err.response);

        let message = err.response.statusText || 'Ocurrio un error ';

        $axios.innerHTML = `Error ${err.response.status}:  ${message}`;
    })
    .finally(()=>{
        // console.log('Esto se ejecutara independienteme del resultado');
    });


})();


// Axios Async
(()=>{
    const $axiosAsync = document.getElementById('axios-async');
    const $fragmment = document.createDocumentFragment();

    

    async function getData(){
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            let json =await res.data;

            // console.log(json);

            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `
                    ${el.name}--
                    ${el.email}--
                    ${el.phone}`

                $fragmment.appendChild($li);
            });
            $axiosAsync.appendChild($fragmment)
        }catch(err){
            // console.log('Estamos en el catch',err.response);
            let message = err.response.statusText || 'Ocurrio un error ';

            $axiosAsync.innerHTML = `Error ${err.response.status}:  ${message}`;

        }finally{
            // console.log('Esto se ejecutara independienteme del resultado');
        }
    }

    getData();

})();


window.addEventListener('load',(e)=>{
    setTimeout(()=>{
        const $loader = document.querySelector('.loader');
        $loader.classList.remove('active');
    },300);
})


/* Callback */

const dioses =[
    {
      id:1,
      nombre: "Athena",
      de: "Tierra"
    },
    {
      id: 2,
      nombre: "Poseidon",
      de: "Mar"
    },
    {
      id: 3,
      nombre: "Hades",
      de: "Inframundo"
    },
    {
      id: 4,
      nombre: "Zeus",
      de: "Cielo"
    },
    {
      id: 5,
      nombre: "Hades",
      de: "Tierra"
    }
  ]

// const dios = dioses.find(item => {

//     return item.id === 2
// });
// console.log(dios);


const getDatos =(id)=>{

    const finId = dioses.find(item => item.id === id)

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(finId) {
                resolve(finId);
            }else{
                reject(`No se encontro el ID: ${id}`);
            }
        },2000)
    });
}

// getDatos(3)
// .then((datos)=>{
//     console.log(datos);
//     return getDatos(5);
// })
// .then((datos)=>{
//     console.log(datos);
// })
// .catch((err)=>{
//     console.log(err);
// })

const buscarId = async()=>{
    try{
        let buscar;
        let buscar2 = await Promise.all([getDatos(1)]);

        buscar = await getDatos(1);
        console.log(buscar);
        console.log(buscar2);

        buscar = await getDatos(2);
        console.log(buscar);

        buscar = await getDatos(3);
        console.log(buscar);

        buscar = await getDatos(7);
        console.log(buscar);
        
    }
    catch(err){
        console.log(err);
    }
    finally{
    
        console.log('Funcion Finalizado');
    }

}

buscarId()

/**
 Fetch
 */
const url='https://jsonplaceholder.typicode.com/posts/'
fetch(url)
.then((res)=>{
    return (res.ok)
        ?res.json()
        :Promise.reject(res);
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log('Funcion Finalizado');
});


const findPostById = async(id)=>{
    try {
        const res = await fetch(url+`${id}`)
        const data = await res.json();

        console.log(data);

    } catch (error) {
        console.error(error);
    }
};
findPostById(9)



// const cuadradoCallback = (num1, callback)=>{
//     let result = Math.pow(num1,2);

//     setTimeout(()=>{
//         callback(result);
//     },2000)
// }

// cuadradoCallback(2,(result)=>{
//     console.log(result);
//     cuadradoCallback(3,(result)=>{
//         console.log(result);
//         cuadradoCallback(5,(result)=>{
//             console.log(result);
//         })
//     })
// });


// const buscarId = (id,callback)=>{
//     const finId = dioses.find(item => item.id === id).de

//     if(finId){
//         setTimeout(()=>{
//             callback(finId);
//         },2000)

//     }else{
//         console.log(`No se encontro el dios con id: ${id}`)
//     }

// };

// buscarId(5,(result)=>{
//     console.log(result);

//     buscarId(4,(result)=>{

//         console.log(result);

//         buscarId(1,(result)=>{
//             console.log(result);
        
//         })
//     })
// })


