const footer = document.querySelector('footer #cal');
console.log(footer);
function updateCalendar(){
    const calDate = document.querySelector("#cal text");
    //console.log(calDate.innerHTML);

    let today = new Date();
    calDate.innerHTML = today.getDate();
}

export {updateCalendar};

