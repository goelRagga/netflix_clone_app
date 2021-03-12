import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import db, { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';
import ProfileScreen from "./screens/ProfileScreen";



function App() {


 const user=useSelector(selectUser);
 const dispatch = useDispatch();

 

  useEffect(()=> {

    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout);
      }
    })
    return unsubscribe;

  },[]);
 
console.log(user, "newuser");


  return (
    <div className='App'>
     <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;