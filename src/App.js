import Memo from './pages/Memo';
import './style.scss';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/memo">Memo</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/memo" element={<Memo />}/>
          {/* pages > Memo.jsx */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
