import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { useAuthContext } from "../contexts/AuthContext"
import * as gameService from "../services/gameService"
import DeleteDialog from "./Common/DeleteDialog"
import Loader from "./Loader/Loader"


const GameDetails = () => {

    const { gameId } = useParams()
    const [game, setGame] = useState({})
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [handleDelete, setHandleDelete] = useState(false)

    const isOwner = Boolean(user._id == game._ownerId)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(res => setGame(res))

    }, [])

    //  Delete functionality

    const handleDeleteTrue = () => {

        gameService.deleteGame(gameId, user.accessToken)
            .then(result => {
                navigate('/home')
            })
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault()
        setHandleDelete(true)

    }

    const handleDeleteFalse = () => {
        setHandleDelete(false)
        navigate(`/details/${game._id}`)
    }

    return (

        <section id="game-details">

            {handleDelete
                ? < DeleteDialog handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse} game={game} />
                : <>
                    <h1>Game Details</h1>
                    {!game.hasOwnProperty("title")
                        ? <Loader />
                        : <div className="info-section" >

                            <div className="game-header">

                                <img className="game-img" src={game.imageUrl} />


                                <h1>{game.title}</h1>
                                <span className="levels">MaxLevel: {game.maxLevel}</span>
                                <p className="type">{game.category}</p>
                            </div>

                            <p className="text">
                                {game.summary}
                            </p>

                            {isOwner
                                && (
                                    <div className="buttons">
                                        <Link to={`/edit/${game._id}`} className="button">Edit</Link>
                                        <Link to="#" className="button" onClick={onDeleteClickHandler} >Delete</Link>
                                    </div>
                                )}

                        </div>}
                </>

            }

        </section>


    )
}

export default GameDetails