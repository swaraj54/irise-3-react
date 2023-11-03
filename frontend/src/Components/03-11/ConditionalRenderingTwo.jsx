import { useState } from "react";

function ConditionalRenderingTwo() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    // && -> if condition is true then only it'll display
    return (
        <div>
            {isUserLoggedIn && <h1>User is logged in.</h1>}
        </div>
    )
}

export default ConditionalRenderingTwo;