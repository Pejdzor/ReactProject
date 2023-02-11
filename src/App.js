import HomeComponent from "./components/Home";
import PageNotFoundComponent from "./components/PageNotFound";
import './styles/styleapp.css'
import {Routes,Route,useNavigate} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
     <div id="navbar">
       <div id="logo"></div>
       <div id="navigate"></div>
     </div>
     <Routes>
         <Route path="/" element={<HomeComponent />} />
         <Route path="*" element={<PageNotFoundComponent />} />
     </Routes>
    </div>
  );
}

export default App;
