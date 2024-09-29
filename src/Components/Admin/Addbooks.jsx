import React, { useRef } from 'react'
import '../../styles/addbooks.css'
import bookimg from '../../Images/book.jpg'


const Addbooks = () => {

  let bookTitle = useRef()
  let imgUrl = useRef()
  let athr = useRef()
  let cat = useRef()
  let pgcnt= useRef()
  let stat=useRef()

  let handleSubmit = (e) => {
    e.preventDefault()


    let newBooks = {
      title: bookTitle.current.value,
      thumbnailUrl: imgUrl.current.value,
      authors: [athr.current.value],
      categories: [cat.current.value],
      pageCount:pgcnt.current.value,
      status:stat.current.value

    };

    let x = fetch("http://localhost:4000/books",
      {method:'POST',
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(newBooks),
    });
  }
  return (
    <>
      <div className="addbooks">
        <img src={bookimg} alt="" />
        <form onSubmit={handleSubmit}>
          <input ref={bookTitle} type="text" placeholder='Enter Book Title' />
          <input ref={imgUrl} type="text" placeholder='Enter image URL' />
          <input ref={athr} type="text" placeholder='Enter Authors' />
          <input ref={cat} type="text" placeholder='Enter Category' />
          <input ref={pgcnt} type="text" placeholder='Enter PageCount' />
          <input ref={stat} type="text" placeholder='Enter Status' />
          <button>Add Books</button>
        </form>
      </div>
    </>
  )
}

export default Addbooks