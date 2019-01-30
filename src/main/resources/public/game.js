const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');

//const oneGame = fetch("http://localhost:8080/api/games"+gameId); //For: /api/games/#
const gamesPromise = axios.get("http://localhost:8080/api/games"+gameId);
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
gamesPromise
.then(function(response) {

    const games = response.data;
    const infGame = document.getElementById("infGame");
    for (let game of games) {

        const p = document.createElement("p");
        p.textContent = `Game ${game.id} is ${game.state}`;
        infGame.appendChild(p);
    }

});


