import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { login, register } from "../api";

const AccountForm = ({ setToken }) => {
    const { action } = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        const authFunction = action === "login" ? login : register;
        e.preventDefault();
        const { token } = await authFunction(username, password);
        setToken(token);
        navigate("/");
    }

    const title = action === "login" ? "Log in" : "Sign up"; 
    return (
        <>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="form-label">Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)} name="username" type="text" className="form-control" />
                <label htmlFor="password" className="form-label">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" className="form-control" />
                <button type="submit" className="btn btn-primary mt-4">{title}</button>
            </form>
        </>
    )
}

export default AccountForm