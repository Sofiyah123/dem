// Customization panel

var custom_options ='<div class="swpRightPosButton">';
custom_options  +=	'<span class="icon-cog animate-spin"></span>';
custom_options  +='</div>';
custom_options  +='<div class="swpRightPos">';
custom_options  +=	'<div class="sc_tabs" data-active="0">';
custom_options  +=		'<ul class="tabsMenuHead">';
custom_options  +=			'<li class="right_tab_custom">';
custom_options  +=				'<a class="tabsCustom" href="#tabsCustom" title="Custom panel"> </a>';
custom_options  +=			'</li>';
custom_options  +=			'<li class="right_tab_widgets">';
custom_options  +=				'<a class="tabsWidget" href="#tabsWidget" title="Widgets"> </a>';
custom_options  +=			'</li>';
custom_options  +=			'<li class="right_tab_menu">';
custom_options  +=				'<a class="tabsMenu" href="#tabsMenu" title="Custom menu"> </a>';
custom_options  +=			'</li>';
custom_options  +=			'<li class="right_tab_favorites">';
custom_options  +=				'<a class="tabsFavorite" href="#tabsFavorite" title="Bookmarks"> </a>';
custom_options  +=			'</li>';
custom_options  +=		'</ul>';
custom_options  +=		'<div id="tabsCustom" class="tabsMenuBody">';
custom_options  +=			'<div id="custom_options">';
custom_options  +=				'<div id="custom_options_scroll" class="sc_scroll sc_scroll_vertical swiper-slider-container scroll-container">';
custom_options  +=					'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=						'<div class="sc_scroll_slide swiper-slide">';
custom_options  +=							'<div class="co_header">';
custom_options  +=								'<h4 class="co_title">Choose Your Style</h4>';
custom_options  +=							'</div>';
custom_options  +=							'<div class="co_options">';
custom_options  +=								'<form name="co_form">';
custom_options  +=									'<input type="hidden" id="co_site_url" name="co_site_url" value="#" />';
custom_options  +=									'<div class="co_form_row">';
custom_options  +=										'<input type="hidden" name="co_body_style" value="fullscreen" />';
custom_options  +=										'<span class="co_label">Body style:</span>';
custom_options  +=										'<div class="co_switch_box">';
custom_options  +=											'<a href="#" class="co_switch_label wide">Wide</a>';
custom_options  +=											'<div class="switcher">';
custom_options  +=												'<a href="#">';
custom_options  +=												'</a>';
custom_options  +=											'</div>';
custom_options  +=											'<a href="#" class="co_switch_label boxed">Boxed</a>';
custom_options  +=										'</div>';
custom_options  +=									'</div>';
custom_options  +=									'<div class="co_form_row">';
custom_options  +=										'<input type="hidden" name="co_bg_color" value="" />';
custom_options  +=										'<span class="co_label">Background color:</span>';
custom_options  +=										'<div id="co_bg_color" class="iColorPicker">';
custom_options  +=										'</div>';
custom_options  +=									'</div>';
custom_options  +=									'<div class="co_form_row">';
custom_options  +=										'<input type="hidden" name="co_bg_pattern" value="0" />';
custom_options  +=										'<span class="co_label">Background pattern:</span>';
custom_options  +=										'<div id="co_bg_pattern_list">';
custom_options  +=											'<a href="#" id="pattern_0" class="co_pattern_wrapper current">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_0_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_1" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_1_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_2" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_2_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_3" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_3_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_4" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_4_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_5" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_5_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_6" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_6_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_7" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_7_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_8" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_8_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="pattern_9" class="co_pattern_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/pattern_9_thumb2.png" width="22" height="22" alt="" />';
custom_options  +=											'</a>';
custom_options  +=										'</div>';
custom_options  +=									'</div>';
custom_options  +=									'<div class="co_form_row">';
custom_options  +=										'<input type="hidden" name="co_bg_image" value="0" />';
custom_options  +=										'<span class="co_label">Background image:</span>';
custom_options  +=										'<div id="co_bg_images_list">';
custom_options  +=											'<a href="#" id="image_1" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_1_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="image_2" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_2_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="image_3" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_3_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="image_4" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_4_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="image_5" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_5_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=											'<a href="#" id="image_6" class="co_image_wrapper">';
custom_options  +=												'<img src="custom_tools/images/bg/image_6_thumb2.jpg" width="48" height="28" alt="" />';
custom_options  +=											'</a>';
custom_options  +=										'</div>';
custom_options  +=									'</div>';
custom_options  +=								'</form>';
custom_options  +=							'</div>';
custom_options  +=						'</div>';
custom_options  +=					'</div>';
custom_options  +=					'<div id="custom_options_scroll_bar" class="sc_scroll_bar sc_scroll_bar_vertical custom_options_scroll_bar"></div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=		'<div id="tabsWidget" class="tabsMenuBody">';
custom_options  +=			'<div id="sidebar_panel" class="widget_area sidebar_panel sidebar">';
custom_options  +=				'<div id="sidebar_panel_scroll" class="sc_scroll sc_scroll_vertical swiper-slider-container scroll-container">';
custom_options  +=					'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=						'<div class="sc_scroll_slide swiper-slide">';
custom_options  +=							'<aside class="widgetWrap widget widget_archive">';
custom_options  +=								'<h3 class="title">Archives</h3>		<ul>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">July 2015</a>&nbsp;(1)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">March 2015</a>&nbsp;(3)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">February 2015</a>&nbsp;(6)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">September 2014</a>&nbsp;(1)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">August 2014</a>&nbsp;(8)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">July 2014</a>&nbsp;(13)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">June 2014</a>&nbsp;(3)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">May 2014</a>&nbsp;(3)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">April 2014</a>&nbsp;(1)';
custom_options  +=									'</li>';
custom_options  +=									'<li>';
custom_options  +=										'<a href="#">January 2012</a>&nbsp;(5)';
custom_options  +=									'</li>';
custom_options  +=								'</ul>';
custom_options  +=							'</aside>';
custom_options  +=							'<aside class="widgetWrap widget widget_pages">';
custom_options  +=								'<h3 class="title">Pages</h3>';
custom_options  +=								'<ul>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">1 column</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">2 columns</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">3 columns</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">About Us</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Appointments</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Blog streampage</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Cart</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Certificates</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Checkout</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Contact Us</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Designer&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">FAQ</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Featured Products</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Four columns</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Help Center</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Home 1</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Home 2</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Homepage E-Commerce</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Manager&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">My Account</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Our Services</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Page 404</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Plumber&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Plumber&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Plumber&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Plumber&#8217;s Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Portfolio Hover styles (Circle)</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Portfolio Hover styles (Square)</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Pricing Tables</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Protected Page</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Search results</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Shortcodes</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Support</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Typography</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="">';
custom_options  +=										'<a href="#">Under Construction</a>';
custom_options  +=									'</li>';
custom_options  +=								'</ul>';
custom_options  +=							'</aside>';
custom_options  +=							'<aside class="widgetWrap widget widget_recent_comments">';
custom_options  +=								'<h3 class="title">Recent comments</h3>';
custom_options  +=								'<ul id="recentcomments">';
custom_options  +=									'<li class="recentcomments">';
custom_options  +=										'<span class="comment-author-link">';
custom_options  +=											'<a href="#" class="url">Javier</a>';
custom_options  +=										'</span>';
custom_options  +=										'on';
custom_options  +=										'<a href="#">Commercial Services</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="recentcomments">';
custom_options  +=										'<span class="comment-author-link">';
custom_options  +=											'<a href="#" class="url">Tom Cruise</a>';
custom_options  +=										'</span>';
custom_options  +=										'on';
custom_options  +=										'<a href="#">Appliance Installation Tips</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="recentcomments">';
custom_options  +=										'<span class="comment-author-link">admin</span>';
custom_options  +=										'on';
custom_options  +=										'<a href="#">Finding The Right Plumbing Contractor</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="recentcomments">';
custom_options  +=										'<span class="comment-author-link">TRX_admin</span>';
custom_options  +=										'on';
custom_options  +=										'<a href="#">High Tech Faucet</a>';
custom_options  +=									'</li>';
custom_options  +=									'<li class="recentcomments">';
custom_options  +=										'<span class="comment-author-link">TRX_admin</span>';
custom_options  +=										'on';
custom_options  +=										'<a href="#">Tracking Light</a>';
custom_options  +=									'</li>';
custom_options  +=								'</ul>';
custom_options  +=							'</aside>';
custom_options  +=						'</div>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=		'<div id="tabsMenu" class="tabsMenuBody">';
custom_options  +=			'<div class="sc_scroll sc_scroll_vertical swiper-slider-container scroll-container" id="panelmenu_scroll">';
custom_options  +=				'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=					'<div class="sc_scroll_slide swiper-slide">';
custom_options  +=						'<nav class="panelmenu_area widget_area">';
custom_options  +=							'<ul id="panelmenu" class="">';
custom_options  +=								'<li class="menu-item">';
custom_options  +=									'<a href="#">E-Commerce</a>';
custom_options  +=								'</li>';
custom_options  +=								'<li class="menu-item">';
custom_options  +=									'<a href="#">Sliders</a>';
custom_options  +=								'</li>';
custom_options  +=							'</ul>';
custom_options  +=						'</nav>';
custom_options  +=						'<div class="searchBlock">';
custom_options  +=							'<form method="get" class="search-form" action="#">';
custom_options  +=								'<button type="submit" class="searchSubmit"></button>';
custom_options  +=								'<input type="text" class="searchField" placeholder="Search &hellip;" value="" name="s" title="Search for:" />';
custom_options  +=							'</form>';
custom_options  +=						'</div>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=		'<div id="tabsFavorite" class="tabsMenuBody">';
custom_options  +=			'<div class="addBookmarkArea">';
custom_options  +=				'<a href="#" class="addBookmark">add bookmark</a>';
custom_options  +=			'</div>';
custom_options  +=			'<div class="sc_scroll sc_scroll_vertical swiper-slider-container scroll-container scroll-no-swiping" id="bookmarks_scroll">';
custom_options  +=				'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=					'<div class="sc_scroll_slide swiper-slide swiper-no-swiping">';
custom_options  +=						'<ol class="listBookmarks"></ol>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=	'</div>';
custom_options  +='</div>';

