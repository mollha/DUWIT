import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from '../layouts/Home';
import Exec from '../layouts/Exec';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render = () => (
        <div>
            <NavBar/>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Exec">
                        <Exec />
                    </Route>
                </Switch>
            </div>
            <button type="button" className="btn btn-primary">Primary</button>
            <Footer/>
        </div>
    )
}

export default App;
