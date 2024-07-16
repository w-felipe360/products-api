/* eslint-disable */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Register from './pages/Register';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/home" element={<Header />} />
          {/* <Route path="/posts/:id" element={ <PostDetails /> } /> */}
          {/* <Route path="/users" element={ <Users /> } /> */}
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
