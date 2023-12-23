import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Chat from "./Chat";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, selectuser, logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // The user logout
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
