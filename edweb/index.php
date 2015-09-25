<!doctype html>
<!--[if lt IE 7]> <html class="ie6 oldie"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 oldie"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 oldie"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">

<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Edwin's World</title>
<link href="boilerplate.css" rel="stylesheet" type="text/css">
<link href="cssPage.css" rel="stylesheet" type="text/css">
<link href="CSS/map.css" rel="stylesheet" type="text/css">
<link href="CSS/calculator.css" rel="stylesheet" type="text/css">

<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
	

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"> </script>
<script type ="text/javascript" src="js/map.js"></script> 


<script src="js/javascriptMain.js" type="text/javascript"></script>
<script src="js/calculator.js" type="text/javascript"></script>
<script src="js/mobileMenu.js" type="text/javascript"></script>
<script src="//wurfl.io/wurfl.js" type='text/javascript' ></script>	
<script src="jquery-ui-1.11.4/jquery-ui.min.js" type='text/javascript' ></script>
<script src="js/navSystem.js" type='text/javascript' ></script>
<script>
	
	$(document).ready(function() {
			if(WURFL.is_mobile){ 
				$('#det').text('single');
		  }else{ 
			  $('#det').text('double');
		  }
	});	
	
	
		

</script>

</head>
<body>
	
	
	
<header>
	<button id="mobileMenuButton" class="mobileButton " ><h3><p class="thicker">_</p><p class="thicker">_</p>
		<p class="thicker">_</p></h3></button>
  
	<h1>Edwin Portillo's Website</h1> 
	<nav >
		<center>
		<h2 class="glow">	Navigation System</h2>
		<div id= "navSystem"> <!-- Nav parent layer -->
		
		<div id="navDoor">
    	<center>
    	<ul>
        <li class="glow"><a href="about.html">About Me</a></li>
        <li class="glow"><a href="portofolio.html">Portfolio</a></li>
        <li class="glow"><a href="science.html">Science Spot</a></li>
        </ul>
        </center>
		</div>
		</div> <!-- End Navigation system parent layer -->	
		</center>
	</nav>	
	
		
	
	
</header>

	
<div id="mobMenu">
		<h3>About Me</h3>
		<h3>Menu Item 2</h3>
</div>


<div  class="gridContainer clearfix">  
	
	
 <div id="LayoutDiv1">  
<div id ="relativeContent" style="display:none">
	<p class="close_box">(Close)</p> 
		<div id="frame" style = "position:relative;">
  <h1>QUIZ</h1>
		<center>	
	<p style="text-align: center;">There are 5 questions to this quiz, in order to answer the question you must 
		<span id="det"></span> click on the building.
		When you are done you can close the pop-up and if you wish to retake the quiz then just reopen the pop-up.
		<a href="#" title="Google API and jQuery is used for this small quiz" class="tooltip "><span title="info" class="inf">i</span></a></center>
  <div id="map-canvas" >
  </div>
			
  <div id="quiz" >
  <p id = "ques" > </p>
  </div>
  <div id="last" style = "position:absolute;">
  
  
  </div></div>
  <div id="answer" style="position:relative;" >
  <p id="correctAnswer" hidden="true">Correct</p>
  <p id="wrongAnswer" hidden="true">Wrong</p>
   </div>

 </div>
	</div><!------- end div1 ---------> 	  
<main>
<section class="indexDiv">
	<span style="font-size:40px; color:#0F0; float:left; margin-right:5px">Welcome</span>
    <p>  to my space in the internet, I hope you enjoy what you see, as what I have here
    is a collection of some of my knowledge from my dedicated years of studying the sciences. 
	The goal of my website is to have some of my work for showcase for those who are interested.
	I have attempted to use the most advanced technology to build this website and have coded 
		every pixel that you see here. My goal was to make a dynamic responsive layout and for 
		those of interest I have specifically explained the technology behind it.</p><br>
		<center>
			<p>Look for the 
		<a  title="information will be located here" class="tooltip "><span title="info" class="inf">i</span></a>
				for more information. 
			</p>
		</center>	
	
