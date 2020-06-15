var map = L.map('map').setView([44.426765, 26.102537],10);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YCQAGGqopYkAlQz2YsFQ', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }).addTo(map);

        //sector 1
        var latlngs = [
            [44.4766389, 25.9676190],
            [44.4827316, 25.9730339],
            [44.4982399, 25.9968251],
            [44.5018833, 26.0025170],
            [44.5145435, 26.0118053],
            [44.5307017, 26.0478897],
            [44.5394258, 26.0989798],
            [44.4880315, 26.1175600],
            [44.4353936, 26.1043031],
            //[44.4372286, 26.0626771]
        ];
        var polygon = L.polygon(latlngs, {color: '#e60000', fill: '#e60000', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 1");

        //sector 2
        var latlngs = [
            [44.4880315, 26.1175600],
            [44.4806784, 26.1787112],
            [44.4550058, 26.1696417],
            [44.4552302, 26.1827514],
            [44.4414365, 26.1919973],
            [44.4353936, 26.1043031]
        ];
        var polygon = L.polygon(latlngs, {color: '#e67300', fill: '#e67300', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 2");

        //sector 3
        var latlngs = [
            [44.4414365, 26.1919973],
            [44.4261633, 26.2199895],
            [44.4063567, 26.2135326],
            [44.3960670, 26.2226117],
            [44.4001469, 26.1611610],
            [44.4253219, 26.1047260],
            [44.4353936, 26.1043031]
        ];
        var polygon = L.polygon(latlngs, {color: '#e6e600', fill: '#e6e600', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 3");

        //sector 4
        var latlngs = [
            [44.4253219, 26.1047260],
            [44.4001469, 26.1611610],
            [44.3695375, 26.1437233],
            [44.3430274, 26.1679386],
            [44.3373213, 26.1493639],
            [44.3691800, 26.0892209],
            [44.4353936, 26.1043031]
        ];
        var polygon = L.polygon(latlngs, {color: '#00e639', fill: '#00e639', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 4");

        //sector 5
        var latlngs = [
            [44.3691800, 26.0892209],
            [44.3778760, 26.0412364],
            [44.3841778, 26.0347002],
            [44.4006718, 26.0179909],
            [44.4296049, 26.0636251],
            [44.4353936, 26.1043031]
        ];
        var polygon = L.polygon(latlngs, {color: '#0039e6', fill: '#0039e6', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 5");

        //sector 6
        var latlngs = [
            [44.4006718, 26.0179909],
            [44.4065028, 25.9774615],
            [44.4184407, 25.9662548],
            [44.4427082, 25.9662199],
            [44.4440915, 26.0131067],
            [44.4457193, 26.0188227],
            [44.4594152, 26.0120838],
            [44.4653252, 25.9756665],
            [44.4766389, 25.9676190],
            [44.4353936, 26.1043031],
            [44.4296049, 26.0636251]
        ];
        var polygon = L.polygon(latlngs, {color: '#7300e6', fill: '#7300e6', opacity:0.5}).addTo(map);
        polygon.bindPopup("Sector 6");
