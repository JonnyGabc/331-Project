function getAirport(event) {
    event.preventDefault();
    const userData = {
      model: document.getElementById('applianceModel').innerText
    }
    console.log(userData);
    fetch('/browse-dishwashers', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.accessToken
      },
      body: JSON.stringify(userData) // body data type must match "Content-Type" header
    }).then(res => res.json())
      .then(data => {
        console.log(data.Success)
        if (data.Success) {

          alert('Successfully added to cart')
        }
        if (!data.Success) {
          alert('Not added to cart')
        }
      })
  }
  document.getElementById('submitButton').addEventListener("click", getForm);
