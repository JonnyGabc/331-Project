async function getAirport(name) {
    const userData = {
      airportName: name
    }    
    fetch('/airportByName', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify(userData) // body data type must match "Content-Type" header
    }).then(res =>  res.json())    
      .then(data => {       
          console.log(JSON.stringify(data))
          setTimeout(()=>{},5000)
          return JSON.stringify(data)        
        
      })
  }
  //document.getElementById('submitButton').addEventListener("click", getAirport(document.getElementById('airportSearch')));
