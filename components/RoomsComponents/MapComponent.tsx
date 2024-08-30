import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import "../../styles/globals.css"

export const MapComponent = ({ roomTitle, marker }: MapComponentProps) => {
    return (
        <div style={{ width: "100%", height: "15rem" }}>  {/* Parent container */}
        <MapContainer
            style={{ width: "100%", height: "15rem" }} 
            center={[38.716991792482645, -9.132346910484422]}
            zoom={13}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[38.72110334341247, -9.12440748831314]}>
                <Popup>
                     {roomTitle}
                </Popup>
            </Marker>
        </MapContainer>
    </div>
    );
};


interface MapComponentProps {
    roomTitle: string;
    marker: string;
}