
 


//longitud is increasing from left to right
	//latitud is increasing from bottom to top
	var map;
	var bool = true;
	var score =0;
	var latitud;
	var longitud;
	var question =0;
	//Array goes leftTop, leftBot, rightBot, rightTop
	var jacarandaLat =[34.24203265889959,34.24104817355465,34.24105704284338,34.242077004815286];
	var jacarandaLon =[-118.52938055992126 ,-118.52944493293762 ,-118.5278570652008,-118.5278570652008];
	var jacarLT = new google.maps.LatLng(34.24203265889959, -118.52938055992126);
	var	jacarLB = new google.maps.LatLng(34.24104817355465, -118.52944493293762);
	var	jacarRB = new google.maps.LatLng(34.24105704284338, -118.5278570652008);
	var	jacarRT = new google.maps.LatLng(34.242077004815286, -118.5278570652008);
	var jacaranda =[jacarLT, jacarLB, jacarRB, jacarRT]; //path
	//Array goes leftTop, leftBot, rightBot, rightTop
	var sequoiaLat = [34.2407732251402, 34.24017010934372 ,34.24017010934372 ,34.24078209445791 ];
	var sequoiaLon = [-118.52839887142181,-118.52840960025787 ,-118.52761566638947 ,-118.52769076824188 ];
	var seqLT = new google.maps.LatLng(34.2407732251402 ,-118.52839887142181 );
	var seqLB = new google.maps.LatLng( 34.24017010934372, -118.52840960025787);
	var seqRB = new google.maps.LatLng( 34.24017010934372,-118.52761566638947  );
	var seqRT = new google.maps.LatLng( 34.24078209445791, -118.52769076824188 );
	var sequoia =[seqLT, seqLB, seqRB, seqRT];//path
	
	//Array goes leftTop, leftBot, rightBot, rightTop
	var bayramianLat = [ 34.240685086447,34.239917885923184 ,34.23995779825103 ,34.240645174261665];
	var bayramianLon = [ -118.53143513202667,-118.53139221668243  , -118.53022277355194  ,-118.53015303611755];
	var bayLT = new google.maps.LatLng( 34.240685086447, -118.53143513202667 );
	var bayLB = new google.maps.LatLng( 34.239917885923184, -118.53139221668243  );
	var bayRB = new google.maps.LatLng( 34.23995779825103 , -118.53022277355194  );
	var bayRT = new google.maps.LatLng( 34.240645174261665, -118.53015303611755	);
	var bayramian =[bayLT, bayLB, bayRB, bayRT];//path
	
	//Array goes leftTop, leftBot, rightBot, rightTop
	var citrusLat = [34.2391329396295,34.23894668011253 ,34.23897415984228 ,34.2391329396295 ];
	var citrusLon = [-118.52855443954468,-118.52852761745453 ,-118.52764785289764 ,-118.52763712406158 ];
	var citLT = new google.maps.LatLng(34.2391329396295 , -118.52855443954468 );
	var citLB = new google.maps.LatLng(34.23894668011253 , -118.52852761745453 );
	var citRB = new google.maps.LatLng(34.23897415984228 , -118.52764785289764);
	var citRT = new google.maps.LatLng(34.2391329396295  , -118.52763712406158 );
	var citrus =[citLT, citLB, citRB, citRT];//path
	
	//Array goes leftTop, leftBot, rightBot, rightTop
	var magnoliaLat = [ 34.239647368535515,34.23922163449275 ,34.23921276501062 ,34.239642933817];
	var magnoliaLon = [-118.52839887142181 ,-118.52840960025787 ,-118.52815210819244  ,-118.52815747261047];
	var magLT = new google.maps.LatLng(34.239647368535515 , -118.52839887142181 );
	var magLB = new google.maps.LatLng(34.23922163449275 , -118.52840960025787 );
	var magRB = new google.maps.LatLng(34.23921276501062 , -118.52815210819244 );
	var magRT = new google.maps.LatLng(34.239642933817 , -118.52815747261047 );
	var magnolia =[magLT, magLB, magRB, magRT];//path


	function doubleClicked(e)
	{
	latitud = e.latLng.lat();
	longitud = e.latLng.lng();
	
		if( latitud < nextArrayLat(0) && latitud > nextArrayLat(1) && latitud > nextArrayLat(2) && latitud < nextArrayLat(3)
		&& longitud > nextArrayLon(0) && longitud > nextArrayLon(1) && longitud < nextArrayLon(2) && longitud < nextArrayLon(3) ){
			correct();			
			}
			else{
			incorrect();
			}  	
	
} 

