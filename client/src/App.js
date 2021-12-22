import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// We import all the components we need in our app
import Create from "./components/create";
import Products from "./components/products";

const App = () => {
  return (
    <div>
      <Create />
      <Products />
    </div>
  );
};

export default App;
