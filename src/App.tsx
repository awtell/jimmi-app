import React from 'react';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import './index.css';
import RoomForm from './components/HomePage/Components/TableList/RoomForm';
function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <RoomForm onSubmit={data => console.log("Submitted")} /> */}
    </div>
  );
}

export default App;
