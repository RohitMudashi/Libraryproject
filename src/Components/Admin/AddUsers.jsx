import React, { useRef } from 'react'
import Userimg from '../../Images/u1.jpg'
import '../../styles/adduser.css'


const AddUsers = () => {

    let UfirstName = useRef()
    let UlastName = useRef()
    let Udob = useRef()
    let Uimage = useRef()
    let Uplace= useRef()
    let Uphno = useRef()

    let handleUsersSubmit = (e) => {
        e.preventDefault();

    
        let newUser = {
          firstName : UfirstName.current.value,
          lastName : UlastName.current.value,
          imageUrl : Uimage.current.value,
          dateOfBirth : Udob.current.value,
          place : Uplace.current.value,
          userContact : Uphno.current.value
        }
       fetch("http://localhost:4000/users",{
        method:'PoSt',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newUser)
       })
      }
  return (
  <>
    <div className="userimg">
    <img src={Userimg} alt="" />
   

   <div className="cont">
   <form onSubmit={handleUsersSubmit}>
    <input ref={UfirstName} type="text" placeholder='Enter FirstName' />
    <input ref={UlastName} type="text" placeholder='Enter LastName' />
    <input ref={Udob} type="text" placeholder='Enter DOB(YYYY)'/>
    <input ref={Uimage} type="text" placeholder='Enter ImageUrl' />
    <input ref={Uplace} type="text"  placeholder='Enter place'/>
    <input ref={Uphno} type="text" placeholder='Enter PhoneNumber' />
    <button >Add Users</button>
   </form>
   </div>
   </div>
  </>
  )
}

export default AddUsers