import axios from "axios"
import { useEffect, useState } from "react";

export default function SideNav() {
    const [deptCounts,setDeptCounts] = useState({});
    // useEffect(() => {
    //   departments();
    // }, [])
    
    // const departments = () =>{
    //     axios({
    //         method:"get",
    //         url:'https://localhost:7013/api/Dept/getDeptCounts',
    //         headers:{
    //             'Authorization':`Bearer ${JSON.parse(localStorage.getItem("idToken") as string).idToken}`
    //         }
    //     })
    //     .then((response):any => {
    //         console.log(response);
    //         setDeptCounts(response);
    //     })
    //     .catch(error=>console.error(`Error: ${error}`));
    // }
    return (
        <div>
            <div>
                <h4>Departments</h4>
                <li>HR Department</li>
                <li>Product Engineering</li>
                <li>Digital Transformation</li>
            </div>
            <div>
                <h4>Offices</h4>
                <li>India</li>
                <li>Seattle</li>
            </div>
            <div>
                <h4>Job Titles</h4>
                <li>Sharepoint Practice Head</li>
                <li>Software developer</li>
                <li>Quality Analyst</li>
                <li>Operations Manager</li>
            </div>
        </div>
    )
}
