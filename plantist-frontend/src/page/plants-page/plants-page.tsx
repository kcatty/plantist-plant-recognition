import acer from "./Acer.jpg"
import alnusIncana from "./Alnus Incana.jpg"
import betulaPubescens from "./Betula Pubescens.jpg"
import fagusSilvatica from "./Fagus silvatica.jpg"
import populus from "./Populus.jpg"
import populusTremula from "./Populus tremula.jpg"
import quercus from "./Quercus.jpg"
import salixAlbaSericea from "./Salix alba Sericea.jpg"
import salixAurita from "./Salix Aurita.jpg"
import salixSinerea from "./Salix sinerea.jpg"
import sorbusAucuparia from "./Sorbus aucuparia.jpg"
import sorbusIntermedia from "./Sorbus intermedia.jpg"
import tilia from "./Tilia.jpg"
import ulmusCarpinifolia from "./Ulmus carpinifolia.jpg"
import ulmusGlabra from "./Ulmus glabra.jpg"
import './plants-page.css'
import React from "react";
import Footer from "../../shared/footer/footer";

const PlantsPage = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <span className="text-css text-center">List of Plants that are recognizable</span>
            </div>
            <div className="d-flex flex-wrap text-css text-center justify-content-center">
                <div className="d-flex flex-column">
                    <img src={acer} alt="photo" width="200"/>
                    <span>Acer</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={alnusIncana} alt="photo" width="200"/>
                    <span>Alnus Incana</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={betulaPubescens} alt="photo" width="200"/>
                    <span>Betula Pubescens</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={fagusSilvatica} alt="photo" width="200"/>
                    <span>Fagus Silvatica</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={populus} alt="photo" width="200"/>
                    <span>Populus</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={populusTremula} alt="photo" width="200"/>
                    <span>Populus Tremula</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={quercus} alt="photo" width="200"/>
                    <span>Quercus</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={salixAlbaSericea} alt="photo" width="200"/>
                    <span>Salix Alba Sericea</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={salixAurita} alt="photo" width="200"/>
                    <span>Salix Aurita</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={salixSinerea} alt="photo" width="200"/>
                    <span>Salix Sinerea</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={sorbusAucuparia} alt="photo" width="200"/>
                    <span>Sorbus Aucuparia</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={sorbusIntermedia} alt="photo" width="200"/>
                    <span>Sorbus Intermedia</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={tilia} alt="photo" width="200"/>
                    <span>Tilia</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={ulmusCarpinifolia} alt="photo" width="200"/>
                    <span>Ulmus Carpinifolia</span>
                </div>
                <div className="d-flex flex-column">
                    <img src={ulmusGlabra} alt="photo" width="200"/>
                    <span>Ulmus Glabra</span>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default PlantsPage;