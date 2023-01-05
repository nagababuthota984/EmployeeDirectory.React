import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Employee } from '../models/employee';

 function EmpCard(employee:Employee) {
  return (
    <Card sx={{maxWidth:250,maxHeight:90,cursor:"pointer",display:'flex',margin:"10px",backgroundColor:"#F0F0F0"}}>
      <Grid m={1}>
        <img src={require('../assets/images/angelina-bailey.png')} alt="Emp-dp"/>
      </Grid>
      <CardContent>
        <Typography variant="subtitle1">{employee.PreferredName}</Typography>
        <Typography variant="body2" color="primary">{employee.JobTitle}</Typography>
      </CardContent>
    </Card>
  )
}
export default EmpCard;
