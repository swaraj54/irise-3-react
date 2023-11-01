import { useState, useEffect } from "react";

function UseEffectFour() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(10);

    function ChnageCounter1() {
        setCounter1((prevValue) => prevValue + 1)
    }
    function ChnageCounter2() {
        setCounter2((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        console.log("Commeing while rendering on first and also wehne counter 1 , 2 chnages...")
     }, [counter1, counter2])

    return (
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={ChnageCounter1}>+ for counter 1</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={ChnageCounter2}>+ for counter 2</button>
        </div>
    )
}

export default UseEffectFour;