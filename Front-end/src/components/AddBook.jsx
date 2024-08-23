import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const navigate=useNavigate()
    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        author: "",
        available: false,
        image: "",
    });
    const [checked, setChecked] = useState(false)



    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.name,"value",e.target.value)
    };


    const sendRequest=async()=>{
        await  axios.post("http://localhost:5000/books",{
             name:String(input.name),
             author:String(input.author),
             description:String(input.description),
             price:Number(input.price),
             image:String(input.image),
             available:Boolean(checked)
 
         }).then(res=>res.data)
     }


        const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input,checked)
        sendRequest().then(()=>{
            navigate('/books')
        })

    }

   









    return (
        <>
            <div className="container bg-light w-50 shadow mt-5 p-5">
                <div className="row">
                    <h3 className="text-center">
                        <b>Add Book</b>
                    </h3>
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="form-control"
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    type="text"
                                    name="author"
                                    value={input.author}
                                    onChange={handleChange}
                                    placeholder="Author"
                                    className="form-control"
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    className="form-control"
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    name="image"
                                    value={input.image}
                                    onChange={handleChange}
                                    placeholder="Image"
                                    className="form-control"
                                />
                            </div>

                            <div className="mt-3">
                                <input
                                    type="number"
                                    name="price"
                                    value={input.price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    className="form-control"
                                />
                            </div>

                            <div className="mt-3">
                                <input type="checkbox" checked={checked} 
                                onChange={()=>setChecked(!checked)} />
                                &emsp;
                                <label htmlFor="">Available</label>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary w-100">
                                    Add Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBook;
