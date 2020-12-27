const API_KEY = '4b006909'
const URLSearch = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=`
const searchInput = document.getElementById("searchReq");
const seachForm = document.querySelector('#apiForm');
const searchTitle = document.querySelector('#title');
const searchYear = document.querySelector('#year');
const searchActors = document.querySelector('#actors');
const apiSearchReq = searchInput.value 

// We are only going to search by title for now to keep it simple, therefore need to amend our api req with t at the end. 





seachForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // setting a variable to be the search request that's input into the search box
    //now need to send this value to search the api, will now use the fetch API
myFetch();
   

    
//    let resData =  
//   .then(response => response.json())
//   .then(data => console.log(data));

})

async function myFetch() {
    let response = await fetch(`${URLSearch}${apiSearchReq}`)

    if(!response.ok){
        throw new Error(`HTTP Error ${response.status}`)
    } else {
        let myResponse = await response.json();
        console.log(myResponse)
    }
    
}