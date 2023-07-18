import React ,{ useState,useEffect}from "react";
// import { Link, useParams } from "react-router-dom";
 function AddNew()
{
    const [id,setId]= useState("")
    const [name,setname]= useState("")
    const [Experience,setExperience]=useState("")
    const [doj,setDoJ]= useState("")
    
    const [show,setShow]=useState(false)

const [editIndex,setEditIndex]=useState()
    const [emp,setEmp]= useState([
    //     {
    //     id:1,Name:"divyasrii",
    // Experience:"2 years",doj:"22.06.2020"},{
        
    //     id:2,
    //     Name: "Divya",
    //     Experience:"2 Years",
    //     doj:"22.06.2020"
    // }
   
    
    
   ])
  
  
    const HandleAdd=()=>{
        // console.log(Name,Experience,doj)
        // setEmp([...emp,{id:id,Name:Name,Experience:Experience,doj:doj}])
        setEmp(newe =>[...newe,{id,name,Experience,doj}])
       setId("") ;setname("");setExperience("");setDoJ("")
}
// const handleIndi=(Name)=>{

//     setEmp(emp.filter(e=>e.Name!==Name))
//     }

const handleIndi=(index)=>{
    emp.splice(index,1)
    setEmp([...emp])
}
    const  HandleEdit=(i)=>{
        setEmp([...emp,{id:id,Name:name,Experience:Experience,doj:doj}])
    //    setId(emp)
    //    setName([e.id={id}])
       setEmp([...emp])
    
    

        setShow(true)
     
    //    setEditIndex(i)
       
    }
     const HandleUpdate=()=>{
 emp.splice(editIndex,4,{id,name,Experience,doj});
// setEmp(newe =>[...newe,{id,Name,Experience,doj}])
setEmp([...emp])
setShow(false)
setId("");setname("");setExperience("");setDoJ("")

    }
   

    return(
        <div className="inputContainer">
            <input type="text" placeholder="Enetr id" value={id} onChange={(e)=>setId(e.target.value)}></input><br></br>

            <input type="text" placeholder="Enetr Name" value={name} onChange={(e)=>setname(e.target.value)}/><br></br>

            <input type="text" placeholder="Experience in years" value={Experience} onChange={(e)=>setExperience(e.target.value)}></input><br></br>
            <input type="text" placeholder="Enter the Date of Joining"value={doj} onChange={(e)=>setDoJ(e.target.value)}></input><br/>
            {!show?<button type="submit" onClick={HandleAdd}>ADD</button>:
            <button type="submit" onClick={HandleUpdate}>update</button>}

            
        
    
    
     {emp.map((e,i)=>
        <div className="tableContainer">
            <table border="1"  cellPadding={1} >
                
                <tr>
            <td>{e.id}</td> 
            <td>{e.name}</td> 
            <td>{e.Experience}</td>
            <td>{e.doj}
            </td><button className="delete" onClick={()=>handleIndi(i)}>DELETE</button>
             <button className="edit" type="submit" onClick={()=>HandleEdit(i)}>Edit</button><br></br>

            </tr>
            </table>
            </div>
            )} 
            
    </div>)
}

export default AddNew