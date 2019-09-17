// Javascript String constants for translation
THEMEREX_MESSAGE_BOOKMARK_ADD   = "Add the bookmark";
THEMEREX_MESSAGE_BOOKMARK_ADDED = "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'";
THEMEREX_MESSAGE_BOOKMARK_TITLE = "Enter bookmark title";
THEMEREX_MESSAGE_BOOKMARK_EXISTS= "Current page already exists in the bookmarks list";
THEMEREX_MESSAGE_SEARCH_ERROR = "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.";
THEMEREX_MESSAGE_EMAIL_CONFIRM= "On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.";
THEMEREX_MESSAGE_EMAIL_ADDED  = "Your address <b>%s</b> has been successfully added to the subscription list";
THEMEREX_REVIEWS_VOTE		  = "Thanks for your vote! New average rating is:";
THEMEREX_REVIEWS_ERROR		  = "Error saving your vote! Please, try again later.";
THEMEREX_MAGNIFIC_LOADING     = "Loading image #%curr% ...";
THEMEREX_MAGNIFIC_ERROR       = "<a href=\"%url%\">The image #%curr%</a> could not be loaded.";
THEMEREX_MESSAGE_ERROR_LIKE   = "Error saving your like! Please, try again later.";
THEMEREX_GLOBAL_ERROR_TEXT	  = "Global error text";
THEMEREX_NAME_EMPTY			  = "The name can\'t be empty";
THEMEREX_NAME_LONG 			  = "Too long name";
THEMEREX_EMAIL_EMPTY 		  = "Too short (or empty) email address";
THEMEREX_EMAIL_LONG			  = "Too long email address";
THEMEREX_EMAIL_NOT_VALID 	  = "Invalid email address";
THEMEREX_SUBJECT_EMPTY		  = "The subject can\'t be empty";
THEMEREX_SUBJECT_LONG 		  = "Too long subject";
THEMEREX_PHONE_EMPTY		  = "Phone number too short";
THEMEREX_PHONE_LONG 		  = "Phone number too long";
THEMEREX_PHONE_NOT_VALID 	  = "Invalid phone";
THEMEREX_MESSAGE_EMPTY 		  = "The message text can\'t be empty";
THEMEREX_MESSAGE_LONG 		  = "Too long message text";
THEMEREX_SEND_COMPLETE 		  = "Send message complete!";
THEMEREX_SEND_ERROR 		  = "Transmit failed!";
THEMEREX_LOGIN_EMPTY		  = "The Login field can\'t be empty";
THEMEREX_LOGIN_LONG			  = "Too long login field";
THEMEREX_PASSWORD_EMPTY		  = "The password can\'t be empty and shorter then 5 characters";
THEMEREX_PASSWORD_LONG		  = "Too long password";
THEMEREX_PASSWORD_NOT_EQUAL   = "The passwords in both fields are not equal";
THEMEREX_REGISTRATION_SUCCESS = "Registration success! Please log in!";
THEMEREX_REGISTRATION_FAILED  = "Registration failed!";
THEMEREX_REGISTRATION_AUTHOR  = "Your account is waiting for the site admin moderation!";
THEMEREX_GEOCODE_ERROR 		  = "Geocode was not successful for the following reason:";
THEMEREX_GOOGLE_MAP_NOT_AVAIL = "Google map API not available!";

// AJAX parameters
var THEMEREX_ajax_url = "#";
var THEMEREX_ajax_nonce = "b1f1870985";

// Site base url
var THEMEREX_site_url = "#";

// Theme base font
var THEMEREX_theme_font = "";

// Theme skin
var THEMEREX_theme_skin = "default";
var THEMEREX_theme_skin_bg = "#ffffff";

// Slider height
var THEMEREX_slider_height = 500;

// Sound Manager
var THEMEREX_sound_enable    = false;
var THEMEREX_sound_folder    = '#';
var THEMEREX_sound_mainmenu  = '#';
var THEMEREX_sound_othermenu = '#';
var THEMEREX_sound_buttons   = '#';
var THEMEREX_sound_links     = '#';
var THEMEREX_sound_state     = { 
	all: THEMEREX_sound_enable ? 1 : 0, 
	mainmenu:	0,
	othermenu:	0,
	buttons:	1,
	links: 		0};

// System message
var THEMEREX_systemMessage = {message:"", status: "", header: ""};

