import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [rating,setRating]=useState();
    const [rating1,setRating1]=useState();
    const [rating2,setRating2]=useState();
    const [rating3,setRating3]=useState();  
    const onSubmit=(e)=>{
        const name=document.getElementById("name").value;
        const mail=document.getElementById("mail").value;
        const number=document.getElementById("number").value; 
        
        let usersdata =new Array()
            usersdata = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')): []
      
            if(usersdata.some((v)=>{return(v.Email === mail)})){
                alert('email already existed')
      
            } 
            else if(usersdata.some((v)=>{return(v.Name === name)})){
              alert('name already existed')
    
          }
          else if(usersdata.some((v)=>{return(v.Mobile === number)})){
            alert('name already existed')
  
        } 
            else{
            usersdata.push({
                        Name:name,
                        Email:mail,
                        Mobile:number,
                        rating:rating,
                        rating1:rating1,
                        rating2:rating2,
                        rating3:rating3,
                    })
                    localStorage.setItem('users', JSON.stringify(usersdata));
                    alert("Thank you for completing the information")
                   
                   
    }
  }
  const onform=()=>{
    window.location.href="./"
  }
  const ontable=()=>{
    window.location.href="./feed"
  }
  

  return (
    <div class="bg-gray-300">
      <button onClick={onform} class="border w-32 bg-red-500 p-2">Form</button>
      <button onClick={ontable} class="border w-32 bg-red-500 p-2 ml-10">Table</button>
        <h1 class="font-bold text-3xl text-blue-500 mt-4 ml-6">Aromatic Bar</h1>
        <p class="ml-6">We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</p>
     <div class="drop-shadow-3xl m-10 bg-white" style={{height:800}}>
         <form onSubmit={handleSubmit(onSubmit)}>
           <label class="ml-6 relative top-4 text-xl">Name<span class="text-red-500">*</span></label><br></br>
           <input type="text" placeholder='Enter Name' id="name" class="border border-black rounded-md w-96 p-1 ml-6 mt-6"
           {...register("cname",{required:true})}></input><br></br>
           <p class="text-red-500 ml-6">{errors.cname &&"Error:This is a mandatory Field"}</p>
           <label class="ml-6 relative top-4 text-xl">Email<span class="text-red-500">*</span></label><br></br>
           <input type="email" placeholder='Enter Email' id="mail" class="border border-black rounded-md w-96 p-1 ml-6 mt-6"
            {...register("mail",{required:true,pattern:/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-0]+)(\.[a-zA-Z]{2,3})(\.[a-zA-Z]{2})?$/})}></input><br></br>
              <p class="text-red-500 ml-6">{errors.mail && "Error:Please Enter a valid Email Id"}</p>
           <label class="ml-6 relative top-4 text-xl">Phone<span class="text-red-500">*</span></label><br></br>
           <input type="text" placeholder='Enter Number' id="number" class="border border-black rounded-md w-96 p-1 ml-6 mt-6"
            {...register("number",{required:true,pattern:/^[6789][0-9]{9}$/})}></input><br></br>
            <p class="text-red-500 ml-6">{errors.number && "Error:Please Enter a valid Mobile Number"}</p>
            <label class="ml-6 relative top-4 text-xl">1.Please rate the quality of the service you received from your host.</label><br></br><br></br>
            <input type="radio" name="feed" class="ml-6"  onClick={(e)=>setRating(e.target.value)} value="Excellent"
            {...register("feed",{required:true})}></input>Excellent
            <input type="radio" name="feed" class="ml-4"  onClick={(e)=>setRating(e.target.value)} value="Good"
            {...register("feed",{required:true})}></input>Good
            <input type="radio" name="feed" class="ml-4"  onClick={(e)=>setRating(e.target.value)} value="Fair"
            {...register("feed",{required:true})}></input>Fair
            <input type="radio" name="feed" class="ml-4"  onClick={(e)=>setRating(e.target.value)} value="Bad"
            {...register("feed",{required:true})}></input>Bad
            <p class="text-red-500 ml-6" id="msg">{errors.feed && "Please rate the quality of service"}</p>
            <label class="ml-6 relative top-4 text-xl">2.Please rate the quality of your bevarage.</label><br></br><br></br>
            <input type="radio" name="feed1" class="ml-6" onClick={(e)=>setRating1(e.target.value)} value="Excellent"
             {...register("feed1",{required:true})}></input>Excellent
            <input type="radio" name="feed1" class="ml-4" onClick={(e)=>setRating1(e.target.value)} value="Good"
             {...register("feed1",{required:true})}></input>Good
            <input type="radio" name="feed1" class="ml-4" onClick={(e)=>setRating1(e.target.value)} value="Fair"
             {...register("feed1",{required:true})}></input>Fair
            <input type="radio" name="feed1" class="ml-4" onClick={(e)=>setRating1(e.target.value)} value="Bad"
             {...register("feed1",{required:true})}></input>Bad<br></br>
            <p class="text-red-500 ml-6" id="msg">{errors.feed1 && "Please rate the quality of bevarage"}</p>
            <label class="ml-6 relative top-4 text-xl">3.Was our restuarant clean?</label><br></br><br></br>
            <input type="radio" name="feed2" class="ml-6" onClick={(e)=>setRating2(e.target.value)} value="Excellent"
             {...register("feed2",{required:true})}></input>Excellent
            <input type="radio" name="feed2" class="ml-4" onClick={(e)=>setRating2(e.target.value)} value="Good"
             {...register("feed2",{required:true})}></input>Good
            <input type="radio" name="feed2" class="ml-4" onClick={(e)=>setRating2(e.target.value)} value="Fair"
             {...register("feed2",{required:true})}></input>Fair
            <input type="radio" name="feed2" class="ml-4" onClick={(e)=>setRating2(e.target.value)} value="Bad"
             {...register("feed2",{required:true})}></input>Bad<br></br>
            <p class="text-red-500 ml-6" id="msg">{errors.feed2 && "please rate about cleaning"}</p>
            <label class="ml-6 relative top-4 text-xl">4.Please rate your overall during experience</label><br></br><br></br>
            <input type="radio" name="feed3" class="ml-6" onClick={(e)=>setRating3(e.target.value)} value="Excellent"
             {...register("feed3",{required:true})}></input>Excellent
            <input type="radio" name="feed3" class="ml-4" onClick={(e)=>setRating3(e.target.value)} value="Good"
             {...register("feed3",{required:true})}></input>Good
            <input type="radio" name="feed3" class="ml-4" onClick={(e)=>setRating3(e.target.value)} value="Fair"
             {...register("feed3",{required:true})}></input>Fair
            <input type="radio" name="feed3" class="ml-4" onClick={(e)=>setRating3(e.target.value)} value="Bad"
             {...register("feed3",{required:true})}></input>Bad<br></br>
            <p class="text-red-500 ml-6" id="msg">{errors.feed3 && "Please rate overall experience"}</p>
           <button class="border border-black ml-8 mt-8 w-44 p-2 font-bold rounded-lg">submit</button>
           
         </form>
     </div>
    </div>
  )
}
