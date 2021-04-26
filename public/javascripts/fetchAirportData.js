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
                let airportDataObj = JSON.parse(JSON.stringify(airportData))
                airportDataObj.Message.forEach(element => {
                    let text = document.getElementById("airportInputData").cloneNode(true)  
                    text.style.display="";
                    for(var i=0; i< text.childNodes.length;i++){
                   
                    if (text.childNodes[i].className == "airportName") {
                        text.childNodes[i].placeholder = element.airportName
                    }
                    if (text.childNodes[i].className == "lat") {
                        text.childNodes[i].placeholder = element.airportLat
                    }
                    if (text.childNodes[i].className == "long") {
                        text.childNodes[i].placeholder = element.airportLong
                    }      
                }
                    
                    document.getElementById('rightTable').appendChild(text)
                });
            }
            else {
                alert('No Airports were found' + airportData.message)
            }
        })
}