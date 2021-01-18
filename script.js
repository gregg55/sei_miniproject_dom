
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Get item 1 -  Burgers 
function getItem() {

//select API - use CORS link if needed

let url = 'https://foodish-api.herokuapp.com/api/images/burger'
let response; 

// Use Fetch command to Pull API & console Success

fetch(url) // Fetch URL 
  .then(response => response.json()) // return data a JSON response in a string
  .then (json=> {document.querySelector(".foodPicture").src =json.image;})

  // console.log successful reponse data or specific response.name
  //.then(response => console.log("success!", response))
  // catch error if not successful response
  .catch(err => console.log('Something Wrong..', err))
}
 

getItem();

//get Item 2 - Sandwiches
 function getItem2() {

  //select API - use CORS link if needed
  
  let url = 'https://foodish-api.herokuapp.com/api/images/burger'
  let response2; 
  
  // Use Fetch command to Pull API & console Success
  
  fetch(url) // Fetch URL 
    .then(response => response2.json()) // return data a JSON response in a string
    .then (json=> {document.querySelector(".foodPicture").src =json.image;})
  
    // console.log successful reponse data or specific response.name
    //.then(response => console.log("success!", response))
    // catch error if not successful response
    .catch(err => console.log('Something Wrong..', err))
  }
   getItem2();