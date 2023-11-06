import { useState } from "react";
import './Register.css';

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    console.log(userData, "userData state")

    function handleChange(event) {
        // console.log(event.target.value, "- value", event.target.name, "- name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function Submit() {
        alert("Form Submitted.")
    }
    return (
        <div>
            <h1>Register</h1>
            <form id='myForm' onSubmit={Submit}>
                <label className="label">Name </label><br />
                <input className="input" type="text" required onChange={handleChange} name='name' /><br />
                <label className="label">Email</label><br />
                <input className="input" type="email" required onChange={handleChange} name='email' /><br />
                <label className="label">Password</label><br />
                <input className="input" type="password" required onChange={handleChange} name='password' /><br />
                <input className="submit" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;