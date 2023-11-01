import { useEffect, useState } from "react";

function UseEffectTwo() {
    const [counter, setCounter] = useState(0);
    function IncrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }
    useEffect(() => {
        console.log("Hi from type 2")
    }, [])

    // it'll execute the code only on first time of render on browser.

    return (
        <div>
            <h1>counter : {counter}</h1>
            <button onClick={IncrementCounter}>+</button>
        </div>
    )
}

export default UseEffectTwo;