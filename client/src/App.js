import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import Institution from './components/Institution'
import Government from './components/Government'
import Success from './components/Success'
import { useState } from 'react'

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


function App() {
  
  const [show, setShow] = useState(1);

  const click1 = () => {
    setShow(1);
  }

  const click2 = () => {
    setShow(2);
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container1">
          <Routes>
            <Route path="/" element={
              <div className="container">
                <div className="left">
                  <Left onclick1={click1} onclick2={click2} text1="GOVERNMENT" text2="INSTITUTION"/>
                </div>
                <div className="right">
                  {show===1 ?<Right text='GOVERNMENT' value="0"/> : <Right text='INSTITUTION' value="1"/>}
                </div>
              </div>
            }></Route>
            <Route path="/inst" element={ <Institution/> }></Route>
            <Route path="/govt" element={<Government/>}></Route>
            <Route path="/success" element={<Success/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
