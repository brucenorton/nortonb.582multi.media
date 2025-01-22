
//code to display student sites
let sections;
const studentSites = document.querySelector('#student-sites');
const studentsArticle = document.querySelector('#students');

/* passing parameters using import/export */
  const modulePath = new URL(import.meta.url);
  console.log(modulePath);
  console.log(modulePath.searchParams.get('cohort'));

  let jsonURL = `/js/${modulePath.searchParams.get('cohort')}.json`;
  let server = modulePath.searchParams.get('server');
  let course = modulePath.searchParams.get('course');

function fetchStudents() {
  fetch(jsonURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //console.log(data);

      // sort data 
      data.sections.forEach(section => {
        
        section.students.sort((a, b) => {
            const nameA = a.firstName.toUpperCase();
            const nameB = b.firstName.toUpperCase();
            return nameA < nameB ? -1 : (nameA > nameB ? 1 : 0);
        });
      });
      //console.log(JSON.stringify(data, null, 2));
      data.sections.forEach(displaySection); //pass individual students

  });
}


//console.log(studentsArticle);
const classTimes = ["section 001", "section 002"];
  function displaySection(section, index){
  	//console.log(section.students);
  	
  	let article = document.createElement('article');
  	let h4 = document.createElement('h4');
    h4.innerHTML = classTimes[index];
    article.appendChild(h4);
   

  	section.students.forEach(function(student){
      //console.log(student);
			let a = document.createElement('a');
			a.innerHTML = student.firstName;
			a.href = `https://${student.userName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}${student.studentNumber}.${server}/${course}/`;
			a.id = student.studentNumber;
      a.target = '_blank';
			article.appendChild(a);
  	});
  	studentSites.appendChild(article);

  }

export {fetchStudents};