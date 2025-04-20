import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


const Navbar = ({ me }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post("/logout",);
            alert("Logged out!");
            navigate("/login");

        } catch (error) {
            console.error("Error during logout:", error);
            alert(error?.response?.data || "Error logging out!!");
        }
    };





    return (
        <nav>
            <Link to="/" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>Home</Link> |
            {!me && (
                <>
                    <Link to="/login" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>Login</Link> |
                </>
            )}
            {!me && (
                <>
                    <Link to="/signup" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>Signup</Link> |
                </>
            )}
            {me && <button onClick={handleLogout} style={{ background: "none", border: "none", color: "blue", cursor: "pointer", fontSize: "20px" }}>
                Logout
            </button>}
        </nav>
    );
};

export default Navbar;
