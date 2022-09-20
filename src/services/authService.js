const baseUrl = 'https://softuni-practice-api.herokuapp.com';

export const login = async (email, password) => {

    let res = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json()

    if (res.ok) {
        return jsonResult
    } else {
        throw jsonResult.message
    }
}

export const register = async (email, password) => {


    try {
        let response = await fetch(`${baseUrl}/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        let jsonResult = await response.json()

        if (response.ok) {
            return jsonResult
        } else {
            throw jsonResult.message
        }

    } catch (error) {

        throw error

    }

};

export const logout = (token) => {

    try {
        return fetch(`${baseUrl}/users/logout`, {
            headers: {
                "X-Authorization": token
            }
        })

    } catch (error) {
        alert(error.message)
    }
}
