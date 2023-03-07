import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import Feed from "./pages/Feed"
import Home from "./pages/Home"
import Error404 from "./components/Error404";
import AddVechile from "./pages/AddVechile";
import WantRide from "./pages/WantRide"
import Vechiles from "./components/Vechiles";
import Settings from "./pages/Settings";
import Register from "./components/Register";
import Signin from "./pages/Signin";
import {useEffect} from "react"
import {useState} from "react"
import GetDetails from "./components/GetDetails";
// import '../src/index.css'

function App() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    
    const userLogin = window.localStorage.getItem("isLogin")
    setUser(JSON.parse(userLogin))  
    
  },[]) 
    
  // const navigate = useNavigate()
  window.onload = function() {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/feed" element={<Feed/>} />
        {user === "true"? <Route path="/addvechile" element={<AddVechile/>} /> : null }
        {user === "true" ? <Route path="/search"  element={<WantRide/>} /> : null}
        {user === "true" ? <Route path="/search/details/:id" element={<GetDetails/>} /> : null}
        {user === "true" ? <Route path="/settings" element={<Settings/>} /> : null}
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signin/register" element={<Register/>} />
        
        <Route path="*" element = {<Error404/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
