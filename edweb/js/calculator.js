var one, two, three, four, five, six, seven, eight, nine, zero;
var clear, shfLeft, shfRight, divide, multiply, add, minus, equal, save;
var memory;
var memory2;
var operand;
var err;
var hoursWorked, oSave;
var bool; //if bool is 1 then result input is cleared

function clear(){
	document.cal.result.value = "";
}

function countWords(){
 
words = document.getElementById("writearea").value.split(" ");
var count =0;
for(var i =0; i < words.length ; i++){
	if(words[i] != ""){
		count +=1;
	}
	
	//console.log(count);
}
return count;
}


function invalidForm(){
	var myElement = document.querySelector("#er");
	
		myElement.style.backgroundColor = "red";
		myElement.style.color = "black";
		myElement.style.fontSize = "20px";
		
		
				
}

function invalidFN(){
	var fn = document.getElementById("firstName");
	fn.style.backgroundColor= "red";
}

function validateForm(){
	var fn = document.getElementById("firstName").value;
	var ln = document.getElementById("lastName").value;
	var id = document.getElementById("id").value;
	var bio = document.getElementById("writearea").value;
	var calResult = document.cal.result.value;
	
	
	
	if(hoursWorked == "" || hoursWorked == null){
		 oSave = "";
		 
	}
	else if(isNaN(hoursWorked) == NaN){
		oSave = "";
	}
	
	else{
		
		 oSave = "Hours Worked This Week: " + hoursWorked.toString();
		
	}
	
	ln = ln.capitalize(); //capitalize
	fn = fn.capitalize();
	
	if((fn == null || fn == "" || !isNaN(fn) )&& (ln == null || ln == "" || !isNaN(ln) )&& (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value)) && (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="Everything is wrong";
		return false;
		
	}
	
	else if((fn == null || fn == "" || !isNaN(fn) )&& (ln == null || ln == "" || !isNaN(ln) )&& (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value)) ){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";		
	document.getElementById("er").innerHTML ="First name, Last name and ID have errors";
		return false;
		
	}
	
	else if( (ln == null || ln == "" || !isNaN(ln)) && (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value) )&& (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="Got some fixing to do there!";
		return false;
		
	}
	
	else if(  (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value) )&& (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="ID and your Biography needs a little attention";
		return false;
		
	}
	
	else if((fn == null || fn == "" || !isNaN(fn) )&& (ln == null || ln == "" || !isNaN(ln) )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";		
	document.getElementById("er").innerHTML ="First name and Last name have errors";
		return false;
		
	}
	
	else if((fn == null || fn == "" || !isNaN(fn) )&&  (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value))){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";		
	document.getElementById("er").innerHTML ="First name and ID have errors";
		return false;
		
	}
	
	else if((fn == null || fn == "" || !isNaN(fn) )&& (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="First name and Biography have errors";
		return false;
		
	}
	
	else if( (ln == null || ln == "" || !isNaN(ln) )&& (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value)) ){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";		
	document.getElementById("er").innerHTML ="Last name and ID have errors";
		return false;
		
	}
	
	else if( (ln == null || ln == "" || !isNaN(ln) )&& (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="Last name and Biography have errors";
		return false;
		
	}
	
	else if( (id == null || id == "" || isNaN(id) ||
	id.length != 9 || check(document.getElementById("id").value)) && (bio<1 || countWords() > 25 )){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";		
	document.getElementById("er").innerHTML ="ID and Biography have errors";
		return false;
		
	}
	

	
	else if(fn == null || fn == "" || !isNaN(fn)){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "red";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";		
	document.getElementById("er").innerHTML ="First name is empty or invalid";
		return false;
		
	}
	else if(ln == null || ln == "" || !isNaN(ln)){
		invalidForm();
		
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "red";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";
	document.getElementById("er").innerHTML ="Last name is empty or invalid";
	
		return false;
		
}
	else if(id == null || id == "" ){
		invalidForm();
			
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";
	
		document.getElementById("er").innerHTML ="ID field is empty";
		return false;
}
		
	else if(isNaN(id)){
		invalidForm();
				
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";
	
		
		document.getElementById("er").innerHTML ="ID does not have proper digits";
		
		return false;
}

else if(id.length != 9 || check(document.getElementById("id").value) ){
		invalidForm();
			var f = document.getElementById("firstName");
	f.style	
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "red";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";
	
		
		document.getElementById("er").innerHTML ="ID has to be 9 digits";
		
		return false;
}

	else if(bio<1){
		invalidForm();
		
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";
	
		
	document.getElementById("er").innerHTML ="Biography is empty";
		return false;
		
}
	else if(countWords() > 25 ){
		invalidForm();
		
		
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "red";
		document.getElementById("er").innerHTML ="Biography has a limit of 25 words";
		return false;
	
		
}

	else {
		var f = document.getElementById("firstName");
	f.style.borderColor= "white";
	var l = document.getElementById("lastName");
	l.style.borderColor= "white";
	var i = document.getElementById("id");
	i.style.borderColor= "white";
	var w = document.getElementById("writearea");
	w.style.borderColor= "white";
	var myElement = document.querySelector("footer");	
	myElement.style.backgroundColor = "#3F6";
	var errr = document.getElementById("er").innerHTML = "";
	//reset all invalid color and text
		var count = countWords();
		
		alert('First Name: ' + fn +'\n'
		+ 'Last Name: ' + ln +'\n'
		+ 'ID: ' + id +'\n'
		+ 'Notes: ' + bio +'\n'
		+ 'Calculator Result: ' + calResult +'\n'
		+ oSave ); 
		return false;
	}
}

