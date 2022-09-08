
import GameCard from "./GameCard"

const GameList = ({
    games
}) => {


    return(
        <>
        {games.length > 0
        ? games.map(x => <GameCard key={x._id} game={x}/>)
        : <h3 className="no-articles">Loading</h3>}

        {/* {games.length == 0
        && <h3 className="no-articles">No articles yet</h3>} */}
        
        </>
    )

}

export default GameList