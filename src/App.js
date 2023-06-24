import React, { createContext, useState } from 'react';
import './index.css';
import LandingPage from './LandingPage/LandingPage';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Registration from './Registration/Registration';
import AfterReg from './AfterReg/AfterReg';
import AdminPanel from './AdminPanel/AdminPanel';
import LoginPage from './AdminPanel/Authentication';

export const UserContext = createContext();

function App() {
  const [Loggedin, setLoggedin] = useState([]);
  const [LoggedinAdmin, setLoggedinAdmin] = useState([]);

  console.log(Loggedin)
  return (
    <UserContext.Provider
        value={[
          Loggedin,
          setLoggedin,
          LoggedinAdmin, setLoggedinAdmin]}>
                <Router>
      <Routes>
        <Route exact path='/' element={< LandingPage />}></Route>
<Route exact path='/registration' element={< Registration />}></Route>
<Route exact path='/afterreg' element={< AfterReg />}></Route>

<Route exact path='/AdminPanel' element={< AdminPanel />}></Route>
<Route exact path='/Login' element={< LoginPage />}></Route>

</Routes></Router>
</UserContext.Provider>
  )

}

export default App;