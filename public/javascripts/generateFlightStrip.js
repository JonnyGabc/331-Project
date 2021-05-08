var stripData=0;
function createFlightStrip() {
    //    (JSON.parse(localStorage.getItem("airplanes"))).forEach(element => {
    //        console.log("E"+ element)
    //    });
    if (document.getElementById("airplaneInText").value == 'N99322'&& stripData==0) {
        // var flightStripNode= document.getElementById("airplaneInputData").cloneNode(true)
        // flightStripNode.hidden=false
        // for(var i=0; i<flightStripNode.childNodes.length;i++){
        //     console.log(flightStripNode.childNodes[i].className)
        //     if(flightStripNode.childNodes[i].className=='callSignText')
        //     {
        //         console.log(flightStripNode.childNodes[i].value)
        //         flightStripNode.childNodes[i].value='N99322'
        //     }
        // }
        // document.getElementById('leftTable').appendChild(flightStripNode)
        document.getElementById('airplaneInputData').hidden = false
        stripData++;
    }
    else if(document.getElementById('airplaneInText').value =="AB9322"){
        document.getElementById('airplaneInputData').hidden = true

        document.getElementById('airplaneInputData2').hidden = false

    }
    else {
        document.getElementById('airplaneInputData').hidden = true
        document.getElementById('airplaneInputData2').hidden = true
        alert("There was no flight found with the callsign: " + document.getElementById('airplaneInText').value)
    }


}