import { useReducer } from "react";

function reducer(state, action) {
    console.log(state, action, "state action")
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}


function UseReducer() {

    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState);

    function IncrementCounter() {
        dispatch({ type: "INCREMENT" })
    }

    function DecrementCounter() {
        dispatch({ type: 'DECREMENT' })
    }

    function ResetCounter() {
        dispatch({ type: "RESET" })
    }

    return (
        <div>
            <h1>UseReducer</h1>
            <h1>Counter  : {state.count}</h1>
            <button onClick={IncrementCounter}>+</button>
            <button onClick={DecrementCounter}>-</button>
            <button onClick={ResetCounter}>Reset</button>
        </div>
    )
}

export default UseReducer;