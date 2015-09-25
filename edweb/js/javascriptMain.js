
$(document).ready(function() {
	$("#relativeContent").hide() ;
	
	$('img').click(function() { 	//pic pop-up
		$("#popup").show();
		if($(window).width() < 350){
		$('#popup').html('<center><button  class="closePic">Close</button><br><img src="' + $(this).attr('src') + '" width="270" /></center>');	
		}
		else if($(window).width() < 500){
		$('#popup').html('<center><button  class="closePic">Close</button><br><img src="' + $(this).attr('src') + '" width="350" /></center>');
			
			}else{
			$('#popup').html('<center><button  class="closePic">Close</button><br><img src="' + $(this).attr('src') + '" width="auto" /></center>');	
		}
});
	
	$(document).on('click','.closePic', function(){
			
			$("#popup").hide()
	});
	  
	
	$("#quizPic").click(function(){ //map quiz pop-up extension
	$("#relativeContent").show();
	
	init(); //start map
	});
			   
				   
	$("#logIn").click(function(){ //login ajax extension
	
		$("#ajaxCont").load("ajax/login.html", function(){
		window.scrollTo(0, $("#ajaxCont").offset().top);			
		});
		
	});
	
	$("#calculator").click(function(){ //calculator ajax
				
		$("#ajaxCont").load("ajax/calculator.html", function(){
		window.scrollTo(0, $("#ajaxCont").offset().top);	
			loadCalc();
		});
	
	});
	
	 R = document.getElementById('rpass');
	
});


	function reg(){ //binding to future element
	
		$("#ajaxCont").load("ajax/register.html", function(){
			window.scrollTo(0, $("#ajaxCont").offset().top);
		
		  R = document.getElementById("rpass");
		
            
               R.addEventListener("keyup", function(){//2
                 if(R.value.length < 8){
                    $("#message").html("Password is too short");
					 R.style.borderColor= "red";
                    }
                 else{
                    $("#message").html("");
                    length = 1;
                    if(!R.value.match(/[a-z]/i) && length == 1){
                       $("#message").html("Password requires one letter");
						 R.style.borderColor= "red";
                       }
                    else{
                       $("#message").html("");
                       letter = 1;
                       if(!R.value.match(/\d+/g) && length ==  1 && letter == 1){
                         $("#message").html("Password requires one number");
						   R.style.borderColor= "red";
                        }
                       else{
                          $("#message").html("");
                          number = 1;
                          if(!R.value.match(/[\W]/)){
                            $("#message").html("Password requires one special character");
							   R.style.borderColor= "red";
                            }
                          else{
                           $("#message").html("Password looks good");
							   R.style.borderColor= "#009900";
                           key = 1;

                       }}}}
                });
				});
	
	};


function changePage(){ //Successful Login
	   $("#ajaxCont").load("ajax/login_success.html", function(){
		window.scrollTo(0, $("#ajaxCont").offset().top);			
		});
		resetError();
};

function backToLogin(){
	$("#ajaxCont").load("ajax/login.html", function(){
		window.scrollTo(0, $("#ajaxCont").offset().top);			
		});
		
};

$(document).on("click", "#reg", function(){
	reg();
});

$(document).on("click", "#email", function(){
	validateEmailEntry();
});


function messageSent(){ //successful message sent
	$("#ajaxCont").html(
		"<span style='font-size:30px; color: red;'>Your Message was sent Successfully</span>")
		.effect("bounce", "slow");
}

function contFail(){ //not able to send message
	$("footer").html(
	"<span style='font-size:30px; color: red;'>Your Message failed to send</span>")
		.effect("bounce", "slow");
}


function contSent(){ //successful message sent
	$("footer").html(
		"<span style='font-size:30px; color: red;'>Your Message was sent Successfully</span>")
		.effect("bounce", "slow");
}

function messageFail(){ //not able to send message
	$("#ajaxCont").html(
	"<span style='font-size:30px; color: red;'>Your Message failed to send</span>")
		.effect("bounce", "slow");
}


function loginFail(){
	backToLogin();
	$("#anyErrors").text("Username and Password do not match, have you registered yet?");
}

function emailFail(){
	backToLogin();
	$("#anyErrors").text("Bad Email");
}

function yourEmailFail(){
	backToLogin();
	$("footer").append("Bad Email");
}



function resetError(){
	$("#anyErrors").html("");
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateEmailEntry(){		
		
          R = document.getElementById("email"); 
       R.addEventListener("keyup", function(){
		   var email = $('#email').val();
		  if( validateEmail(email)){			 
				  $('#message').prop("disabled", false); //submit button works
				   $("#anyErrors").html("");			 
		  }
			  else{				 				  
				  $('#message').prop("disabled", true );	//submit button disabled			  
				  $("#anyErrors").text("Email is not valid");
			  }
	   });
}



