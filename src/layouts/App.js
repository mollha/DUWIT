import React from 'react';
import { NavBar, Footer } from '../components';
import { Home, Exec, Blog } from '../layouts';
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
                    <Route exact path="/Blog">
                        <Blog />
                    </Route>
                </Switch>
            </div>
            <button type="button" className="btn btn-primary">Primary</button>
            <Footer/>
        </div>
    )
}

export default App;
