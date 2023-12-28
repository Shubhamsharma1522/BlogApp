import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  //conditional rendering by using loading
  const [loading, setLoading] = useState(true);
  // dispatch used in combination when use redux with react
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      //whatever happens it's always run no need to use catch
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen  flex flex-wrap  content-between bg-orange-100">
      <div className="w-full block">
        <Header />
        <main className="p-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