</section>   
	
	<article>	
	<div class="blackDiv">
    <h2>Small Applications</h2>
	
		<center>
  <div class="normalDiv" id = "portContent">
    <button type="button" alt="A small Quiz to using Google Maps" id ="quizPic" class="buttonTrigger buttonArt">Quiz pop-up</button>
	<button type="button" id="logIn" class="buttonTrigger buttonArt">Login opener</button>
	<button type="button" id="calculator" class="buttonTrigger buttonArt">Calculator opener</button>
			
	<div>
		
		<!-- php script echo holder -->	
		
		<div id="ajaxCont"  > <!-- used for ajax content -->
				
		</div>
		<span style="color: red;" id="anyErrors"> </span>
	
		 <?php
    session_start();
   
    $rpswd = $_POST['rpass'];
    $pcheck = 0;
    $message;
    $userid;

    if(isset($_POST['finish'])){
    if((strlen($rpswd) > 7)
        && preg_match("#[a-z]+#", $rpswd)
        && preg_match("#[0-9]+#", $rpswd)
        && preg_match("#[\W+]+#", $rpswd)
        ){
        echo "<p>*Registration was Successful*</p>";
		echo "<script type='text/javascript'>backToLogin();</script>";
       }
     else{
       echo "<p>Password is weak, registration failed</p>";
       $pcheck = 1;
     }}
	
		 ?>
		
	</div>
	</div>
	</center>
	</div><!-------------------end blackDiv ----------------->	
		
<section>
	<div class="indexDiv">
    <h2>Resume</h2>
	<p><a  title="This website is made from these components: HTML5, CSS3, Javascript, jQuery, jQuery UI, AJAX, php, and MySQL 
		in a LAMP stack environment using notpadqq for the entire website. It is a responsive layout and mobile friendly" class="tooltip "><span title="info" class="inf">i</span></a>
	</p>
	</div>
</section>
		
<section>
	<div class="blackDiv">
		
    <h2>Computer Builds</h2>
	
	
	<div id="popup"  style="display:none;"></div>
	
		<p>One of my hobbies is to build computers, it is my "Adult version" of leggos.
		I have build about 4 computers from the ground up from specific components of my choice, with 
		much research to make sure there is no bottleneck in performance. Right now my 
		current computer's specifications are:
		</p>
		<img src="images/myrig.jpg"/ title="click for full view" width="150px" style="float:right">
		
			<ul>
				<li>AMD 8350FX, overclocked at 4.5 ghz </li>
				<li>Nvdia gtx 970 g1 </li>
				<li>16 GB of RAM </li>
				<li>GIGABYTE 990FXA-UD7 motherboard </li>
				<li>480 GB SSD (Windows 10), 120 GB SSD (Linux Ubuntu), 4TB hard drive </li>
				<li>Corsair CPU Water Cooling System </li>
				<li>Corsair 770 W Power Supply </li>
				<li>NZXT Phantom 820 (Go big or go home) </li>
				<li>Dual Monitors for work performance! </li>
			</ul>
		
	</div>
	
		
</section>
		
<section>
	<div class=" white">
	<h2>About Me</h2>
	
		<p >Hi I am Edwin Portillo and I was born in El Salvador, a tiny country in North America,
			specifically in Central America.
		I moved to the United States at the age of 10 with my family. This does mean I am bilingual, 
		I can speak and write fluently in both Spanish and English.<br>
		Right now I am a part-time Web Master and a full-time student at California State University
		Northridge graduating in Spring 2016 with a Bachelor of Science in Computer Science.
		I have a passion for knowledge 
		specifically in the science department and thus it is broad. I have invested a good amount 
		of time in learning the diversity of life in the world and I have come to realize even the 
		smallest particle in the world can make a difference. It is this very reason why the more I 
		learn, the more I appreciate. Some of the fields that I focus in are Computer science, 
		Ethology, Genetics, and Astronomy.<br>
		My goal is to make a positive difference in the world and to be part of something much greater 
		that extends my knowledge everyday.<br>
		For fun I like to work out, program, watch animal documentaries, play video games,
		and spent time with my twin brother.
		</p>	
	</div>
		
		
</section>	
		
<section id="pictures">
	<!-- add some pictures -->
</section>
<footer>
	<h2>Contact Me</h2>
	 <form method="post">
		<input class="formStyle" id="firstName" name="firstName" type="text" value="" placeholder="First Name">	
		<input class="formStyle" id ="lastName" name="lastName" type="text" value="" placeholder="Last Name">	 
	  	<input class="formStyle" id="contEmail" name="contEmail" type="text" value="" placeholder="email">   	
		<input class="formStyle" id="contSubject" name="contSubject" type ="text" placeholder="Subject" >
	   
	   <textarea class="areaText" name="contMessage" id="contMessage" placeholder="Message"  ></textarea>
		 <br>
	<input id="contactButton" type="submit" name="contactButton" value="Send away!">
	 </form>	
</footer>
</article>
	
	<?php

