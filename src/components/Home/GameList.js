
import GameCard from "./GameCard"

const GameList = ({
    games
}) => {


    return(
        <>
        {games.length > 0
        ? games.map(x => <GameCard key={x._id} game={x}/>)
        : <p className="no-articles">Loading</p>}

        {/* {games.length == 0 
        && <p className="no-articles">No articles yet!</p>} */}
        </>
        
    )

}

export default GameList