// App.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Banglow from './Banglow/Banglow';
import Cabin from './Cabin/Cabin';
import Apartment from './Apartment/Apartment';
import Villas from './Villas/Villas';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Add your authentication logic here
    console.log('Logging in with:', email, password);
    setIsLoggedIn(true);
  };

  const handleSignup = (email, password) => {
    // Add your signup logic here
    console.log('Signing up with:', email, password);
    setIsLoggedIn(true);
  };
  return (
    <>
    <div>
      {isLoggedIn ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Signup handleSignup={handleSignup} />
        </div>
      )}
    </div>
    <Navbar/>
    <Home/>
    <Login/>
    <Signup/>
    <Apartment/>
    <Banglow/>
    <Cabin/>
    <Villas/>
    </>
  );
};

export default App;