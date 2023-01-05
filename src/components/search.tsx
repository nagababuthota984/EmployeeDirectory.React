import { Button, TextField } from '@mui/material'
import React from 'react'

function Search() {
    return (
        <>
            <TextField id='outlined-basic' label='Search' size='small' variant="outlined"></TextField>
            <Button variant="contained" size='medium' sx={{ margin: "auto" }} color='success' disableElevation>Clear</Button>
        </>
    )
}

export default Search;