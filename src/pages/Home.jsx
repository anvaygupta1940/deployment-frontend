import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [me, setMe] = useState(null);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        console.log("inside the use effect in the frontend");
        api.get("/me")
            .then(res => setMe(res.data))
            .catch(() => {
                alert("Not logged in");
                navigate("/login");
            });
    }, []);

    const fetchUsers = async () => {

        try {
            console.log("inside the load users func in the frontend");
            const res = await api.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`);

            const data = await res?.data?.users || [];
            console.log("data from the backend", data);
            setUsers(data);
            console.log(" load  users function ended ...");
        } catch (err) {
            console.log("error in fetching users", err);
            alert(err?.response?.data || "Error fetching users");
        }
    };

    const addUser = async () => {
        try {
            console.log("inside add user func in the frontend");
            await api.post(`${process.env.REACT_APP_BACKEND_URL}/addUser`, { name });
            alert("User added successfully");
            setName("");    
            console.log("user added successfully , now time to load users ");
            fetchUsers();
        } catch (err) { 
            console.log("error in adding user", err);
            alert(err?.response?.data || "Error adding user");
        }
    }

    return (
        <div>
            <h1>{process.env.REACT_APP_NAME}</h1>
            <h2>Welcome {me?.username}</h2>

            <div>
                <h3>Add User</h3>
                <input type='text' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <button onClick={addUser}>Add</button>
            </div>

            <div>
                <h3>All Users</h3>
                <ul>
                    {users?.map((u, i) => (
                        <li key={i}>{u.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
