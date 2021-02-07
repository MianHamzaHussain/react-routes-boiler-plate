import Header from "../components/header";
import Home from "../components/Home";
import Users from "../components/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
    </Router>
  );
};
export default Routes;
