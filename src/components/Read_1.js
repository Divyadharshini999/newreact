import axios from "axios";
import React,{useState,useEffect} from "react";
import { API_URL } from "../Constants/Url";
import { useNavigate } from "react-router-dom";


function Read_1() {

  const [apiData,setAPIData]=useState([])
  const navigate =useNavigate()

  const deleteUser =async(id)=>{
  await axios.delete(`${API_URL}/${id}`)
  callGetApi()
  }
//passing the values to the update page ,we have to use Local Storage
  const updateUser=({name,Experience,doj,id})=>{
    //setting the keys and values
localStorage.setItem('id',id)
localStorage.setItem('name',name)
localStorage.setItem('Experience',Experience)
localStorage.setItem('doj',doj)


//navigate to Update page
    navigate('/update')
  }
 

  const callGetApi=async()=>{
    const resp =await axios.get(API_URL);
    //console.log(resp.data)
    setAPIData(resp.data)
  }

  //for getting same input values from API ,we have to use "useEffect" and with "dependency[]"->dependency is mainly use to change the input values
  useEffect(()=>{
    callGetApi();  
  },[])


  return (
    // <div>Read_1</div>
    <table cellPadding={10}>
      
        <tr className="theading">
          <td>NAME</td>
          <td>EXPERIENCE</td>
          <td>DATE OF JOINING</td>
          <td>DELETE</td>
          <td>UPDATE</td>
        </tr>
        {/* the values we gonna read it in the table format by using "map()method" and assigning "id"as a key*/}
        {
          apiData.map(data =>(
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.Experience}</td>
              <td>{data.doj}</td>

              {/* for deleting the values , that particular "ID" or Array will be deleted */}
              <td><button  className='deletebutton' onClick={()=>deleteUser(data.id)}>Delete</button></td>

              {/* for updating the values, all the datas should be pass to Update page*/}
              <td><button  className='updatebutton'onClick={()=>updateUser(data)}>Update</button></td>
              
            </tr>
          ))
        }
     
    </table>
  )
}

export default Read_1