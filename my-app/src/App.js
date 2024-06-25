import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Login from "./components/Login";
// import Login from './components/Login';

// import Car from './components/Car';
// import PlusMinus from './components/PlusMinus';
// import Form from './components/Form';

function App() {
  // const currentDate = new Date().toLocaleDateString();
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
</div>


    //   {/* <div><Form/></div>
    // <div>
    //   <PlusMinus/>
    // </div>
    // <Car color="Red" price="5Lac" />
    // <Car color="Blue" />
    //   <h1>Anjali Rathi</h1>
    //   <h2>{currentDate}</h2>
    //   <h3>{"Gautam Budha University".toUpperCase()}</h3> */}
  );
}

export default App;
