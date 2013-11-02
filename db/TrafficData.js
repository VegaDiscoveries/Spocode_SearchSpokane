var TrafficMap = [];
var TrafficMapPeak = [];
var TrafficMapDaily = [];
var TrafficMapNB = [];
var TrafficMapSB = [];
var TrafficMapEB = [];
var TrafficMapWB = [];

function getTrafficDataFromService() {
    $.ajax({
        type: "GET",
        url: "http://communities.socrata.com/resource/7m8u-erqc.json",
        success: function(msg) {
            gotTrafficData(msg);
        }
    });
}

function gotTrafficData(msg) {
    var itm, loc;
    var daily, peak, dir;
    for (var i = 0; i < msg.length; i++) {
        itm = msg[i];
        if (itm.latitude) {
            dir = '';
            daily = 0;
            peak = 0;
            if (itm.direction) {
                dir = itm.direction;
            }
            if (itm.adjusted_awdt) {
                daily = itm.adjusted_awdt;
            }
            if (itm.adjusted_pm_peak_hr_volume) {
                peak = itm.adjusted_pm_peak_hr_volume;
            }
            loc = new Array;
            loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
            loc.weight = daily + peak;
            TrafficMap.push(loc);
            if (peak > 0) {
                loc = new Array;
                loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                loc.weight = peak;
                TrafficMapPeak.push(loc);
            }
            if (daily > 0) {
                loc = new Array;
                loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                loc.weight = daily;
                TrafficMapDaily.push(loc);
            }
            if ((daily + peak) > 0) {
                if (dir == 'NB') {
                    loc = new Array;
                    loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                    loc.weight = daily + peak;
                    TrafficMapNB.push(loc);
                }
                if (dir == 'SB') {
                    loc = new Array;
                    loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                    loc.weight = daily + peak;
                    TrafficMapSB.push(loc);
                }
                if (dir == 'EB') {
                    loc = new Array;
                    loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                    loc.weight = daily + peak;
                    TrafficMapEB.push(loc);
                }
                if (dir == 'WB') {
                    loc = new Array;
                    loc.location = new google.maps.LatLng(itm.latitude, itm.longitude);
                    loc.weight = daily + peak;
                    TrafficMapWB.push(loc);
                }
            } 
        }
    }
    // 
    heatmapTraffic = new google.maps.visualization.HeatmapLayer({ data: TrafficMap, dissipating: true });
    heatmapTrafficPeak = new google.maps.visualization.HeatmapLayer({ data: TrafficMapPeak, dissipating: true });
    heatmapTrafficDaily = new google.maps.visualization.HeatmapLayer({ data: TrafficMapDaily, dissipating: true });
    heatmapTrafficNB = new google.maps.visualization.HeatmapLayer({ data: TrafficMapNB, dissipating: true });
    heatmapTrafficSB = new google.maps.visualization.HeatmapLayer({ data: TrafficMapSB, dissipating: true });
    heatmapTrafficEB = new google.maps.visualization.HeatmapLayer({ data: TrafficMapEB, dissipating: true });
    heatmapTrafficWB = new google.maps.visualization.HeatmapLayer({ data: TrafficMapWB, dissipating: true });
}


