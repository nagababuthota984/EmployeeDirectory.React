import { Button, ButtonGroup } from "@mui/material";
import { Alphabet } from "../models/enums";

export default function ButtonFilters() {
    const elements = Object.keys(Alphabet).filter(key=>isNaN(Number(key))).map((alphabet) => (
        <Button key={alphabet} variant="contained" size="medium" sx={{mt:3,mx:1,marginLeft:0}} disableElevation>{alphabet}</Button>
    ))
    return (
        <ButtonGroup sx={{width:'100%'}}>
            {elements}
        </ButtonGroup>
    );
}
