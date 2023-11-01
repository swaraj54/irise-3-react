import { useEffect, useState } from "react";

function UseEffect() {

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        console.log("Hii from use effect hook")
    })

    // it'll execute the code on first time of render on browser and whenever any state changes

    // const myFunction = () => {}

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}


export default UseEffect;