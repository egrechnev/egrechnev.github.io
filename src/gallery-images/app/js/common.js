$(function() {

	$('#btnJson').click(function () {

		var urlJson = $('#urlJson').val();


		if(urlJson !== ''){

			$.getJSON(urlJson, function(data){

				$(data.galleryImages).each(function(index, value) {
					$('<img/>').attr('src', value.url).appendTo('#galleryImages');
				});

				$('#galleryImages img').wrap('<div></div>');

				// Justified Gallery
				// http://miromannino.github.io/Justified-Gallery/
				// |>
				$('#galleryImages').justifiedGallery({
				    rowHeight : 170,
				    lastRow : 'nojustify', //justify, hide, center, right
				    margins : 10
				});
				// <|

			})
			.fail(function(jqxhr, textStatus, error) {
			 	var err = textStatus + ', ' + error;
			 	$('#errorJson').html('Request Failed: ' + err);
			});

		};


		$('#urlJson').val('');

		$('#galleryImages, #errorJson').empty().removeAttr('style');

	});

});