function check(some){
for(i = 0; i < some.length; i++){
	if(some.slice(i) == " "){
	return true; //bad if there is
	}
	}
	return false;
}

String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
	//this will automatically return the first letter as uppercase
}

function error(){
if(isNaN(document.cal.result.value)){
return false;
}
else{
return true;
}
}

function errorDisplay(){
document.cal.result.value ="";
document.cal.result.value = "ERROR: press C";
}

function isEmpty(){
	var empty = document.cal.result.value;
	if(empty == "" || empty == null){
		return false;
	}
	else{
		return true;
	}
}



function addUpdate(){
if(!error()){
errorDisplay();
}
else{
bool = 1;
memory = document.cal.result.value;
operand = 1;
}

}

function mulUpdate(){
if(!error()){
errorDisplay();
}
else{
bool = 1;
memory = document.cal.result.value;
operand = 2;
}
}

function minusUpdate(){
if(!error()){
errorDisplay();
}
else{
bool = 1;
memory = document.cal.result.value;
operand = 3;
}
}

function divUpdate(){
if(!error()){
errorDisplay();
}
else{
bool = 1;
memory = document.cal.result.value;
operand = 4;
}
}

function oneUpdate(){

if(bool == 1){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.one.value;
bool=0;}
else{
//var resultInput = document.getElementById("result");
document.cal.result.value += document.cal.one.value;
	console.log(cal.one.value);
}
if(!error()){
errorDisplay();
}
}

function twoUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.two.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.two.value;}
if(!error()){
errorDisplay();
}
}

function threeUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.three.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.three.value;}
if(!error()){
errorDisplay();
}
}

function fourUpdate(){

if(bool){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.four.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.four.value;}
if(!error()){
errorDisplay();
}
}

function fiveUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.five.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.five.value;}
if(!error()){
errorDisplay();
}
}

function sixUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.six.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.six.value;}
if(!error()){
errorDisplay();
}
}

function sevenUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.seven.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.seven.value;}
if(!error()){
errorDisplay();
}
}

function eightUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.eight.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.eight.value;}
if(!error()){
errorDisplay();
}
}

function nineUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value =  cal.nine.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value +=  cal.nine.value;}
if(!error()){
errorDisplay();
}
}

function zeroUpdate(){

if(Boolean(bool)){
var resultInput = document.getElementById("result");
resultInput.value = '';
resultInput.value = cal.zero.value;
bool=0;}
else{
var resultInput = document.getElementById("result");
resultInput.value += cal.zero.value;}
if(!error()){
errorDisplay();
}
}

function clearUpdate(){
var resultInput = document.getElementById("result");
resultInput.value = '';
err = "";
memory = "";
memory2 = "" //clearing errors
}

function leftUpdate(){
var resultInput = document.getElementById("result");
var mem = resultInput.value; //take input and shift number to left
}

function spanUpdate(){
if(!error() || !isEmpty()){
 document.getElementById("alert").innerHTML = 
 "*ALERT*: This is not a valid number of hours worked.";

document.getElementById("mySpan").innerHTML = "";
oSave = "";

}
	
else{
hoursWorked = document.getElementById("result").value;
document.getElementById("mySpan").innerHTML = hoursWorked; 
document.getElementById("alert").innerHTML = "";
}
}




//---------------------------------------------------------------
function equalUpdate(){

memory2 = document.cal.result.value;
document.cal.result.value = memory;

console.log("memory: " + memory + ", memory2: " + memory2 + ", operand: " + operand);
bool = 1; 

if(operand == 2){
document.cal.result.value = +memory * +memory2;

 
}

else if(operand == 3){
document.cal.result.value= +memory - +memory2;


}

else if(operand == 1){
document.cal.result.value = +memory + +memory2;

}

else if(operand == 4){
document.cal.result.value = +memory / +memory2;


}

else{
operand = "";
memory = "";
memory2 = "";
}



}




//---------------------------------------------------------------
function allSet(){

$(document).on('click', '#one', function(){
	oneUpdate();
});
	
$(document).on('click', '#two', function(){
	twoUpdate();
});

$(document).on('click', '#three', function(){
	threeUpdate();
});

$(document).on('click', '#four', function(){
	fourUpdate();
});

$(document).on('click', '#five', function(){
	fiveUpdate();
});

$(document).on('click', '#six', function(){
	sixUpdate();
});

$(document).on('click', '#seven', function(){
	sevenUpdate();
});

$(document).on('click', '#eight', function(){
	eightUpdate();
});

$(document).on('click', '#nine', function(){
	nineUpdate();
});

$(document).on('click', '#zero', function(){
	oneUpdate();
});

$(document).on('click', '#clear', function(){
	clearUpdate();
});

$(document).on('click', '#ad', function(){
	addUpdate();
});

$(document).on('click', '#minu', function(){
	minusUpdate();
});

$(document).on('click', '#multipl', function(){
	mulUpdate();
});

$(document).on('click', '#divid', function(){
	divUpdate();
});

$(document).on('click', '#equa', function(){
	equalUpdate();
});

$(document).on('click', '#left', function(){
	leftUpdate();
});
	
$(document).on('click', '#right', function(){
	rightUpdate();
});

$(document).on('click', '#save', function(){
	spanUpdate();
});



//-------------------------------------------------------------

function leftUpdate(){
var x = document.cal.result.value.slice(1);
document.cal.result.value = x + 0;
}

function rightUpdate(){
 var leng = document.cal.result.value;
	if(leng.length == 1 ){
		document.cal.result.value = 0;
	}
	
	else{
var x = document.cal.result.value.slice(0, -1);
document.cal.result.value = x;
	}
}



}


function loadCalc(){
	allSet();	//load all calculator DOM elements
}
