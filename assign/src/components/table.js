


import React from 'react'

const arr=[
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"},
    {name:'ashu',
    email:'ashu@mail.com',
    phone:"232224"}
]
const Table = () => {
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