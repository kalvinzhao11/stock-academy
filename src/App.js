import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Route from './routes/Route'

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route/>
        </div>
    );
}

export default App;
