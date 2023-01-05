import { Container } from '@mui/material'
import React from 'react'
import { Employee } from '../models/employee'
import EmpCard from './empCard'

export default function EmployeeList() {
  const employees: Employee[] = [
    {FirstName: "Angelina",
    LastName: "Bailey",
    Office: "India",
    JobTitle: "Software developer",
    Department: "Product engineering",
    PreferredName: "Angelina Bailey"},
    {FirstName: "Nagababu",
    LastName: "Thota",
    Office: "India",
    JobTitle: "Software developer",
    Department: "Product engineering",
    PreferredName: "Nagababu Thota"
  }];
  const empList = employees.map((employee)=>
  <EmpCard {...employee}/>);
  return (
    <Container disableGutters maxWidth={false} sx={{display:'flex', border: '1px solid grey', height: '40em', overflow: 'auto' }}>
      {empList}
    </Container>
  )

}
