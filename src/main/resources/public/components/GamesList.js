
class GamesList extends React.Component{

    constructor(props) {
        super(props);

        this.state= {
            games: [],
            // initialize empty list
            loadingText:"Loading games"
        };
    }

    componentDidMount() {
        function refreshGames() {
// Component is mounted, now I can call an API to get data
            axios.get("/api/games")
            // or do inline (for const gamesPromise)
                .then(response => {

                    const games = response.data;

                    //this.state.games = games;
                    this.setState({
                        games: games,
                        loadingText: ""
                    })
                });
        }

        refreshGames();
    };

    addGame() {
        console.log("Adding a name");

        axios.post("/api/games").then(response => {
            //Do something after the game is created
            console.log("Game added");

            this.refreshGames();
        });
    }

    render(){
        return (
            <div>
                <Title text={this.props.title} />
                <p>{this.state.loadingText}</p>
                <p><button onClick={() =>this.addGame()}>Add Game</button></p>
                <ul>
                    {this.state.games.map(game => (
                        <li key={game.id}><a href={"/games/"+game.id}>Game {game.id}</a> is {game.state}</li>
                     ))}
                </ul>
            </div>
        );
    }
}