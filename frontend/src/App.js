import HomeComponent from "./components/Home";
import PageNotFoundComponent from "./components/PageNotFound";
import LoginComponent from "./components/Login";
import './styles/styleapp.scss'
import {Routes,Route,useNavigate} from 'react-router-dom'
import RegisterComponent from "./components/Register";

const App = () => {
    const navigate = useNavigate();
  return (
    <div className="App">
     <div id="navbar">
       <div id="logo" onClick={()=>navigate("/")}></div>
       <div id="navigate">
           <div onClick={()=>{navigate("/login")}}><i className="fa-solid fa-right-to-bracket"></i> Log In </div>
           <div onClick={()=>{navigate("/register")}}><i className="fa-solid fa-user"></i> Sign Up </div>
       </div>
     </div>
     <div className="content">
         <Routes>
             <Route path="/login" element={<LoginComponent />}/>
             <Route path="/register" element={<RegisterComponent/>} />
             <Route path={"/home"} element={<HomeComponent />} />
             <Route path={"/"} element={<HomeComponent />} />
             <Route path="*" element={<PageNotFoundComponent />} />
         </Routes>
     </div>

    </div>
  );
}

export default App;
