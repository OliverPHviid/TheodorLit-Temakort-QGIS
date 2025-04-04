var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Frededeomrder_1 = new ol.format.GeoJSON();
var features_Frededeomrder_1 = format_Frededeomrder_1.readFeatures(json_Frededeomrder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_1.addFeatures(features_Frededeomrder_1);
var lyr_Frededeomrder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_1, 
                style: style_Frededeomrder_1,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_1_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_1_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_1_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_1_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_1_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_1_5.png" /> <br />' });
var format_Kommuneplan_2 = new ol.format.GeoJSON();
var features_Kommuneplan_2 = format_Kommuneplan_2.readFeatures(json_Kommuneplan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_2.addFeatures(features_Kommuneplan_2);
var lyr_Kommuneplan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_2, 
                style: style_Kommuneplan_2,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_2.png" /> Kommuneplan'
            });
var format_Lokalplaner_3 = new ol.format.GeoJSON();
var features_Lokalplaner_3 = format_Lokalplaner_3.readFeatures(json_Lokalplaner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_3.addFeatures(features_Lokalplaner_3);
var lyr_Lokalplaner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_3, 
                style: style_Lokalplaner_3,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_3_0.png" /> 1012930<br />\
    <img src="styles/legend/Lokalplaner_3_1.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_3_2.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_3_3.png" /> 1054617<br />\
    <img src="styles/legend/Lokalplaner_3_4.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_3_5.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_3_6.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_3_7.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_3_8.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_3_9.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_3_10.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_3_11.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_3_12.png" /> 1061704<br />\
    <img src="styles/legend/Lokalplaner_3_13.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_3_14.png" /> 1061718<br />\
    <img src="styles/legend/Lokalplaner_3_15.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_3_16.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_3_17.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_3_18.png" /> 1061753<br />\
    <img src="styles/legend/Lokalplaner_3_19.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_3_20.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_3_21.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_3_22.png" /> 1061828<br />\
    <img src="styles/legend/Lokalplaner_3_23.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_3_24.png" /> 1061833<br />\
    <img src="styles/legend/Lokalplaner_3_25.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_3_26.png" /> 1062080<br />\
    <img src="styles/legend/Lokalplaner_3_27.png" /> 1062111<br />\
    <img src="styles/legend/Lokalplaner_3_28.png" /> 1062117<br />\
    <img src="styles/legend/Lokalplaner_3_29.png" /> 1062118<br />\
    <img src="styles/legend/Lokalplaner_3_30.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_3_31.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_3_32.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_3_33.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_3_34.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_3_35.png" /> 1074665<br />\
    <img src="styles/legend/Lokalplaner_3_36.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_3_37.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_3_38.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_3_39.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_3_40.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_3_41.png" /> 1075550<br />\
    <img src="styles/legend/Lokalplaner_3_42.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_3_43.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_3_44.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_3_45.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_3_46.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_3_47.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_3_48.png" /> 1075667<br />\
    <img src="styles/legend/Lokalplaner_3_49.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_3_50.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_3_51.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_3_52.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_3_53.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_3_54.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_3_55.png" /> 1075749<br />\
    <img src="styles/legend/Lokalplaner_3_56.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_3_57.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_3_58.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_3_59.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_3_60.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_3_61.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_3_62.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_3_63.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_3_64.png" /> 1075891<br />\
    <img src="styles/legend/Lokalplaner_3_65.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_3_66.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_3_67.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_3_68.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_3_69.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_3_70.png" /> 1075906<br />\
    <img src="styles/legend/Lokalplaner_3_71.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_3_72.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_3_73.png" /> 1076003<br />\
    <img src="styles/legend/Lokalplaner_3_74.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_3_75.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_3_76.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_3_77.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_3_78.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_3_79.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_3_80.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_3_81.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_3_82.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_3_83.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_3_84.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_3_85.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_3_86.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_3_87.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_3_88.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_3_89.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_3_90.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_3_91.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_3_92.png" /> 1076901<br />\
    <img src="styles/legend/Lokalplaner_3_93.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_3_94.png" /> 1076905<br />\
    <img src="styles/legend/Lokalplaner_3_95.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_3_96.png" /> 1076943<br />\
    <img src="styles/legend/Lokalplaner_3_97.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_3_98.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_3_99.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_3_100.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_3_101.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_3_102.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_3_103.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_3_104.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_3_105.png" /> 1077899<br />\
    <img src="styles/legend/Lokalplaner_3_106.png" /> 1078061<br />\
    <img src="styles/legend/Lokalplaner_3_107.png" /> 1078066<br />\
    <img src="styles/legend/Lokalplaner_3_108.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_3_109.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_3_110.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_3_111.png" /> 1078080<br />\
    <img src="styles/legend/Lokalplaner_3_112.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_3_113.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_3_114.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_3_115.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_3_116.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_3_117.png" /> 1078270<br />\
    <img src="styles/legend/Lokalplaner_3_118.png" /> 1078272<br />\
    <img src="styles/legend/Lokalplaner_3_119.png" /> 1078274<br />\
    <img src="styles/legend/Lokalplaner_3_120.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_3_121.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_3_122.png" /> 1078282<br />\
    <img src="styles/legend/Lokalplaner_3_123.png" /> 1078288<br />\
    <img src="styles/legend/Lokalplaner_3_124.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_3_125.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_3_126.png" /> 1078447<br />\
    <img src="styles/legend/Lokalplaner_3_127.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_3_128.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_3_129.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_3_130.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_3_131.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_3_132.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_3_133.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_3_134.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_3_135.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_3_136.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_3_137.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_3_138.png" /> 1103656<br />\
    <img src="styles/legend/Lokalplaner_3_139.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_3_140.png" /> 1104764<br />\
    <img src="styles/legend/Lokalplaner_3_141.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_3_142.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_3_143.png" /> 1359142<br />\
    <img src="styles/legend/Lokalplaner_3_144.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_3_145.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_3_146.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_3_147.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_3_148.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_3_149.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_3_150.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_3_151.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_3_152.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_3_153.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_3_154.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_3_155.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_3_156.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_3_157.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_3_158.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_3_159.png" /> 2702994<br />\
    <img src="styles/legend/Lokalplaner_3_160.png" /> 2969850<br />\
    <img src="styles/legend/Lokalplaner_3_161.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_3_162.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_3_163.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_3_164.png" /> 3016102<br />\
    <img src="styles/legend/Lokalplaner_3_165.png" /> 3016103<br />\
    <img src="styles/legend/Lokalplaner_3_166.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_3_167.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_3_168.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_3_169.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_3_170.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_3_171.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_3_172.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_3_173.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_3_174.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_3_175.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_3_176.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_3_177.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_3_178.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_3_179.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_3_180.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_3_181.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_3_182.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_3_183.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_3_184.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_3_185.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_3_186.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_3_187.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_3_188.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_3_189.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_3_190.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_3_191.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_3_192.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_3_193.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_3_194.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_3_195.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_3_196.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_3_197.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_3_198.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_3_199.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_3_200.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_3_201.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_3_202.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_3_203.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_3_204.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_3_205.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_3_206.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_3_207.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_3_208.png" /> <br />' });
var format_Lokalplanerforslag_4 = new ol.format.GeoJSON();
var features_Lokalplanerforslag_4 = format_Lokalplanerforslag_4.readFeatures(json_Lokalplanerforslag_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanerforslag_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanerforslag_4.addFeatures(features_Lokalplanerforslag_4);
var lyr_Lokalplanerforslag_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanerforslag_4, 
                style: style_Lokalplanerforslag_4,
                popuplayertitle: 'Lokalplaner forslag',
                interactive: true,
    title: 'Lokalplaner forslag<br />\
    <img src="styles/legend/Lokalplanerforslag_4_0.png" /> 11367622<br />\
    <img src="styles/legend/Lokalplanerforslag_4_1.png" /> 11461117<br />\
    <img src="styles/legend/Lokalplanerforslag_4_2.png" /> 11484598<br />\
    <img src="styles/legend/Lokalplanerforslag_4_3.png" /> <br />' });
