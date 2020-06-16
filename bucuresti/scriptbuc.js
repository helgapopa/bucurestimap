var map = L.map('map').setView([44.426765, 26.102537],10);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YCQAGGqopYkAlQz2YsFQ', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }).addTo(map);

        //sector 1
        var latlngs = [
            [44.4954586, 25.9988890],
            [44.5336402, 26.0708225],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#e60000', fill: '#e60000', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 1");

        //sector 2
        var latlngs = [
            [44.5336402, 26.0708225],
            [44.5346752, 26.1434207],
            [44.4987715, 26.2039421],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#e67300', fill: '#e67300', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 2");

        //sector 3
        var latlngs = [
            [44.4987715, 26.2039421],
            [44.4615745, 26.2362566],
            [44.4085990, 26.2338877],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#e6e600', fill: '#e6e600', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 3");

        //sector 4
        var latlngs = [
            [44.4085990, 26.2338877],
            [44.3588118, 26.2019450],
            [44.3377685, 26.1491926],
            [44.3439188, 26.0821498],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#00e639', fill: '#00e639', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 4");

        //sector 5
        var latlngs = [
            [44.3439188, 26.0821498],
            [44.3664849, 26.0175775],
            [44.3831007, 25.9935401],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#0039e6', fill: '#0039e6', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 5");

        //sector 6
        var latlngs = [
            [44.3831007, 25.9935401],
            [44.4363828, 25.9669523],
            [44.4954586, 25.9988890],
            [44.4330436, 26.1024262]
        ];
        var polygon = L.polygon(latlngs, {color: '#7300e6', fill: '#7300e6', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 6");