jQuery('body').append(custom_options);

jQuery(document).ready(function() {
	"use strict";

	jQuery('#co_theme_color').css('backgroundColor', '#1bbde8');
	jQuery('#co_menu_color').css('backgroundColor', '#fff');
	jQuery('#co_user_menu_color').css('backgroundColor', '#fff');
	jQuery('#co_bg_color').css('backgroundColor', '');

	if (jQuery("#custom_options").length===1) {

		// Reset custom settings to default
		jQuery("#custom_options .co_reset_to_default" ).click(function(e) {
			"use strict";
			clearCustomCookies();
			window.location = jQuery("#custom_options #co_site_url").val();
			e.preventDefault();
			return false;
		});

		// Body and Main menu style
		jQuery("#custom_options .switcher a,#custom_options .switcher2 a" ).draggable({
			axis: 'x',
			containment: 'parent',
			stop: function() {
				var left = parseInt(jQuery(this).css('left'), 10);
				var curStyle = left < 25 ? (jQuery(this).parent().hasClass('switcher') ? 'wide' : 'line') : (jQuery(this).parent().hasClass('switcher') ? 'boxed' : 'fon');
				switchBox(jQuery(this).parent(), curStyle, true);
			}
		});
		jQuery("#custom_options .switcher, #custom_options .switcher2" ).click(function(e) {
			"use strict";
			switchBox(jQuery(this));
			e.preventDefault();
			return false;
		});
		jQuery("#custom_options .co_switch_box .co_switch_label").click(function(e) {
			"use strict";
			var state = jQuery(this).hasClass('boxed') ? 'boxed' : (jQuery(this).hasClass('wide') ? 'wide' : (jQuery(this).hasClass('line') ? 'line' : 'fon'));
			switchBox(jQuery(this).siblings('div'), state);
			e.preventDefault();
			return false;
		});

		// Main theme color and Background color
		iColorPicker();
		jQuery('#custom_options .iColorPicker').click(function (e) {
			"use strict";
			iColorShow(null, jQuery(this), changeThemeColor);
		});
		
		// Background patterns
		jQuery('#custom_options #co_bg_pattern_list a').click(function(e) {
			"use strict";
			jQuery("#custom_options .co_switch_box .boxed").trigger('click');
			jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper').removeClass('current');
			var obj = jQuery(this).addClass('current');
			var val = obj.attr('id').substr(-1);
			if (THEMEREX_remember_visitors_settings) {
				jQuery.cookie('bg_color', null, {expires: -1, path: '/'});
				jQuery.cookie('bg_image', null, {expires: -1, path: '/'});
				jQuery.cookie('bg_pattern', val, {expires: 1, path: '/'});
			}
			jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_pattern_0 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6').addClass('bg_pattern_' + val);
			e.preventDefault();
			return false;
		});
		// Background images
		jQuery('#custom_options #co_bg_images_list a').click(function(e) {
			"use strict";
			jQuery("#custom_options .co_switch_box .boxed").trigger('click');
			jQuery('#custom_options #co_bg_images_list .co_image_wrapper,#custom_options #co_bg_pattern_list .co_pattern_wrapper').removeClass('current');
			var obj = jQuery(this).addClass('current');
			var val = obj.attr('id').substr(-1);
			if (THEMEREX_remember_visitors_settings) {
				jQuery.cookie('bg_color', null, {expires: -1, path: '/'});
				jQuery.cookie('bg_pattern', null, {expires: -1, path: '/'});
				jQuery.cookie('bg_image', val, {expires: 1, path: '/'});
			}
			jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_pattern_0 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6').addClass('bg_image_' + val);
			e.preventDefault();
			return false;
		});
		jQuery('#custom_options #co_bg_pattern_list a,#custom_options #co_bg_images_list a').hover(
			function() {
				"use strict";
				var pattern = jQuery(this).parent().attr('id')=='co_bg_pattern_list';
				jQuery(this).parent().parent().css({
					'backgroundImage': 'url('+jQuery(this).find('img').attr('src').replace('_thumb2', '_thumb')+')',
					'backgroundRepeat': pattern ? 'repeat' : 'no-repeat'
				});
			},
			function() {
				"use strict";
				jQuery(this).parent().parent().css('backgroundImage', 'none');
			}
		);
	}
});


