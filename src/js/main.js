$('.first-lv a').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});
}); 


$(window).on('load', function() {
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );


    $('.tabs-holder li a').each(function() {
		var atrrNum = $(this).attr('data-tab');
		$(this).on('click', function(e) {
			e.preventDefault();
			var dataTab = $(this).attr('data-tab'),
				dataId = "#tab-" + dataTab;
			$('.tabs-holder li a').removeClass('active');
			$(this).addClass('active');

			$('.tab-item').removeClass('open');
			$(dataId).addClass('open');
		});
	});
});