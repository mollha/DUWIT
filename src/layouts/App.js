import React from 'react';
import { NavBar, Footer } from '../components';
import { 
    Home, 
    Exec, 
    Blog, 
    BlogPost, 
    Calendar
} from '../layouts';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render = () => (
        <div>
            <NavBar/>
            <div className="container py-5">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/exec">
                        <Exec />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/blog/:id">
                        <BlogPost />
                    </Route>
                    <Route exact path="/calendar">
                        <Calendar />
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
