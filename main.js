$('body').append('<div></div>');

function changeClock () {

 	var currentTime = new Date ();
  	var currentHours = currentTime.getHours ();
  	var currentMinutes = currentTime.getMinutes ();
  	var currentSeconds = currentTime.getSeconds ();

  	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  	currentHours = (currentHours < 10 ? "0" : "") + currentHours;

  	currentHours = (currentHours == 0) ? 12 : currentHours; 

  	var currentTimeStr = '#' + currentHours + currentMinutes + currentSeconds;
  	
  	if (currentSeconds % 2 === 0) {
  		$('body').css('background-color', currentTimeStr)
  	};
  	
   	$('div').html(currentTimeStr);
   	  	
}

$(document).ready(function () {
   setInterval('changeClock()', 1000);
});