//our map with max bounds and zoom set
function createMap(){
    var SouthEastCorner = L.latLng(-42.533, 178.884);
    var NorthWestCorner = L.latLng(67.399, -163.758);
    
    var map = L.map('mapid', {
        center: [20,0],
        zoom: 2.2,
        maxBounds: L.latLngBounds(NorthWestCorner, SouthEastCorner)
    });
   

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
    
        //our different demographic layers our user can click on and off
    layers: [DepRat70, 
             DepRat80,
             DepRat90,
             DepRat2000,
             DepRat2016,
             BirthRat70,
             BirthRat80,
             BirthRat90, 
             BirthRat2000,
             BirthRat2010,
             BirthRat2016,
             DeathRat70,
             DeathRat80,
             DeathRat90,
             DeathRat00,
             DeathRat10,
             DeathRat16, 
             PopRat70,
             PopRat80,
             PopRat90,
             PopRat00,
             PopRat10,
             PopRat16],
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    
    function style(propertiesVar) {	
        return {
				weight: 2,
				opacity: 0.3,
				color: 'white',
				dashArray: '1',
				fillOpacity: 0.6,
				fillColor: getColor2(propertiesVar)
                        
			};
		}
    
    //our different style functions that color our different demographic data
    function style2(propertiesVar) {	
        return {
				weight: 1,
				opacity: 0.3,
				color: 'black',
				dashArray: '1',
				fillOpacity: 0.6,
				fillColor: getBirthColor(propertiesVar)
                        
			};
		}
    function style3(propertiesVar){
       return { weight: 1,
        opacity: 0.3,
        color: 'black',
        dashArray: "1",
        fillOpacity: 0.6,
        fillColor: getDeathColor(propertiesVar)    
    };
    }
    function style4(propertiesVar){
       return { weight: 1,
        opacity: 0.3,
        color: 'black',
        dashArray: "1",
        fillOpacity: 0.6,
        fillColor: getPopColor(propertiesVar)    
    };
    }
    //our functions that color our choropleth layers based on the
    //value density field we assigned it
function getColor2(d) {
			return d > 0.9000  ? '#045a8d' :
                   d > 0.600  ? '#2b8cbe' :
                   d > 0.5300  ? '#74a9cf' :
                   d > 0.4800 ? '#bdc9e1' :
                   d > 0.4600 ? '#f1eef6' :
            '#2166ac';
        
		}
    
function getPopColor(d){
   return d > 1000 ? "#a63603" :
    d > 700 ? "#d94801":
    d > 500 ? "#f16913": 
    d > 400 ? "#fd8d3c":
    d > 300 ? "#fdae6b":
    d > 150 ? "#fdd0a2" :
    d > 100 ? "#fee6ce":
    d > 10 ? "#fff5eb":
    "#7f2704";
    
}
function getDeathColor(d){
    return d > 16 ? "#99000d" :
           d> 14 ? "#cb181d":
           d > 12 ? "#ef3b2c":
           d > 10 ? "#fb6a4a":
           d > 8 ? "#fc9272":
           d > 6 ? "#fcbba1":
        "#fee5d9";          
}
function getBirthColor(d){
    return d > 37 ? "#006d2c" :
           d > 29 ? "#31a354":
           d > 21 ? "#74c476":
           d > 15 ? "#a1d99b":
           d > 10 ? "#c7e9c0":
            "#edf8e9";
}

    function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}
    //function that generates popup information for our
    //population data based on the input year
    function SelectPopYear(attribute) {
		 function onEach1970Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_1970 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1980Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_1980 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1990Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_1990 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2000Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_2000 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2010Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_2010 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2016Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total Population in millions is:</b> " + feature.properties.Pop_2016 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        if(attribute == "1970"){
            return onEach1970Feature;
        } else if(attribute == "1980"){
            return onEach1980Feature;
        } else if(attribute == "1990"){
            return onEach1990Feature;
        } else if(attribute == "2000"){
            return onEach2000Feature;
        } else if(attribute == "2010"){
            return onEach2010Feature;
        } else if(attribute == "2016"){
            return onEach2016Feature;
        }
        
        
    }
    
    //function that generates popup information for our
    //birth data based on the input year
    function SelectBirthYear(attribute){
         function onEach1970Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total number of births per 1000 women is :</b> " + feature.properties.Birth_1970 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1980Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total births per 1000 women is :</b> " + feature.properties.Birth_1980 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        function onEach1990Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total births is per 1000 women is :</b> " + feature.properties.Birth_1990 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2000Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total births is per 1000 women is :</b> " + feature.properties.Birth_2000 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2010Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total births is per 1000 people is :</b> " + feature.properties.Birth_2010 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2016Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Total births is per 1000 people is :</b> " + feature.properties.Birth_2016 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        if(attribute == "1970"){
            return onEach1970Feature;
        } else if(attribute == "1980"){
            return onEach1980Feature;
        } else if(attribute == "1990"){
            return onEach1990Feature;
        } else if(attribute == "2000"){
            return onEach2000Feature;
        } else if(attribute == "2010"){
            return onEach2010Feature;
        } else if(attribute == "2016"){
            return onEach2016Feature;
        }
    
        
        
    }
    
    //function that generates popup information for our
    //death rate data based on the input year
    function SelectDeathYear(attribute){
        
        
        function onEach1970Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_1970 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        
        function onEach1980Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_1980 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1990Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_1990 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2000Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_2000 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2010Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_2010 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2016Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>Number of deaths is per 1000 people is :</b> " + feature.properties.Death_2016 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        if(attribute == "1970"){
            return onEach1970Feature;
        } else if(attribute == "1980"){
            return onEach1980Feature;
        } else if(attribute == "1990"){
            return onEach1990Feature;
        } else if(attribute == "2000"){
            return onEach2000Feature;
        } else if(attribute == "2010"){
            return onEach2010Feature;
        } else if(attribute == "2016"){
            return onEach2016Feature;
        }
    
        
        
    }
	
    //function that generates popup information for our
    //dependency ratio data based on the input year
    function SelectDepYear(attribute){
        function onEach1970Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_1970 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1980Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_1980 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach1990Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_1990 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2000Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_2000 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2010Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_2010 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        function onEach2016Feature(feature, layer) {
		 var popupContent1 = "";
            popupContent1 += "<p><b>The dependency Ratio is :</b> " + feature.properties.Dep_2016 + "</p>";
            layer.bindPopup(popupContent1);	
        layer.on({
				mouseover: function(){
                    this.openPopup();
                },
				mouseout: function(){
                        this.closePopup();
                },
       
            
				click: zoomToFeature
			});
        }
        
        if(attribute == "1970"){
            return onEach1970Feature;
        } else if(attribute == "1980"){
            return onEach1980Feature;
        } else if(attribute == "1990"){
            return onEach1990Feature;
        } else if(attribute == "2000"){
            return onEach2000Feature;
        } else if(attribute == "2010"){
            return onEach2010Feature;
        } else if(attribute == "2016"){
            return onEach2016Feature;
        }
    
        
        
    }
    
    //our different geojsons that are different choropleth representations for different demographic data and years
    Dep1970 = L.geoJson(DemoFinal, {
			style: (function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_1970;
                return style(propertiesVar);
                
            }),
			onEachFeature: SelectDepYear("1970")
		});
    
    Dep1980 = L.geoJson(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_1980;
                return style(propertiesVar);
                
            },
        onEachFeature: SelectDepYear("1980")
    });
    Dep1990 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_1990;
                return style(propertiesVar);
                
            },
        onEachFeature: SelectDepYear("1990")
    });
    
    Dep2000 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_2000;
                return style(propertiesVar);
                
            },
        onEachFeature: SelectDepYear("2000")
    });
    
    
    
    Dep2010 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_2010;
                return style(propertiesVar);
                
            },
        onEachFeature: SelectDepYear("2010")
    });
    
    Dep2016 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Dep_2016;
                return style(propertiesVar);
                
            },
        onEachFeature: SelectDepYear("2016")
    });
    
    Birth1970 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_1970;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("1970")
    });
    
    Birth1980 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_1980;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("1980")
    });
    Birth1990 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_1990;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("1990")
    });
    Birth2000 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_2000;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("2000")
    });
    
    Birth2010 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_2010;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("2010")
    });
    
    Birth2016 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Birth_2016;
                return style2(propertiesVar);
                
            },
        onEachFeature: SelectBirthYear("2016")
    });
    
    Death1970 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_1970;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("1970")
    });
    
    Death1980 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_1980;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("1980")//onEachFeature
    });
    
    Death1990 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_1990;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("1990")
    });
    
    Death2000 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_2000;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("2000")
    });
    
    Death2010 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_2010;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("2010")
    });
    
    Death2016 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Death_2016;
                return style3(propertiesVar);
                
            },
        onEachFeature: SelectDeathYear("2016")
    });
    
    Pop1970 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_1970;
                
           
            return style4(propertiesVar);
                console.log(propertiesVar);
            },
        onEachFeature: SelectPopYear("1970")
    });
    
    Pop1980 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_1980;
                return style4(propertiesVar);
                
            },
        onEachFeature: SelectPopYear("1980")
    });
    
    Pop1990 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_1990;
                return style4(propertiesVar);
                
            },
        onEachFeature: SelectPopYear("1990")
    });
    
    Pop2000 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_2000;
                return style4(propertiesVar);
                
            },
        onEachFeature: SelectPopYear("2000")
    });
    
    Pop2010 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_2010;
                return style4(propertiesVar);
                
            },
        onEachFeature: SelectPopYear("2010")
    });
    
    Pop2016 = L.geoJSON(DemoFinal, {
        style: function StyleHelper(feature){
                var propertiesVar = feature.properties.Pop_2016;
                return style4(propertiesVar);
                
            },
        onEachFeature: SelectPopYear("2016")
    });
    
    
    //defining our different layer groups for each of these geojson demoraphic choropleth data
    var DepRat70 = L.layerGroup([Dep1970]);
    var DepRat80 = L.layerGroup([Dep1980]);
    var DepRat90 = L.layerGroup([Dep1990]);
    var DepRat2000 = L.layerGroup([Dep2000]);
    var DepRat2010 = L.layerGroup([Dep2010]);
    var DepRat2016 = L.layerGroup([Dep2016]);
    var BirthRat70 = L.layerGroup([Birth1970]);
    var BirthRat80 = L.layerGroup([Birth1980]);
    var BirthRat90 = L.layerGroup([Birth1990]);
    var BirthRat2000 = L.layerGroup([Birth2000]);
    var BirthRat2010 = L.layerGroup([Birth2010]);
    var BirthRat2016 = L.layerGroup([Birth2016]);
    var DeathRat70 = L.layerGroup([Death1970]);
    var DeathRat80 = L.layerGroup([Death1980]);
    var DeathRat90 = L.layerGroup([Death1990]);
    var DeathRat00 = L.layerGroup([Death2000]);
    var DeathRat10 = L.layerGroup([Death2010]);
    var DeathRat16 = L.layerGroup([Death2016]);
    var PopRat70 = L.layerGroup([Pop1970]);
    var PopRat80 = L.layerGroup([Pop1980]);
    var PopRat90 = L.layerGroup([Pop1990]);
    var PopRat00 = L.layerGroup([Pop2000]);
    var PopRat10 = L.layerGroup([Pop2010]);
    var PopRat16 = L.layerGroup([Pop2016]);
    
    
    //our overlayData variable stores where the user can select each demographic data layer on and off
    var overLayData = {
        "Dependency Ratio 1970": DepRat70,
        "Dependency Ratio 1980": DepRat80,
        "Dependency Ratio 1990": DepRat90,
        "Dependency Ratio 2000": DepRat2000,
        "Dependency Ratio 2010": DepRat2010,
        "Dependency Ratio 2016": DepRat2016,
        "Birth Rate 1970": BirthRat70,
        "Birth Rate 1980" : BirthRat80,
        "Birth Rate 1990" : BirthRat90,
        "Birth Rate 2000" : BirthRat2000,
        "Birth Rate 2010": BirthRat2010,
        "Birth Rate 2016": BirthRat2016,
        "Death Rate 1970": DeathRat70,
        "Death Rate 1980": DeathRat80,
        "Death Rate 1990": DeathRat90,
        "Death Rate 2000": DeathRat00,
        "Death Rate 2010": DeathRat10,
        "Death Rate 2016": DeathRat16,
        "Population 1970": PopRat70,
        "Population 1980": PopRat80,
        "Population 1990": PopRat90,
        "Population 2000": PopRat00,
        "Population 2010": PopRat10,
        "Population 2016": PopRat16
    };
   
    //calls our ajax function to get economic data
    getData(map);
    
    //adds our overlay demographic data
    L.control.layers(null,overLayData).addTo(map);
    
};

