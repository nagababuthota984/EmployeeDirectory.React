import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'

export default function Search() {
    return (
        <Grid container direction="row" justifyContent="space-between">
            <Grid container item direction="row" justifyContent="flex-start" xs={4} my={2}>
                <TextField id='outlined-basic' label='Search' size='small' variant="outlined"></TextField>
                <Button variant="contained" size='medium' sx={{margin:"auto"}} color='success' disableElevation>Clear</Button>
                <FormControl fullWidth={false}>
                    <InputLabel id="select-filter-by">Filter by</InputLabel>
                    <Select size='small' value='FirstName' label='Filter by' labelId='select-filter-by'>
                        <MenuItem value='FirstName'>First Name</MenuItem>
                        <MenuItem value='LastName'>Last Name</MenuItem>
                        <MenuItem value='Preferred Name'>Preferred Name</MenuItem>
                        <MenuItem value='Email'>Email</MenuItem>
                        <MenuItem value='Phone'>Phone</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={7} my={2}>
                <Button variant='contained' sx={{float:'right'}} size='medium' disableElevation>Add Employee</Button>
            </Grid>
        </Grid>
    )
}
