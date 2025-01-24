/* constant variables for elements and URLs */
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const navURL = '/2024-25/nav.html';
const footerURL = '/2024-25/footer.html';

import { updateCalendar } from '/js/calendar.mjs';

/* reusable async/await function to fetch common HTML elements */
async function fetchHTML(url, element){
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
  //console.log(data);
}

/* async/await function to fetch specific elements */
async function getCommon(){
  const navHTML = await fetchHTML(navURL, nav);
  const footerHTML = await fetchHTML(footerURL, footer);
  updateCalendar();
}
// call the function
getCommon();