// User logged in
var THEMEREX_userLoggedIn = false;

// Show table of content for the current page
var THEMEREX_menu_toc = 'no';
var THEMEREX_menu_toc_home = THEMEREX_menu_toc!='no' && true;
var THEMEREX_menu_toc_top = THEMEREX_menu_toc!='no' && true;

// Fix main menu
var THEMEREX_menuFixed = true;

// Use responsive version for main menu
var THEMEREX_menuResponsive = 1024;
var THEMEREX_responsive_menu_click = true;

// Right panel demo timer
var THEMEREX_demo_time = 4000;

// Video and Audio tag wrapper
var THEMEREX_useMediaElement = true;

// Use AJAX search
var THEMEREX_useAJAXSearch = false;
var THEMEREX_AJAXSearch_min_length = 3;
var THEMEREX_AJAXSearch_delay = 200;

// Popup windows engine
var THEMEREX_popupEngine  = 'pretty';
var THEMEREX_popupGallery = true;

// E-mail mask
THEMEREX_EMAIL_MASK = '^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$';

// Phone mask
THEMEREX_PHONE_MASK = '^[0-9]{5,15}';

// Messages max length
var THEMEREX_msg_maxlength_contacts = 1000;
var THEMEREX_msg_maxlength_comments = 1000;

// Remember visitors settings
var THEMEREX_remember_visitors_settings = true;


if (THEMEREX_theme_font=='') THEMEREX_theme_font = 'Sintony';

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	esg_init();
	user_popup_init();
	price_filter();
	woo_review_star();
	arc_skills_legend_color();
	phone_number_only_init();
});

/*Main slider*/
function main_slider_init() {
    if (jQuery("#mainslider_1").length > 0) {
    	"use strict";
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
			if(htmlDiv) {
				htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
			}else{
				var htmlDiv = document.createElement("div");
				htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
				document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
			}

		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_1_1');
				e.responsiveLevels = [1240,1024,778,480];
				e.gridwidth = [1150,1024,778,480];
				e.gridheight = [500,768,960,720];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;

		var revapi1;
		if(tpj("#rev_slider_1_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		}else{
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					onHoverStop:"on",
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1150,1024,778,480],
				gridheight:[500,768,960,720],
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_2").length > 0) {
	    "use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_2_1');
				e.responsiveLevels = [1240,1024,778,480];
				e.gridwidth = [1150,1024,778,480];
				e.gridheight = [980,768,1000,720];
						
				e.sliderLayout = "fullscreen";
				e.fullScreenAutoWidth='off';
				e.fullScreenAlignForce='off';
				e.fullScreenOffsetContainer= '';
				e.fullScreenOffset='';
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
				
		
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
					jQuery(sliderID).show().html(errorMessage);
			}
		var tpj=jQuery;
		
		var revapi2;
		if(tpj("#rev_slider_2_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_2_1");
		}else{
			revapi2 = tpj("#rev_slider_2_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					onHoverStop:"on",
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1150,1024,778,480],
				gridheight:[980,768,1000,720],
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:742,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_3").length > 0) {
	    "use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_3_1');
				e.gridwidth = [1150];
				e.gridheight = [500];
						
				e.sliderLayout = "auto";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
			var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
			errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
			errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
			errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
			errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
			jQuery(sliderID).show().html(errorMessage);
		}
		var tpj=jQuery;
		
		var revapi3;
		if(tpj("#rev_slider_3_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_3_1");
		}else{
			revapi3 = tpj("#rev_slider_3_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"auto",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					onHoverStop:"off",
				},
				visibilityLevels:[1240,1024,778,480],
				gridwidth:1150,
				gridheight:500,
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:479,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}


}

// Essential Grid
function esg_init() {
    if (jQuery("#esg-grid-1-1").length > 0) {
    	"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:3},
								{ width:1170,amount:3},
								{ width:1024,amount:3},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:3},
								{ width:480,amount:1}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
				})
				if (smallest>winw) {
					lastamount = samount;
					resultid = resultidb;
				}
				var obj = new Object;
				obj.index = resultid;
				obj.column = lastamount;
				if (resultoption=="id")
					return obj;
				else
					return lastamount;
			}
		if ("even"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-1-1");
			var	cwidth = container.width(),
				ar = "4:3",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 1;
		ar = ar.split(":");
		aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
		coh = cwidth / aratio;
		coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_1;
			essapi_1 = jQuery("#esg-grid-1-1").tpessential({
		        gridID:1,
		        layout:"even",
		        forceFullWidth:"off",
		        lazyLoad:"off",
		        row:1,
		        loadMoreAjaxToken:"c23c82d724",
		        loadMoreAjaxUrl:"http://plumbing.themerex.net/wp-admin/admin-ajax.php",
		        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
		        ajaxContentTarget:"ess-grid-ajax-container-",
		        ajaxScrollToOffset:"0",
		        ajaxCloseButton:"off",
		        ajaxContentSliding:"on",
		        ajaxScrollToOnLoad:"on",
		        ajaxNavButton:"off",
		        ajaxCloseType:"type1",
		        ajaxCloseInner:"false",
		        ajaxCloseStyle:"light",
		        ajaxClosePosition:"tr",
		        space:0,
		        pageAnimation:"fade",
		        paginationScrollToTop:"off",
		        spinner:"spinner0",
		        evenGridMasonrySkinPusher:"off",
		        lightBoxMode:"single",
		        animSpeed:1000,
		        delayBasic:1,
		        mainhoverdelay:1,
		        filterType:"single",
		        showDropFilter:"hover",
		        filterGroupClass:"esg-fgc-1",
		        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
		        aspectratio:"4:3",
		        responsiveEntries: [
								{ width:1400,amount:3},
								{ width:1170,amount:3},
								{ width:1024,amount:3},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:3},
								{ width:480,amount:1}
								]
			});

			try{
			jQuery("#esg-grid-1-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
		});

		 } catch (e) {}

	}
}


