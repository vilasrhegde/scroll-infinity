import './App.css';
import React,{useState,useEffect} from 'react';
import Tags from './components/Tags';
import Infy from './components/Infy';
function App() {

 

  return (
<>
    <Tags />
    <div className="scroll">
    <Infy />
    </div>
</>
    
    
  );
}

export default App;
