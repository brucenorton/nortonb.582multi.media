console.log('ui-ux.js loaded');

//code to display student sites
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
const classTimes = ["W 9-12:30 :: e413"];

function displaySection(section, index) {
  //console.log(index);
  
  let article = document.createElement('article');
  let h4 = document.createElement('h4');
  h4.innerHTML = `schedule: ${classTimes[index]}`;
  article.appendChild(h4);
  let ul = document.createElement('ul');
  article.appendChild(ul);
  
  section.section.forEach(function (student) {
    let li = document.createElement('li');
    ul.appendChild(li);
      let a = document.createElement('a');
      a.innerHTML = student.firstName;
      a.href = `https://${student.userName}${student.studentNumber}.web582.com/ui-ux/`;
      a.id = `${student.userName}${student.studentNumber}`;
      a.target = '_blank';
      li.appendChild(a);
      //console.log(student.firstName);
    });
  studentSites.appendChild(article);
  

}
