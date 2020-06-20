import React from 'react';
import { NavBar, Footer, Card } from '../components';
import { Home, Exec, Blog } from '../layouts';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render = () => (
        <div>
            <NavBar/>
            <div className="container py-4">
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
            <Footer/>
        </div>
    )
}

export default App;
