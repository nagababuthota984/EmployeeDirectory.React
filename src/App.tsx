import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signIn" element={<SignIn />}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
