import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10/UseState';
import UseEffect from './Components/31-10/UseEffect';
import UseEffectTwo from './Components/31-10/UseEffectTwo';
import UseEffectThree from './Components/31-10/UseEffectThree';
import GoogleSSOLogin from './Components/Test/test';
import UseEffectFour from './Components/01-11/UseEffectFour';
import PropDrilling from './Components/02-11/PropDrilling';
import { useState } from 'react';
import PropsDrillingTwo from './Components/02-11/PropsDrillingTwo';
import Mapping from './Components/02-11/Mapping';
import MappingTwo from './Components/02-11/MappingTwo';
import ConditionalRendering from './Components/03-11/ConditionalRendering';
import ConditionalRenderingTwo from './Components/03-11/ConditionalRenderingTwo';
import ConditionalRenderingThree from './Components/03-11/ConditionalRenderingThree';

function App() {

  const [students, setStudents] = useState(['A', "B", "C", "D", "E"])
  // console.log(students, "-students")
  const [counter, setCounter] = useState(10)

  function IncrementCounter() {
    setCounter((prevValue) => prevValue + 1)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/use-effect-2' element={<UseEffectTwo />} />
        <Route path='/use-effect-3' element={<UseEffectThree />} />
        <Route path='/use-effect-4' element={<UseEffectFour />} />
        <Route path='/props-drilling' element={<PropDrilling kuchbhi={students} myName="Swaraj" />} />
        <Route path='/props-drilling-2' element={<PropsDrillingTwo counter={counter} IncrementCounter={IncrementCounter} />} />
        <Route path='/mapping' element={<Mapping />} />
        <Route path='/mapping-2' element={<MappingTwo />} />
        <Route path='/condition-rendering' element={<ConditionalRendering />} />
        <Route path='/condition-rendering-two' element={<ConditionalRenderingTwo />} />
        <Route path='/condition-rendering-three' element={<ConditionalRenderingThree />} />
      </Routes>
    </div>
  );

}

export default App;
