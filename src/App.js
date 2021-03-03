import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import SignIn from "./components/page/SignIn";
import SignUp from "./components/page/SignUp";
import SignOut from "./components/page/SignOut";
import Main from "./components/page/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Main} path={["/main", "/"]} exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignOut} path="/signout" />
        <Route component={SignUp} path="/signup" />
      </Router>
    </div>
  );
}

export default App;
