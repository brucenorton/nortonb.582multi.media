// js/lazy_loading.js

/* pseudo code
  * fetch image list from images.json
  * observe if last image is in viewport
    * unobserve last image (since it will no longer be the last image)
    * load some more images
    * offset index number to last image loaded
    * get the NEW last image in the array
    * rinse & repeat
*/

//lazy coding by polluting the global namespace bad Bruce!
  let imageData;
  let gallery = document.querySelector("#gallery");

// * fetch image list from images.json
  async function fetchImages(url){
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    //console.log(data);
    imageData = data;
  }
  fetchImages('js/images.json');

// get the last image in the array
  function getLastFigure(){
    let lastFigure = document.querySelector("#gallery figure:last-of-type");
    //console.log(lastFigure.innerHTML);
    return lastFigure;
  }

// intersectionObserver callback function
  let lazyLoad = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      //load some more images
      if (entry.isIntersecting) {
        lazyLoadMore();
      }
    });
  };

// * observe if last image is in viewport
// define options in js object
  let lazyOptions = {
    root: null, // null is the viewport
    rootMargin: "0px 0px -400px 0px",
    threshold: .90 //threshold is the percentage of the element that needs to be visible to fire the callback
  };
  let figureObserver = new IntersectionObserver(lazyLoad, lazyOptions);
  figureObserver.observe(getLastFigure());

// * load some more images
  function lazyLoadMore(){
    console.log("lazyLoadMore()");
    //but first unobserve the last image
    figureObserver.unobserve(getLastFigure());

    //get index of last image so we know where to start loading the next batch
    let index = document.querySelectorAll("#gallery figure").length;
    
    //loop through the next 6 images and add them to the gallery
    for(let i=0; i<6; i++){
      let figure = document.createElement("figure");
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");
      img.src = imageData[index + i].image;
      figcaption.innerText = imageData[index + i].caption;
      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    }
    //observe the NEW last image
    figureObserver.observe(getLastFigure());
  }

