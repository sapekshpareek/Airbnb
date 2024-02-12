mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker()
  .setLngLat(coordinates) //Coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML("<h3>Welcome to Wanderly!</h3>")
  )
  .addTo(map);
