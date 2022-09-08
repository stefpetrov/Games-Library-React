import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"
import * as gameService from "../services/gameService"

const CreateGame = () => {
    const navigate = useNavigate()
    const {user} = useAuthContext()

    
    const onGameCreate = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

       let {title,category,maxLevel,imageUrl,summary} = Object.fromEntries(formData)

       gameService.create({
        title,
        category,
        maxLevel,
        imageUrl,
        summary
       },user.accessToken)
            .then(result => {
                navigate('/home')
            })

    }



    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onGameCreate}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                </div>
            </form>
        </section>
    )
}

export default CreateGame