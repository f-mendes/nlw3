import React from 'react';
import mapMarketing from "../images/Local.svg";
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'; 
import "../styles/pages/orphanages-map.css";
import {Map,TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



function Orphanages(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketing} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                    
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Capital</span>
                </footer>
            </aside>

            <Map
             center={[-23.6351401,-46.655278]}
             zoom={15}
             style={{width:'100%', height:'100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="" className="create-orphanages">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
        );
}

export default Orphanages;