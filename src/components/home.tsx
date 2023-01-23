import { Button, Container, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import AppHeader from './appHeader'
import ButtonFilters from './buttonFilters'
import EmployeeList from './employeeList'
import FilterBy from './filterBy'
import Search from './search'
import SideNav from './sideNav'

function home() {
    return (
        <Container maxWidth={false} sx={{ height: '100%', width: '100%' }}>
            <AppHeader />
            <Divider />
            <Stack direction="row" spacing={3}>
                <SideNav />
                <Container maxWidth={false}>
                    <ButtonFilters />
                    <Grid container item sx={{ width: '100%',my:'10px'}}>
                        <Grid container item xs={9}>
                            <Search />
                            <FilterBy />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" sx={{ float: 'right', textTransform: 'none', height: "40px", width: "170px",my:"10px" }} size='small' >Add Employee</Button>
                        </Grid>
                    </Grid>
                    <EmployeeList />
                </Container>
            </Stack>
        </Container>
    )
}

export default home