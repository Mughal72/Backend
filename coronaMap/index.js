// Create the map and set its default view to world view
var map = L.map('map').setView([20.0, 10.0], 2); // World view

// Add OpenStreetMap tile layer for a free and reliable map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Global variable to hold country data
let countryData = [];

// Function to update map with markers based on the fetched data
function updateMap() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            countryData = data.data; // Store data globally
            data.data.forEach(element => {
                let latitude = element.latitude;
                let longitude = element.longitude;
                let cases = element.infected;

                // Set marker color based on the number of cases
                let color = cases > 255 ? "rgb(255, 0, 0)" : `rgb(${cases}, 0, 0)`;

                // Add marker to map
                L.circleMarker([latitude, longitude], {
                    color: color,
                    radius: 5
                }).addTo(map)
                  .bindPopup(`<strong>${element.country}</strong><br>Cases: ${cases}`);
            });
        });
}


// Call the updateMap function to populate the map
let interval = 20000;
setInterval(updateMap, interval)

// Function to search a country and move to its location on the map
function searchCountry() {
    let countryName = document.getElementById('countrySearch').value.trim().toLowerCase();
    
    // Find the country in the countryData array
    let country = countryData.find(element => element.country.toLowerCase() === countryName);

    if (country) {
        let latitude = country.latitude;
        let longitude = country.longitude;

        // Pan and zoom the map to the country's location
        map.setView([latitude, longitude], 5);

        // Add a popup for the selected country
        L.popup()
          .setLatLng([latitude, longitude])
          .setContent(`<strong>${country.country}</strong><br>Cases: ${country.infected}`)
          .openOn(map);
    } else {
        alert('Country not found! Please check the spelling or try another country.');
    }
}
