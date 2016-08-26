---
layout: default
title: Midva
---

<div class="post">
	<h1 class="pageTitle">Midva</h1>

	<img src="{{ '/assets/img/midva.jpg' | prepend: site.baseurl }}" alt=""> 
	<p class="intro">Hej. Sva Ana in Primož. Ana je nadobudna biotehnologinja, Primož pa geek. In ker imava letos možnost iskoristiti prosto leto na faksu, sva se odločila, da ne ostaneva doma in delava, kot večina drugih. Priložnost bova izkoristila drugače. Če želiš izvedeti kako, spremljaj najih blog.</p>

	<p></p>


    <h2>Kje sva že bila?</h2>

    <script src="https://www.amcharts.com/lib/3/ammap.js" type="text/javascript"></script>
    <script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js" type="text/javascript"></script>
    <script src="https://www.amcharts.com/lib/3/themes/dark.js" type="text/javascript"></script>
    <div id="mapdiv" style="height: 450px;"></div>
    <script type="text/javascript">
    var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#ffffff",
    backgroundAlpha : 1,
    zoomControl: {
    zoomControlEnabled : true
    },
    dataProvider : {
    map : "worldHigh",
    getAreasFromMap : true,
    areas :
    [
        {
            "id": "AT",
            "showAsSelected": true
        },
        {
            "id": "BA",
            "showAsSelected": true
        },
        {
            "id": "BE",
            "showAsSelected": true
        },
        {
            "id": "CH",
            "showAsSelected": true
        },
        {
            "id": "CZ",
            "showAsSelected": true
        },
        {
            "id": "DE",
            "showAsSelected": true
        },
        {
            "id": "DK",
            "showAsSelected": true
        },
        {
            "id": "FR",
            "showAsSelected": true
        },
        {
            "id": "GB",
            "showAsSelected": true
        },
        {
            "id": "HR",
            "showAsSelected": true
        },
        {
            "id": "HU",
            "showAsSelected": true
        },
        {
            "id": "IT",
            "showAsSelected": true
        },
        {
            "id": "NL",
            "showAsSelected": true
        },
        {
            "id": "NO",
            "showAsSelected": true
        },
        {
            "id": "SE",
            "showAsSelected": true
        },
        {
            "id": "SI",
            "showAsSelected": true
        },
        {
            "id": "VA",
            "showAsSelected": true
        },
        {
            "id": "US",
            "showAsSelected": true
        }
    ]
    },
    areasSettings : {
    autoZoom : true,
    color : "#B4B4B7",
    colorSolid : "#2e8b57",
    selectedColor : "#2e8b57",
    outlineColor : "#666666",
    rollOverColor : "#777777",
    rollOverOutlineColor : "#000000"
    }
    });
    </script>

</div>
