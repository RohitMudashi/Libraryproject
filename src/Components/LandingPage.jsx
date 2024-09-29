import React, { useRef, useState } from 'react'
import '../styles/landing.css'
import LoginAdminPage from './Admin/LoginAdminPage'
import LoginUsersPage from './Users/LoginUsersPage'

const LandingPage = () => {

  let [bool, setBool] = useState(true)
  let handleClick = () => {
    setBool(!bool)
  };

  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="login-container">
            <div className="btn-container">
              <div className="text">
                <div>Admin Login</div>
                <div>User Login</div>
              </div>
              <button onClick={handleClick} className={bool ? 'left-btn' : 'right-btn'}>{bool ? 'Admin Login' : 'User Login'}</button>
            </div>

            <div className="form-container">
              <div className="header">
                {bool ? "Admin Login" : "User Login"}
              </div>
              <div>
                {bool ?
                  <LoginAdminPage />
                  :
                  <LoginUsersPage />

                }
              </div>
              <div className='forget'>
                <a href="">Forgotten Password..?</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default LandingPage