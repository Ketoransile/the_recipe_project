import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RecipeContainer />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
