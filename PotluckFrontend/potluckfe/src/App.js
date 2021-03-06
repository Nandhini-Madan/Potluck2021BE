import Home from "./components/Home";
import Signup from './containers/Signup'
import Login from './containers/Login'
import Aboutus  from './components/Aboutus'
import Contact  from './components/Contact'
import Footer  from './components/Footer'
import Content from "./components/Dashbord/Content";
import PrivateRoute from './containers/PrivateRoute';
import CreateEvent from "./components/Dashbord/CreateEvent";
import SignUpRedirect from './containers/SignUpRedirect'
import { Link, Route, Switch } from 'react-router-dom'  
import Upcomingevent from "./components/Dashbord/Upcomingevent";
// import {useDispatch} from 'react-redux'


import './App.css';

function App() {
  // const dispatch= useDispatch();
  return (
    <div className="App">
    <nav>
          <h1 className="header">Potluck.</h1>
          <div className="nav-links">
           <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link> 
          </div>
    </nav>


      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/about" component={Aboutus} />
         <Route path="/signup" component={Signup}/>
         <Route path="/redirect" component={SignUpRedirect}/>
        <Route path="/contact" component={Contact} /> 
        
        <Route exact path="/" component={Home} />
        
      </Switch>
      <PrivateRoute path='/upcoming'component={Upcomingevent}/>
      <PrivateRoute path='/dashboard'component={Content}/>
       <PrivateRoute path='/newevent'component={CreateEvent}/>
      
       
<p></p>
      <Footer/>
    </div>
  );
}

export default App;
