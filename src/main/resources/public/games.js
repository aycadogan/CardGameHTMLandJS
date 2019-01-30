const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');
console.log("gameId=" + gameId);

const gamesDataPromise = fetch("http://localhost:8080/api/games");

gamesDataPromise
    .then(x => x.json()) //converts the response to JSON
    .then(function(games){ // what is just converted to json for data
        //This func.will be called when the data comes
        console.log(games);

        //At this point, games contains the data that the end-point sends (the list of games)
        for(let game of games) {
         //   console.log(`${game.id} -> ${game.state}`);
            let game=document.getElementById("p");
        }
    });

