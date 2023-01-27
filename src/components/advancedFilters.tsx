import { Button, Grid } from '@mui/material'
import FilterBy from './filterBy';
import Search from './search';

function AdvancedFilters() {
    return (
        <Grid container direction="row" justifyContent="space-between">
            <Grid container item direction="row" justifyContent="flex-start" xs={5} my={2}>
                <Search/>
                <FilterBy/>
            </Grid>
            <Grid item xs={7} my={2}>
                <Button variant='contained' sx={{float:'right'}} size='medium' disableElevation>Add Employee</Button>
            </Grid>
        </Grid>
    )
}
export default AdvancedFilters;
