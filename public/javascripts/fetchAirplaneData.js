async function fetchAirplaneData() {
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
                localStorage.setItem("airplanes",JSON.stringify(airPlaneDataObj.Message))  
                console.log(localStorage.getItem('airplanes'))           
                airPlaneDataObj.Message.forEach(element => {                    
                    let text = document.getElementById("airplaneInputData").cloneNode(true)  
                    text.style.display="";
                    for(var i=0; i< text.childNodes.length;i++){
                        
                        if(text.childNodes[i].className =="callSign")
                        {                            
                            text.childNodes[i].placeholder = element.callSign                            
                        }
                        if(text.childNodes[i].className =="aircraftType")
                        {
                            text.childNodes[i].placeholder = element.aircraftType
                        }
                        if(text.childNodes[i].className =="flightPlan")
                        {
                            text.childNodes[i].placeholder = element.flightPlan
                        }
                        if(text.childNodes[i].className =="requiredAltitude")
                        {
                            text.childNodes[i].placeholder = element.requiredAltitude
                        }
                        if(text.childNodes[i].className =="departmentAirport")
                        {
                            text.childNodes[i].placeholder = element.departmentAirport
                        }
                        if(text.childNodes[i].className =="arrivingAirport")
                        {
                            text.childNodes[i].placeholder = element.arrivingAirport
                        }
                    }              
                    
                    document.getElementById('leftTable').appendChild(text)
                });
            // })
            }
            else {
                alert('No Airplanes were found' + airPlaneData.message)
            }
        })
}