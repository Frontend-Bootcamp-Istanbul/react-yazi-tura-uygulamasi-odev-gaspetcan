import React from 'react';
import "./App.css";
import FlipACoin from './FlipACoin';

class App extends  React.Component {
    render(){
        return (
            <div className="App">
            <FlipACoin/>
            </div>
        );
    }
}

export default App;
