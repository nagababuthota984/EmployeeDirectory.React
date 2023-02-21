import { Container } from '@mui/material'
import { useEffect } from 'react';
import { JsxElement } from 'typescript';
import { Employee } from '../models/employee'
import EmpCard from './EmpCard'

export default function EmployeeList(props: any) {
  const employees: Employee[] = [
    {
      FirstName: "Angelina",
      LastName: "Bailey",
      Office: "India",
      JobTitle: "Software developer",
      Department: "Product engineering",
      PreferredName: "Angelina Bailey"
    },
    {
      FirstName: "Nagababu",
      LastName: "Thota",
      Office: "India",
      JobTitle: "Software developer",
      Department: "Product engineering",
      PreferredName: "Nagababu Thota"
    }];

  let filteredEmployees: Employee[] = employees;
  let empList: any;
  const MatchFound = (employee: Employee, searchText: string) => {
    if (searchText != "" && searchText !== "undefined")
      return employee.PreferredName.includes(searchText);
    return true;
  }

  useEffect(() => {
    filteredEmployees = employees.filter(emp => MatchFound(emp, props.searchFor));
    empList = filteredEmployees.map((employee) => {
      return <EmpCard key={employee.PreferredName} {...employee} />
    });
  }, [props.searchFor]);

  return (
    <Container disableGutters maxWidth={false} sx={{ display: 'flex', border: '1px solid grey', height: '39em', overflow: 'auto' }}>
      {empList}
    </Container>
  )

}
