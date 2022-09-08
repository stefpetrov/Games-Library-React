import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/games?sortBy=_createdOn%20desc`);


export const getLatest = () => {


    return request.get(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`);
};



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


// export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

// export const getOne = (petId, signal) => {
//     return fetch(`${baseUrl}/pets/${petId}`, { signal })
//         .then(res => res.json())
// };

// export const destroy = (petId, token) => {
//     return fetch(`${baseUrl}/pets/${petId}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     }).then(res => res.json());
// };

// export const like = (petId, pet, token) => {
//     return fetch(`${baseUrl}/pets/${petId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(pet)
//     }).then(res => res.json());
// };