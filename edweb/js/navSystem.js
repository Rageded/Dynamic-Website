var navOpen = false;

$(document).ready(function (){
	$("#navSystem").hide();
	$("#navDoor").slideUp();
	
	
	
	$("nav").on('click', function() {
		clickOrHover();
	});
	
	
	
});


function clickOrHover (){
		if(!navOpen){
		$("#navSystem").show("fast", function(){
			$("#navDoor").slideDown("slow");
			navOpen = true;	
		});	
		
		
	}	else{
		$("#navDoor").slideUp("slow", function(){
			$("#navSystem").hide();
		navOpen = false;	
		});			
	
		}
}