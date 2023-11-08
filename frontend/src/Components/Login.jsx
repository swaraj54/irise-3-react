import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const router = useNavigate();
    // console.log(loginData, "loginData")

    function handleChange(event) {
        // console.log(event.target.value, event.target.name)
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    async function Login(event) {
        event.preventDefault();
        if (loginData.email && loginData.password) {
            if (loginData.password.length > 7) {
                try {
                    // const response = await axios.post('http://localhost:8000/login', { loginData })
                    const response = { data: { success: true, message: "Login successfull." } }
                    if (response.data.success) {
                        alert(response.data.message)
                        setLoginData({ email: "", password: "" })
                        router('/')
                    }
                } catch (error) {
                    alert(error.response.data.message)
                }
            } else {
                alert("Password length must be more than 7 digit.")
            }
        } else {
            alert("All fields are mandatory.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={Login}>
                <label>Email </label><br />
                <input type="email" onChange={handleChange} name='email' value={loginData.email} /><br />
                <label>Password</label><br />
                <input type="password" onChange={handleChange} name='password' value={loginData.password} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;