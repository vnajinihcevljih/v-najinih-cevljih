---
layout: default
title: Midva
---

<div class="post">
	<h1 class="pageTitle">V najinih čevljih. Si.</h1>

    <p class="intro"><span class="dropcap">N</span>e dobesedno, seveda. Verjetno malo smrdijo/bodo smrdela  po vseh teh prehojenih poteh, tako da ti ne privoščiva tega trpljenja. Boš pa lahko skozi najina razmišljanja in doživljanja potoval z nama, "stopal" v najine čevlje.</p>

    <p>Blog je nastal večinoma iz enega samega razloga. V začetku oktobra se namreč odpravljava daleč na drugo stran naše sploščene krogle, v deželo dolgega belega oblaka, kot so jo imenovali prvi naseljenci, v Novo Zelandijo. Ker bi rada v teh osmih mesecih  ohranjala stike s svojimi najdražjimi, predvsem pa jih/vas obveščala o tem, kod se potikava, ter da sva še živa, sva se odločila, da svoje vtise, misli in slike strneva v nekakšne objave, ki vas bodo zasipavale naslednje mesece. Upam, da bova pridna, da bo inernet na voljo, in da bo dogodivščin zvrhan koš, prav tako pa tudi zdravja.</p>

    <img src="{{ '/assets/img/midva.jpg' | prepend: site.baseurl }}" alt=""> 
	
    <p>Za tiste, ki boste brali blog, pa naju malo manj poznate, sva Ana in Primož, trenutno še študenta, ki v naslednjem letu koristiva absolventski staž. Po srcu sva velika ljubitelja narave,  potovanj ter "robinzonskega" odkrivanja kotičkov sveta. Zaradi vseh obveznosti, pomanjkanja časa in denarja, sva do sedaj le te odkrivala manj kot bi si želela, zato pa bo naslednje leto/obdobje toliko bolj pestro. Med odkrivanjem sveta tam doli upava, da bova bolje spoznala tudi svoje želje in cilje za prihodnost ter mogoče prišla do kakih novih idej in načrtov. Pred nama je namreč čas, ko kmalu ne bo več študentskih ugodnosti in udobja, ki nama ga ponuja toplo zavetje doma. Izkušnji, ki naju čaka, zato dajava veliko vrednost in težo in srčno upava, da jo bova kar se da izkoristila.</p>

    <p>Pa da prideva srečno domov. (to je  najbolj pomembno dodati za najine starše :))</p>

    <h5>Ana & Primož</h5>

    <p>P.S. Hvala vsem, ki naju podpirate. Upava, da ne boste pozabili na naju, da tudi časovna razlika ne bo predstavljala prevelike ovire, da se ne bi vmes kaj "slišali".</p>

    <p>(Zdaj pa lahko stopite ven. Iz čevljev seveda! :D )</p>
    
    <br/><br/><br/>


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
