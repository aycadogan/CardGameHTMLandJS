const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');

const oneGame = fetch("http://localhost:8080/api/games"+gameId); //For: /api/games/1

oneGame
.then(x => x.json())
.then(function(oneGame){

});
