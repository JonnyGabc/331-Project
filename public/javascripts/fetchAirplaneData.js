function fetchAirplaneData() {
    fetch('/db', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(airPlaneData => {
            console.log(airPlaneData)
            if (airPlaneData.Success) {                
                let airPlaneDataObj=JSON.parse(JSON.stringify(airPlaneData))
                console.log(airPlaneDataObj.Message)
                airPlaneDataObj.Message.forEach(element => {
                    let p = document.createElement('p')
                    p.innerHTML = JSON.stringify(element)
                    document.getElementById('leftBoxText').appendChild(p)
                });
            }
            else {
                alert('No Airplanes were found' + airPlaneData.message)
            }
        })
}