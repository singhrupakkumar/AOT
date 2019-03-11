import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Pages/Home';
import TermConditions from './Pages/TermConditions';
import Login from './Users/Login';
import SignUp from './Users/SignUp';
import UserNavigation from './Users/UserNavigation';
import Profile from './Users/Profile';
import Forgot from './Users/Forgot';
import ResetPassword from './Users/ResetPassword';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" hideNavBar={true} initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" hideNavBar={false} />
         <Scene key = "signup" component = {SignUp} title = "Register" hideNavBar={false} /> 
         <Scene key = "termconditions" component = {TermConditions} title = "Terms and Conditions" hideNavBar={false} />
         <Scene key = "usernavigation" component = {UserNavigation} title = "Profile" hideNavBar={true} />
         <Scene key = "profile" component = {Profile} title = "Profile" hideNavBar={false} />
         <Scene key = "forgot" component = {Forgot}  title = "Forgot Password" hideNavBar={false} />
         <Scene key = "resetpassword" component = {ResetPassword} title = "Reset Password" hideNavBar={false} />
      </Scene>
   </Router> 
)
export default Routes