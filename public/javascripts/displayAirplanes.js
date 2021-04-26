async function airplaneAnimation(airplane,count){


console.log(count)
// var origin = [airplane.departureAirLat, airplane.departureAirLong];
 
// console.log(origin)
// var destination = [airplane.arrivalAirLaT, airplane.arrivalAirLong];
// var origin = [airplane.departureAirLat, airplane.departureAirLong];

// var destination = [airplane.arrivingAirLat, airplane.arrivingAirLong];

var origin1 = [-75.2437,39.8729]
var destination1 = [-74,40]

var origin2 = [-74.2785,38.7951]
var destination2 = [-75.2437,39.8729]

var origin3 = [-76.3790,38.6213]
var destination3 = [-75.2437,39.8729]

var origin4 = [-75.2437,39.8729]
var destination4 = [-76.4565,38.9531]

var origin5=[-75.2437,39.8729]
var destination5=[-75,38.8]
// A simple line from origin to destination.
 route1 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin1, destination1]
            }
        }
    ]
};
route2 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin2, destination2]
            }
        }
    ]
};
route3 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin3, destination3]
            }
        }
    ]
};

route4 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin4, destination4]
            }
        }
    ]
};

route5 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [origin5, destination5]
            }
        }
    ]
};
// A single point that animates along the route.
// Coordinates are initially set to origin.
point1 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin1
            }
        }
    ]
};
point2 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin2
            }
        }
    ]
};

point3 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin3
            }
        }
    ]
};

point4 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin4
            }
        }
    ]
};

point5 = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin5
            }
        }
    ]
};
// Calculate the distance in kilometers between route start/end point.
var lineDistance1 = turf.length(route1.features[0]);
var lineDistance2 = turf.length(route2.features[0]);
var lineDistance3 = turf.length(route3.features[0]);
var lineDistance4 = turf.length(route4.features[0]);
var lineDistance5 = turf.length(route5.features[0]);


var arc1 = [];
var arc2 = [];
var arc3 = [];
var arc4 = [];
var arc5 = [];



// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var steps = 500;

// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance1; i += lineDistance1 / steps) {
    var segment = turf.along(route1.features[0], i);
    arc1.push(segment.geometry.coordinates);
}

for (var i = 0; i < lineDistance2; i += lineDistance2 / steps) {
    var segment = turf.along(route2.features[0], i);
    arc2.push(segment.geometry.coordinates);
}

for (var i = 0; i < lineDistance3; i += lineDistance3 / steps) {
    var segment = turf.along(route3.features[0], i);
    arc3.push(segment.geometry.coordinates);
}

for (var i = 0; i < lineDistance4; i += lineDistance4 / steps) {
    var segment = turf.along(route4.features[0], i);
    arc4.push(segment.geometry.coordinates);
}

for (var i = 0; i < lineDistance5; i += lineDistance5 / steps) {
    var segment = turf.along(route5.features[0], i);
    arc5.push(segment.geometry.coordinates);
}
// // // Update the route with calculated arc coordinates
route1.features[0].geometry.coordinates = arc1;
route2.features[0].geometry.coordinates = arc2;
route3.features[0].geometry.coordinates = arc3;
route4.features[0].geometry.coordinates = arc4;
route5.features[0].geometry.coordinates = arc5;



// Used to increment the value of the point measurement against the route.
var counter1 = 0;
var counter2=0;
var counter3=0;
var counter4=0;
var counter5=0;