var format_StrandbeskyttelseHvidovre_5 = new ol.format.GeoJSON();
var features_StrandbeskyttelseHvidovre_5 = format_StrandbeskyttelseHvidovre_5.readFeatures(json_StrandbeskyttelseHvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrandbeskyttelseHvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrandbeskyttelseHvidovre_5.addFeatures(features_StrandbeskyttelseHvidovre_5);
var lyr_StrandbeskyttelseHvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrandbeskyttelseHvidovre_5, 
                style: style_StrandbeskyttelseHvidovre_5,
                popuplayertitle: 'Strandbeskyttelse Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/StrandbeskyttelseHvidovre_5.png" /> Strandbeskyttelse Hvidovre'
            });
var format_Busstoppesteder_6 = new ol.format.GeoJSON();
var features_Busstoppesteder_6 = format_Busstoppesteder_6.readFeatures(json_Busstoppesteder_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstoppesteder_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstoppesteder_6.addFeatures(features_Busstoppesteder_6);
var lyr_Busstoppesteder_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstoppesteder_6, 
                style: style_Busstoppesteder_6,
                popuplayertitle: 'Busstoppesteder',
                interactive: true,
                title: '<img src="styles/legend/Busstoppesteder_6.png" /> Busstoppesteder'
            });
var format_Brnehaver_7 = new ol.format.GeoJSON();
var features_Brnehaver_7 = format_Brnehaver_7.readFeatures(json_Brnehaver_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_7.addFeatures(features_Brnehaver_7);
var lyr_Brnehaver_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_7, 
                style: style_Brnehaver_7,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_7.png" /> Børnehaver'
            });
