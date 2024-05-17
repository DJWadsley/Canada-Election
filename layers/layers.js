var wms_layers = [];

var format_Ridings_0 = new ol.format.GeoJSON();
var features_Ridings_0 = format_Ridings_0.readFeatures(json_Ridings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ridings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ridings_0.addFeatures(features_Ridings_0);
var lyr_Ridings_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ridings_0, 
                style: style_Ridings_0,
                popuplayertitle: "Ridings",
                interactive: true,
    title: 'Ridings<br />\
    <img src="styles/legend/Ridings_0_0.png" /> 1 - 1.8<br />\
    <img src="styles/legend/Ridings_0_1.png" /> 1.8 - 2.6<br />\
    <img src="styles/legend/Ridings_0_2.png" /> 2.6 - 3.4<br />\
    <img src="styles/legend/Ridings_0_3.png" /> 3.4 - 4.2<br />\
    <img src="styles/legend/Ridings_0_4.png" /> 4.2 - 5<br />'
        });

lyr_Ridings_0.setVisible(true);
var layersList = [lyr_Ridings_0];
lyr_Ridings_0.set('fieldAliases', {'fid': 'fid', 'FED_NUM': 'FED_NUM', 'ED_NAMEE': 'Riding Name', 'ED_NAMEF': 'ED_NAMEF', 'POP_CNT': 'POP_CNT', 'PROV_CODE': 'Province', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', 'OBJECTID': 'OBJECTID', 'REPORDER': 'REPORDER', 'Modelwin': 'Modelwin', 'Modeltext': 'Model Winner', 'Newresults_Province': 'Newresults_Province', 'Newresults_Electoral District Name': 'Newresults_Electoral District Name', 'Newresults_Liberal Votes': 'Newresults_Liberal Votes', 'Newresults_Liberal Percent': 'Liberal Party', 'Newresults_Conservative Votes': 'Newresults_Conservative Votes', 'Newresults_Conservative Percent': 'Conservative Party', 'Newresults_Bloc Votes': 'Newresults_Bloc Votes', 'Newresults_Bloc Percent': 'Bloc Québécois', 'Newresults_NDP Votes': 'Newresults_NDP Votes', 'Newresults_NDP Percent': 'NDP', 'Newresults_Green Votes': 'Newresults_Green Votes', 'Newresults_Green Percent': 'Green Party', 'Newresults_PPC Votes': 'Newresults_PPC Votes', 'Newresults_PPC Percent': 'PPC', 'Newresults_Other Votes': 'Newresults_Other Votes', 'Newresults_Other Percent': 'Other Parties', });
lyr_Ridings_0.set('fieldImages', {'fid': 'Hidden', 'FED_NUM': 'Hidden', 'ED_NAMEE': 'TextEdit', 'ED_NAMEF': 'Hidden', 'POP_CNT': 'Hidden', 'PROV_CODE': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', 'OBJECTID': 'Hidden', 'REPORDER': 'Hidden', 'Modelwin': 'Hidden', 'Modeltext': 'TextEdit', 'Newresults_Province': 'Hidden', 'Newresults_Electoral District Name': 'Hidden', 'Newresults_Liberal Votes': 'Hidden', 'Newresults_Liberal Percent': 'TextEdit', 'Newresults_Conservative Votes': 'Hidden', 'Newresults_Conservative Percent': 'TextEdit', 'Newresults_Bloc Votes': 'Hidden', 'Newresults_Bloc Percent': 'TextEdit', 'Newresults_NDP Votes': 'Hidden', 'Newresults_NDP Percent': 'TextEdit', 'Newresults_Green Votes': 'Hidden', 'Newresults_Green Percent': 'TextEdit', 'Newresults_PPC Votes': 'Hidden', 'Newresults_PPC Percent': 'TextEdit', 'Newresults_Other Votes': 'Hidden', 'Newresults_Other Percent': 'TextEdit', });
lyr_Ridings_0.set('fieldLabels', {'ED_NAMEE': 'header label - visible with data', 'PROV_CODE': 'inline label - visible with data', 'Modeltext': 'inline label - visible with data', 'Newresults_Liberal Percent': 'inline label - visible with data', 'Newresults_Conservative Percent': 'inline label - visible with data', 'Newresults_Bloc Percent': 'inline label - visible with data', 'Newresults_NDP Percent': 'inline label - visible with data', 'Newresults_Green Percent': 'inline label - visible with data', 'Newresults_PPC Percent': 'inline label - visible with data', 'Newresults_Other Percent': 'inline label - visible with data', });
lyr_Ridings_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});