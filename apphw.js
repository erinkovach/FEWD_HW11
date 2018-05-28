//array
var cities = [
	'nyc',
	'SF',
	'LA',
	'ATX',
	'SYD'
	]

//wrap in document code
$(document)ready(function(){

    //for loop
	for (var i = 0; i < cities.length; i++){
        //inject objects
		var option = $('<option>', {
			value: cities[i],
			text: cities[i]
		});

        //append to drop down menu
		$('#city-type').append(option);
	}



// function/on.change - gathering value of user input
  $('#city-type').on('change', function(){
  	var cities = $('#city-type').val();
  	cities = cities.toLowerCase().trim();
  	console.log(cities);

  	// if statements to change background image based on input
  	if(cities === 'NY'){
  		$('body').css('background-image', 'url(./nyc.jpg)');
  	} else if (cities === 'SF'){
  		$('body').css('background-image', 'url(./sf.jpg)');
  	} else if (cities === 'LA'){
  		$('body').css('background-image', 'url(./la.jpg)');
  	} else if (cities === 'ATX'){
  		$('body').css('background-image', 'url(./atx.jpg');
  	} else if (cities === 'SYD'){
  		$('body').css('background-image', 'url(./sydney.jpg)');
  	} else{
  		$('body').css('background-image', 'url(./citipix_skyline.jpg)')
  	}
  });

//  trigger - makes things happen
  $('city-type').trigger('change');



};