// User popup
function user_popup_init() {
    "use strict";
    if (jQuery("#usermenu").length > 0) {

		var popup_menu ='<div id="user-popUp" class="user-popUp mfp-with-anim mfp-hide">';
		popup_menu  +=	'<div class="sc_tabs">';
		popup_menu  +=		'<ul class="loginHeadTab">';
		popup_menu  +=			'<li><a href="#loginForm" class="loginFormTab icon">Log In</a></li>';
		popup_menu  +=			'<li><a href="#registerForm" class="registerFormTab icon">Create an Account</a></li>';
		popup_menu  +=		'</ul>';
		popup_menu  +=		'<div id="loginForm" class="formItems loginFormBody">';
		popup_menu  +=			'<div class="itemformLeft">';
		popup_menu  +=				'<form action="http://plumbing.themerex.net/wp-login.php" method="post" name="login_form" class="formValid">';
		popup_menu  +=					'<input type="hidden" name="redirect_to" value="http://plumbing.themerex.net" />';
		popup_menu  +=					'<ul class="formList">';
		popup_menu  +=						'<li class="icon formLogin"><input type="text" id="login" name="log" value="" placeholder="Login"></li>';
		popup_menu  +=						'<li class="icon formPass"><input type="password" id="password" name="pwd" value="" placeholder="Password"></li>';
		popup_menu  +=						'<li class="remember">';
		popup_menu  +=							'<a href="http://plumbing.themerex.net/?page_id=7&#038;lost-password" class="forgotPwd">Forgot password?</a>';
		popup_menu  +=							'<input type="checkbox" value="forever" id="rememberme" name="rememberme">';
		popup_menu  +=							'<label for="rememberme">Remember me</label>';
		popup_menu  +=						'</li>';
		popup_menu  +=						'<li><a href="#" class="sendEnter enter">Login</a></li>';
		popup_menu  +=					'</ul>';
		popup_menu  +=				'</form>';
		popup_menu  +=			'</div>';
		popup_menu  +=			'<div class="itemformRight">';
		popup_menu  +=				'<ul class="formList">';
		popup_menu  +=					'<li>You can login using your social profile</li>';
		popup_menu  +=					'<li class="loginSoc">';
		popup_menu  +=						'<a href="#" class="iconLogin fb"></a>';
		popup_menu  +=						'<a href="#" class="iconLogin tw"></a>';
		popup_menu  +=						'<a href="#" class="iconLogin gg"></a>';
		popup_menu  +=					'</li>';
		popup_menu  +=					'<li><a href="#" class="loginProblem">Problem with login?</a></li>';
		popup_menu  +=				'</ul>';
		popup_menu  +=			'</div>';
		popup_menu  +=			'<div class="result messageBlock"></div>';
		popup_menu  +=		'</div>';
		popup_menu  +=		'<div id="registerForm" class="formItems registerFormBody">';
		popup_menu  +=			'<form name="register_form" method="post" class="formValid">';
		popup_menu  +=				'<input type="hidden" name="redirect_to" value="http://plumbing.themerex.net"/>';
		popup_menu  +=				'<div class="itemformLeft">';
		popup_menu  +=					'<ul class="formList">';
		popup_menu  +=						'<li class="icon formUser"><input type="text" id="registration_username" name="registration_username"  value="" placeholder="User name (login)"></li>';
		popup_menu  +=						'<li class="icon formLogin"><input type="text" id="registration_email" name="registration_email" value="" placeholder="E-mail"></li>';
		popup_menu  +=						'<li class="i-agree">';
		popup_menu  +=							'<input type="checkbox" value="forever" id="i-agree" name="i-agree">';
		popup_menu  +=							'<label for="i-agree">I agree with</label> <a href="http://plumbing.themerex.net/doc">Terms &amp; Conditions</a>';
		popup_menu  +=						'</li>';
		popup_menu  +=						'<li><a href="" class="sendEnter enter">Sign Up</a></li>';
		popup_menu  +=					'</ul>';
		popup_menu  +=				'</div>';
		popup_menu  +=				'<div class="itemformRight">';
		popup_menu  +=					'<ul class="formList">';
		popup_menu  +=						'<li class="icon formPass"><input type="password" id="registration_pwd" name="registration_pwd" value="" placeholder="Password"></li>';
		popup_menu  +=						'<li class="icon formPass"><input type="password" id="registration_pwd2" name="registration_pwd2" value="" placeholder="Confirm Password"></li>';
		popup_menu  +=					'</ul>';
		popup_menu  +=					'<div class="formDescription">Minimum 6 characters</div>';
		popup_menu  +=				'</div>';
		popup_menu  +=			'</form>';
		popup_menu  +=			'<div class="result messageBlock"></div>';
		popup_menu  +=		'</div>';
		popup_menu  +=	'</div>';
		popup_menu  +='</div>';

		jQuery('body').append(popup_menu);
	}
}

