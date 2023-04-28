const weatherRequest = new Request("https://api.weatherapi.com/v1/current.json?key=70ce060ee44c45d18f0152527232804&q=");

weatherRequest.get("London")
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error', error);
    });

