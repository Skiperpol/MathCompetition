import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Kalkulator from './pages/Kalkulator';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/kalkulator' element={<Kalkulator/>} />
        </Routes>
    </div>
  );
}

export default App;
