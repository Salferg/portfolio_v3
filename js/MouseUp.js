jQuery(document).ready(function() {
		jQuery("#MouseUp").hide();
		jQuery(function () {
			jQuery(window).scroll(function () {
				    if (jQuery(this).scrollTop() > 500) {
						jQuery('#MouseUp').fadeIn();
					} else {
						jQuery('#MouseUp').fadeOut();
					}
			});
			jQuery('#MouseUp a').click(function () {
				jQuery('body, html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		});
	});