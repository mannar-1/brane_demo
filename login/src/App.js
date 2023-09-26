import logo from './logo.svg';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import KnowledgeHubPage from './components/KnowledgeHubpage';
import { useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
   //to prevent forbiden acesses
   const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  

  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route
            path="/home"
            element={user ? <KnowledgeHubPage /> : <Navigate to="/login" replace />}
          />
      <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
