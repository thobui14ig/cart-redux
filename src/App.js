import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Product from "./components/Products/Product/Product";
import Cart from "./components/Carts/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/carts">
            <Cart />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
