import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import PasswordRecovery from "./pages/PasswordRecovery";
import Test from "./pages/Test";
import NewPassword from "./pages/NewPassword";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} render={() => <Login />}/>
        <Route exact path={'/registration'} render={() => <Registration />}/>
        <Route exact path={'/profile'} render={() => <Profile />}/>
        <Route exact path={'/passwordRecovery'} render={() => <PasswordRecovery />}/>
        <Route exact path={'/test'} render={() => <Test />}/>
        <Route exact path={'/newPassword'} render={() => <NewPassword />}/>


        <Route path={ '/404' } render={ () => <h1 style={{fontSize: '50px', textAlign: 'center'}}>404: PAGE NOT FOUND</h1> }/>
        <Redirect from={'*'} to={'/404'}/>
      </Switch>

    </div>
  );
}

export default App;
