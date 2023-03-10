import { Grid, Typography } from "@mui/material"
import './AppHeader.css'

function AppHeader() {

    return (
        <Grid container className="app-bar" mt={3} mb={1}>
            <Grid container item xs={6} rowSpacing={2} >
                <img src={require("../assets/images/saketa-logo.jpg")} className="saketa-logo" alt="saketa-logo" />
                <Grid item mx={2} mt={-1} >
                    <Typography variant="h4" color="primary" pt={0}>Employee Directory</Typography>
                    <Typography variant="body2">The ultimate people directory experience</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={6} justifyContent="right">
                <img src={require('../assets/images/andrew-philips.png')} alt="user-dp" className="person-dp" />
                <Grid item mx={1}>
                    <Typography variant="subtitle1" color="primary">Nb Thota</Typography>
                    <Typography variant="body2">HR-Manager</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default AppHeader;