var format_EUDHvidovre_8 = new ol.format.GeoJSON();
var features_EUDHvidovre_8 = format_EUDHvidovre_8.readFeatures(json_EUDHvidovre_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDHvidovre_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDHvidovre_8.addFeatures(features_EUDHvidovre_8);
var lyr_EUDHvidovre_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDHvidovre_8, 
                style: style_EUDHvidovre_8,
                popuplayertitle: 'EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/EUDHvidovre_8.png" /> EUD Hvidovre'
            });
var format_Fodboldbaner_9 = new ol.format.GeoJSON();
var features_Fodboldbaner_9 = format_Fodboldbaner_9.readFeatures(json_Fodboldbaner_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_9.addFeatures(features_Fodboldbaner_9);
var lyr_Fodboldbaner_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_9, 
                style: style_Fodboldbaner_9,
                popuplayertitle: 'Fodboldbaner',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_9.png" /> Fodboldbaner'
            });
var format_Folkeskoler_10 = new ol.format.GeoJSON();
var features_Folkeskoler_10 = format_Folkeskoler_10.readFeatures(json_Folkeskoler_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_10.addFeatures(features_Folkeskoler_10);
var lyr_Folkeskoler_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_10, 
                style: style_Folkeskoler_10,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_10.png" /> Folkeskoler'
            });
var format_Gymnasier_11 = new ol.format.GeoJSON();
var features_Gymnasier_11 = format_Gymnasier_11.readFeatures(json_Gymnasier_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gymnasier_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gymnasier_11.addFeatures(features_Gymnasier_11);
var lyr_Gymnasier_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gymnasier_11, 
                style: style_Gymnasier_11,
                popuplayertitle: 'Gymnasier',
                interactive: true,
                title: '<img src="styles/legend/Gymnasier_11.png" /> Gymnasier'
            });
var format_Havne_12 = new ol.format.GeoJSON();
var features_Havne_12 = format_Havne_12.readFeatures(json_Havne_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havne_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havne_12.addFeatures(features_Havne_12);
var lyr_Havne_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havne_12, 
                style: style_Havne_12,
                popuplayertitle: 'Havne',
                interactive: true,
                title: '<img src="styles/legend/Havne_12.png" /> Havne'
            });
