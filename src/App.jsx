import { Switch } from "react-router-dom";
import './App.scss'

/* Routes */
import Private from "./routes/Private";
import Public from "./routes/Public";

/* Page */
import Home from './page/Home/Home'
import Profile from './page/Profile/Profile'
import SignUp from './page/Sign_up/Sign_up'
import Login from "./page/Login/Login";

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Private path='/' component={Home} exact />
        <Private path='/profile' component={Profile} />
        <Public path='/login' component={Login} />
        <Public path='/sign-up' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
