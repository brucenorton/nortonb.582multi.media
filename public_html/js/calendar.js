//web2.js
// i use a console.log() to make sure the .js is loading. But then comment it out as soon as it is working
//console.log('js/student_sites.js loaded');

//this puts today's date in the calendar icon
const calDate = document.querySelector("#cal text");
//console.log(calDate.innerHTML);

let today = new Date();
calDate.innerHTML = today.getDate();

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