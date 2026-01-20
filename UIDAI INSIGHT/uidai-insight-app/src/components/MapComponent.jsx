import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { scaleLinear } from 'd3-scale'; // Correct import for d3-scale v4+
import enrollmentData from '../data/enrollment_data.json';

const MapComponent = () => {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        fetch('/india_district.geojson')
            .then(res => res.json())
            .then(data => {
                console.log("GeoJSON loaded", data);
                setGeoJsonData(data);
            })
            .catch(err => console.error("Error loading GeoJSON", err));
    }, []);

    // Color scale: 0% -> Red, 100% -> Green
    const colorScale = scaleLinear()
        .domain([0, 100])
        .range(["#ff4d4d", "#2ecc71"])
        .clamp(true);

    const getDistrictData = (feature) => {
        // Normalize names: try to match State and District from GeoJSON to our Data
        // GeoJSON properties will be inspected in console
        // Common keys: st_nm (State), district (District) in some files
        // or NAME_1, NAME_2

        const props = feature.properties;
        const stateName = props.st_nm || props.NAME_1 || props.state;
        const districtName = props.district || props.NAME_2 || props.dtname;

        if (!stateName || !districtName) return null;

        // Simple fuzzy match or direct lookup
        // Our data keys might mismatch (e.g., "Andaman & Nicobar" vs "Andaman and Nicobar Islands")
        // For now, try direct access

        const stateData = enrollmentData[stateName] ||
            enrollmentData[Object.keys(enrollmentData).find(k => k.toLowerCase() === stateName.toLowerCase())];

        if (!stateData) return null;

        const districtData = stateData[districtName] ||
            stateData[Object.keys(stateData).find(k => k.toLowerCase() === districtName.toLowerCase())];

        return districtData;
    };

    const style = (feature) => {
        const data = getDistrictData(feature);
        const percentage = data ? data.percentage : 0;

        return {
            fillColor: data ? colorScale(percentage) : '#e0e0e0', // Grey if no data
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };

    const onEachFeature = (feature, layer) => {
        const data = getDistrictData(feature);
        const props = feature.properties;
        const districtName = props.district || props.NAME_2 || props.dtname || "Unknown District";
        const stateName = props.st_nm || props.NAME_1 || props.state || "Unknown State";

        if (data) {
            layer.bindTooltip(`
                <div class="text-sm">
                    <strong>${districtName}, ${stateName}</strong><br/>
                    Enrollment: ${data.percentage}%<br/>
                    Total: ${data.total.toLocaleString()}
                </div>
            `);
        } else {
            layer.bindTooltip(`
                <div class="text-sm">
                    <strong>${districtName}, ${stateName}</strong><br/>
                    No Data Available
                </div>
            `);
        }
    };

    return (
        <div className="h-full w-full">
            <MapContainer center={[22.5937, 78.9629]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geoJsonData && (
                    <GeoJSON
                        data={geoJsonData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
