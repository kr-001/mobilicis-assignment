// eslint-disable-next-line
import './App.css';
import Condition1 from './components/Condition1';
import Condition2 from './components/Condition2';
import Condition3 from './components/Condition3';
import Condition4 from './components/Condition4';
import Condition5 from './components/Condition5';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      
      <div>
      <Navbar/>
      
      <Routes>
      <Route path = '/' element = {<Homepage />}/>
        <Route path='/condition1' element={<Condition1/>}/>
        <Route path='/condition2' element={<Condition2/>}/>
        <Route path='/condition3' element={<Condition3/>}/>
        <Route path='/condition4' element={<Condition4/>}/>
        <Route path='/condition5' element={<Condition5/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
