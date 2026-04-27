var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Shoreline_Change19952025_2 = new ol.format.GeoJSON();
var features_Shoreline_Change19952025_2 = format_Shoreline_Change19952025_2.readFeatures(json_Shoreline_Change19952025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline_Change19952025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline_Change19952025_2.addFeatures(features_Shoreline_Change19952025_2);
var lyr_Shoreline_Change19952025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline_Change19952025_2, 
                style: style_Shoreline_Change19952025_2,
                popuplayertitle: 'Shoreline_Change (1995 - 2025)',
                interactive: true,
    title: 'Shoreline_Change (1995 - 2025)<br />\
    <img src="styles/legend/Shoreline_Change19952025_2_0.png" /> Erosion (< -25m)<br />\
    <img src="styles/legend/Shoreline_Change19952025_2_1.png" /> Stable (-25m - 25m)<br />\
    <img src="styles/legend/Shoreline_Change19952025_2_2.png" /> Accretion (> 25m)<br />' });
var format_Baseline_Onshore_3 = new ol.format.GeoJSON();
var features_Baseline_Onshore_3 = format_Baseline_Onshore_3.readFeatures(json_Baseline_Onshore_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baseline_Onshore_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baseline_Onshore_3.addFeatures(features_Baseline_Onshore_3);
var lyr_Baseline_Onshore_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baseline_Onshore_3, 
                style: style_Baseline_Onshore_3,
                popuplayertitle: 'Baseline_Onshore',
                interactive: true,
                title: '<img src="styles/legend/Baseline_Onshore_3.png" /> Baseline_Onshore'
            });
var format_Shoreline_1995_4 = new ol.format.GeoJSON();
var features_Shoreline_1995_4 = format_Shoreline_1995_4.readFeatures(json_Shoreline_1995_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shoreline_1995_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoreline_1995_4.addFeatures(features_Shoreline_1995_4);
var lyr_Shoreline_1995_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoreline_1995_4, 
                style: style_Shoreline_1995_4,
                popuplayertitle: 'Shoreline_1995',
                interactive: true,
                title: '<img src="styles/legend/Shoreline_1995_4.png" /> Shoreline_1995'
            });
var format_shoreline_2025_5 = new ol.format.GeoJSON();
var features_shoreline_2025_5 = format_shoreline_2025_5.readFeatures(json_shoreline_2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shoreline_2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shoreline_2025_5.addFeatures(features_shoreline_2025_5);
var lyr_shoreline_2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shoreline_2025_5, 
                style: style_shoreline_2025_5,
                popuplayertitle: 'shoreline_2025',
                interactive: true,
                title: '<img src="styles/legend/shoreline_2025_5.png" /> shoreline_2025'
            });
var format_ReferencePoint_6 = new ol.format.GeoJSON();
var features_ReferencePoint_6 = format_ReferencePoint_6.readFeatures(json_ReferencePoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReferencePoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReferencePoint_6.addFeatures(features_ReferencePoint_6);
var lyr_ReferencePoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReferencePoint_6, 
                style: style_ReferencePoint_6,
                popuplayertitle: 'Reference Point',
                interactive: true,
                title: '<img src="styles/legend/ReferencePoint_6.png" /> Reference Point'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Shoreline_Change19952025_2.setVisible(true);lyr_Baseline_Onshore_3.setVisible(true);lyr_Shoreline_1995_4.setVisible(true);lyr_shoreline_2025_5.setVisible(true);lyr_ReferencePoint_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_Shoreline_Change19952025_2,lyr_Baseline_Onshore_3,lyr_Shoreline_1995_4,lyr_shoreline_2025_5,lyr_ReferencePoint_6];
lyr_Shoreline_Change19952025_2.set('fieldAliases', {'baselineid': 'baselineid', 'transorder': 'transorder', 'azimuth': 'azimuth', 'length': 'length', 'tcd': 'tcd', 'shrcount': 'shrcount', 'lrr': 'lrr', 'lr2': 'lr2', 'lci90': 'lci90', 'lse': 'lse', 'epr': 'epr', 'eprunc': 'eprunc', 'nsm': 'nsm', 'sce': 'sce', 'Class': 'Class', });
lyr_Baseline_Onshore_3.set('fieldAliases', {'Id': 'Id', 'Group': 'Group', 'Max_Dist': 'Max_Dist', 'Orienta': 'Orienta', 'Smoothing': 'Smoothing', });
lyr_Shoreline_1995_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_shoreline_2025_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ReferencePoint_6.set('fieldAliases', {'id': 'id', 'Distance': 'Distance', 'Name': 'Name', 'Year': 'Year', 'In/Out Wat': 'In/Out Wat', 'N': 'N', 'E': 'E', 'Location': 'Location', });
lyr_Shoreline_Change19952025_2.set('fieldImages', {'baselineid': 'TextEdit', 'transorder': 'TextEdit', 'azimuth': 'TextEdit', 'length': 'TextEdit', 'tcd': 'TextEdit', 'shrcount': 'TextEdit', 'lrr': 'TextEdit', 'lr2': 'TextEdit', 'lci90': 'TextEdit', 'lse': 'TextEdit', 'epr': 'TextEdit', 'eprunc': 'TextEdit', 'nsm': 'TextEdit', 'sce': 'TextEdit', 'Class': 'TextEdit', });
lyr_Baseline_Onshore_3.set('fieldImages', {'Id': 'Range', 'Group': 'Range', 'Max_Dist': 'Range', 'Orienta': 'TextEdit', 'Smoothing': 'TextEdit', });
lyr_Shoreline_1995_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_shoreline_2025_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ReferencePoint_6.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'In/Out Wat': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', 'Location': 'TextEdit', });
lyr_Shoreline_Change19952025_2.set('fieldLabels', {'baselineid': 'hidden field', 'transorder': 'hidden field', 'azimuth': 'hidden field', 'length': 'hidden field', 'tcd': 'hidden field', 'shrcount': 'hidden field', 'lrr': 'hidden field', 'lr2': 'hidden field', 'lci90': 'hidden field', 'lse': 'hidden field', 'epr': 'hidden field', 'eprunc': 'hidden field', 'nsm': 'inline label - always visible', 'sce': 'hidden field', 'Class': 'inline label - always visible', });
lyr_Baseline_Onshore_3.set('fieldLabels', {'Id': 'no label', 'Group': 'no label', 'Max_Dist': 'no label', 'Orienta': 'no label', 'Smoothing': 'no label', });
lyr_Shoreline_1995_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_shoreline_2025_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_ReferencePoint_6.set('fieldLabels', {'id': 'hidden field', 'Distance': 'inline label - always visible', 'Name': 'inline label - always visible', 'Year': 'hidden field', 'In/Out Wat': 'hidden field', 'N': 'inline label - always visible', 'E': 'inline label - always visible', 'Location': 'inline label - always visible', });
lyr_ReferencePoint_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});