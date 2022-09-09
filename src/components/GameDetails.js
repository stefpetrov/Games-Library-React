import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"
import * as gameService from "../services/gameService"


const GameDetails = () => {

    const { gameId } = useParams()
    const [game, setGame] = useState({})
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const isOwner = Boolean(user._id == game._ownerId)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(res => setGame(res))

    }, [])

    //  Delete functionality

    const onDeleteSubmitHandler = (event) => {

        event.preventDefault()

        gameService.deleteGame(gameId, user.accessToken)
            .then(result => {
                navigate('/home')
            })


    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div> */}
                {isOwner
                    && (
                        <div className="buttons">
                            <Link to={`/edit/${game._id}`} className="button">Edit</Link>
                            <Link to="#" className="button" onClick={onDeleteSubmitHandler} >Delete</Link>
                        </div>
                    )}
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article> */}

        </section>
    )
}

export default GameDetails