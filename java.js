// Nav background 
$(document).scroll(function() {
	$('nav').toggleClass('scrolled', $(document).scrollTop() >= 50);
});

$('#navburger').click(function() {
	$('nav').toggleClass('mobilenav');
});

// Image fade in
$(document).ready(function() {
	$(window).scroll( function(){
		$('.hide').each( function(I){
			
			var btm_object = $(this).offset().top + $(this).outerHeight();
			var btm_window = $(window).scrollTop() + $(window).height();
			var half_btm_object = btm_object-($(this).outerHeight()/2);
		
			if( btm_window > btm_object-40 ){
				$(this).animate({'opacity':'1'},500);
			}
		}); 
	});
});

// MAP
$(document).ready(function() {
	$map = $('#map');
	$map.gmap({
		'center': '31.941499, 35.147249',
		'zoom': 10.8,
		'MapTypeId': google.maps.MapTypeId.ROADMAP
	});
	
	// Haifa
	$map.gmap('addMarker', {'position': '32.794279, 34.988795' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/haifa.jpg" class="" alt="" /><figcaption>Haifa</figcaption>' }, this);
	});
	
	// Yafa
	$map.gmap('addMarker', {'position': '32.049583, 34.758373' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/yaffa2.jpg" class="" alt="" /><figcaption>Beach in Yafa</figcaption><img src="images/yaffa.jpg" class="" alt="" />' }, this);
	});
	
	// Old City
	$map.gmap('addMarker', {'position': '31.777237, 35.230204' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/old.jpg" class="" alt="" /><figcaption>Streets in Old City, Jerusalem</figcaption><img src="images/old2.jpg" class="" alt="" />' }, this);
	});
	
	// church of nativity
	$map.gmap('addMarker', {'position': '31.704401,35.207376' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/native.jpg" class="" alt="" /><figcaption>The Birth place of Jesus, Church of Nativity, Bethlehem</figcaption>' }, this);
	});
	
	// Allenby Bridge
	$map.gmap('addMarker', {'position': '31.874109,35.540891' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/bridge.jpg" class="" alt="" /><figcaption>Allenby Bridge (Jiser) connecting Jordan and Palestine</figcaption>' }, this);
	});
	
	// Wall
	$map.gmap('addMarker', {'position': '31.777267,35.225891' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/wall2.jpg" class="" alt="" /><img src="images/wall.jpg" class="" alt="" /><figcaption>Separation wall and Border Check at the wall</figcaption><img src="images/wall3.jpg" class="" alt="" />' }, this);
	});
	
	// Terra Santa yaffa
	$map.gmap('addMarker', {'position': '32.049844,34.753329' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/terra.jpg" class="" alt="" /><figcaption>Terra Santa, Yafa (Grandfather school)</figcaption>' }, this);
	});
	
	// Church of the Holy Sepulchre
	$map.gmap('addMarker', {'position': '31.778303,35.229748' })
	.click(function() { 
		$map.gmap('openInfoWindow', { 'content': '<img src="images/holy.jpg" class="" alt="" /><figcaption>Church of the Holy Sepulchre</figcaption>' }, this);
	});
	
});