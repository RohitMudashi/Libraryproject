import React from 'react'
import '../styles/home.css'
import lib from '../Images/l8.jpg'
import img1 from '../Images/lib.jpg'

const Home = () => {
  return (
    <>
    <div className="backdp">
    <img src={img1} alt="" />
    </div>
      <div className="homepage">
        <div className="container">
          <h2>Library Management</h2>
          <img src={lib} alt="" />
          <div className='content'>
            <p>A library management system is used  <br />to maintain library records. <br />
             It tracks the records of the number of  <br />books in the library, how many books are <br /> issued, or how many  books have been <br />returned or renewed or late fine charges,<br />  etc.</p>
          </div>
        </div>
        <button>Read More</button>
      </div>
    </>
  )
}

export default Home

//PS C:\Users\Admin\Desktop\Sahana\Reactjs\libraryproject> npx json-server --watch src/Data/books.json --port 4000
//to run json server