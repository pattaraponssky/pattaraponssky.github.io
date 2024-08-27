var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "จังหวัด",
                interactive: true,
    title: 'จังหวัด<br />\
    <img src="styles/legend/_2_0.png" /> จ.ฉะเชิงเทรา<br />\
    <img src="styles/legend/_2_1.png" /> จ.ชลบุรี<br />\
    <img src="styles/legend/_2_2.png" /> จ.ระยอง<br />\
    <img src="styles/legend/_2_3.png" /> <br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "ตำบล",
                interactive: true,
    title: 'ตำบล<br />\
    <img src="styles/legend/_3_0.png" /> เขตลาดกระบัง<br />\
    <img src="styles/legend/_3_1.png" /> เขตหนองจอก<br />\
    <img src="styles/legend/_3_2.png" /> อ.เกาะจันทร์<br />\
    <img src="styles/legend/_3_3.png" /> อ.เกาะสีชัง<br />\
    <img src="styles/legend/_3_4.png" /> อ.เขาชะเมา<br />\
    <img src="styles/legend/_3_5.png" /> อ.เมืองฉะเชิงเทรา<br />\
    <img src="styles/legend/_3_6.png" /> อ.เมืองชลบุรี<br />\
    <img src="styles/legend/_3_7.png" /> อ.เมืองระยอง<br />\
    <img src="styles/legend/_3_8.png" /> อ.แกลง<br />\
    <img src="styles/legend/_3_9.png" /> อ.แปลงยาว<br />\
    <img src="styles/legend/_3_10.png" /> อ.คลองเขื่อน<br />\
    <img src="styles/legend/_3_11.png" /> อ.ท่าตะเกียบ<br />\
    <img src="styles/legend/_3_12.png" /> อ.นิคมพัฒนา<br />\
    <img src="styles/legend/_3_13.png" /> อ.บ่อทอง<br />\
    <img src="styles/legend/_3_14.png" /> อ.บางคล้า<br />\
    <img src="styles/legend/_3_15.png" /> อ.บางน้ำเปรี้ยว<br />\
    <img src="styles/legend/_3_16.png" /> อ.บางปะกง<br />\
    <img src="styles/legend/_3_17.png" /> อ.บางละมุง<br />\
    <img src="styles/legend/_3_18.png" /> อ.บ้านโพธิ์<br />\
    <img src="styles/legend/_3_19.png" /> อ.บ้านค่าย<br />\
    <img src="styles/legend/_3_20.png" /> อ.บ้านฉาง<br />\
    <img src="styles/legend/_3_21.png" /> อ.บ้านบึง<br />\
    <img src="styles/legend/_3_22.png" /> อ.ปลวกแดง<br />\
    <img src="styles/legend/_3_23.png" /> อ.พนมสารคาม<br />\
    <img src="styles/legend/_3_24.png" /> อ.พนัสนิคม<br />\
    <img src="styles/legend/_3_25.png" /> อ.พานทอง<br />\
    <img src="styles/legend/_3_26.png" /> อ.ราชสาส์น<br />\
    <img src="styles/legend/_3_27.png" /> อ.วังจันทร์<br />\
    <img src="styles/legend/_3_28.png" /> อ.ศรีราชา<br />\
    <img src="styles/legend/_3_29.png" /> อ.สนามชัยเขต<br />\
    <img src="styles/legend/_3_30.png" /> อ.สัตหีบ<br />\
    <img src="styles/legend/_3_31.png" /> อ.หนองใหญ่<br />\
    <img src="styles/legend/_3_32.png" /> <br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "อำเภอ",
                interactive: true,
    title: 'อำเภอ<br />\
    <img src="styles/legend/_4_0.png" /> กรุงเทพมหานคร<br />\
    <img src="styles/legend/_4_1.png" /> จ.ฉะเชิงเทรา<br />\
    <img src="styles/legend/_4_2.png" /> จ.ชลบุรี<br />\
    <img src="styles/legend/_4_3.png" /> จ.ระยอง<br />\
    <img src="styles/legend/_4_4.png" /> <br />'
        });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "เทศบาล",
                interactive: true,
    title: 'เทศบาล<br />\
    <img src="styles/legend/_5_0.png" /> จ.ฉะเชิงเทรา<br />\
    <img src="styles/legend/_5_1.png" /> จ.ชลบุรี<br />\
    <img src="styles/legend/_5_2.png" /> จ.ระยอง<br />\
    <img src="styles/legend/_5_3.png" /> <br />'
        });
