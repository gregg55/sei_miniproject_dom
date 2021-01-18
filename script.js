
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

  //console.log successful reponse data or specific response.name
  //.then(response => console.log("success!", response))
  // catch error if not successful response
  .catch(err => console.log('Something Wrong..', err))
}
 

getItem();

//get Item 2 - Sandwiches
 function getItem2() {

  //select API - use CORS link if needed
  
  let url2 = 'https://foodish-api.herokuapp.com/api/images/burger'
  let response2; 
  
  // Use Fetch command to Pull API & console Success
  
  fetch(url2) // Fetch URL 
    .then(response2 => response2.json()) // return data a JSON response in a string
    .then (json=> {document.querySelector(".foodPicture").src =json.image;})
  
    // console.log successful reponse data or specific response.name
    //.then(response => console.log("success!", response))
    // catch error if not successful response
    .catch(err => console.log('Something Wrong..', err))
  }
   getItem2();


   //get Item 3 - Special
 function getItem3() {

  //select API - use CORS link if needed
  
  let url3 = 'https://foodish-api.herokuapp.com/api/images/burger'
  let response3; 
  
  // Use Fetch command to Pull API & console Success
  
  fetch(url3) // Fetch URL 
    .then(response3 => response3.json()) // return data a JSON response in a string
    .then (json=> {document.querySelector(".foodPicture").src =json.image;})
  
    // console.log successful reponse data or specific response.name
    //.then(response => console.log("success!", response))
    // catch error if not successful response
    .catch(err => console.log('Something Wrong..', err))
  }
   getItem3();

   //get Item 4 - Gourmet
 function getItem4() {

  //select API - use CORS link if needed
  
  let url4 = 'https://foodish-api.herokuapp.com/api/images/burger'
  let response4; 
  
  // Use Fetch command to Pull API & console Success
  
  fetch(url4) // Fetch URL 
    .then(response4 => response4.json()) // return data a JSON response in a string
    .then (json=> {document.querySelector(".foodPicture").src =json.image;})
  
    // console.log successful reponse data or specific response.name
    //.then(response => console.log("success!", response))
    // catch error if not successful response
    .catch(err => console.log('Something Wrong..', err))
  }
   getItem4();