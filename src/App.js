import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import api from "./api";

function App() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    console.log("inside the use effect in the frontend");
    api.get("/me")
      .then(res => {
        console.log("res>>", res);
        setMe(res.data)
      })
      .catch(() => {
        // alert("Not logged in");
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar me={me} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
