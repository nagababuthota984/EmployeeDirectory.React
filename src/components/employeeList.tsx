import { Container } from '@mui/material'
import React from 'react'
import EmpCard from './empCard'

export default function EmployeeList() {
  return (
    <Container maxWidth={false} sx={{border:'1px solid grey',height:'40em',overflow:'auto',paddingLeft:'2'}}>
        <EmpCard/>
    </Container>
  )
}
