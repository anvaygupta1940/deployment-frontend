import React, { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const instance = process.env.REACT_APP_NAME || "Unknown Instance";

  const loadUsers = async () => {
    console.log("inside the load users func in the frontend");
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getUsers`, {
      method: "GET",
      credentials: "include",  //enable cookies
    });

    const data = await res.json();
    setUsers(data?.users);
    console.log(" load  users function ended ...");
  }

  const addUser = async () => {
    console.log("inside add user func in the frontend");
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/addUser`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name }),
      credentials: "include"
    });
    console.log("user added successfully , now time to load users ");
    loadUsers();
  }



  return (
    <div>
      <h1>{instance}</h1>
      <h3>Add new user</h3>
      <input type='text' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={addUser}>Add New User</button>

      <h3>All Users are  : - </h3>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;