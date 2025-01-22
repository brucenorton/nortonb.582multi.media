console.log('js/messages.js is loaded');

if (localStorage.getItem('fromUserID') == null) {
  window.location.href = 'login.html';
}

const usersSection = document.querySelector('#users');
let userData = new FormData();
let from = localStorage.getItem('fromUserID');
userData.append('fromuser', from);
//fetch users
fetch('app/list_users.php', {
  body: userData,
  method: "post"
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        displayUsers(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function displayUsers(data) {
  usersSection.innerHTML = '';
  data.forEach(function (user) {
    //console.log(user);
    let a = document.createElement('a');
    a.innerHTML = user.username;
    a.setAttribute('data-touserid', user.userID);
    a.addEventListener('click', selectUser);
    usersSection.append(a);

  });
}

function selectUser(event) {
  console.log(this.dataset.touserid);
  localStorage.setItem('toUserID', this.dataset.touserid);
  readMessage();
}

//send messages
const messageForm = document.querySelector("#message-form");
const messageArea = document.querySelectorAll('#message');
console.log(messageArea);
messageArea.innerHTML = 'yeah it gone.';
messageForm.addEventListener('submit', sendMessage);

function sendMessage(event) {
  event.preventDefault();
  let formData = new FormData(messageForm);
  formData.append('fromuser', localStorage.getItem('fromUserID'));
  formData.append('touser', localStorage.getItem('toUserID'));

  fetch('app/send_message.php', {
    body: formData,
    method: "post"
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Login form problem. Status Code: ' +
          response.status);
        return;
        

      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        readMessage();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

const messageSection = document.querySelector("#messages");

function readMessage() {
  let from = localStorage.getItem('fromUserID');
  let to = localStorage.getItem('toUserID');

  let messageData = new FormData();
  messageData.append('fromuser', from);
  messageData.append('touser', to);

  fetch('app/read_messages.php', {
    body: messageData,
    method: "post"
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Login form problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        displayMessages(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function displayMessages(data) {
  messageSection.innerHTML = '';

  data.forEach(function (msg) {
    let article = document.createElement('article');
    if (localStorage.getItem('fromUserID') == msg.fromuser) {
      article.classList.add('sent');
      
    }
    article.innerHTML = msg.message;
    messageSection.append(article);
  })
}

