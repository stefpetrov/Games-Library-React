import { useState } from "react"

const useSessionStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

        try {
            let item = sessionStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue

        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    const setItem = (value) => {

        try {
            sessionStorage.setItem(key, JSON.stringify(value))
            setState(value)
        } catch (error) {
            console.log(error)
        }
    }
    return [
        state,
        setItem
    ]
}

export default useSessionStorage