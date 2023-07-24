import React from 'react'
import {API_URL} from '../Constants/Url'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create_1() {

  //useState 
  const [name,setname]= useState("")
  const [Experience,setExperience]=useState("")
  const [doj,setDoJ]= useState("")


  //for navigating create page to read page
  const navigate= useNavigate()


  //storing the input values in the API and it take some time to complete this function,
  //basically,Javascript doen't not wait,it move to the next function 
  // So we use ASYNC & AWAIT function to wait for that particular function.
  const handleSubmit= async()=>{
    //const handleSubmit=()=>{
    // console.log(id)
    // console.log(name)
    // console.log(Experience)
    // console.log(doj)
    await axios.post(API_URL,{name,Experience,doj})

 
// after completing the function ,it navigate to read page.
   navigate('/read')
  }
  
  
  return (
   

   
 <div className="inputContainer">
           
   {/* for changing or to type something in the textbox, wehave to use "onChange" event function */}
            <input type="text" placeholder="Enetr Name" value={name} onChange={event=>setname(event.target.value)}></input><br></br>

            <input type="text" placeholder="Experience in years" value={Experience}  onChange={event=>setExperience(event.target.value)}></input><br></br>
            <input type="text" placeholder="Enter the Date of Joining" value={doj}  onChange={event=>setDoJ(event.target.value)}></input><br></br>
            <button type="submit"  className="addbutton"onClick={handleSubmit}>ADD</button>
             
     </div>
     )
    

}
export default Create_1