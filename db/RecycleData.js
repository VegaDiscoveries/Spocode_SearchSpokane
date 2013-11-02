var RecycleTotalsMap = [];
var RecyclePlasticMap = [];
var RecycleCardboardMap = [];
var RecycleNewspaperMap = [];
var RecycleAluminumMap = [];
var RecycleTinMap = [];
var RecycleGlassMap = [];
var RecycleBatteryMap = [];

function getRecycleDataFromService() {
    $.ajax({
        type: "GET",
        url: "http://communities.socrata.com/resource/65a4-f9k9.json",
        success: function(msg) {
            gotRecycleData(msg);
        }
    });
}

function gotRecycleData(msg) {
    var itm, loc;
    for (var i = 0; i < msg.length; i++) {
        itm = msg[i];
        if (itm.rcy_gross_wt) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.rcy_gross_wt;
            RecycleTotalsMap.push(loc);
        }
        if (itm.glass_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.glass_wt_gross;
            RecycleGlassMap.push(loc);
        }
        if (itm.tin_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.tin_wt_gross;
            RecycleTinMap.push(loc);
        }
        if (itm.cardboard_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.cardboard_wt_gross;
            RecycleCardboardMap.push(loc);
        }
        if (itm.aluminum_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.aluminum_wt_gross;
            RecycleAluminumMap.push(loc);
        }
        if (itm.plastic_1_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.plastic_1_wt_gross;
            RecyclePlasticMap.push(loc);
        }
        if (itm.newspaper_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.newspaper_wt_gross;
            RecycleNewspaperMap.push(loc);
        }
        if (itm.batteries_wt_gross) {
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.location.latitude, itm.location.longitude);
            loc.weight = itm.batteries_wt_gross;
            RecycleBatteryMap.push(loc);
        }
    }
    // 
    heatmapRecycle = new google.maps.visualization.HeatmapLayer({ data: RecycleTotalsMap, dissipating: true });
    heatmapRecycleGlass = new google.maps.visualization.HeatmapLayer({ data: RecycleGlassMap, dissipating: true });
    heatmapRecycleTin = new google.maps.visualization.HeatmapLayer({ data: RecycleTinMap, dissipating: true });
    heatmapRecycleCardboard = new google.maps.visualization.HeatmapLayer({ data: RecycleCardboardMap, dissipating: true });
    heatmapRecycleAluminum = new google.maps.visualization.HeatmapLayer({ data: RecycleAluminumMap, dissipating: true });
    heatmapRecyclePlastic = new google.maps.visualization.HeatmapLayer({ data: RecyclePlasticMap, dissipating: true });
    heatmapRecycleNewspaper = new google.maps.visualization.HeatmapLayer({ data: RecycleNewspaperMap, dissipating: true });
    heatmapRecycleBatteries = new google.maps.visualization.HeatmapLayer({ data: RecycleBatteryMap, dissipating: true });
}


