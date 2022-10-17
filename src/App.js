import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Kalkulator from './pages/Kalkulator';

function App() {
  return (
    <div>
    1234523523
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='MathCompetition/kalkulator' element={<Kalkulator/>} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
