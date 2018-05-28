//array
var cities = [
	'NYC',
	'SF',
	'LA',
	'ATX',
	'SYD'
	]

//wrap in document code
$(document).ready(function(){

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

    //remove class
    $('body').removeClass();

  	// if statements to change background image based on input
  	if(cities === 'nyc'){
  		// $('body').css('background-image', 'url(./images/nyc.jpg)');
      $('body').addClass('nyc');
  	} else if (cities === 'sf'){
  		// $('body').css('background-image', 'url(./sf.jpg)');
      $('body').addClass('sf');
  	} else if (cities === 'la'){
  		// $('body').css('background-image', 'url(./la.jpg)');
      $('body').addClass('la');
  	} else if (cities === 'atx'){
  		// $('body').css('background-image', 'url(./atx.jpg');
      $('body').addClass('austin');
  	} else if (cities === 'syd'){
  		// $('body').css('background-image', 'url(./sydney.jpg)');
      $('body').addClass('sydney');
  	} else{
  		// $('body').css('background-image', 'url(./citipix_skyline.jpg)')
      $('body').addClass('default');
  	}
  });

  //trigger - makes things happen
  $('city-type').trigger('change');



});