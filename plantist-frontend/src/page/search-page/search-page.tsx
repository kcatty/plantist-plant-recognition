import React, {useState} from "react";
import './search-page.css'
import Footer from "../../shared/footer/footer";
import {Button, Form, Modal} from "react-bootstrap";
import {plantInformation} from "../../environment/plants-information";

interface Picture {
    picturePreview: string,
    pictureAsFile: any,
}

const SearchPage = () => {
    const [picture, setPicture] = useState<Picture>({pictureAsFile: undefined, picturePreview: ''});
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [showError, setShowError] = useState(false);
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [resultModal, setResultModal] = useState<boolean>(false);

    const handleClose = () => setShowError(false);
    const handleCloseResultModal = () => setResultModal(false);

    const uploadPicture = (e: any) => {
        if (!e.target.files[0].name.match(/\.(jpg|jpeg|png)$/i)) {
            setShowError(true);
            return;
        }
        setIsDisabled(false);
        setPicture({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0]
        });
    };

    const setImageAction = async (event: any) => {
        event.preventDefault();

        var formdata = new FormData();
        formdata.append("filename", picture.pictureAsFile, picture.picturePreview);

        await fetch("http://127.0.0.1:5000/predict", {
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*'},
            body: formdata,
        })
            .then(response => response.json())
            .then(result => setName(result.className))
            .then(() => setResultModal(true))
            .catch(e => setError(e))
    };

    return (
        <>
            <div className="text-css">
                <div className="d-flex justify-content-center p-4">Upload the photo of te leaf you want to recognize and
                    click the button
                </div>
                <Form onSubmit={setImageAction}>
                    <Form.Group className="m-3" onChange={uploadPicture}>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <div className="d-flex justify-content-center p-2">
                        <label>Image Preview</label>
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <img className="rounded" src={picture.picturePreview} alt=""/>
                    </div>
                    <div className="p-2 d-flex justify-content-end">
                        <button className="btn button-recognize" type="submit" disabled={isDisabled}>
                            Submit
                        </button>
                    </div>
                </Form>
                <div className="d-flex justify-content-center pt-4 error-message-description">
                    {error}
                </div>
            </div>
            <Footer/>

            <Modal
                show={showError}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="error-message-title">
                            Error
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-row">
                        <span className="error-message-description text-center p-2">
                            File extension is not an image!
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={resultModal}
                onHide={handleCloseResultModal}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Your Result: {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={plantInformation.find(plant => plant.name === name)?.imgTreeUrl} alt="" width="25"/>
                    <img src={plantInformation.find(plant => plant.name === name)?.imgUrl} alt="" width="25"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseResultModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SearchPage;