function clearCustomCookies() {
	jQuery.cookie('theme_color', null, {expires: -1, path: '/'});
	jQuery.cookie('menu_color', null, {expires: -1, path: '/'});
	jQuery.cookie('user_menu_color', null, {expires: -1, path: '/'});
	jQuery.cookie('bg_image', null, {expires: -1, path: '/'});
	jQuery.cookie('bg_pattern', null, {expires: -1, path: '/'});
	jQuery.cookie('bg_color', null, {expires: -1, path: '/'});
	jQuery.cookie('body_style', null, {expires: -1, path: '/'});
}


function switchBox(box) {
	"use strict";
	var toStyle = arguments[1] ? arguments[1] : '';
	var important = arguments[2] ? arguments[2] : false;
	var switcher = box.find('a').eq(0);
	var left = parseInt(switcher.css('left'), 10);
	var newStyle = left < 5 ? (box.hasClass('switcher') ? 'boxed' : 'fon') : (box.hasClass('switcher') ? 'wide' : 'line');
	if (toStyle==='' || important || newStyle === toStyle) {
		if (toStyle==='') {toStyle = newStyle;}
		var right = box.width() - switcher.width() - 7;
		if (toStyle === 'wide' || toStyle === 'line')
			switcher.animate({left: 0}, 200);
		else
			switcher.animate({left: right}, 200);
		if (box.hasClass('switcher')) {
			if (THEMEREX_remember_visitors_settings) jQuery.cookie('body_style', toStyle, {expires: 1, path: '/'});
			jQuery(document).find('body').removeClass(toStyle==='boxed' ? 'wide' : 'boxed').addClass(toStyle);
			jQuery(document).trigger('resize');
		} else {
			calcMenuColumnsWidth();
		}
	}
	return newStyle;
}