//creates our basic design for the legend of our map
function createLegend(map, attributes){
    //creates our legend in the bottom left of the map
    var LegendControl = L.Control.extend({
        options: {
            position: 'bottomleft'
        },
        
        //our function which adds the a container class and adding dates
        onAdd: function (map){
            var container = L.DomUtil.create('div', 'legend-control-container');
            
            $(container).append('<div id="date-legend">');
            
            var svg = '<svg id="attribute-legend" width="180px" height="180px">';
            
            
            var circles = ["max", "mean", "min"];
        
            for(var i=0; i < circles.length; i++){
                svg += '<circle class="legend-circle" id="' + circles[i] + '" fill="Yellow" fill-opacity="0.8" stroke="#000000" cx="30"/>';
                
            };
           
            
            svg += "</svg>";
            
            
            $(container).append(svg);
            return container;
        }
    });
    
    map.addControl(new LegendControl());
    updateLegend(map, attributes);
}

function getCircleValues(map, attribute){
    //our values for our circles in the legend
    var min = 5,
        max = 20
        mean = 12;

    
    var mean = (max + min) / 2;
  
    return {
        max: max,
        mean: mean, 
        min: min
    };
};


function updateLegend(map, attribute){
    
    var content = "Proportional Economic Data Symbols Between The Years 1970 to 2015";
    $('#date-legend').html(content);
    console.log(attribute);
    var circleValues = getCircleValues(map, attribute);
    
    for(var key in circleValues){
        var radius = calcPropRadius(circleValues[key]);
        $('#'+key).attr({
            cy: 60 - radius,
            r: radius
        });
        
    };
    
};


