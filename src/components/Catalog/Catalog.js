import { useEffect, useState } from "react"

import GameList from "./GameList"
import * as gameService from "../../services/gameService"

const Catalog = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))
            .catch(err => console.log(err))

    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <section>
                <GameList games={games} />
            </section>
        </section>

    )
}

export default Catalog