import { useState } from "react";

function ConditionalRenderingThree() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // || -> if condition is wrong/false then it'll display

    return (
        <div>
            {isUserLoggedIn || <h1>Hello.</h1>}
        </div>
    )
}

export default ConditionalRenderingThree;