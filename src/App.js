import './App.css';
import LoginScreen from './component/LoginScreen';
import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate
 } from 'react-router-dom';
import Home from './component/Home';
import Alert from './component/Alert';
import Navbar from './component/Navbar'
import PlayerState from './context/PlayerState';
import playerContext from "./context/PlayerContext"
import BSLobby from './component/battleships/BSLobby';
import BSState from './component/battleships/context/BSState';
import { ToastContainer, Bounce } from 'react-toastify';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({message: message, type: type})
    setTimeout(() => {
      setAlert(null);
    },5000);
  }
  const player = useContext(playerContext)
  let playerState = player!=null ? player.state: null;
  //const location = useLocation();

  // Define the route(s) where the Navbar should be hidden
  const hideNavbarRoutes = ["/"];
  return (
    <>
      <Router>
        <Alert alert={alert}/>
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
        />

        <Navbar title="Team-Games"/>

        <Routes>
        
        <Route path="*" element={playerState==null || playerState.name==null || playerState.name == "" ? <LoginScreen/> : <Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/battleships" element={<BSState><BSLobby showAlert={showAlert}/></BSState>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
