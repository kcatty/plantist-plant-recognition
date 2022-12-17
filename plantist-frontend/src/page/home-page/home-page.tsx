import Footer from "../../shared/footer/footer";
import './home-page.css'
import photo from './photo-1.png';
import photo2 from './photo-2.png';
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                    <div className="home-text text-center flex-grow-1">
                        <span>
                            Recognize your plant in few easy steps:<br/>
                            - do a photo of the leaf<br/>
                            - upload it in the Search section<br/>
                            - wait for the results!<br/>
                        </span>
                    </div>
                    <div className="text-center flex-grow-1">
                        <img src={photo} alt="photo" width={300} height={300}/>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <div className="text-center flex-grow-1">
                        <img src={photo2} alt="photo2" width={400} height={300}/>
                    </div>
                    <div className="text-center flex-grow-1">
                        <Link to="/search">
                            <button type="button" className="btn btn-recognize">Recognize my plants!</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default HomePage;