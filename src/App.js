import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SignupForm from "./component/SignupForm";
import LoginForm from "./component/LoginForm";
import Dashboard from "./component/Dashboard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSignup = (userData) => {
    const userId = uuidv4();

    const newUser = {
      userId,
      ...userData,
    };


    setUsers([...users, newUser]);


    setLoggedIn(true);
    setUserName(userData.fullName);
  };

  const handleLogin = (loginData) => {
    const user = users.find(
      (u) => u.userId === loginData.userId && u.password === loginData.password
    );

    if (user) {
      setLoggedIn(true);
      setUserName(user.fullName);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard userName={userName} />
      ) : (
        <div>
          <SignupForm onSignup={handleSignup} />
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
