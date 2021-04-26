
async function getAirplane(event) {
    event.preventDefault();
    console.log()
    const userData = {
      flightPlan: document.getElementById('airplaneInText').value
    }    
    fetch('/airplaneByFlightPlan', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify(userData) // body data type must match "Content-Type" header
    }).then(res =>  res.json())    
      .then(data => {       
          alert(JSON.stringify(data))       
        
      })
  }
  
  //d