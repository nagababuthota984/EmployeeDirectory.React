import { Button, Container, Divider, Grid, Stack } from '@mui/material'
import { ChangeEvent, ChangeEventHandler } from 'react'
import AppHeader from './AppHeader'
import ButtonFilters from './ButtonFilters'
import EmployeeList from './EmployeeList'
import FilterBy from './FilterBy'
import Search from './Search'
import SideNav from './SideNav'





function Home() {
    let searchText :string = "";
    const searchTextChanged = (event:any) =>{
        searchText = event.target.value;
    }
    return (
        <Container maxWidth={false} sx={{ height: '100%', width: '100%' }}>
            <AppHeader />
            <Divider />
            <Stack direction="row" spacing={3}>
                <SideNav />
                <Container maxWidth={false}>
                    <ButtonFilters />
                    <Grid container item sx={{ width: '100%',my:'10px'}}>
                        <Grid container item xs={9} direction="row">
                            <Search textChanged={searchTextChanged}/>
                            <FilterBy />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" sx={{ float: 'right', textTransform: 'none', height: "40px", width: "170px",my:"10px" }} size='small' >Add Employee</Button>
                        </Grid>
                    </Grid>
                    <EmployeeList searchFor={searchText}/>
                </Container>
            </Stack>
        </Container>
    )
}

export default Home