import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import About from "./components/About";
import Footer from "./components/Footer";
import Register from "./components/Auth/Signup";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./components/Auth/Login";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <main>
        <RecipeContainer />
        <About />
      </main>
      <Footer /> */}
   <BrowserRouter>
   
   
   <Routes>
     <Route path='/Signup' element={<Register/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/' element={<RecipeContainer/>}></Route>
   </Routes>
  </BrowserRouter>      
    </div>
  );
}

export default App;
