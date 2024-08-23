import { Link } from "react-router-dom";
import img from "../assets/book images.avif";

const About = () => {
    return (
        <div className="container mt-5 p-5 bg-light shadow">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt="" width={"400px"} className="img" />
                </div>
                <div className="col-md-6">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum aperiam, expedita hic
                        modi facilis nesciunt odit optio voluptatibus quis molestias voluptas esse accusamus possimus.
                        Facere ducimus reprehenderit placeat modi nihil optio, molestiae mollitia omnis, nemo quas, a fugiat
                        quasi voluptatibus laborum! Architecto minus omnis quisquam illo at provident odio.
                    </p>
                    <div className="text-center mt-3">
                        <Link to="/">
                            <button className="btn btn-success">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
