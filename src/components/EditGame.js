import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import useGameState from "../hooks/useGameState"
import * as gameService from "../services/gameService"
import Error from "./Errors/Error"
import Loader from "./Loader/Loader"

const EditGame = () => {

    const { gameId } = useParams()
    const [game, setGame] = useGameState(gameId)
    const [err, setErr] = useState({ isError: false, message: '' })

    const navigate = useNavigate()

    const onEditSubmitHandler = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const title = formData.get('title')
        const category = formData.get('category')
        const maxLevel = formData.get('maxLevel')
        const imageUrl = formData.get('imageUrl')
        const summary = formData.get('summary')

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {

            return setErr({ isError: true, message: 'All fields are required!' })


        }

        const gameData = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }

        gameService.update(gameId, gameData)
        navigate('/home')

    }

    return (
        err.isError
            ? <Error message={err.message} setErr={setErr} />
            : !game.title 
            ?  <Loader/>
            : <section id="edit-page" className="auth">
                <form id="edit" onSubmit={onEditSubmitHandler}>
                    <div className="container">
                    
                        <h1>Edit Game</h1>
                        <label htmlFor="leg-title">Game title:</label>
                        <input type="text" id="title" name="title" defaultValue={game.title} />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" defaultValue={game.category} />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                        <input className="btn submit" type="submit" defaultValue="Edit Game" />

                    </div>
                </form>
            </section>
    )
}

export default EditGame