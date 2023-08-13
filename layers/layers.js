ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2932").setExtent([-36121.158270, 231701.991048, 449974.455423, 547024.540456]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_District2DistrictDistrict2020shp_1 = new ol.format.GeoJSON();
var features_District2DistrictDistrict2020shp_1 = format_District2DistrictDistrict2020shp_1.readFeatures(json_District2DistrictDistrict2020shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_District2DistrictDistrict2020shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District2DistrictDistrict2020shp_1.addFeatures(features_District2DistrictDistrict2020shp_1);
var lyr_District2DistrictDistrict2020shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District2DistrictDistrict2020shp_1, 
                style: style_District2DistrictDistrict2020shp_1,
                interactive: true,
                title: '<img src="styles/legend/District2DistrictDistrict2020shp_1.png" /> District (2) — District/District2020.shp'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_District2DistrictDistrict2020shp_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_District2DistrictDistrict2020shp_1];
lyr_District2DistrictDistrict2020shp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DIST_KEY': 'DIST_KEY', 'DIST_NO': 'DIST_NO', 'ANAME': 'ANAME', 'ENAME': 'ENAME', 'KEY_NO': 'KEY_NO', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_SQKM': 'Area_SQKM', });
lyr_District2DistrictDistrict2020shp_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DIST_KEY': 'TextEdit', 'DIST_NO': 'TextEdit', 'ANAME': 'TextEdit', 'ENAME': 'TextEdit', 'KEY_NO': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_SQKM': 'TextEdit', });
lyr_District2DistrictDistrict2020shp_1.set('fieldLabels', {'OBJECTID': 'header label', 'DIST_KEY': 'header label', 'DIST_NO': 'header label', 'ANAME': 'header label', 'ENAME': 'header label', 'KEY_NO': 'header label', 'GLOBALID': 'header label', 'SHAPE_Leng': 'header label', 'SHAPE_Area': 'header label', 'Area_SQKM': 'header label', });
lyr_District2DistrictDistrict2020shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});