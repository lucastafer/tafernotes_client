import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/index";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";
import PrivateOutlet from "./components/private_router";

const RoutesFunction = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/notes" element={<PrivateOutlet><NotesScreen/></PrivateOutlet>}/>
      <Route path="/users/edit" element={<PrivateOutlet><UserEditScreen/></PrivateOutlet>}/>
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      
    </Routes>
  </BrowserRouter>
);

export default RoutesFunction;