map.on('load', function () {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource("route1", {
        'type': 'geojson',
        'data': route1
    });

    map.addSource("route2", {
        'type': 'geojson',
        'data': route2
    });

    map.addSource("route3", {
        'type': 'geojson',
        'data': route3
    });

    map.addSource("route4", {
        'type': 'geojson',
        'data': route4
    });

    map.addSource("route5", {
        'type': 'geojson',
        'data': route5
    });

    map.addSource("point1", {
        'type': 'geojson',
        'data': point1
    });

    map.addSource("point2", {
        'type': 'geojson',
        'data': point2
    });

    map.addSource("point3", {
        'type': 'geojson',
        'data': point3
    });

    map.addSource("point4", {
        'type': 'geojson',
        'data': point4
    });

    map.addSource("point5", {
        'type': 'geojson',
        'data': point5
    });

    map.addLayer({
        'id': 'route1',
        'source': 'route1',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'route2',
        'source': 'route2',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });
    map.addLayer({
        'id': 'route3',
        'source': 'route3',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'route4',
        'source': 'route4',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'route5',
        'source': 'route5',
        'type': 'line',
        'paint': {
            'line-width': 2,
            'line-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'point1',
        'source': 'point1',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    map.addLayer({
        'id': 'point2',
        'source': 'point2',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    map.addLayer({
        'id': 'point3',
        'source': 'point3',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    map.addLayer({
        'id': 'point4',
        'source': 'point4',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    map.addLayer({
        'id': 'point5',
        'source': 'point5',
        'type': 'symbol',
        'layout': {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });

    function animate1() {
        var start =
            route1.features[0].geometry.coordinates[
            counter1 >= steps ? counter1 - 1 : counter1
            ];
        var end =
        route1.features[0].geometry.coordinates[
            counter1 >= steps ? counter1 : counter1 + 1
            ];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point1.features[0].geometry.coordinates =
        route1.features[0].geometry.coordinates[counter1];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point1.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        // Update the source with this new data
        map.getSource("point1").setData(point1);

        // Request the next frame of animation as long as the end has not been reached
        if (counter1 < steps) {
            requestAnimationFrame(animate1);
        }

        counter1 = counter1 + 1;
    }

    function animate3() {
        var start =
            route3.features[0].geometry.coordinates[
            counter3 >= steps ? counter3 - 1 : counter3
            ];
        var end =
        route3.features[0].geometry.coordinates[
            counter3 >= steps ? counter3 : counter3 + 1
            ];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point3.features[0].geometry.coordinates =
        route3.features[0].geometry.coordinates[counter3];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point3.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        // Update the source with this new data
        map.getSource("point3").setData(point3);

        // Request the next frame of animation as long as the end has not been reached
        if (counter3 < steps) {
            requestAnimationFrame(animate3);
        }

        counter3 = counter3 + 1;
    }
    function animate2() {
        var start =
            route2.features[0].geometry.coordinates[
            counter2 >= steps ? counter2 - 1 : counter2
            ];
        var end =
        route2.features[0].geometry.coordinates[
            counter2 >= steps ? counter2 : counter2 + 1
            ];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point2.features[0].geometry.coordinates =
        route2.features[0].geometry.coordinates[counter2];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point2.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        // Update the source with this new data
        map.getSource("point2").setData(point2);

        // Request the next frame of animation as long as the end has not been reached
        if (counter2 < steps) {
            requestAnimationFrame(animate2);
        }

        counter2 = counter2 + 1;
    }
    function animate4() {
        var start =
            route4.features[0].geometry.coordinates[
            counter4 >= steps ? counter4 - 1 : counter4
            ];
        var end =
        route4.features[0].geometry.coordinates[
            counter4 >= steps ? counter4 : counter4 + 1
            ];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point4.features[0].geometry.coordinates =
        route4.features[0].geometry.coordinates[counter4];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point4.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        // Update the source with this new data
        map.getSource("point4").setData(point4);

        // Request the next frame of animation as long as the end has not been reached
        if (counter4 < steps) {
           requestAnimationFrame(animate4);
        }

        counter4 = counter4 + 1;
    }
    function animate5() {
        var start =
            route5.features[0].geometry.coordinates[
            counter5 >= steps ? counter5 - 1 : counter5
            ];
        var end =
        route5.features[0].geometry.coordinates[
            counter5 >= steps ? counter5 : counter5 + 1
            ];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point5.features[0].geometry.coordinates =
        route5.features[0].geometry.coordinates[counter5];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point5.features[0].properties.bearing = turf.bearing(
            turf.point(start),
            turf.point(end)
        );

        // Update the source with this new data
        map.getSource("point5").setData(point5);

        // Request the next frame of animation as long as the end has not been reached
        if (counter5 < steps) {
            requestAnimationFrame(animate5);
        }

        counter5 = counter5 + 1;
    }
    document
        .getElementById('replay')
        .addEventListener('click', function () { 
            location.href='/'
            // // Set the coordinates of the original point back to origin
            // point.features[0].geometry.coordinates = origin;

            // // Update the source layer
            // map.getSource('point').setData(point);

            // // Reset the counter
            // counter = 0;

            // // Restart the animation
            // animate(counter);
        });

    // Start the animation
    animate1(counter1);
    animate2(counter2)
    animate3(counter3)
    animate4(counter4)
    animate5(counter5)

});


}