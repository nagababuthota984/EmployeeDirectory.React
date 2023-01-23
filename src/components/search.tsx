import { Button, Container, TextField } from '@mui/material'
import React from 'react'

function Search() {
    return (
        <Container maxWidth={false} disableGutters sx={{my:'15px',mx:'0px'}}>
            <TextField id='outlined-basic' label='Search' size='small' variant="outlined" sx={{marginRight:"10px"}}></TextField>
            <Button variant="contained" size='medium' sx={{ marginLeft: "10px",my:'2px' }} color='success'>Clear</Button>
        </Container>
    )
}

export default Search;