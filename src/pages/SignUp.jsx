import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await api.post("/signup", { username, password });
            alert("Signed up! Now login.");
            navigate("/login");
        } catch (err) {
            console.log("Error creating signup", err);
            alert(err?.response?.data || "Error creating signup!!");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
            <input value={password} type="password" onChange={e => setPassword(e.target.value)} required placeholder="Password" />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
