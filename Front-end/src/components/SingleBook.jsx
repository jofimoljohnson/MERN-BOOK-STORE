import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SingleBook = ({ book }) => {
    
    const navigate = useNavigate();
    const { _id, name, image, author, description, price } = book;

    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/books/${_id}`)
            .then((res) => res.data)
            .then(() => navigate("/"))
            .then(() => navigate("/books"));
    };

    return (
        <>
            <div className="container mt-5 p-5 bg-light shadow" style={{ height: "550px" }}>
                <img src={image} alt="name" width={"200px"} height={"200px"} />
                <h4 className="text-center mt-3 text-secondary">
                    <b>{name}</b>
                </h4>
                <h5 className="text-center">
                    <b>{author}</b>
                </h5>

                <p className="m-2 p-1">{description}</p>
                <h6 className="text-center">Rs:{price}</h6>
                <div className="text-center">
                    <Link to={`/books/${_id}`}>
                        <button className="btn btn-success">Update</button>
                    </Link>
                    &emsp;
                    <button onClick={deleteHandler} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default SingleBook;
