// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!
let likeHearts = document.querySelectorAll('.like-glyph')

function likePost(e){
  let heart = e.target;
  mimicServerCall()
  .then (function(serverMessage){
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color[heart.style.color];
  })

  .catch(function(error) {
    let model = document.getElementById('model');
    model.className = "";
    model.innerText = error;
    setTimeout(() => model.className = "hidden", 3000);

  });
}

for(let glyph of likeHearts) {
  glyph.addEventListener('click', likePost)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
