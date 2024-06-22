import React from "react";
// import "./App.css";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import About from "./components/About";
import Footer from "./components/Footer";
import Register from "./components/Auth/Signup";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Ac from "./Ac";

function App() {
  return (
    // <div>
<div >
   <BrowserRouter>

   
   <Routes>
     <Route path='/' element={<Register/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/Ac' element={<Ac/>}></Route>

   </Routes>
  </BrowserRouter>
  {/* <div className="App"> 

<Header />
    <main>
      <RecipeContainer />
      <About />
    </main>
    <Footer />    
</div> */}




         
    </div>
  );
}

export default App;
