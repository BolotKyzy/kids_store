import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className={"wrapper"}>
          <Header/>
          <div className={"content"}>
              <Routes>
                  <Route path="/" element = {<Home/>}/>
                  <Route path="/cart" element = {<Cart/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>

   );
}

export default App;
