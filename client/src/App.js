import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import  { Product }  from "./pages/Product";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { Cart } from "./pages/Cart";


const App = () => {
  return (
    <div> 
      <LogIn/>
      <SignUp/>
    </div>
   
  );
};

export default App;
