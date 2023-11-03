import { useState } from "react";

function ConditionalRendering() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    console.log(isUserLoggedIn, "isUserLoggedIn")

    function Login() {
        setIsUserLoggedIn((prevValue) => !prevValue)
    }

    const [myAge, setMyAge] = useState(10)

    return (
        <div>
            {isUserLoggedIn ? <button onClick={Login}>Logout?</button> : <button onClick={Login}>Login?</button>}
            {/* {myAge > 19 ? <h1>User age is more than 19</h1> : <h1>User age is less or equla than 19.</h1>} */}
        </div>
    )
}

export default ConditionalRendering;