import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import Navbar from "./components/NavBar/NavBar";

//<Navbar molly={'smells'}/>


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <h1>Hello World!</h1>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>
        );
    }
}

export default App;
