import React ,{useState}from "react";
 function AddNew()
{

    const [Name,setName]= useState("")
    const [Experience,setExperience]=useState("")
    const [doj,setDoJ]= useState("")
    const [emp,setEmp]= useState([{
        id:1,Name:"divyasrii",
    Experience:"2 years",doj:"22.06.2020"},{
        
        id:2,
        Name: "Divya",
        Experience:"2 Years",
        doj:"22.06.2020"
    },
   
    
    
   ])
    const HandleAdd=()=>{
        // console.log(Name,Experience,doj)
        setEmp([...emp,{Name:Name,Experience:Experience,doj:doj}])
        setName("");setExperience("");setDoJ("")
}
const handleIndi=(Name)=>{

    setEmp(emp.filter(e=>e.Name!==Name))
    }

    return(
        <div className="inputContainer">
            <input type="text" placeholder="Enetr Name" value={Name} onChange={e=>setName(e.target.value)}></input><br/>
            <input type="text" placeholder="Experience in years" value={Experience} onChange={e=>setExperience(e.target.value)}></input><br/>
            <input type="text" placeholder="Enter the Date of Joining"value={doj} onChange={e=>setDoJ(e.target.value)}></input><br/>
            <button type="submit" onClick={HandleAdd}>ADD</button><br></br>
        
    
    
     {emp.map(e=>(
        <div className="tableContainer">
            <table border="1"  cellPadding={1}>
                <tr>
            <td>{e.Name}</td> 
            <td>{e.Experience}</td>
            <td>{e.doj}</td><button className="delete" onClick={()=>handleIndi(e.Name)}>DELETE</button>
            </tr>
            </table>
            </div>
            ))} 
            
    </div>)
}

export default AddNew