import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await api.post("/login", { username, password });
            alert("Logged in!");
            navigate("/");
        } catch (err) {
            console.log(err);
            alert(err?.response?.data || "Invalid credentials for login!!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input value={username} required onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input value={password} required type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