var format_Hospital_13 = new ol.format.GeoJSON();
var features_Hospital_13 = format_Hospital_13.readFeatures(json_Hospital_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_13.addFeatures(features_Hospital_13);
var lyr_Hospital_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_13, 
                style: style_Hospital_13,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_13.png" /> Hospital'
            });
var format_RebkSpark_14 = new ol.format.GeoJSON();
var features_RebkSpark_14 = format_RebkSpark_14.readFeatures(json_RebkSpark_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RebkSpark_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RebkSpark_14.addFeatures(features_RebkSpark_14);
var lyr_RebkSpark_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RebkSpark_14, 
                style: style_RebkSpark_14,
                popuplayertitle: 'Rebæk Søpark',
                interactive: true,
                title: '<img src="styles/legend/RebkSpark_14.png" /> Rebæk Søpark'
            });
var format_Rdhus_15 = new ol.format.GeoJSON();
var features_Rdhus_15 = format_Rdhus_15.readFeatures(json_Rdhus_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rdhus_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rdhus_15.addFeatures(features_Rdhus_15);
var lyr_Rdhus_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rdhus_15, 
                style: style_Rdhus_15,
                popuplayertitle: 'Rådhus',
                interactive: true,
                title: '<img src="styles/legend/Rdhus_15.png" /> Rådhus'
            });
var format_Sportsfaciliteter_16 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_16 = format_Sportsfaciliteter_16.readFeatures(json_Sportsfaciliteter_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_16.addFeatures(features_Sportsfaciliteter_16);
var lyr_Sportsfaciliteter_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_16, 
                style: style_Sportsfaciliteter_16,
                popuplayertitle: 'Sportsfaciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_16.png" /> Sportsfaciliteter'
            });
var format_Togstationer_17 = new ol.format.GeoJSON();
var features_Togstationer_17 = format_Togstationer_17.readFeatures(json_Togstationer_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_17.addFeatures(features_Togstationer_17);
var lyr_Togstationer_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_17, 
                style: style_Togstationer_17,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_17.png" /> Togstationer'
            });
var format_Valdemarkoter_18 = new ol.format.GeoJSON();
var features_Valdemarkoter_18 = format_Valdemarkoter_18.readFeatures(json_Valdemarkoter_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valdemarkoter_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valdemarkoter_18.addFeatures(features_Valdemarkoter_18);
var lyr_Valdemarkoter_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valdemarkoter_18, 
                style: style_Valdemarkoter_18,
                popuplayertitle: 'Valdemarkoter',
                interactive: true,
                title: '<img src="styles/legend/Valdemarkoter_18.png" /> Valdemarkoter'
            });
var format_Lger_19 = new ol.format.GeoJSON();
var features_Lger_19 = format_Lger_19.readFeatures(json_Lger_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lger_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lger_19.addFeatures(features_Lger_19);
var lyr_Lger_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lger_19, 
                style: style_Lger_19,
                popuplayertitle: 'Læger',
                interactive: true,
                title: '<img src="styles/legend/Lger_19.png" /> Læger'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Frededeomrder_1.setVisible(true);lyr_Kommuneplan_2.setVisible(true);lyr_Lokalplaner_3.setVisible(true);lyr_Lokalplanerforslag_4.setVisible(true);lyr_StrandbeskyttelseHvidovre_5.setVisible(true);lyr_Busstoppesteder_6.setVisible(true);lyr_Brnehaver_7.setVisible(true);lyr_EUDHvidovre_8.setVisible(true);lyr_Fodboldbaner_9.setVisible(true);lyr_Folkeskoler_10.setVisible(true);lyr_Gymnasier_11.setVisible(true);lyr_Havne_12.setVisible(true);lyr_Hospital_13.setVisible(true);lyr_RebkSpark_14.setVisible(true);lyr_Rdhus_15.setVisible(true);lyr_Sportsfaciliteter_16.setVisible(true);lyr_Togstationer_17.setVisible(true);lyr_Valdemarkoter_18.setVisible(true);lyr_Lger_19.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Frededeomrder_1,lyr_Kommuneplan_2,lyr_Lokalplaner_3,lyr_Lokalplanerforslag_4,lyr_StrandbeskyttelseHvidovre_5,lyr_Busstoppesteder_6,lyr_Brnehaver_7,lyr_EUDHvidovre_8,lyr_Fodboldbaner_9,lyr_Folkeskoler_10,lyr_Gymnasier_11,lyr_Havne_12,lyr_Hospital_13,lyr_RebkSpark_14,lyr_Rdhus_15,lyr_Sportsfaciliteter_16,lyr_Togstationer_17,lyr_Valdemarkoter_18,lyr_Lger_19];
