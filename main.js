$('body').append('<div></div>');

function updateClock () {

 	var currentTime = new Date ();
  	var currentHours = currentTime.getHours ();
  	var currentMinutes = currentTime.getMinutes ();
  	var currentSeconds = currentTime.getSeconds ();

  	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  	currentHours = (currentHours < 10 ? "0" : "") + currentHours;

  	currentHours = (currentHours == 0) ? 12 : currentHours; 

  	var currentTimeString = '#' + currentHours + currentMinutes + currentSeconds;
  	
  	if (currentSeconds % 2 === 0) {
  		$('body').css('background-color', currentTimeString)
  	};
  	
   	$('div').html(currentTimeString);
   	  	
}

$(document).ready(function () {
   setInterval('updateClock()', 1000);
});