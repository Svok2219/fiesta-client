import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [LoggedinAdmin,setLoggedinAdmin]=useContext(UserContext)

  const handleLogin = () => {
    // Check if the user ID and password match the expected values
    if (userId === 'shuvokoiri0@gmail.com' ) {
      // Successful login, navigate to the admin panel
      setLoggedinAdmin('shuvokoiri0@gmail.com')
      navigate('/adminpanel');
    } else {
      // Invalid user ID or password, show an error message
      setErrorMessage('Invalid user ID or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-64">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="userId" className="block font-medium mb-1">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-indigo-500 text-white rounded-md px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
