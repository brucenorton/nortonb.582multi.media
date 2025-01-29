/* modal demo from:
  https://nortonb.web582.com/ui-ux/local_storage/
  https://css-tricks.com/considerations-styling-modal/
*/
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeButton = document.querySelector('#close-button');

closeButton.addEventListener('click', function() {
  //abstracted out toggle modal function
  toggleModal();
});

modalOverlay.addEventListener('click', function() {
  toggleModal();
});

function toggleModal(){
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
}

// code to open modals
  // gallery object already created in lazy_loading.js
  // let gallery = document.querySelector("#gallery");
  // we will attach the event listener to the gallery object so that dynamically loaded images are still clickable

  gallery.addEventListener('click', function(event){
    event.preventDefault();
    //console.log(event.target.localName);
    if(event.target.localName == 'img'){
      //let's try cloning the figure
      let figure = modal.querySelector('figure');
      figure.innerHTML = '';
      let figureClone = event.target.parentNode.cloneNode(true);
      console.log(figureClone.innerHTML);
      figure.innerHTML = figureClone.innerHTML;
      /* instead of cloning, we can create */
      // let img = document.createElement("img");
      // let figcaption = document.createElement("figcaption");
      // img.src = event.target.src;
      // figcaption.innerText = event.target.parentNode.querySelector('figcaption').innerText;
      // figure.appendChild(img);
      // figure.appendChild(figcaption);
      //modal.appendChild(figure);
      modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
    }
    
   
  });

  /* bonus challenge: add next & previous ui plus by keyboard arrows */
