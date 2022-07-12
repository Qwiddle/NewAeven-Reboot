import './App.css';
import PhaserGame from '../game/PhaserGame';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/game" element={<PhaserGame />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;