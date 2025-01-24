console.log('js/web2_animations.js loaded');

//this script add a background to the header after scrolling a bit
const header = document.querySelector('header');
const scrollOffset = 50;
//element that is hidden, then appears when in the viewport
const viewAppear = document.querySelector('.viewAppear');
window.addEventListener('scroll', function() { 
  //console.log(window.pageYOffset);
  if( window.pageYOffset >= scrollOffset){
    header.classList.add('faded-in');
  }else{
    header.classList.remove('faded-in');
  }
  if (isInViewport(viewAppear)) {
    viewAppear.classList.add('viewAppeared');
  } else {
    viewAppear.classList.remove('viewAppeared');
  }

});

//this script scrolls to an anchor element, when a user clicks a link that begins with #
  //select all links that begin with #
  //should I make this more specific? i.e. add a class or something?
  var anchorLinks = document.querySelectorAll('[href^="#"]');

    //add event listeners to those links
  Array.from(anchorLinks).forEach(function(element) {
    //console.log(element);
    //when a user clicks a link, call the scrollFunction
    element.addEventListener('click', scrollFunction);
  });


  function scrollFunction(event){
    //console.log('clicked: ' + this.getAttribute('href'));
    //stop the default event (going directly the to the element)
    event.preventDefault();
    //get the clicked element by the link's href attribute, but remove the first character: #
     
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: 'smooth', block: 'start' });
    //console.log(document.querySelector(this.getAttribute("href")).scrollTop);

  }

  //make element appear only if they are in the viewport
  //we call this helper function from the scroll eventListener above.
  //https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
  var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};