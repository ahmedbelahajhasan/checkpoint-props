import React from 'react'
const profile=(props)=>(
    <section>
    <h1 style={{color:"white"}}>fullname:   {props.fullname}</h1>
    <h2 style={{color:"white"}}>bio:  {props.bio}</h2>
    <h2 style={{color:"white"}}>profession: {props.profession}</h2>


    </section>

)
export default profile;