import './plants-page.css'
import React, { useState } from "react";
import { plantInformation } from "../../environment/plants-information";
import { Button, Modal } from "react-bootstrap";
import Footer from "../../shared/footer/footer";

const PlantsPage = () => {
    const [show, setShow] = useState(false);
    const [treeNumber, setTreeNumber] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (number: number) => {
        setTreeNumber(number);
        setShow(true);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <span className="text-css pt-2 pb-2 text-center">List of Plants that are recognizable:</span>
            </div>
            <div className="d-flex flex-column justify-content-center">
                {plantInformation.map((plantInformation, index) => (
                    <div className="d-flex flex-row justify-content-center align-items-center border-top border-bottom p-4">
                        <img src={plantInformation.imgUrl} alt="" width="200" className="rounded"/>
                        <div className="p-4">
                            <span className="text-css text-center">{plantInformation.name}</span>
                            <br/>
                            <span className="text-center text-without-color">Click on the button for more information</span>
                        </div>
                        <button onClick={() => handleShow(index)} className="btn button-modal">See More Information</button>
                    </div>
                ))}
            </div>
            <Footer/>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{plantInformation[treeNumber].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-row">
                        <img src={plantInformation[treeNumber].imgTreeUrl} alt="" width="200"/>
                        <span className="description-text p-2">
                        {plantInformation[treeNumber].description}
                    </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PlantsPage;
