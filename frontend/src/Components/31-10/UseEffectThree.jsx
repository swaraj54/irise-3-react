import { useEffect, useState } from "react";

function UseEffectThree() {
    const [irise, setIrise] = useState("hii")
    console.log(irise) // hii
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);
    function IncrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }
    function IncremnetCounter2() {
        setCounter2((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        console.log("It'll execute the code on first time of render and whenever passed state changes.")
    }, [counter])

    //  it'll execute the code on first time of render on browser and whenever passed state changes

    useEffect(() => {
        console.log("effect for counter 2")
    }, [counter2])
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={IncrementCounter}>+</button>
            <h1>Counter 2 : {counter2} </h1>
            <button onClick={IncremnetCounter2}>+</button>
        </div>
    )
}

export default UseEffectThree;