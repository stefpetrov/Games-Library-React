import { Link } from "react-router-dom"

const GameCard = ({
    game
}) => {

    return (
        <div className="allGames">
            <div className="allGames-info">
                {console.log(game)}
                <img src={"/Games-Library-React" + game.imageUrl} />
                <h2>{game.title}</h2>
                <h6>{game.category}</h6>
                <Link to={`/details/${game._id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}

export default GameCard