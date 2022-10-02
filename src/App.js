import {
  BrowserRouter,  
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Login from "./components/user/Login.js";
import ForgotPassword  from"./components/user/ForgotPassword.js"
import Register from "./components/user/Register";
import NewPassword from "./components/user/NewPassword";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import Dashboard from './components/admin/Dashboard';
import CarsList from "./components/admin/CarsList";
import NewCar from "./components/admin/NewCar";
import UpdateCar from "./components/admin/UpdateCar";
import UsersList from "./components/admin/UsersList";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateUser from "./components/admin/UpdateUser";
import {loadUser} from "./components/actions/userActions"

import store from "./store";
function App() {


  return (
    <> 
      <BrowserRouter>
      <div className="App">
      <Header/>
      <div className="container container-fluid">
        <Route path='/' component={Home}  exact/> 
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
         
        <Route path="/password/forgot" component={ForgotPassword} exact />
        <Route path="/password/reset/:token" component={NewPassword} exact />
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        <ProtectedRoute path="/password/update" component={UpdatePassword} exact />


         
       </div>
        {/** Admin side */}
       <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <ProtectedRoute path="/admin/cars" isAdmin={true} component={CarsList} exact />
        <ProtectedRoute path="/admin/car" isAdmin={true} component={NewCar} exact />
        <ProtectedRoute path="/admin/car/:id" isAdmin={true} component={UpdateCar} exact />
        <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
        <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
     
      

        <Footer/>
        </div>
      </BrowserRouter>      
    </>
    
  )
}

export default App