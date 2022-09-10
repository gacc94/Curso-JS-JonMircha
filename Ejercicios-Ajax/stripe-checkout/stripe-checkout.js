import stripeKeys from './stripe-keys.js';
import STRIPE_KEYS from './stripe-keys.js';
console.log(STRIPE_KEYS);

const d =document;
const $tacos = d.getElementById('tacos');
const $template = d.getElementById('taco-template').content;
const $fragment = d.createDocumentFragment();

const options = {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
};

let prices, products;

const moneyFormat = num => {
    return `${num.slice(0,-2)}.${num.slice(-2)}`
}


Promise.all([
    fetch("https://api.stripe.com/v1/products",options),
    fetch("https://api.stripe.com/v1/prices",options)
])
.then((response)=>Promise.all(response.map(res => res.json())))
.then((json) =>{
    products = json[0].data;
    prices = json[1].data;
    console.log(products,prices);

    prices.forEach((el,i) => {
        console.log(el);

        $template.querySelector('.taco').setAttribute('data-price',el.id);
        $template.querySelector('img').src = products[i].images[0]
        $template.querySelector('img').alt = products[i].name;
        $template.querySelector('figcaption').innerHTML = 
        ` <h3>${products[i].name}</h3>
          <p>S/ ${moneyFormat(el.unit_amount_decimal)} ${el.currency}</p>  
        `;

        let clon = d.importNode($template,true);

        $fragment.append(clon);
    });
    $tacos.append($fragment);

})
.catch((err)=>{
    console.log(err);
})


d.addEventListener('click',(e)=>{
    if(e.target.matches('.taco *')){
        let price = e.target.parentNode.getAttribute('data-price');
        console.log(price);

        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price:price,quantity:1,}],
            mode: 'subscription',
            successUrl: 'http://127.0.0.1:5504/Ejercicios-Ajax/stripe-checkout/stripe-success.html',
            cancelUrl: 'http://127.0.0.1:5504/Ejercicios-Ajax/stripe-checkout/stripe.success.html',
        })
        .then((res)=>{
            if(res.error){
                $tacos.insertAdjacentElement('afterend',res.error.message);
            }
        })

    }
})