function changeThemeColor(fld, clr) {
	"use strict";
	fld.css('backgroundColor', clr);
	fld.siblings('input').attr('value', clr);

	if (fld.attr('id')==='co_bg_color') {
		jQuery("#custom_options .co_switch_box .boxed").trigger('click');
		jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper').removeClass('current');
		if (THEMEREX_remember_visitors_settings) {
			jQuery.cookie('bg_image', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_pattern', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_color', clr, {expires: 1, path: '/'});
		}
		jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);
		return;
	}

	if (THEMEREX_remember_visitors_settings) {
		if (fld.attr('id')==='co_theme_color')
			jQuery.cookie('theme_color', clr, {expires: 1, path: '/'});
		else if (fld.attr('id')==='co_menu_color')
			jQuery.cookie('menu_color', clr, {expires: 1, path: '/'});
		else if (fld.attr('id')==='co_user_menu_color')
			jQuery.cookie('user_menu_color', clr, {expires: 1, path: '/'});
	}

	// This way - with page reload
	//window.location = jQuery("#custom_options #co_site_url").val();
	// This way - without reload
	var styles = jQuery('#theme-skin-css').length > 0 ? jQuery('#theme-skin-css').next() : '';
	if (styles.length == 0 || styles.attr('type')!='text/css') styles = jQuery('#packed-styles-css').length > 0 ? jQuery('#packed-styles-css').next() : '';
	if (styles.length == 0 || styles.attr('type')!='text/css') styles = jQuery('#shortcodes-css').length > 0 ? jQuery('#shortcodes-css').next() : '';
	if (styles.length > 0 && styles.attr('type')=='text/css') {
		clr = rgb2hex(jQuery('#co_theme_color').css('backgroundColor'));
		var rgb = hex2rgb(clr);
		var css_text = 
			// Main color for site
			'a:hover,.theme_accent,.topTabsWrap .speedBar a:hover,.infoPost a:hover, .tabsButton ul li a:hover,.widgetWrap  ul  li:before,.popularFiltr ul li a:hover,.isotopeFiltr ul li a:hover,.widget_popular_posts article h3:before,.widgetTabs .widget_popular_posts article .post_info .post_date a:hover,.sidebar .widget_popular_posts article .post_info .post_date a:hover,.sidebar .widget_recent_posts article .post_info .post_date a:hover,.main .widgetWrap a:hover,.main .widgetWrap a:hover span,.widgetWrap a:hover span,.roundButton:hover a,input[type="submit"]:hover,input[type="button"]:hover,.roundButton > a:hover,.roundButton.border > a,.roundButton.border > a,.nav_pages_parts > a:hover,.nav_comments > a:hover,.comments_list a.comment-edit-link:hover,.widget_area ul.tabs > li.roundButtonlite.ui-state-active > a,.wp-calendar tbody td a,.wp-calendar tbody td.today a:hover,blockquote cite,blockquote cite a,.sc_quote_title,.sc_quote_title a,.postLink a,.masonry article .masonryInfo a:hover,.masonry article .masonryInfo span.infoTags a:hover,.relatedPostWrap article .relatedInfo a:hover,.relatedPostWrap article .relatedInfo span.infoTags a:hover,.infoPost span.infoTags a:hover,.page404 p a,.page404 .searchAnimation.sFocus .searchIcon,.sc_team .sc_team_item .sc_team_item_position,.copyWrap a,.comments .commBody li.commItem .replyWrap .posted a:hover,.comments .commBody li.commItem h4 a:hover,.ratingItem span:before,.reviewBlock .totalRating,.widget_area .contactInfo .fContact:before,.widget_area .widgetWrap a:hover,.widget_area .widgetWrap a:hover span,.widget_area .widgetWrap ul > li > a:hover, .widget_area .widgetWrap ul > li > a:hover span,.footerStyleLight .widget_area article .post_title:before,.footerStyleLight .widget_area article .post_info a:hover,.footerStyleLight .widget_area article .post_info .post_date a:hover,.sc_list_style_arrows li:before,.sc_list_style_arrows li a:hover,.sc_list_style_iconed li a:hover,.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title,.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:before,.sc_accordion.sc_accordion_style_2 .sc_accordion_item.sc_active .sc_accordion_title,.sc_accordion.sc_accordion_style_2 .sc_accordion_item.sc_active .sc_accordion_title:before,.sc_accordion.sc_accordion_style_3 .sc_accordion_item.sc_active .sc_accordion_title,.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title,.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:before,.sc_toggles.sc_toggles_style_2 .sc_toggles_item.sc_active .sc_toggles_title,.sc_toggles.sc_toggles_style_2 .sc_toggles_item.sc_active .sc_toggles_title:before,.sc_toggles.sc_toggles_style_3 .sc_toggles_item.sc_active .sc_toggles_title,.sc_tabs .sc_tabs_titles li a:hover,.sc_dropcaps.sc_dropcaps_style_3 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_4 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_5 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_6 .sc_dropcap,.sc_highlight.sc_highlight_style_2,.sc_pricing_table .sc_pricing_columns ul li .sc_icon,.sc_tooltip_parent,.sc_title_icon:before,.sc_scroll_controls .flex-direction-nav a:hover:before,.sc_testimonials_style_1 .flex-direction-nav a:hover:before,.sc_testimonials_style_3 .flex-direction-nav a:hover:before,.sc_testimonials_style_3 .flex-direction-nav a:active:before,.pagination .pageLibrary > li.libPage > .pageFocusBlock .flex-direction-nav a:hover:before,.topWrap .usermenu_area ul.usermenu_list li.usermenu_currency > a:hover,.topWrap .usermenu_area ul.usermenu_list li.usermenu_currency > a,.topWrap .usermenu_area ul.usermenu_list li.usermenu_currency.sfHover > a,.topWrap .usermenu_area ul.usermenu_list li ul li a:hover,.topWrap .usermenu_area ul.usermenu_list li.usermenu_cart .widget_area ul li a:hover,.sidemenu_wrap .usermenu_area ul.usermenu_list li.usermenu_currency > a:hover,.sidemenu_wrap .usermenu_area ul.usermenu_list li.usermenu_currency > a,.sidemenu_wrap .usermenu_area ul.usermenu_list li.usermenu_currency.sfHover > a,.sidemenu_wrap .usermenu_area ul.usermenu_list li ul li a:hover,.sidemenu_wrap .usermenu_area ul.usermenu_list li.usermenu_cart .widget_area ul li a:hover,.sc_blogger a:hover,.sc_blogger.style_date .load_more:before,.sc_blogger.style_date .sc_blogger_item .sc_blogger_date .day_month,.sc_blogger.style_date .sc_blogger_item .sc_blogger_info .comments_number,.sc_blogger.style_accordion .sc_blogger_info .comments_number,.widgetTabs .widgetTop ul > li:not(.tabs):before, .widgetTabs .widgetTop ul > li:not(.tabs) > a:hover, .widgetTabs .widgetTop ul > li:not(.tabs) > a:hover span,.widgetTabs .widgetTop.widget_popular_posts article .post_title:before,.swpRightPos .tabsMenuBody a:hover,.swpRightPos .tabsMenuBody a:hover:before,.openRightMenu:hover:before,.topWrap .search:not(.searchOpen):hover:before,.user-popUp .formItems.loginFormBody .remember .forgotPwd,.user-popUp .formItems.loginFormBody .loginProblem,.user-popUp .formItems.registerFormBody .i-agree a,.sc_slider_pagination_area .flex-control-nav.manual .slide_info .slide_title,#toc .toc_item.current .toc_icon,#toc .toc_item:hover .toc_icon'

				// Main color for WooC
				+',.woocommerce div.product span.price, .woocommerce div.product p.price, .woocommerce #content div.product span.price, .woocommerce #content div.product p.price, .woocommerce-page div.product span.price, .woocommerce-page div.product p.price, .woocommerce-page #content div.product span.price, .woocommerce-page #content div.product p.price,.woocommerce ul.products li.product .price,.woocommerce-page ul.products li.product .price,.woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce-page input.button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce-page #content input.button.alt:hover,.woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover,.woocommerce .quantity input[type="button"]:hover, .woocommerce #content input[type="button"]:hover, .woocommerce-page .quantity input[type="button"]:hover, .woocommerce-page #content .quantity input[type="button"]:hover,.woocommerce ul.cart_list li > .amount, .woocommerce ul.product_list_widget li > .amount, .woocommerce-page ul.cart_list li > .amount, .woocommerce-page ul.product_list_widget li > .amount,.woocommerce ul.cart_list li span .amount, .woocommerce ul.product_list_widget li span .amount, .woocommerce-page ul.cart_list li span .amount, .woocommerce-page ul.product_list_widget li span .amount,.woocommerce ul.cart_list li ins .amount, .woocommerce ul.product_list_widget li ins .amount, .woocommerce-page ul.cart_list li ins .amount, .woocommerce-page ul.product_list_widget li ins .amount,.woocommerce.widget_shopping_cart .total .amount, .woocommerce .widget_shopping_cart .total .amount, .woocommerce-page.widget_shopping_cart .total .amount, .woocommerce-page .widget_shopping_cart .total .amount,.woocommerce a:hover h3, .woocommerce-page a:hover h3,.woocommerce .cart-collaterals .order-total strong, .woocommerce-page .cart-collaterals .order-total strong,.woocommerce .checkout #order_review .order-total .amount, .woocommerce-page .checkout #order_review .order-total .amount,.woocommerce .star-rating, .woocommerce-page .star-rating, .woocommerce .star-rating:before, .woocommerce-page .star-rating:before,.widget_area .widgetWrap ul > li .star-rating span, .woocommerce #review_form #respond .stars a, .woocommerce-page #review_form #respond .stars a'
				+' { color: '+clr+'; }'
		
				// Main color for site !important
				+'.topWrap .usermenu_area a, .menu_item_description, .logo .logo_slogan, .footerStyleDark .widget_area a.button:hover,.flip-clock-wrapper ul li a div div.inn,.footerStyleDark .widget_area .roundButton > a, .sc_button.mini > a,.topWrap .topMenuStyleLine > ul li.current-menu-item > a, .topWrap .topMenuStyleLine ul > li.current-menu-parent > a, .topWrap .topMenuStyleLine > ul > li.current-menu-ancestor > a,.topWrap .topMenuStyleLine > ul > li > a:hover,.topWrap .topMenuStyleLine > ul > li ul li a, .widget_rss a, .recentcomments a'
				+' { color: '+clr+' !important; }'
		
				// Background color for site
				+'.theme_accent_bgc,.sidemenu_wrap .menuTranform,.sc_video_player:active .sc_video_play_button:after,.mejs-controls .mejs-button button:active,.mejs-container .mejs-controls .mejs-time-rail .mejs-time-current,.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,input[type="submit"]:active,input[type="button"]:active,.sc_button.global > a,.sc_emailer.inputSubmitAnimation .aIco,.roundButton.active > span,.roundButton.active > a,.roundButton.ui-state-active > a,.roundButton > a:active,.roundButton > a:active,.roundButton.dark > a:active,.roundButton.border > a:hover,.roundButton.border:hover > a,.nav_pages_parts > span.page_num,.nav_comments > span.current,ul > li.likeActive:active > a,.sc_table.sc_table_style_1 table tr:first-child th,.sc_table.sc_table_style_1 table tr:first-child td,.masonry article .status,.portfolio .isotopeElement .folioShowBlock:before,.post .postStatus,.sc_team .sc_team_item .sc_team_item_avatar:after,.itemPageFull .itemDescriptionWrap .toggleButton:active,.footerWrap .footerWidget .sc_video_player:active .sc_video_play_button:after,.topWrap .topMenuStyleLine > ul > li ul,.sidemenu_wrap .sidemenu_button,.userHeaderSection.global,.sliderLogo .elastislide-wrapper nav span:active:before,.sc_skills_bar .sc_skills_item .sc_skills_count,.sc_skills_counter .sc_skills_item.sc_skills_style_3 .sc_skills_count,.sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_count,.sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_info,.sc_dropcaps.sc_dropcaps_style_1 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_2 .sc_dropcap,.sc_highlight.sc_highlight_style_1,.sc_pricing_table .sc_pricing_columns ul,.sc_tooltip_parent .sc_tooltip,.sc_tooltip_parent .sc_tooltip:before,.sc_title_bg:before,.sc_accordion.sc_accordion_style_3 .sc_accordion_item .sc_accordion_title,.sc_toggles.sc_toggles_style_3 .sc_toggles_item .sc_toggles_title,.sc_scroll_controls .flex-direction-nav a:active,.sc_testimonials_style_1 .flex-direction-nav a:active,.sc_testimonials_style_3 .sc_testimonials_items,.sc_testimonials_style_3 .flex-direction-nav li,.sc_testimonials_style_3 .flex-direction-nav a,.pagination .pageLibrary > li.libPage > .pageFocusBlock .flex-direction-nav a:active,.sc_popup_light:before,.user-popUp ul.loginHeadTab li.ui-tabs-active:before,.sc_banner:before,.global_bg,.widgetWrap .tagcloud a:hover,.widgetWrap .tagcloud a:active,.sc_scroll_bar .swiper-scrollbar-drag:before,.widgetTabs .widgetTop .tagcloud a:hover,.widgetTabs .widgetTop .tagcloud a:active,#custom_options .co_options #co_bg_images_list a.current,#custom_options .co_options #co_bg_pattern_list a.current,.fullScreenSlider.globalColor .sliderHomeBullets .rsContent:before,.fullScreenSlider .sliderHomeBullets .rsContent .slide-3 .order p span, ul.sc_list_style_disk li:before,.topMenuStyleLine > ul .menu-panel,.sc_slider_pagination_area .flex-control-nav.manual .slide_date,.sc_tabs.sc_tabs_style_2 .sc_tabs_titles li.ui-state-active a,.sc_contact_form_custom .bubble label:hover,.sc_contact_form_custom .bubble label.selected, .widget_area .tagcloud a, .topTabsWrap, .pagination .pageLibrary > li > a, .post .postSharing ul > li, article div:not(.isotopeFiltr) > ul > li.roundButton'
				// Background color for WooC
				+',.woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before,.woocommerce .widget_price_filter .ui-slider .ui-slider-range,.woocommerce-page .widget_price_filter .ui-slider .ui-slider-range'
				// Background color for TribeEvents
				+',.tribe-events-calendar td.tribe-events-present div[id*="tribe-events-daynum-"], .tribe-events-calendar td.tribe-events-present div[id*="tribe-events-daynum-"] > a, #tribe_events_filters_wrapper input[type="submit"], .tribe-events-button, #tribe-events .tribe-events-button, .tribe-events-button.tribe-inactive, #tribe-events .tribe-events-button:hover, .tribe-events-button:hover, .tribe-events-button.tribe-active:hover'
				+' { background-color: '+clr+'; }'
				
				// Background for WooC
				+'.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle'
				// Background color for TribeEvents
				+'#tribe-bar-form .tribe-bar-submit input[type="submit"]'
				+' { background: '+clr+'; }'
				
				// Transparent background color for site
				+'.sc_slider_flex .sc_slider_info,.sc_slider_chop .sc_slider_info,.sc_slider_swiper .sc_slider_info,.sc_slider_flex .flex-direction-nav li,.sc_slider_chop .flex-direction-nav li,.sc_slider_swiper .flex-direction-nav li'
				+' { background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.8) !important; }'

				+'.top_panel_above .fullScreenSlider .topWrap,.top_panel_above .fullScreenSlider .topWrap .topMenuStyleLine > ul > li ul,.top_panel_above .fullScreenSlider .topWrap .topMenuStyleLine > ul > li .menu-panel'
				+' { background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.8); }'
		
				// Border color for site
				+'.sc_table.sc_table_style_1 table tr:first-child th,.sc_table.sc_table_style_1 table tr:first-child td'
				+' {border-top-color: '+clr+'; }'
				+'.sc_table.sc_table_style_1 table tr:first-child th:first-child,.sc_table.sc_table_style_1 table tr:first-child td:first-child'
				+' {border-left-color: '+clr+';}'
				+'.sc_table.sc_table_style_1 table tr:first-child th:last-child,.sc_table.sc_table_style_1 table tr:first-child td:last-child'
				+' {border-right-color: '+clr+';}'

				+'.theme_accent_border,.postSharing > ul > li > a:active,.postSharing > ul > li > span:active.mejs-controls .mejs-button button:active,.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.roundButton.active > span,.roundButton.active > a,.roundButton > a:active,.roundButton > a:active,.roundButton.ui-state-active > a,.roundButton.dark > a:active,.roundButton.border > a,.roundButton.border > a,.nav_pages_parts > span.page_num,.nav_comments > span.current,.wp-calendar thead tr + tr th,.sc_skills_bar .sc_skills_item .sc_skills_count,.itemPageFull .itemDescriptionWrap .toggleButton:active,.footerWidget .sc_video_player:active .sc_video_play_button:after,.topWrap .topMenuStyleLine > ul > li ul,.topMenuStyleLine > ul#mainmenu ul.menu-panel,.sc_scroll_controls .flex-direction-nav a:active,.sc_testimonials_style_1 .flex-direction-nav a:active,.pagination .flex-direction-nav a:active,.sliderLogo .elastislide-wrapper nav span:active:before,.sc_dropcaps.sc_dropcaps_style_4 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_5 .sc_dropcap,.sc_dropcaps.sc_dropcaps_style_6 .sc_dropcap,.sc_accordion.sc_accordion_style_3 .sc_accordion_item,.sc_toggles.sc_toggles_style_3 .sc_toggles_item,.sc_tooltip_parent,pre.code,.widgetWrap .tagcloud a:hover,.widgetWrap .tagcloud a:active,.topWrap .openRightMenu:hover,.topWrap .search:not(.searchOpen):hover,#toc .toc_item.current,.topWrap .search.searchOpen, .widget_area .search-form .search-field, .nav_pages_parts span:not(.pages), #toc .toc_item:hover'
				+' {border-color: '+clr+'; }'
				
				// Border color for WooC
				+'.woocommerce .woocommerce-message, .woocommerce-page .woocommerce-message,.woocommerce a.button.alt:active, .woocommerce button.button.alt:active, .woocommerce input.button.alt:active, .woocommerce #respond input#submit.alt:active, .woocommerce #content input.button.alt:active, .woocommerce-page a.button.alt:active, .woocommerce-page button.button.alt:active, .woocommerce-page input.button.alt:active, .woocommerce-page #respond input#submit.alt:active, .woocommerce-page #content input.button.alt:active,.woocommerce a.button:active, .woocommerce button.button:active, .woocommerce input.button:active, .woocommerce #respond input#submit:active, .woocommerce #content input.button:active, .woocommerce-page a.button:active, .woocommerce-page button.button:active, .woocommerce-page input.button:active, .woocommerce-page #respond input#submit:active, .woocommerce-page #content input.button:active'
				+' {border-top-color: '+clr+'; }'
		
				// Background for iHover
				+'.theme_accent_bg,.ih-item.circle.effect1.colored .info,.ih-item.circle.effect2.colored .info,.ih-item.circle.effect3.colored .info,.ih-item.circle.effect4.colored .info,.ih-item.circle.effect5.colored .info .info-back,.ih-item.circle.effect6.colored .info,.ih-item.circle.effect7.colored .info,.ih-item.circle.effect8.colored .info,.ih-item.circle.effect9.colored .info,.ih-item.circle.effect10.colored .info,.ih-item.circle.effect11.colored .info,.ih-item.circle.effect12.colored .info,.ih-item.circle.effect13.colored .info,.ih-item.circle.effect14.colored .info,.ih-item.circle.effect15.colored .info,.ih-item.circle.effect16.colored .info,.ih-item.circle.effect18.colored .info .info-back,.ih-item.circle.effect19.colored .info,.ih-item.circle.effect20.colored .info .info-back,.ih-item.round.effect1.colored .info,.ih-item.round.effect2.colored .info,.ih-item.round.effect3.colored .info,.ih-item.round.effect4.colored .mask1,.ih-item.round.effect4.colored .mask2,.ih-item.round.effect5.colored .info,.ih-item.round.effect6.colored .info,.ih-item.round.effect7.colored .info,.ih-item.round.effect8.colored .info,.ih-item.round.effect9.colored .info .info-back,.ih-item.round.effect10.colored .info,.ih-item.round.effect11.colored .info,.ih-item.round.effect12.colored .info,.ih-item.round.effect13.colored .info,.ih-item.round.effect14.colored .info,.ih-item.round.effect15.colored .info'
				+' { background:'+clr+'; }'
				
				// Background for iHover
				+'.ih-item.circle.effect1.colored .info,.ih-item.circle.effect2.colored .info,.ih-item.circle.effect5.colored .info .info-back,.ih-item.circle.effect19.colored .info,.ih-item.circle.effect20.colored .info .info-back,.ih-item.round.effect4.colored .mask1,.ih-item.round.effect4.colored .mask2,.ih-item.round.effect6.colored .info,.ih-item.round.effect7.colored .info,.ih-item.round.effect12.colored .info,.ih-item.round.effect13.colored .info,.sc_image_shape_round:hover figcaption,.post .sc_image_shape_round:hover figcaption'
				+' { background: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.6); }'
		
				// Background for iHover
				+'.ih-item.circle.effect17.colored a:hover .img:before'
				+' { box-shadow: inset 0 0 0 110px '+clr+', inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1); box-shadow: inset 0 0 0 110px rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.6), inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1); }'
				
				// Border color for iHover
				+'.ih-item.circle.effect1 .spinner'
				+' {border-right-color: '+clr+'; border-bottom-color: '+clr+'; }'
				
				// Media Elements background
				+'.mejs-container, .mejs-embed, .mejs-embed body, .mejs-container .mejs-controls, .hoverIncrease .hoverIcon'
				+' { background:'+clr+' !important; }'
				+'.mejs-controls .mejs-volume-button .mejs-volume-slider'
				+' { background: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.7) !important; }';

		if (window.theme_skin_set_theme_color)
			css_text = theme_skin_set_theme_color(css_text, clr);


		// Main menu (Top panel) background
		clr = rgb2hex(jQuery('#co_menu_color').css('backgroundColor'));
		rgb = hex2rgb(clr);

		css_text += 
			'.topWrap,.topWrap .topMenuStyleLine > ul > li ul,.topMenuStyleLine > ul .menu-panel,.usermenu_area'
			+' { background-color: '+clr+'; }'

			+'.top_panel_above .fullScreenSlider .topWrap,.top_panel_above .fullScreenSlider .topWrap .topMenuStyleLine > ul > li ul,.top_panel_above .fullScreenSlider .topWrap .topMenuStyleLine > ul > li .menu-panel'
			+' { background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.8); }'

			+'.topWrap .topMenuStyleLine > ul > li ul,.topMenuStyleLine > ul#mainmenu ul.menu-panel'
			+' { border-color: '+clr+'; }';

		if (window.theme_skin_set_menu_bgcolor)
			css_text = theme_skin_set_menu_bgcolor(css_text, clr);
			
		// Main menu (Top panel) colors
		var hsb = hex2hsb(clr);
		var clr01, clr02, clr04, clr05, clr07;
		if (hsb.b > 90 && ((hsb.h >= 45 && hsb.h <= 185) || hsb.s < 20)) {
			clr   = '#272727';
			clr01 = 'rgba(41,47,52,0.1)';
			clr02 = 'rgba(41,47,52,0.2)';
			clr04 = 'rgba(41,47,52,0.9)';
			clr05 = 'rgba(41,47,52,0.5)';
			clr07 = 'rgba(41,47,52,0.7)';
		} else {
			clr   = '#ffffff';
			clr01 = 'rgba(255,255,255,0.1)';
			clr02 = 'rgba(255,255,255,0.2)';
			clr04 = 'rgba(255,255,255,0.4)';
			clr05 = 'rgba(255,255,255,0.5)';
			clr07 = 'rgba(255,255,255,0.7)';
		}
		css_text += 
			'.logo, .logo_text,.logo a,.topMenuStyleLine ul#mainmenu .menu-panel .item_placeholder .item_title,.topMenuStyleLine ul#mainmenu .menu-panel .item_placeholder .item_title a,.topMenuStyleLine ul#mainmenu .menu-panel.thumb .item_placeholder .item_title,.topMenuStyleLine ul#mainmenu .menu-panel.thumb .item_placeholder .item_title a,.topMenuStyleLine ul#mainmenu .menu-panel .item_placeholder .item_info > * > span,.topMenuStyleLine ul#mainmenu .menu-panel .item_placeholder .item_info > * > em,.topMenuStyleLine ul#mainmenu .menu-panel ul.columns > li a,.top_panel_above .fullScreenSlider .topWrap .topMenuStyleLine > ul > li a,.topMenuStyleLine ul#mainmenu > li ul li a .menu_icon'
			+' { color: '+clr+'; }'
			+'.topMenuStyleLine ul#mainmenu .menu-panel ul.columns > li > a,.topMenuStyleLine ul#mainmenu .menu-panel ul.thumb_title > li > a,.topMenuStyleLine ul#mainmenu .menu-panel ul.columns > li > a:hover,.topMenuStyleLine ul#mainmenu .menu-panel ul.thumb_title > li > a:hover'
			+' { color: '+clr+' !important;	}'
			+'.topWrap .topMenuStyleLine > ul > li:after'
			+' { background:'+clr+'; }'
			+'.topWrap .topMenuStyleLine > ul > li > a,.topWrap .topMenuStyleLine > ul > li ul li a,.topWrap .search:before,.topWrap .search .searchForm .searchSubmit .icoSearch:before,.openRightMenu:before'
			+' { color: '+clr04+'; }'
			+'.topWrap .usermenu_area,.topWrap .search .searchForm .searchField'
			+' { color: '+clr05+'; }'
			/*+'.topWrap .usermenu_area a,.menu_item_description,.logo .logo_slogan'
			+' { color: '+clr07+'; }'*/
			+'.topWrap .usermenu_area a:hover,.topWrap .usermenu_area ul.usermenu_list > li.sfHover > a'
			+' { color: '+clr+'; }'
			+'.topWrap .search, .openRightMenu'
			+' { border-color: '+clr04+'; }'
			+'.topMenuStyleLine ul#mainmenu .menu-panel ul.columns > li + li'
			+' { border-color: '+clr02+'; }'
			+'.openResponsiveMenu'
			+' { border-top-color: '+clr02+'; color: '+clr+'; }'
			+'.responsive_menu .menuTopWrap > ul > li'
			+' { border-bottom-color: '+clr01+'; }';

		if (window.theme_skin_set_menu_color)
			css_text = theme_skin_set_menu_color(css_text, clr);


		// User panel background
		clr = rgb2hex(jQuery('#co_user_menu_color').css('backgroundColor'));
		rgb = hex2rgb(clr);

		css_text += 
			'.usermenu_area'
			+' { background-color: '+clr+'; }';

		if (window.theme_skin_set_user_menu_bgcolor)
			css_text = theme_skin_set_user_menu_bgcolor(css_text, clr);

		// User menu color
		hsb = hex2hsb(clr);
		if (hsb.b > 90 && ((hsb.h >= 45 && hsb.h <= 185) || hsb.s < 20)) {
			clr   = '#272727';
			clr01 = 'rgba(39,39,39,0.1)';
			clr05 = 'rgba(39,39,39,0.5)';
			clr07 = 'rgba(39,39,39,0.7)';
		} else {
			clr   = '#ffffff';
			clr01 = 'rgba(255,255,255,0.1)';
			clr05 = 'rgba(255,255,255,0.5)';
			clr07 = 'rgba(255,255,255,0.7)';
		}
		css_text += 
			'.topWrap .usermenu_area'
			+' { color: '+clr05+'; }'
			+'.topWrap .usermenu_area a, .topWrap .usermenu_area .phone_number'
			+' { color: '+clr07+'; }'
			+'.topWrap .usermenu_area a:hover,.topWrap .usermenu_area ul.usermenu_list > li.sfHover > a'
			+' { color: '+clr+'; }';
		if (window.theme_skin_set_user_menu_color)
			css_text = theme_skin_set_user_menu_color(css_text, clr);

		// Apply styles
		styles.html(css_text);
	}
}
