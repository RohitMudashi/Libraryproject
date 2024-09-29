import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginAdminPage = () => {

  let adminInputVal = useRef();
  let adminInputPas = useRef();
  let navigate = useNavigate();
  let err=useRef();

  let handleAdminLogin = (e) => {
    e.preventDefault()

    let credential = {
      adminName: 'Admin',
      adminPassword: "admin123"
    };

    let { adminName, adminPassword } = credential;

    let admin = adminInputVal.current;
    let pswd = adminInputPas.current;

    if (adminName === admin.value && adminPassword === pswd.value) {
      navigate('/adminportal')
    }
    else{
      admin.style.cssText = `border:solid 1px red`;
      pswd.style.cssText = `border:solid 1px red`;

      let errMsg = err.current;
      errMsg.innerText = "Wrong Credential";
      errMsg.style.cssText = `text-align:center;background:red;color:white;
                              font-weight: bold;
                              font-family:sans-serif;
                              font-size:14px;`
    }
  }
  return (
    <div>
      <form onSubmit={handleAdminLogin}>
        <input ref={adminInputVal} type="text" placeholder='Enter Admin Name' />
        <hr />
        <input ref={adminInputPas} type="password" placeholder='Enter Password' />
        <hr />
        <button>Admin Login</button>
      </form>
      <div className='error' ref={err}></div>
    </div>
  )
}

export default LoginAdminPage