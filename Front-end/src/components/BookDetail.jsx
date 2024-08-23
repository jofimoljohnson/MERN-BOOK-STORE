import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const navigate=useNavigate()
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);

    const id = useParams().id;
    console.log(id);

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/books/${id}`).then((res) => res.data)
            .then(data=>setInputs(data.book));
        };
        fetchHandler()
    }, [id]);



    const sendRequest=async()=>{
       await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(inputs.name),
             author:String(inputs.author),
             description:String(inputs.description),
             price:Number(inputs.price),
             image:String(inputs.image),
             available:Boolean(checked)
       }).then(res=>res.data)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>navigate("/books"))
    };



    const handleChange = (e) => {
      setInputs((prevState)=>({
        ...prevState,[e.target.name]:e.target.value
      }))
        
    };

    return (
        <>
            <div className="container bg-light w-50 shadow mt-5 p-5">
                <div className="row">
                    <h3 className="text-center">
                        <b>Update Book</b>
                    </h3>
                    <div className="col-md-12">
                        {inputs && (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={inputs.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        type="text"
                                        name="author"
                                        value={inputs.author}
                                        onChange={handleChange}
                                        placeholder="Author"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        type="text"
                                        name="description"
                                        value={inputs.description}
                                        onChange={handleChange}
                                        placeholder="Description"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        name="image"
                                        value={inputs.image}
                                        onChange={handleChange}
                                        placeholder="Image"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        type="number"
                                        name="price"
                                        value={inputs.price}
                                        onChange={handleChange}
                                        placeholder="Price"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mt-3">
                                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                                    &emsp;
                                    <label htmlFor="">Available</label>
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="btn btn-primary w-100">
                                        Update Book
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;
