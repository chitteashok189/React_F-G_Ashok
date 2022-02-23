import React from 'react'

export default function Feedback() {
    const userdata=JSON.parse(localStorage.getItem("users"));
    const data=()=>{
        var list=userdata.map((v)=>{
         return <tr class="border border-black"><td class="p-2">{"Aromatic bar"}</td><td>{v.Name}</td><td>{v.Mobile}</td><td>{v.Email}</td><td>{v.rating}</td><td>{v.rating1}</td><td>{v.rating2}</td><td>{v.rating3}</td></tr>;   
    })
    return list;
   
}
const onform=()=>{
  window.location.href="./"
}
const ontable=()=>{
  window.location.href="./feed"
}

  return (
    <div>
       <button onClick={onform} class="border w-32 bg-red-500 p-2">Form</button>
      <button onClick={ontable} class="border w-32 bg-red-500 p-2 ml-10">Table</button>
        <h1 class="text-3xl font-bold text-blue-300 text-center">All Feedback</h1>
        <table class="border-right-8"  style={{border:"1px solid black",width:"100%"}}>
      <thead className='bg-gray-300'>
            <th class="p-2 ">FormName</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Quality of service</th>
            <th>Quality of bevarage</th>
            <th>Restuarant clean</th>
            <th>Overall experience</th>
        </thead>
            <tbody class="text-center bg-red-300">
                {data()}
            </tbody>
                       
        </table>
        
    </div>
  )
}
