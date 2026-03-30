/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

// Map Centered in Sabero
const map = L.map('map', {scrollWheelZoom: false}).setView([42.8355023,-5.1488651], 13);

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
satellite.addTo(map);

// River Beach
L.marker([42.8372956,-5.1261479]).addTo(map).bindPopup("<b>Playa de Sabero</b>").openPopup();

// Interest Places
L.marker([42.8535220, -5.1932885]).addTo(map).bindPopup("<b>La Camperona</b>");
L.marker([42.8383703, -5.1540162]).addTo(map).bindPopup("<b>Museo de la Siderurgia y la Minería</b>");
L.marker([42.8494548, -5.1298535]).addTo(map).bindPopup("<b>Puente colgante de Alejico</b>")
L.marker([42.8475591, -5.1284778]).addTo(map).bindPopup("<b>Canal de Aguas Bravas (Alejico)</b>");
L.marker([42.8558668, -5.1798688]).addTo(map).bindPopup("<b>Cueva de Valdelajo</b>");
L.marker([42.8283754, -5.1278820]).addTo(map).bindPopup("<b>Factoría Minera Vegamediana</b>")
L.marker([42.8223161, -5.1628314]).addTo(map).bindPopup("<b>Refugio de Valdegüida</b>")
L.marker([42.8260930, -5.1711779]).addTo(map).bindPopup("<b>Ferrata de Valdetorno</b>")
