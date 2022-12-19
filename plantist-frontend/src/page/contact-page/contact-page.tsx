import "./contact-page.css"
import Footer from "../../shared/footer/footer";
import React from "react";
import "./contact-page.css";
import { Github, Linkedin } from "react-bootstrap-icons";
import environment from '../../environment/environment.json'

const ContactPage = () => {
    const white = '#FFFFFF';
    return (
        <>
            <div className="d-flex flex-column align-items-center p-3">
                <div className="d-flex justify-content-center contact-title">Contact</div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column contact-background rounded contact-text text-center p-4">
                        <div>
                            On this website you can find three subpages:
                            <br/>
                            <br/>
                            Home - with main idea of application
                            <br/>
                            Search - recognize plant using photo
                            <br/>
                            Plant - plant species that are recognizable
                            <br/>
                            <br/>
                            This project was created for my bachelor thesis in Technical University of Lodz by Katarzyna
                            Bielicka.
                            <br/>
                            Main objective was to create web application that enables recognition of plant using Image
                            Recognition.
                            <br/>
                        </div>
                        <a href={environment.githubLink} target="_blank" rel="noopener noreferrer" className="pt-2">
                            <Github size={64} color={white}/>
                        </a>
                        <a href={environment.linkedinLink} target="_blank"
                           rel="noopener noreferrer" className="pt-2">
                            <Linkedin size={64} color={white}/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default ContactPage;