//-----------------------CONNECT-----------------------------
     function Connect(){

         $servername = "localhost";
         $username = "root";
         $password = "EMT3life.";
         $dbname = "edwindb";
         $conn = mysqli_connect($servername, $username, $password, $dbname);
         if(!$conn){
           die("Connection failed: ".mysqli_connect_error());
        }
        return $conn;
    }

//-----------------------REGISTRATION-------------------------
     if(isset($_POST['finish']) && $pcheck != 1){
         $conn = Connect();
         $ruser = $_POST['rname'];
//-----------------SALT + HASH
        $salt = openssl_random_pseudo_bytes(10,$cstrong);
        $hash = hash("SHA512", $rpswd . $salt);

        $insert = "INSERT INTO users (username, password, salt)
                VALUES ('$ruser', '$hash', '$salt')";
        mysqli_query($conn, $insert);
        mysqli_close($conn);
		
      }
//--------------------------LOGIN --------------------------------
      if(isset($_POST['login']) && !empty($_POST['lname']) && !empty($_POST['lpass'])){
         $conn = Connect();
         $rpswd = $_POST['rpass'];
         $lname = $_POST['lname'];
         $lpass = $_POST['lpass'];
         $retrieve = "SELECT * FROM users WHERE
                      username = '$lname'";
         $result = mysqli_query($conn, $retrieve);
         $row = $result->fetch_assoc();
         $userid = $row["userid"];
         $hashpass = hash("SHA512", $lpass . $row["salt"]);
         if($row["password"] ==  $hashpass){
         // $message = "1";
			 $_SESSION['lname'] = $lname;
          echo "<script type='text/javascript'>changePage();
		  </script>";
         
          }
        else{
         
          echo "Username and password do not match";
			echo "<script type='text/javascript'>loginFail();
		  </script>";
          }
        mysqli_close($conn);

      }

//------------------- message --------------------------------
if(isset($_POST['message'])){
			 
			 
	
		if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){  
			  
         $conn = Connect();
         $to = $_POST['email'];
		
		 $sendtime = $_POST['day'] .  $_POST['time'] .  $_POST['month'];
         $message = $_POST['messageInput'];
		 $lname = $_SESSION['lname'];
		 $subject = $_POST['sub'];
		 $header = 'FROM: Edwin Portillo';
         $retrieve = "SELECT userid FROM users WHERE username = '$lname'";
         $result = mysqli_query($conn, $retrieve);
         $row = $result->fetch_assoc();
         $userid = $row["userid"];
		  settype($userid , "integer");
		 $id = json_encode($userid);
         $insertmess = "INSERT INTO Message (userid, emailAddr, msg)
                        VALUES ('$userid', '$to', '$message')";
         mysqli_query($conn, $insertmess);
		  
		 $retval = mail($to, $subject, $message, $header);
		  
		  if($retval == true){
			 
			  echo "<script type='text/javascript'>messageSent();</script>";
		  }
		  else{
			
			   echo "<script type='text/javascript'>messageFail();</script>";
		  }
		  
		 mysqli_close($conn);
		}

		else{
       	echo "<script type='text/javascript'>emailFail();</script>";
       
     	}
 }

//------------------- Contact Me --------------------------------
 if(isset($_POST['contactButton'])){
			 
			 
	
		if(filter_var($_POST['contEmail'], FILTER_VALIDATE_EMAIL)){  
			  
         $conn = Connect();
         $cto = 'edwin.portillo.123@outlook.com';
		
		 $theirEmail = $_POST['contEmail'];
         $cmessage = $_POST['contSubject'] . " " . $_POST['contMessage'] . " " . $_POST['contEmail'];
		 $fname = $_POST['firstName'];	
		 $lname = $_POST['lastName'];
		 $csubject = $_POST['contSubject'];
		 $header = 'FROM: Edwin Portillo';
       
        
         $insertmess = "INSERT INTO Contact ( email, firstname, lastname, message)
                        VALUES ('$theirEmail', '$fname', '$lname', '$cmessage')";
         mysqli_query($conn, $insertmess);
		  
		 $retval = mail($cto, $csubject, $cmessage, $header);
		  
		  if($retval == true){
			 
			  echo "<script type='text/javascript'>contSent();</script>";
		  }
		  else{
			
			   echo "<script type='text/javascript'>contFail();</script>";
		  }
		  
		 mysqli_close($conn);
		}

		else{
       	echo "<script type='text/javascript'>yourEmailFail();</script>";
       
     	}
 }
   
     
                
      ?>
</main> </div>

</body>
</html>
