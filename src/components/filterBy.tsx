import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterBy() {
    return (
        <FormControl fullWidth={false} sx={{width:'200px',my:'auto',mx:'20px'}}>
            <InputLabel id="select-filter-by">Filter by</InputLabel>
            <Select size='small' value='FirstName' label='Filter by' labelId='select-filter-by'>
                <MenuItem value='FirstName'>First Name</MenuItem>
                <MenuItem value='LastName'>Last Name</MenuItem>
                <MenuItem value='Preferred Name'>Preferred Name</MenuItem>
                <MenuItem value='Email'>Email</MenuItem>
                <MenuItem value='Phone'>Phone</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterBy;