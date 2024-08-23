import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container bg-light w-50 p-2 mt-5 shadow">
                <div className="text-center">
                    <Link to="/books">
                        
                        <button className="btn btn-light">
                            <h1>
                                <b>View All Products</b>
                            </h1>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
