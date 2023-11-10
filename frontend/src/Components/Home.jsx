import { useContext } from 'react';
import './Styles/Home.css'
import { MyContext } from './10-11-Context/AuthContext';

function Home() {
    const { state, LOGOUT } = useContext(MyContext)
    console.log(state, "state")
    return (
        <div id='hi'>
            <h1>Home name  : {state?.user?.name}</h1>
            <button onClick={LOGOUT}>Logout</button>
        </div>
    )
}


export default Home;