var format_47_6 = new ol.format.GeoJSON();
var features_47_6 = format_47_6.readFeatures(json_47_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_47_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_47_6.addFeatures(features_47_6);
var lyr_47_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_47_6, 
                style: style_47_6,
                popuplayertitle: "นิคมอุตสาหกรรมตะวันออก 47",
                interactive: true,
                title: '<img src="styles/legend/47_6.png" /> นิคมอุตสาหกรรมตะวันออก 47'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: "นิคมอุตสาหกรรมบางปะกง",
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> นิคมอุตสาหกรรมบางปะกง'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: "เส้นลำน้ำ",
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> เส้นลำน้ำ'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: "ถนน",
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> ถนน'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: "สถานีรถไฟบางปะกง",
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> สถานีรถไฟบางปะกง'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: "สถานีรถไฟตะวันออก",
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> สถานีรถไฟตะวันออก'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: "สถานีน้ำฝน",
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> สถานีน้ำฝน'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__13, 
                style: style__13,
                popuplayertitle: "ทางรถไฟ",
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> ทางรถไฟ'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__14, 
                style: style__14,
                popuplayertitle: "สถานีสูบน้ำ",
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> สถานีสูบน้ำ'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__15, 
                style: style__15,
                popuplayertitle: "อ่างเก็บน้ำ",
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> อ่างเก็บน้ำ'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__16, 
                style: style__16,
                popuplayertitle: "สถานีโทรคมนาคม",
                interactive: true,
                title: '<img src="styles/legend/_16.png" /> สถานีโทรคมนาคม'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__17, 
                style: style__17,
                popuplayertitle: "สถานีวัดการไหล",
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> สถานีวัดการไหล'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__18, 
                style: style__18,
                popuplayertitle: "โรงงาน",
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> โรงงาน'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_47_6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr__2,lyr__3,lyr__4,lyr__5,lyr_47_6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17,lyr__18];
lyr__2.set('fieldAliases', {'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'ORIG_FID': 'ORIG_FID', 'REMARK': 'REMARK', 'DISTANCE': 'DISTANCE', 'AREA_SQKM': 'AREA_SQKM', });
lyr__3.set('fieldAliases', {'TAMBON_IDN': 'TAMBON_IDN', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPHOE_IDN': 'AMPHOE_IDN', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'ORIG_FID': 'ORIG_FID', 'REMARK': 'REMARK', 'DISTANCE': 'DISTANCE', 'AREA_SQKM': 'AREA_SQKM', });
lyr__4.set('fieldAliases', {'AMPHOE_IDN': 'AMPHOE_IDN', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'ORIG_FID': 'ORIG_FID', 'REMARK': 'REMARK', 'DISTANCE': 'DISTANCE', 'AREA_SQKM': 'AREA_SQKM', });
lyr__5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MUNI_UP_': 'MUNI_UP_', 'MUNI_UP_ID': 'MUNI_UP_ID', 'MUNI_CODE': 'MUNI_CODE', 'MUNI_NAME': 'MUNI_NAME', 'AMP_CODE': 'AMP_CODE', 'PROV_CODE': 'PROV_CODE', 'AMPHOE_T': 'AMPHOE_T', 'PROV_NAM_T': 'PROV_NAM_T', });
lyr_47_6.set('fieldAliases', {'Name': 'Name', 'TAMBON': 'TAMBON', 'DISTRICT': 'DISTRICT', 'PROVINCE': 'PROVINCE', 'IND_DATE': 'IND_DATE', 'IND_AREA': 'IND_AREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__7.set('fieldAliases', {'Ind_Type': 'Ind_Type', 'Ind_Name': 'Ind_Name', 'Ind_Date': 'Ind_Date', });
lyr__8.set('fieldAliases', {'CLASS': 'CLASS', 'STR_NAM_T': 'STR_NAM_T', 'STR_NAM_E': 'STR_NAM_E', 'NAME': 'NAME', });
lyr__9.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'MAINROAD_': 'MAINROAD_', 'MAINROAD_I': 'MAINROAD_I', 'TYPE': 'TYPE', 'NAME': 'NAME', });
lyr__10.set('fieldAliases', {'Name': 'Name', 'TFac_PT_Na': 'TFac_PT_Na', 'TFac_PT__1': 'TFac_PT__1', 'UTM_N': 'UTM_N', 'UTM_E': 'UTM_E', 'Image': 'Image', });
lyr__11.set('fieldAliases', {'Name': 'Name', 'Trans_Stat': 'Trans_Stat', 'Trans_St_1': 'Trans_St_1', 'Trans_Type': 'Trans_Type', 'UTM_E': 'UTM_E', 'UTM_N': 'UTM_N', 'Image': 'Image', });
lyr__12.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'agency': 'agency', 'tambon': 'tambon', 'district': 'district', 'province': 'province', 'lat': 'lat', 'long': 'long', 'sta_code': 'sta_code', 'Image': 'Image', });
lyr__13.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'name_t': 'name_t', 'name_e': 'name_e', 'railway_tr': 'railway_tr', 'elevate': 'elevate', 'source_nam': 'source_nam', 'source_dat': 'source_dat', 'photo': 'photo', 'unique_id': 'unique_id', 'fnode': 'fnode', 'tnode': 'tnode', 'ra_name_t': 'ra_name_t', 'ra_name_e': 'ra_name_e', 'ra_type': 'ra_type', 'length': 'length', });
lyr__14.set('fieldAliases', {'pump_code': 'pump_code', 'Name': 'Name', 'meter_num': 'meter_num', 'site': 'site', 'area': 'area', 'type': 'type', 'agency': 'agency', 'source': 'source', 'lat': 'lat', 'long': 'long', });
lyr__15.set('fieldAliases', {'Reservoir_': 'Reservoir_', 'no': 'no', 'res_code': 'res_code', 'rid_code': 'rid_code', 'tambon': 'tambon', 'district': 'district', 'province': 'province', 'type': 'type', 'size': 'size', 'owner': 'owner', 'long': 'long', 'lat': 'lat', 'da_km2': 'da_km2', 'maxvol': 'maxvol', 'nhvol': 'nhvol', 'minvol': 'minvol', 'maxwl': 'maxwl', 'nhwl': 'nhwl', 'minwl': 'minwl', 'inflow_avg': 'inflow_avg', 'Image': 'Image', });
lyr__16.set('fieldAliases', {'sta_code': 'sta_code', 'agency': 'agency', 'tambon': 'tambon', 'district': 'district', 'province': 'province', 'lat': 'lat', 'long': 'long', 'Image': 'Image', });
lyr__17.set('fieldAliases', {'Level_Stat': 'Level_Stat', 'Level_St_1': 'Level_St_1', 'district': 'district', 'province': 'province', 'da_km2': 'da_km2', 'lat': 'lat', 'long': 'long', });
lyr__18.set('fieldAliases', {'name': 'name', 'name2': 'name2', 'area': 'area', 'long': 'long', 'lat': 'lat', 'Image': 'Image', });
lyr__2.set('fieldImages', {'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'ORIG_FID': 'Range', 'REMARK': 'TextEdit', 'DISTANCE': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr__3.set('fieldImages', {'TAMBON_IDN': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPHOE_IDN': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'ORIG_FID': 'Range', 'REMARK': 'TextEdit', 'DISTANCE': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr__4.set('fieldImages', {'AMPHOE_IDN': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'ORIG_FID': 'Range', 'REMARK': 'TextEdit', 'DISTANCE': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr__5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MUNI_UP_': 'TextEdit', 'MUNI_UP_ID': 'TextEdit', 'MUNI_CODE': 'TextEdit', 'MUNI_NAME': 'TextEdit', 'AMP_CODE': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'PROV_NAM_T': 'TextEdit', });
lyr_47_6.set('fieldImages', {'Name': 'TextEdit', 'TAMBON': 'TextEdit', 'DISTRICT': 'TextEdit', 'PROVINCE': 'TextEdit', 'IND_DATE': 'TextEdit', 'IND_AREA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__7.set('fieldImages', {'Ind_Type': 'TextEdit', 'Ind_Name': 'TextEdit', 'Ind_Date': 'TextEdit', });
lyr__8.set('fieldImages', {'CLASS': 'TextEdit', 'STR_NAM_T': 'TextEdit', 'STR_NAM_E': 'TextEdit', 'NAME': 'TextEdit', });
lyr__9.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'MAINROAD_': 'TextEdit', 'MAINROAD_I': 'TextEdit', 'TYPE': 'TextEdit', 'NAME': 'TextEdit', });
lyr__10.set('fieldImages', {'Name': 'TextEdit', 'TFac_PT_Na': 'TextEdit', 'TFac_PT__1': 'TextEdit', 'UTM_N': 'TextEdit', 'UTM_E': 'TextEdit', 'Image': 'ExternalResource', });
lyr__11.set('fieldImages', {'Name': 'TextEdit', 'Trans_Stat': 'TextEdit', 'Trans_St_1': 'TextEdit', 'Trans_Type': 'TextEdit', 'UTM_E': 'TextEdit', 'UTM_N': 'TextEdit', 'Image': 'ExternalResource', });
lyr__12.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'agency': 'TextEdit', 'tambon': 'TextEdit', 'district': 'TextEdit', 'province': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'sta_code': 'TextEdit', 'Image': 'ExternalResource', });
lyr__13.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'name_t': 'TextEdit', 'name_e': 'TextEdit', 'railway_tr': 'TextEdit', 'elevate': 'TextEdit', 'source_nam': 'TextEdit', 'source_dat': 'TextEdit', 'photo': 'TextEdit', 'unique_id': 'TextEdit', 'fnode': 'TextEdit', 'tnode': 'TextEdit', 'ra_name_t': 'TextEdit', 'ra_name_e': 'TextEdit', 'ra_type': 'TextEdit', 'length': 'TextEdit', });
lyr__14.set('fieldImages', {'pump_code': 'TextEdit', 'Name': 'TextEdit', 'meter_num': 'TextEdit', 'site': 'TextEdit', 'area': 'TextEdit', 'type': 'TextEdit', 'agency': 'TextEdit', 'source': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr__15.set('fieldImages', {'Reservoir_': 'TextEdit', 'no': 'TextEdit', 'res_code': 'TextEdit', 'rid_code': 'TextEdit', 'tambon': 'TextEdit', 'district': 'TextEdit', 'province': 'TextEdit', 'type': 'TextEdit', 'size': 'TextEdit', 'owner': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'da_km2': 'TextEdit', 'maxvol': 'TextEdit', 'nhvol': 'TextEdit', 'minvol': 'TextEdit', 'maxwl': 'TextEdit', 'nhwl': 'TextEdit', 'minwl': 'TextEdit', 'inflow_avg': 'TextEdit', 'Image': 'ExternalResource', });
lyr__16.set('fieldImages', {'sta_code': 'TextEdit', 'agency': 'TextEdit', 'tambon': 'TextEdit', 'district': 'TextEdit', 'province': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Image': 'ExternalResource', });
lyr__17.set('fieldImages', {'Level_Stat': 'TextEdit', 'Level_St_1': 'TextEdit', 'district': 'TextEdit', 'province': 'TextEdit', 'da_km2': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr__18.set('fieldImages', {'name': 'TextEdit', 'name2': 'TextEdit', 'area': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'Image': 'ExternalResource', });
lyr__2.set('fieldLabels', {'PROV_CODE': 'hidden field', 'PROV_NAM_T': 'no label', 'PROV_NAM_E': 'hidden field', 'P_CODE': 'hidden field', 'ORIG_FID': 'hidden field', 'REMARK': 'hidden field', 'DISTANCE': 'hidden field', 'AREA_SQKM': 'hidden field', });
lyr__3.set('fieldLabels', {'TAMBON_IDN': 'hidden field', 'TAM_CODE': 'hidden field', 'TAM_NAM_T': 'no label', 'AMPHOE_IDN': 'hidden field', 'AMP_CODE': 'hidden field', 'AMPHOE_T': 'hidden field', 'AMPHOE_E': 'hidden field', 'PROV_CODE': 'hidden field', 'PROV_NAM_T': 'hidden field', 'PROV_NAM_E': 'hidden field', 'P_CODE': 'hidden field', 'ORIG_FID': 'hidden field', 'REMARK': 'hidden field', 'DISTANCE': 'hidden field', 'AREA_SQKM': 'hidden field', });
lyr__4.set('fieldLabels', {'AMPHOE_IDN': 'hidden field', 'AMP_CODE': 'hidden field', 'AMPHOE_T': 'no label', 'AMPHOE_E': 'hidden field', 'PROV_CODE': 'hidden field', 'PROV_NAM_T': 'hidden field', 'PROV_NAM_E': 'hidden field', 'P_CODE': 'hidden field', 'ORIG_FID': 'hidden field', 'REMARK': 'hidden field', 'DISTANCE': 'hidden field', 'AREA_SQKM': 'hidden field', });
lyr__5.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'MUNI_UP_': 'hidden field', 'MUNI_UP_ID': 'hidden field', 'MUNI_CODE': 'hidden field', 'MUNI_NAME': 'no label', 'AMP_CODE': 'hidden field', 'PROV_CODE': 'hidden field', 'AMPHOE_T': 'hidden field', 'PROV_NAM_T': 'hidden field', });
lyr_47_6.set('fieldLabels', {'Name': 'no label', 'TAMBON': 'hidden field', 'DISTRICT': 'hidden field', 'PROVINCE': 'hidden field', 'IND_DATE': 'hidden field', 'IND_AREA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr__7.set('fieldLabels', {'Ind_Type': 'hidden field', 'Ind_Name': 'no label', 'Ind_Date': 'hidden field', });
lyr__8.set('fieldLabels', {'CLASS': 'hidden field', 'STR_NAM_T': 'no label', 'STR_NAM_E': 'hidden field', 'NAME': 'no label', });
lyr__9.set('fieldLabels', {'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LPOLY_': 'hidden field', 'RPOLY_': 'hidden field', 'LENGTH': 'hidden field', 'MAINROAD_': 'hidden field', 'MAINROAD_I': 'hidden field', 'TYPE': 'hidden field', 'NAME': 'no label', });
lyr__10.set('fieldLabels', {'Name': 'no label', 'TFac_PT_Na': 'hidden field', 'TFac_PT__1': 'hidden field', 'UTM_N': 'hidden field', 'UTM_E': 'hidden field', 'Image': 'no label', });
lyr__11.set('fieldLabels', {'Name': 'no label', 'Trans_Stat': 'hidden field', 'Trans_St_1': 'hidden field', 'Trans_Type': 'hidden field', 'UTM_E': 'hidden field', 'UTM_N': 'hidden field', 'Image': 'no label', });
lyr__12.set('fieldLabels', {'name': 'no label', 'name_en': 'hidden field', 'agency': 'hidden field', 'tambon': 'hidden field', 'district': 'hidden field', 'province': 'hidden field', 'lat': 'no label', 'long': 'no label', 'sta_code': 'hidden field', 'Image': 'no label', });
lyr__13.set('fieldLabels', {'objectid_1': 'hidden field', 'objectid': 'hidden field', 'name_t': 'no label', 'name_e': 'hidden field', 'railway_tr': 'hidden field', 'elevate': 'hidden field', 'source_nam': 'hidden field', 'source_dat': 'hidden field', 'photo': 'hidden field', 'unique_id': 'hidden field', 'fnode': 'hidden field', 'tnode': 'hidden field', 'ra_name_t': 'hidden field', 'ra_name_e': 'hidden field', 'ra_type': 'hidden field', 'length': 'hidden field', });
lyr__14.set('fieldLabels', {'pump_code': 'hidden field', 'Name': 'no label', 'meter_num': 'hidden field', 'site': 'hidden field', 'area': 'hidden field', 'type': 'hidden field', 'agency': 'hidden field', 'source': 'hidden field', 'lat': 'no label', 'long': 'no label', });
lyr__15.set('fieldLabels', {'Reservoir_': 'no label', 'no': 'hidden field', 'res_code': 'hidden field', 'rid_code': 'hidden field', 'tambon': 'hidden field', 'district': 'hidden field', 'province': 'hidden field', 'type': 'hidden field', 'size': 'hidden field', 'owner': 'hidden field', 'long': 'no label', 'lat': 'no label', 'da_km2': 'hidden field', 'maxvol': 'hidden field', 'nhvol': 'hidden field', 'minvol': 'hidden field', 'maxwl': 'hidden field', 'nhwl': 'hidden field', 'minwl': 'hidden field', 'inflow_avg': 'hidden field', 'Image': 'no label', });
lyr__16.set('fieldLabels', {'sta_code': 'no label', 'agency': 'hidden field', 'tambon': 'hidden field', 'district': 'hidden field', 'province': 'hidden field', 'lat': 'no label', 'long': 'no label', 'Image': 'no label', });
lyr__17.set('fieldLabels', {'Level_Stat': 'no label', 'Level_St_1': 'hidden field', 'district': 'hidden field', 'province': 'hidden field', 'da_km2': 'hidden field', 'lat': 'no label', 'long': 'no label', });
lyr__18.set('fieldLabels', {'name': 'no label', 'name2': 'hidden field', 'area': 'hidden field', 'long': 'no label', 'lat': 'no label', 'Image': 'no label', });
lyr__18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});