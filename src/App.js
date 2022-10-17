import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Kalkulator from './pages/Kalkulator';

function App() {
  return (
    <div>
    12345
      <Routes>
        <Route exact path='/MathCompetition' element={<Home/>} />
        <Route path='MathCompetition/kalkulator' element={<Kalkulator/>} />
      </Routes>
    </div>
  );
}

export default App;
