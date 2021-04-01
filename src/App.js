import Feed from "./components/Feed";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import React from 'react'
import { useStateValue } from "./components/StateProvider";
import RightBar from './components/RightBar'


function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <>
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <RightBar />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
