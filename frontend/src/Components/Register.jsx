import { useNavigate } from "react-router-dom";

function Register() {
    const router = useNavigate();

    function gotoLogin() {
        router('/login')
    }

    return (
        <div>
            <h1>Regsiter</h1>
            <button onClick={gotoLogin}>Login ?</button>
        </div>
    )
}
export default Register;