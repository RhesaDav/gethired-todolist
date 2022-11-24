import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './features/Detail';
import Home from './features/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
