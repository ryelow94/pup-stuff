import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import  { Product }  from "./pages/Product";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { Cart } from "./pages/Cart";
import { Success} from "./pages/Success"
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
     <Router>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/products/:category">
           <ProductList />
         </Route>
         <Route exact path="/product/:id">
           <Product />
         </Route>
         <Route exact path="/cart">
           <Cart />
         </Route>
         < Route exact path = "/success">
           <Success />
         </Route>
         <Route exact path="/login">
           {user ? <Redirect to="/"/>:<LogIn/>}
         </Route>
         <Route exact path="/signup">
         {user ? <Redirect to="/"/>:<SignUp/>}
         </Route>
       </Switch>
     </Router>
  );
};

export default App;
