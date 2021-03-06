import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import SignIn from "./components/page/SignIn";
import SignUp from "./components/page/SignUp";
import SignOut from "./components/page/SignOut";
import Main from "./components/page/Main";
import Info from "./components/page/Info";
import Find from "./components/page/Find";
import Inquirie from "./components/page/Inquirie";
function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Main} path={["/main", "/"]} exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignOut} path="/signout" />
        <Route component={SignUp} path="/signup" />
        <Route component={Info} path="/info" />
        <Route component={Find} path="/find" />
        <Route component={Inquirie} path="/inquirie" />
      </Router>
    </div>
  );
}

export default App;
