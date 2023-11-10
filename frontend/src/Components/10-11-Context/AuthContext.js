import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const MyContext = createContext();

const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}

// HOC - Higher order component , children(props) - component
function AuthContext({ children }) {

    const initialState = { user: null }

    const [state, dispatch] = useReducer(Reducer, initialState);

    function LOGIN(userData) {
        dispatch({ type: "LOGIN", payload: userData })
    }

    function LOGOUT() {
        dispatch({ type: "LOGOUT" })
    }

    async function getUserContextData() {
        const token = localStorage.getItem("token")
        try {
            // const response = await axios.post('/get-context-data', token)
            const response = { data: { success: "true", user: { name: "Irise" } } }
            if (response.data.success) {
                LOGIN(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        // alert("Triggreed when user refreshed..")
        getUserContextData()
    }, [])

    return (
        <MyContext.Provider value={{ state, LOGIN, LOGOUT }} >
            {children}
        </MyContext.Provider>
    )
}

export default AuthContext;