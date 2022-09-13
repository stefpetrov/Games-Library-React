
import Loader from "../Loader/Loader"
import GameCard from "./GameCard"

const GameList = ({
    games
}) => {


    return(
        <>
        {games.length > 0
        ? games.map(x => <GameCard key={x._id} game={x}/>)
        : <Loader/>}

        {games.length == 0 
        && <p className="no-articles">No articles yet!</p>}
        </>
        
    )

}

export default GameList