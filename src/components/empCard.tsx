import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function EmpCard() {
  return (
    <Card sx={{maxWidth:250,display:'flex',margin:'0'}}>
      <Grid m={1}>
        <img src={require('../assets/images/angelina-bailey.png')} alt="Emp-dp"/>
      </Grid>
      <CardContent>
        <Typography variant="subtitle1">Angelina bailey</Typography>
        <Typography variant="body2" color="primary">Developer</Typography>
      </CardContent>
    </Card>
  )
}
