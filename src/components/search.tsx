import { Button, TextField } from '@mui/material'

function Search() {
    return (
        <>
            <TextField id='outlined-basic' label='Search' size='small' variant="outlined" sx={{marginRight:"10px",my:'8px'}}></TextField>
            <Button variant="contained" size='medium' sx={{ marginLeft: "10px",my:'8px',height:'40px',textTransform:'none' }} color='success'>Clear</Button>
        </>
    )
}

export default Search;