import './css/App.css';
import Game from './Game';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/game" element={<Game />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;