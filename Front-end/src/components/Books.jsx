import axios from "axios"
import { useState,useEffect } from "react"
import SingleBook from './SingleBook'

const URL="http://localhost:5000/books"

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data)

}



const Books = () => {
    const [books, setBooks] = useState()

    useEffect(() => {
        fetchHandler().then(data=>setBooks(data.books))
      
    }, [])
    console.log(books)


  return (
    <>
  
 <div className="row">
    {
      books && books.map((book,i)=>(
        <div key={i} className=" container col-md-3 ">
        <SingleBook book={book}/>
  
        </div>
      ))
    }
 </div>



    </>
  )
}

export default Books