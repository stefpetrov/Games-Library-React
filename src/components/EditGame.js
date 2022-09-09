import { useNavigate, useParams } from "react-router-dom"
import useGameState from "../hooks/useGameState"
import * as gameService from "../services/gameService"

const EditGame = () => {

    const {gameId} = useParams()
    const [game, setGame] = useGameState(gameId)
    const navigate = useNavigate()


    const onEditSubmitHandler = (event) => {

        const formData = new FormData(event.currentTarget)
        const gameData = Object.fromEntries(formData)

        gameService.update(gameId,gameData)

        navigate('/home')

    }


    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onEditSubmitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl}  />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />

                </div>
            </form>
        </section>
    )
}

export default EditGame