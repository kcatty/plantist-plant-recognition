import React, { useState } from "react";
import './search-page.css'
import Footer from "../../shared/footer/footer";

interface Picture {
    picturePreview: string,
    pictureAsFile: any,
}

const LandingPage = () => {
    const [picture, setPicture] = useState<Picture>({pictureAsFile: undefined, picturePreview: ''});
    const [name, setName] = useState<string>('');

    const uploadPicture = (e: any) => {
        setPicture({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0]
        });
    };

    const setImageAction = async (event: any) => {
        event.preventDefault();

        var formdata = new FormData();
        formdata.append("filename", picture.pictureAsFile, picture.picturePreview);

        await fetch("http://127.0.0.1:8080/predict", {
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*'},
            body: formdata,
        })
            .then(response => response.json())
            .then(result => setName(result.className))
    };

    return (
        <>
            <div className="text-css">
                <div className="d-flex justify-content-center p-4">Upload the photo of te leaf you want to recognize and
                    click the button
                </div>
                <div className="d-flex justify-content-center ">
                    <form onSubmit={setImageAction}>
                        <input type="file" name="image" onChange={uploadPicture}/>
                        <br/>
                        <br/>
                        <button className="btn button-recognize" type="submit">
                            Recognize
                        </button>
                    </form>
                </div>
                <div className="d-flex justify-content-center pt-4">{name}</div>
            </div>
            <Footer/>
        </>
    );
};

export default LandingPage;
