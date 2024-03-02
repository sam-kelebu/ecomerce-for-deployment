import Cart from "../Componenent/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Gotocart = () => {
  return function App() {
    return (
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  };
};

export default Gotocart;
