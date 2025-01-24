// define options in js object
let parallaxOptions = {
  root: null, // document.body for ios safari compatibility
  rootMargin: "0px 0px 200px 0px", //load 200px before the element is visible
  threshold: .1 //threshold is the percentage of the element that needs to be visible to fire the callback
};

let parallaxCallback = (entries, parallaxObserver) => {
  entries.forEach((entry) => {
    //console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      console.log('parallaxCallback');
      parallaxObserver.unobserve(entry.target);

    }
  });
};

// instantiate new observer and set targets to observe
let parallaxObserver = new IntersectionObserver(parallaxCallback, parallaxOptions);
let parallaxTargets = document.querySelectorAll(".parallax");

parallaxTargets.forEach((target) => {
  parallaxObserver.observe(target);
});

