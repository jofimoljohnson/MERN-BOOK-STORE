import { FaBook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow" style={{ background: "#eff542" }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fs-1" href="#">
                        <b>
                            <FaBook />
                            BOOKS4U
                        </b>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link active" aria-current="page" href="#">
                                    <b> ADD BOOK</b>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/books" className="nav-link active" aria-current="page" href="#">
                                    <b>BOOKS</b>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link active" aria-current="page" href="#">
                                    <b> ABOUT US</b>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
