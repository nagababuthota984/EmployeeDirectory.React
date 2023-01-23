import { Container, Divider, Stack } from '@mui/material';
import './App.css';
import AppHeader from './components/appHeader';
import ButtonFilters from './components/buttonFilters';
import EmployeeList from './components/employeeList';
import Search from './components/advancedFilters';
import SideNav from './components/sideNav';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import SignIn from './components/signIn';
import Home from './components/home';
import RequireAuth from './components/requireAuth';

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
