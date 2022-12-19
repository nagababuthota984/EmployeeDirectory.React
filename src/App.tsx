import { Container, Divider, Stack } from '@mui/material';
import './App.css';
import AppHeader from './components/appHeader';
import ButtonFilters from './components/buttonFilters';
import EmployeeList from './components/employeeList';
import Search from './components/search';
import SideNav from './components/sideNav';

function App() {
  return (
    <Container className='App' maxWidth={false} sx={{height:'100%'}}>
      <AppHeader />
      <Divider />
      <Stack direction="row" spacing={3}>
        <SideNav />
        <Container maxWidth={false}>
          <ButtonFilters/>
          <Search/>
          <EmployeeList/>
        </Container>
      </Stack>
    </Container>
  );
}

export default App;
