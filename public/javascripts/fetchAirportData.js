function fetchAirportData() {
    fetch('/airportData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(airportData => {
            console.log(airportData)
            if (airportData.Success) {                
                let airportDataObj=JSON.parse(JSON.stringify(airportData))
                console.log(airportDataObj.Message)
                airportDataObj.Message.forEach(element => {
                    let text = document.createElement('text')
                    text.innerHTML = JSON.stringify(element)
                    document.getElementById("airportData").appendChild(text)
                });
            }
            else {
                alert('No Airports were found' + airportData.message)
            }
        })
}