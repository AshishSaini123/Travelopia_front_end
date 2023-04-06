


import React,{useState,Fragment} from 'react'
import "../styles/inputForm.css"
import { useNavigate } from 'react-router-dom'
const InputForm = () => {
    const nav=useNavigate();
    const [userData,setUserdata]=useState({
        name:'',
        email:'',
        destination:'',
        travelers:0,
        budget:'',
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserdata({...userData,[name]:value});
    }
    const handleFormsubmit=(e)=>{
        e.preventDefault();


        // ther we have to use post request

        

        if(userData.name && userData.email && userData.destination && userData.travelers &&userData.budget){

            //THis will post the data to apii

            // axios.post("...link of api",{
            //     ...userData
            // }).then(res=>res)
            // .catch(err=>console.log(err));


            nav('/user')
        }
        else{
            alert('provide all details')
        }
    }
  return (
    <Fragment>
        <form onSubmit={e=>handleFormsubmit(e)}>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' name='name' onChange={e=>handleChange(e)} /><br/><br/>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' name='email' onChange={e=>handleChange(e)}/><br/><br/>
            
            <select name='destination' onChange={e=>handleChange(e)}>
                <option value="none">Select Destination</option>
                <option value="india">India</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
            </select><br/><br/>
            <label htmlFor='travelers'>No of travellers</label>
            <input type="text" id='travelers' name='travelers' onChange={e=>handleChange(e)}/><br/><br/>
            <label htmlFor='budget'>Budget per Person</label>
            <input type="text" id='budget' name='budget' onChange={e=>handleChange(e)} /><br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </Fragment>
  )
}

export default InputForm