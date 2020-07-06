let words=document.getElementById("my-keyword");
let sends=document.getElementById("send");
const respond=document.getElementById("response");

let htmlContent="";
function validateResponse(response){
    if (!response.ok){
        throw Error(response.statusText);
    }
        return response;
}

function processData(data){
let authors=data;
console.log(authors);
htmlContent=`<div><img src = "${data.Poster}" alt="$(data.Title)"></div>
<div><h2>${data.Title}</h2>
<p><strong>Writer:</strong>${data.Writer}</p>
<p><strong>Actors:</strong>${data.Actors}</p>
<p><strong>Genre:</strong>${data.Genre}</p>
<p><strong>Released Date:</strong>${ data.Released}</p>
<p><strong>Awards:</strong>${data.Awards}</p>
<p><strong>Plot:</strong>${data.Plot}</p> </div>`;
respond.innerHTML=htmlContent;
}

function logError(error){
console.log("looks like there was a problem:",error);
}



sends.addEventListener("click",function(e){
    e.preventDefault();
 
    let userValue = words.value;
    console.log(userValue);

    respond.innerHTML="";

    fetch("http://www.omdbapi.com/?t="+userValue+"&apikey=a787bf6d")
    .then(validateResponse)
    .then(function(response)  {
        return response.json();
    })
    .then(processData)
    .catch(logError);
    
});