// Price range slider
function price_filter() {
	"use strict";
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 200,
            values: [0, 200],
            slide: function(event, ui) {
                jQuery("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
        });
        jQuery("#amount").val("£" + jQuery("#slider-range").slider("values", 0) +
            " - £" + jQuery("#slider-range").slider("values", 1));
    }
}

// Select review stars
function woo_review_star() {
	"use strict";
    if (jQuery(".stars", "#review_form").length > 0) {
        jQuery(".stars").find("a").on("click", function() {
            jQuery("a.active").removeClass("active");
            jQuery(this).addClass("active");
            return false;
        });
    }
}

/* arc skills legend color */
function arc_skills_legend_color() {
    "use strict";
    if (jQuery(".sc_skills_arc").length > 0) {
        jQuery(".sc_skills_arc").find("li:nth-child(1)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(1) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(2)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(2) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(3)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(3) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(4)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(4) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(5)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(5) input.color", ".sc_skills_arc").attr("value")});
    }
}

/* Allow only number in phon input */
function phone_number_only_init() {
	"use strict";
	if (jQuery("#contact_form_phone", ".sc_contact_form").length > 0) {
		jQuery("#contact_form_phone").keydown(function (e) {
		    // Allow: backspace, delete, tab, escape, enter and .
		    if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
		         // Allow: Ctrl+A
		        (e.keyCode == 65 && e.ctrlKey === true) ||
		         // Allow: Ctrl+C
		        (e.keyCode == 67 && e.ctrlKey === true) ||
		         // Allow: Ctrl+X
		        (e.keyCode == 88 && e.ctrlKey === true) ||
		         // Allow: Ctrl+V
		        (e.keyCode == 86 && e.ctrlKey === true) ||
		         // Allow: home, end, left, right
		        (e.keyCode >= 35 && e.keyCode <= 39)) {
		             // let it happen, don't do anything
		             return;
		    }
		    // Ensure that it is a number and stop the keypress
		    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		        e.preventDefault();
		    }
		});
	}
}