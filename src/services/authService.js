const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {

    let res = await fetch(`${baseUrl}/users/login`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email, password})
    })

    let jsonResult = await res.json()

    if(res.ok){
        return jsonResult
    } else{
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
    
        if(response.ok){
            return jsonResult
        }else{
            throw jsonResult.message
        }


        
    } catch (error) {
        return alert(error)
        
    }
  
};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`,{
        headers: {
            "X-Authorization":token
        }
    })
}



// export const getUser = () => {
//     let username = sessionStorage.getItem('username');

//     return username;
// };

// export const isAuthenticated = () => {
//     return Boolean(getUser())
// };