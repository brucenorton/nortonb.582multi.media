/* svg-waves.js */

//console.log('svg-waves.js loaded');

let capy = document.querySelector('#capy');
//console.log(capy);

capy.addEventListener('click', capyDance);

function capyDance(event){
    console.log(event.target.id);
    event.target.classList.toggle('move-right');

}