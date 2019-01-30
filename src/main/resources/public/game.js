const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');

const oneGame = fetch("http://localhost:8080/api/games"+gameId); //For: /api/games/#

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
