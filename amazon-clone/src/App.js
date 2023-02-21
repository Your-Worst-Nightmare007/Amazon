import React, { useEffect } from 'react';
import Header from './header.jsx';
import './App.css';
import Home from './home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './checkout.jsx';
import Login from './login';
// import { auth } from './firebase';
// import { useStateValue } from './stateProvider.jsx';

function App() {
    // const [{ }, dispatch] = useStateValue();
    // useEffect(() => {
    //     auth.onAuthStateChanged(authUser => {
    //         console.log(authUser);
    //         if (authUser) {
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: authUser
    //             })
    //         }
    //         else {
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: null
    //             })
    //         }
    //     })
    // }, [])
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;