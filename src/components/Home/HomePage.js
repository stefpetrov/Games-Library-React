import { useEffect, useState } from "react"

import GameList from "./GameList"
import * as gameService from "../../services/gameService"

const HomePage = () => {
    const [games, setGames] = useState([])

    useEffect(() => {

        gameService.getLatest()
            .then(data => setGames(data))

    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesLib</h3>
            </div>
            <img src="/images/four_slider_img01.PNG" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                <GameList games={games} />
            </div>
        </section>
    )
}

export default HomePage