//this function creates the different proportional map symbols
//sets the color and initial size, and adds them to the map
function createPropSymbols(data, map){
    
    console.log(data);
    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "Yellow",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    function calcPropRadius(attValue){
    var scaleFactor = 100;
    var area = attValue * scaleFactor;
    var radius = Math.sqrt(area/Math.PI);
    
    return radius;
};
    
    L.geoJson(data, {
        pointToLayer: function(feature, latlng){
            
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map);
};



function calcPropRadius(attValue){
    var scaleFactor = 100;
    var area = attValue * scaleFactor;
    var radius = Math.sqrt(area/Math.PI);
    
    return radius;
};

function calcPropRadius2(attValue){
    var scaleFactor = 0.1;
    var area = attValue * scaleFactor;
    var radius = Math.sqrt(area/Math.PI);
    
    return radius;
};

function calcPropRadius3(attValue){
    var scaleFactor = 0.1;
    var area = attValue * scaleFactor;
    var radius = Math.sqrt(area/Math.PI);
    
    return radius;
};


//This function creates the range slider controls for our GDP per capita data
function createGDCControls(map, attributes){
    $('#GDC_Query').append('<input class="GDC-slider" type="range">');
    $('#GDC_Query').append('<button class="GDCSkip" id="reverse2">Reverse</button>');
    $('#GDC_Query').append('<button class="GDCSkip" id="forward2">Skip</button>');
    
    $('.GDC-slider').attr({
        max: 5,
        min: 0,
        value: 0,
        step: 1
    });
    
    $(".GDCSkip").click(function(){
       var index = $('.GDC-slider').val();
       
       if ($(this).attr('id') == 'forward2'){
           index++;
           index = index > 5 ? 0 : index;
       } 
        else if ($(this).attr('id') == 'reverse2'){
           index--;
           index = index < 0 ? 5 : index;       
       };
       
       
      $('.GDC-slider').val(index);
       console.log(attributes[index]);
       updateGDCSymbols(map, attributes[index]);
   });
    $('.GDC-slider').on('input', function(){
       var index = $(this).val();
       updateGDCSymbols(map, attributes[index]); 
    });
}



//updates the symbols based on the GDP per capita data
function updateGDCSymbols(map, attribute){
    map.eachLayer(function(layer){
        if(layer.feature && layer.feature.properties[attribute]){
        
            var props = layer.feature.properties;
            
            var radius =  calcPropRadius2(props[attribute]);
            layer.setRadius(radius);
            
            var year = attribute.split('_')[1];
            var popupContent = "";
            popupContent += "<p><b>GDP per capita in " + year + ":</b> $" + props[attribute] + " </p>";
            layer.bindPopup(popupContent);
            
            layer.on({
                    mouseover: function(){
                        this.openPopup();
                    },
                    mouseout: function(){
                        this.closePopup();
                    }
                });
            
            
            
        };
    });
};

//this function updates the PPP range slider controls
function createPPPControls(map, attributes){
    $('#PPP_Query').append('<input class="PPP-slider" type="range">');
    $('#PPP_Query').append('<button class="Pskip" id="reverse3">Reverse</button>');
    $('#PPP_Query').append('<button class="Pskip" id="forward3">Skip</button>');
    
    
    
    console.log(attributes)
    $('.PPP-slider').attr({
        max: 3,
        min: 0,
        value: 0,
        step: 1
    });
    
    $(".Pskip").click(function(){
       var index = $('.PPP-slider').val();
       
       if ($(this).attr('id') == 'forward3'){
           index++;
           index = index > 3 ? 0 : index;
       } 
        else if ($(this).attr('id') == 'reverse3'){
           index--;
           index = index < 0 ? 3 : index;       
       };
       
      $('.PPP-slider').val(index);
       console.log(attributes[index]);
       updatePPPSymbols(map, attributes[index]);
   });
    
    $('.PPP-slider').on('input', function(){
       var index = $(this).val();
       updatePPPSymbols(map, attributes[index]); 
    });
}

//updates our symbols with the PPP data
function updatePPPSymbols(map, attribute){
    map.eachLayer(function(layer){
        if(layer.feature && layer.feature.properties[attribute]){
        
            var props = layer.feature.properties;
            
            var radius =  calcPropRadius2(props[attribute]);
            layer.setRadius(radius);
            
            var year = attribute.split('_')[1];
            var popupContent = "";
            popupContent += "<p><b>PPP in " + year + ":</b> $" + props[attribute] + " trillion dollars</p>";
            layer.bindPopup(popupContent);
            
            layer.on({
                    mouseover: function(){
                        this.openPopup();
                    },
                    mouseout: function(){
                        this.closePopup();
                    }
                });
            
            
            
        };
    });
};



//This function creates the range slider that manipulates our data with the GDP data for each country and year
function createGDPControls(map, attributes){
    $('#GDP_Query').append('<input class="range-slider" type="range">');
    $('#GDP_Query').append('<button class="skip" id="reverse">Reverse</button>');
    $('#GDP_Query').append('<button class="skip" id="forward">Skip</button>');
    
    
    
    console.log(attributes)
    $('.range-slider').attr({
        max: 5,
        min: 0,
        value: 0,
        step: 1
    });
    
    $(".skip").click(function(){
       var index = $('.range-slider').val();
       
       if ($(this).attr('id') == 'forward'){
           index++;
           index = index > 5 ? 0 : index;
       } 
        else if ($(this).attr('id') == 'reverse'){
           index--;
           index = index < 0 ? 5 : index;       
       };
       
       //updates our range slider and our symbol
       
      $('.range-slider').val(index);
       console.log(attributes[index]);
       updateGDPSymbols(map, attributes[index]);
   });
    
    $('.range-slider').on('input', function(){
       var index = $(this).val();
       updateGDPSymbols(map, attributes[index]); 
    });
    
    
    
};

//updates our symbols with data from our GDP data
function updateGDPSymbols(map, attribute){
    map.eachLayer(function(layer){
        if(layer.feature && layer.feature.properties[attribute]){
        
            var props = layer.feature.properties;
            
            var radius =  calcPropRadius(props[attribute]);
            layer.setRadius(radius);
        
    
            //var popupContent = "<p><b>City:</b> " + props["City"] + "</p>";
            
            //popupContent += "<p><b>Mayor:</b> " + props["Mayor_" + attribute.split('_')[1]] + "</p>";
            
            var year = attribute.split('_')[1];
            var popupContent = "";
            popupContent += "<p><b>GDP in " + year + ":</b> " + props[attribute] + " trillion dollars</p>";
            layer.bindPopup(popupContent);
            
            layer.on({
                    mouseover: function(){
                        this.openPopup();
                    },
                    mouseout: function(){
                        this.closePopup();
                    }
                });
            
            
            
        };
    });
};




///collects our attributes for GDP related data

function processGDPData(data){
    var attributes = [];
    
    
    var properties = data.features[0].properties;
    
    for(var attribute in properties){
        
        if(attribute.indexOf("GDP") > -1){
            attributes.push(attribute);
        } 
    };
    
    
    
    return attributes;
}


//collects our attributes for our GDP per capita data
function processGDCData(data){
    var attributes = [];
    
    var properties = data.features[0].properties;
    for(var attribute in properties){
        if(attribute.indexOf("GDC") > -1){
            attributes.push(attribute);
        }
    };
    return attributes;
}

//collects our attributes for our PPP data
function processPPPData(data){
    var attributes = [];
    var properties = data.features[0].properties;
    for(var attribute in properties){
        if(attribute.indexOf("PPP") > -1){
            attributes.push(attribute);
        }
    };
    return attributes;
}

//our ajax call that retrieves our economic data
function getData(map){
    $.ajax("lib/EconomicFinal.geojson",{
        dataType: "json",
        success: function(response){
        
            var attributes = processGDPData(response);
            var GDC = processGDCData(response);
            var PPP = processPPPData(response);
            
            console.log(PPP);
            createPropSymbols(response, map);
            createPPPControls(map, PPP);
            createGDPControls(map, attributes);
            createGDCControls(map, GDC);
            createLegend(map, attributes);
        }
    });
    
};

$(document).ready(createMap);