import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./Compounets/Login";
import Sample from "./Compounets/Sample";
import Dashbord from "./Dashboard/Dashbord";
// import Dashbord from "./Dashboard/Dashbord";


function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route  path="/" element={ <Login/> }/>
       <Route  path="/dashboard" element={ <Dashbord/> }/>
     </Routes>
   </Router>
   
  </>

  
  
  );
}

export default App;