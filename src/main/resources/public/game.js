const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');

//const oneGame = fetch("http://localhost:8080/api/games/"+gameId); //For: /api/games/#
//const gamesPromise =
/**
oneGame
.then(x => x.json())
.then(function(oneGame){
const info = document.getElementById("infGame");
let title = document.createElement("title");
title.innerHTML = `Game ID: ${oneGame.id}`;
info.appendChild(title);
let state = document.createElement("state");
state.innerHTML = oneGame.state;
info.appendChild(state);
let player = document.createElement("player");
player.innerHTML = oneGame.username;
info.appendChild(player);
});
*/
//gamesPromise
axios.get("/api/games/"+gameId)
.then(function(response) {

    const game = response.data;
    displayGame(game);
})
// If the call is not working, you will get error from here
.catch(function (error) {
    displayError(error);
});
function displayGame(game){
    let infGame = document.getElementById("infGame");

    const p = document.createElement("p");
    p.textContent = `Game ${game.id} is ${game.state}`;
    infGame.appendChild(p);
}

function displayError(error){
    let infGame = document.getElementById("infGame");
    const p = document.createElement("p");
    p.textContent = " The game could not be loaded";
    console.log("There was an error", error);
}



