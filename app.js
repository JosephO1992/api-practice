const API_KEY = '4b006909'
const URLSearch = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=`
const searchInput = document.getElementById("searchReq");
const seachForm = document.querySelector('#apiForm');
const searchTitle = document.querySelector('#title');
const searchYear = document.querySelector('#year');
const searchActors = document.querySelector('#actors');
const searchImg = document.querySelector('#searchImg');
const card = document.querySelector('#card');


// We are only going to search by title for now to keep it simple, therefore need to amend our api req with t at the end. 

seachForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // setting a variable to be the search request that's input into the search box
    //now need to send this value to search the api, will now use the fetch API
    const apiSearchReq = searchInput.value 
    let resData;

async function myFetch() {
    let response = await fetch(`${URLSearch}${apiSearchReq}`);
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let resData = await response.json();

    
      searchTitle.innerHTML = resData.Title;
      searchYear.innerHTML = resData.Year;
      searchActors.innerHTML = resData.Actors;
      searchImg.src = resData.Poster;
      card.style.display = "block";
      searchInput.value = "";
      
    }
  }
  myFetch()
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });



})

