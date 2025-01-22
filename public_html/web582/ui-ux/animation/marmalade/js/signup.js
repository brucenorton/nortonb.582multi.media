console.log('js/signup.js is loaded');

//signup a user
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener('submit', signupUser);

function signupUser(event) {
  event.preventDefault();
  let formData = new FormData(signupForm);

  fetch('app/signup.php', {
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
        storeSession(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

function storeSession(data) {
  console.log(data);
  localStorage.setItem('fromUserID', data.userID);
  localStorage.setItem('fromUserName', data.userName);
  //window.location.href = 'messages.html';
}
