


import React, { useEffect } from 'react'

const arr=[
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'aman',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'akhil',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'bablu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'chirag',
    email:'ashu@mail.com',
    phone:"232224"}
]
const Table = () => {

    //i am not able to deploy the express server that's why i am using this

    // const [data,setData]=useState([]);

    // const fetchData=()=>{
    //     const data=axios.get("...link of api");
    //     //this will give us the data that we want to use or display
    //     return data;
    // }

    //now we will take this data in a state and for this we have to run this method

    // useEffect(async()=>{
    //     setData(await fetchData())
    // },[])


  return (
    <div>
        <h1>Users  Table</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Destination</th>
                        <th>Travellers</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((ele,i)=>{
                        return (
                            <tr>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>narnaul</td>
                                <td>3</td>
                                <td>3000</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table