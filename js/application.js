function sra_menu(go_here) {
	var displayed_content = "";
	//last_content="start";

	var offset = 0;
	display_here_obj = "#" + (document.getElementById("top-of-site").id);

	display_here_px = $(display_here_obj).offset();
	console.log("display_here_px = " + display_here_px);
	display_here_top = display_here_px.top;

	displayed_content = "#" + (document.getElementById(go_here).id);
	displayed_content_offset = $(displayed_content).offset();
	displayed_content_top = displayed_content_offset.top;
	displayed_content_left = displayed_content_offset.left;
	displayed_content_width = $(displayed_content).width();

	offset_left_obj = "#" + (document.getElementById("top_area").id);
	offset_left_px = $(offset_left_obj).offset();

	move_here_x = (offset.left);
	move_here_y = (displayed_content_top - display_here_top);
	
/*	if(last_content){
			console.log("last_content = "+ last_content) ;
	};*/
	console.log("displayed_content = " + displayed_content);
 
	if ( typeof last_content != 'undefined')	{		console.log("last_content = "+ last_content) ;											

	if (displayed_content != last_content) {
console.log("before last_content = "+ last_content) ;
		$(last_content).css("transform", "none");
	//	$(last_content).css("position", "relative");
	//	$(last_content).css("transform", "translate(auto auto )");

		console.log("RESETTING");
		last_content=displayed_content;
				console.log(" after last_content = "+ last_content) ;	
	}
														 	}

	if ($(displayed_content).css("transform") == 'none') {
				$(displayed_content).css("transform", "translate(0px,-" + move_here_y + "px)");
		$(displayed_content).css("border-bottom", "solid 100vh rgba(0,0,0,0.5)");
				$(displayed_content).css("border-left", "solid 10vw rgba(0,0,0,0.5)");
				$(displayed_content).css("border-right", "solid 10vw rgba(0,0,0,0.5)");
						$(displayed_content).css("border-top", "solid 10vh rgba(0,0,0,0.5)");
			$(wrapper).css("overflow-y", "scroll");

		$("body").css("overflow-y", "hidden");


				//$(displayed_content).fadeIn();
			//
/*		var elements =  $('.container :not('+displayed_content+' .container)');
			$(elements).fadeOut();
		console.log(elements);
		$(displayed_content).fadeIn();*/
	

	
	
	
	} else {
		$(displayed_content).css("transform", "none");
		//$(displayed_content).css("position", "relative");
				$(displayed_content).css("border", "solid 0px");
		$("body").css("overflow-y", "scroll");
		$(wrapper).css("overflow-y", "auto");


/*		$(displayed_content).css("transform", "translate(auto auto )");*/
		console.log("reset?");
	}
	last_content = displayed_content;	
}
var open = false;

function onClickMenu() {
	//if (parseInt(jQuery('.body').css('left')) >= 80) {
	if (open == true) {
		closeMenu();
	} else {
		openMenu();
	}
	open = !open;
	//console.log("open="+open);
}

function onClickCover() {
	closeMenu();
}

var scrollPos;

function openMenu() {
	scrollPos = jQuery('body').scrollTop();
	jQuery('.cover').animate({
		left: '80%'
	});
	jQuery('.mobile-menu-bar').animate({
		left: '80%'
	});
	//jQuery('.off-screen-left').css('display', 'block');
	jQuery('.off-screen-left').animate({
		left: '0%'
	});
	jQuery('.outer').css({
		position: 'fixed',
		top: -(document.body.scrollTop)
	});
	jQuery(".body").on("touchmove", false);
	jQuery('.cover').fadeIn();
	jQuery('.fadeout').fadeOut();
}

function closeMenu() {
	jQuery('.cover').animate({
		left: '0%'
	});
	jQuery('.mobile-menu-bar').animate({
		left: '0%'
	});
	jQuery('.off-screen-left').animate({
		left: '-80%'
	});
	jQuery('.outer').css({
		position: 'relative'
	});
	jQuery('body').scrollTop(scrollPos);
	jQuery(".body").off("touchmove", false);
	jQuery('.cover').fadeOut();
	jQuery('.fadeout').fadeIn();
}