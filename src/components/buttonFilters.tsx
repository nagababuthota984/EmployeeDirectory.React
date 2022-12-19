import { Button, ButtonGroup } from "@mui/material";

export default function ButtonFilters() {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const elements = alphabets.map((alphabet) => (
        <Button key={alphabet} variant="contained" size="medium" sx={{mt:3,mx:1,marginLeft:0}} disableElevation>{alphabet}</Button>
    ))
    return (
        <ButtonGroup >
            {elements}
        </ButtonGroup>
    );
}
