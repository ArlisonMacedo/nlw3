import leaflet from 'leaflet'

import mapMarkerImg from '../assets/Local.svg'

const mapIcon = leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

export default mapIcon