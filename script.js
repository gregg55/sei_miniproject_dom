
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

//pull API - use CORS link if needed

let url = 'https://foodish-api.herokuapp.com/api/images/burger'

// Use Fetch command 
function getFood() {
fetch(url) // Fetch URL 
  .then(response => response.json()) // return a JSON response


  // console.log successful reponse data or specific response.name
  .then(response => console.log("success!", response))
  // catch error if not successful response
  .catch(err => console.log('Something Wrong..', err))
}
