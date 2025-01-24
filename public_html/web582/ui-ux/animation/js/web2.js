console.log('web2.js loaded');

let sections;
  const studentSites = document.querySelector('#student-sites');
  const studentsArticle = document.querySelector('#students');
fetch('js/students.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(sections);
    //displaySection(data.sections[1]);
    sections = data.sections; // not sure if this is useful
    data.sections.forEach(displaySection); //this is cool
  	/*data.sections.forEach(function(section){
  		//console.log(section);
  		displaySection(section);
  		section.section.forEach(function(student){
  			//console.log(student);
  		});
  	});*/
  });


  //console.log(studentsArticle);
  
  function displaySection(section, index){
  	//console.log(index);
  	
  	let article = document.createElement('article');
  	let h4 = document.createElement('h4');
  	h4.innerHTML = `section 00${index+1}`;
  	article.appendChild(h4);
  	
  	section.section.forEach(function(student){
			let a = document.createElement('a');
			a.innerHTML = student.firstName;
			a.href = `https://2022.micromediaweb.com/home/${student.studentNumber}/web2/`;
			a.id = student.studentNumber;
      a.target = '_blank';
			article.appendChild(a);
			//console.log(student.firstName);
  	});
  	studentSites.appendChild(article);
  	

  }

//expand animation nav
//i am lazy, I should make just one that works for both instead of copy-pasta!!
const aniOpen = document.querySelector('#animation-open');
const aniNav = document.querySelector('#ani-nav')
aniOpen.addEventListener('click', function (event) {
	aniNav.classList.toggle('display');
})

const linksOpen = document.querySelector('#links-open');
const linksNav = document.querySelector('#links-nav')
linksOpen.addEventListener('click', function (event) {
	linksNav.classList.toggle('display');
})