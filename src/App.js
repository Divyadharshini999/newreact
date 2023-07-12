import React from 'react'
// import AddEmployee from './AddEmployee'
function EmployeeList() {
    const person= [
        {
            id: 1,
            Name: "Divya",
            Experience:"2 Years",
            Date_Of_Joining:"22.06.2020"
        },
        {
          id: 2,
          Name: "Divya",
          Experience:"2 Years",
          Date_Of_Joining:"22.06.2020"
        },
        {
          id: 3,
            Name: "Divya",
            Experience:"2 Years",
            Date_Of_Joining:"22.06.2020"
        },
        {
          id: 4,
          Name: "Divya",
          Experience:"2 Years",
          Date_Of_Joining:"22.06.2020"
        },
       
    ]
    const listItems = person.map(
        (element) => {
            return ( <div className='ta'>
                      <table border={'1/1'} bgcolor='lightgray' >
                       
                       
                        <tr>
                        <td>{element.id}</td>
                        <td>{element.Name}</td>
                        <td>{element.Experience}</td>
                        <td>{element.Date_Of_Joining}</td>
                        </tr>
                      </table>
                      </div>
            )
        }
    )
    return   (listItems)
}
function App() {
    return (<EmployeeList />);
}
 
export default App