function singleClicked(e) 
//for smartphones or tablets since double tap will zoom in the screen
	{
	latitud = e.latLng.lat();
	longitud = e.latLng.lng();
	
		if( latitud < nextArrayLat(0) && latitud > nextArrayLat(1) && latitud > nextArrayLat(2) && latitud < nextArrayLat(3)
		&& longitud > nextArrayLon(0) && longitud > nextArrayLon(1) && longitud < nextArrayLon(2) && longitud < nextArrayLon(3) ){
			correct();			
			}
			else{
			incorrect();
			}  
						
	}

	
	function nextArrayLat(number){
		if(question == 0){
		return jacarandaLat[number];
		}
		else if(question == 1){
		return sequoiaLat[number];}
		else if(question == 2){
		return bayramianLat[number];}
		else if(question == 3){
		return citrusLat[number];}
		else if(question == 4){
		return magnoliaLat[number];}
		
		
		else {return;}
		}
	
	
	function nextArrayLon(number){
		if(question == 0){
		return jacarandaLon[number];
		}
		else if(question == 1){
		return sequoiaLon[number];}
		else if(question == 2){
		return bayramianLon[number];}
		else if(question == 3){
		return citrusLon[number];}
		else if(question == 4){
		return magnoliaLon[number];}
		else {return;}
		}
	
	
	function selectMap(){
		if(question == 0){
		return jacaranda;}
		else if(question == 1){
		return sequoia;}
		else if(question == 2){
		return bayramian;}
		else if(question == 3){
		return citrus;}
		else if(question == 4){
		return magnolia;}
		
		else{
		return; }
	
	}
	
	function quiz(){
	if(question == 0){
		$("#ques").text("Which building is Jacaranda?");
	}
	else if(question == 1){
		$("#ques").text("Which building is Sequoia?")
		}
	else if(question == 2){
		$("#ques").text("Which building is Bayramian?")
		}
	else if(question == 3){
		$("#ques").text("Which building is Citrus?")
		}
    else if(question == 4){
		$("#ques").text("Which building is Magnolia?")
		}		
	
	
	else{
		$("#last").text("You have scored " + score + "/5");
		$("#ques").text(" ");
		$('#last').delay(4000).fadeOut();
		
		google.maps.event.trigger(map, 'resize');
		}
	}

    function init()
    {
		var zoomNum = 0;
		if( $(window).width() < 500 ){
			zoomNumb = -118.52948581300000;
		} else{
			zoomNumb = -118.52848470211029; //normal longitud number
		}
			
		
				
    	var mapOptions = {
			
		    zoom: 17,
		    center: new google.maps.LatLng(34.24017349697353, zoomNumb),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDoubleClickZoom: true,
			disableDefaultUI: true,
			zoomControl: false,
			draggable: false,
			scrollwheel: false
	    }
	  	map = new google.maps.Map(document.getElementById("map-canvas"), 
	  							mapOptions);
								
								
		if( WURFL.is_mobile ){
			google.maps.event.addListener(map, 'click', singleClicked);
		quiz(); 
		} else {			
		google.maps.event.addListener(map, 'dblclick', doubleClicked);
		quiz();		
    }
	} //end init
	
	function correct(){
	var pathGreen = new google.maps.Polygon({
		paths: selectMap(),
		strokeColor: 'green',
		strokeOpacity:0.8,
		strokeWeight:2,
		fillColor: 'green'});
		
		pathGreen.setMap(map);	
		question++; 
		$("#correctAnswer").show().fadeOut(2000);
			
		if(question == 5){
		end();
		}
		score++;
		window.setTimeout(quiz, 1000); //delay execution
	}
	function incorrect(){
	var pathGreen = new google.maps.Polygon({
		paths: selectMap(),
		strokeColor: 'red',
		strokeOpacity:0.8,
		strokeWeight:2,
		fillColor: 'red'});
		
		pathGreen.setMap(map);	
		question++;
		$("#wrongAnswer").show().fadeOut(2000);
		if(question == 5){
		end();
		}
		
		
		window.setTimeout(quiz, 1000); //delay execution
		
	}
	
	
	
	function end(){
	$("#last").show();
	
	$("#map-canvas").animate({
		opacity: 0.25
		})
	
	if( $(window).width() < 500){
		$("#last").animate({left: '100px',	
		backgroundColor: 'red', 		
		height: '200px',
		width: '200px',
		opacity:1.0
	});
	}
						   
		else{
	$("#last").animate({left: $(window).width()/3.25,	
		backgroundColor: 'red', 		
		height: '100px',
		width: '250px',
		opacity:1.0
		
		})
	
		}
	}
	
	$(document).ready(function(){
		$(document).on('click','.close_box', function(){
			$(this).parent().hide()
			score= 0; 
			question =0;
			$("#map-canvas").animate({
		opacity: 1
		})
					
			});
		
		  
 });
		
	
	
	
	//google.maps.event.addDomListener(window, 'load', init);
	