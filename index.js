
'use strict';
function displayresponse(responseJson){
    var keys = Object.keys(responseJson);
    let length= keys.length;
    for(let i =0;i<length;i++){
        $('.newstuff').append(
        "<a href="+"https://github.com/"+responseJson[i].full_name+'>'+responseJson[i].name+"</a><br>"
        );  
    }   
}

function getRepos() {
    let url ="https://api.github.com/"
    let userinput='users/'+ $('#js-search-handle').val() +'/repos';
    url = url + userinput;
  console.log("hi" +$('#js-search-handle').val());
  console.log(url);
  
  
fetch(url)
    .then(response => response.json())
    .then(responseJson => displayresponse(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getRepos();
  });
}

$(watchForm);