import * as request from './requester';

const baseUrl = 'https://softuni-practice-api.herokuapp.com/data';

export const getAll = () => request.get(`${baseUrl}/games?sortBy=_createdOn%20desc`);

export const getLatest = () => request.get(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`);

export const create = async (gameData, token) => {

    let response = await fetch(`${baseUrl}/games`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": token

        },
        body: JSON.stringify({ ...gameData, likes: [] })
    })

    let result = await response.json()

    return result

}


export const getOne = (gameId) => {
    return fetch(`${baseUrl}/games/${gameId}`)
        .then(res => res.json())
};

export const update = (gameId, gameData) => request.put(`${baseUrl}/games/${gameId}`, gameData);

export const deleteGame = (gameId, token) => {
    return fetch(`${baseUrl}/games/${gameId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json())

}