lyr_Frededeomrder_1.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Kommuneplan_2.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Lokalplaner_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanerforslag_4.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datostart': 'datostart', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Busstoppesteder_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_7.set('fieldAliases', {'fid': 'fid', 'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDHvidovre_8.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Fodboldbaner_9.set('fieldAliases', {'fid': 'fid', 'Fodbold St': 'Fodbold St', 'Adresse': 'Adresse', 'By': 'By', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_10.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Gymnasier_11.set('fieldAliases', {'fid': 'fid', 'Gymnasiena': 'Gymnasiena', 'Ungdomsudd': 'Ungdomsudd', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Havne_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospital_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_RebkSpark_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rdhus_15.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_16.set('fieldAliases', {'fid': 'fid', 'Sport- og': 'Sport- og', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Valdemarkoter_18.set('fieldAliases', {'fid': 'fid', 'Fikspunkt nr': 'Fikspunkt nr', 'Type': 'Type', 'Referencesystemer': 'Referencesystemer', 'Easting': 'Easting', 'Northing': 'Northing', 'Kote': 'Kote', });
lyr_Lger_19.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Frededeomrder_1.set('fieldImages', {'fid': 'Hidden', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Kommuneplan_2.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'TextEdit', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Lokalplaner_3.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanerforslag_4.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datostart': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldImages', {'fid': 'Hidden', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_Busstoppesteder_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_7.set('fieldImages', {'fid': 'Hidden', 'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDHvidovre_8.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Fodboldbaner_9.set('fieldImages', {'fid': 'Hidden', 'Fodbold St': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskoler_10.set('fieldImages', {'fid': 'Hidden', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Gymnasier_11.set('fieldImages', {'fid': 'Hidden', 'Gymnasiena': 'TextEdit', 'Ungdomsudd': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Havne_12.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Hospital_13.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_RebkSpark_14.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Rdhus_15.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Sportsfaciliteter_16.set('fieldImages', {'fid': 'Hidden', 'Sport- og': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_17.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Valdemarkoter_18.set('fieldImages', {'fid': 'Hidden', 'Fikspunkt nr': 'TextEdit', 'Type': 'TextEdit', 'Referencesystemer': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Kote': 'TextEdit', });
lyr_Lger_19.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Frededeomrder_1.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Kommuneplan_2.set('fieldLabels', {'komnr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'datooprt': 'no label', 'datoopdt': 'no label', });
lyr_Lokalplaner_3.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplanerforslag_4.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datostart': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldLabels', {'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Busstoppesteder_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Brnehaver_7.set('fieldLabels', {'Børnehave': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', });
lyr_EUDHvidovre_8.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Fodboldbaner_9.set('fieldLabels', {'Fodbold St': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Mail': 'inline label - always visible', });
lyr_Folkeskoler_10.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Gymnasier_11.set('fieldLabels', {'Gymnasiena': 'inline label - always visible', 'Ungdomsudd': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Havne_12.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Hospital_13.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_RebkSpark_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', });
lyr_Rdhus_15.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Sportsfaciliteter_16.set('fieldLabels', {'Sport- og': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Togstationer_17.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Valdemarkoter_18.set('fieldLabels', {'Fikspunkt nr': 'inline label - always visible', 'Type': 'inline label - always visible', 'Referencesystemer': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Kote': 'inline label - always visible', });
lyr_Lger_19.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Lger_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});