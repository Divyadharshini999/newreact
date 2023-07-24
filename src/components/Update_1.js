import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { API_URL } from '../Constants/Url'
import Read_1 from './Read_1'
import { useNavigate } from 'react-router-dom'


function Update_1() {

  const [name,setname]= useState("")
  const [Experience,setExperience]=useState("")
  const [doj,setDoJ]= useState("")
  const [id,setId]= useState("")

const navigate=useNavigate()
  useEffect(()=>{
    // console.log(localStorage.getItem('id'))
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('Experience'))
    // console.log(localStorage.getItem('doj'))


    //getting the stored values 
    setId(localStorage.getItem('id'))
    setname(localStorage.getItem('name'))
    setExperience(localStorage.getItem('Experience'))
    setDoJ(localStorage.getItem('doj'))

  },[])


  
  const handleSubmit1= async()=>{
    //put method is used for updating
await axios.put(`${API_URL}/${id}`,{name,Experience,doj})


//after the updating the values, it navigate to the read page
navigate('/read') 

  }


  return (
    <div>
{/* update form */}
    <input type="text" placeholder="Enetr Name" value={name} onChange={event=>setname(event.target.value)}></input><br></br>

   <input type="text" placeholder="Experience in years" value={Experience}  onChange={event=>setExperience(event.target.value)}></input><br></br>
  <input type="text" placeholder="Enter the Date of Joining" value={doj}  onChange={event=>setDoJ(event.target.value)}></input><br></br>
  <button type="button"onClick={handleSubmit1} className='updatebutton'>Update</button>
  </div>
  )
}

export default Update_1