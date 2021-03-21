import React from 'react'
import { Link } from 'react-router-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
// import leaflet from 'leaflet'

import mapMarkerImg from '../assets/Local.svg'
import {FiPlus, FiArrowRight} from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'
import mapIcon from '../utils/mapIcon'


// const mapIcon = leaflet.icon({
//   iconUrl: mapMarkerImg,
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [170, 2]
// })

function OrphanegesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita : </p>
        </header>

        <footer>
          <strong>Maracaçumé</strong>
          <span>Maranhão</span>
        </footer>
      </aside>

      {/* <div></div> */}

      <Map 
        center={[-2.0473914,-45.9567712]}        
        zoom={15}
        style={{width: '100%', height: '100%'}}

      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker 
          position={[-2.0473914,-45.9567712]}
          icon={mapIcon}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar das Meninas
            <Link to='/orphanages/1'>
              <FiArrowRight size={24} color='#fff' />
            </Link>
          </Popup>
        </Marker>
        
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  )
}

export default OrphanegesMap