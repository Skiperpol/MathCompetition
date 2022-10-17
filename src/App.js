import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Kalkulator from './pages/Kalkulator';

function App() {
  return (
    <div>
    1234
      <Routes>
        <Route exact path='Skiperpol.github.io/MathCompetition/' element={<Home/>} />
        <Route path='Skiperpol.github.io/MathCompetition/kalkulator' element={<Kalkulator/>} />
      </Routes>
    </div>
  );
}

export default App;
