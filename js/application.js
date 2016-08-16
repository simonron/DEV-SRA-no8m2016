function sra_menu(go_here) {
	var p = $("section#Associates");
	var offsetP = p.offset();
	//p.html( "left: " + offsetP.left + ", top: " + offsetP.top );
	//console.log(offsetP.left+"ihkgkbgl"+offsetP.top+"ihkgkbgl")	
	var displayed_content = "";
	var move_here = 0;
	var offset = 0;
	//var offset_left = 0;
	//alert(go_here);
	display_here_obj = "#" + (document.getElementById("top-of-site").id);

	display_here_px = $(display_here_obj).offset();
	console.log("display_here_px = " + display_here_px);
	display_here_top = display_here_px.top;

	displayed_content = "#" + (document.getElementById(go_here).id);
	displayed_content_offset = $(displayed_content).offset();
	displayed_content_top = displayed_content_offset.top;
	displayed_content_left = displayed_content_offset.left;
	displayed_content_width = $(displayed_content).width();

	console.log("displayed_content_top = " + displayed_content_top);
	console.log("displayed_content_left = " + displayed_content_left);
	console.log("displayed_content_width = " + displayed_content_width);

	offset_left_obj = "#" + (document.getElementById("top_area").id);
	offset_left_px = $(offset_left_obj).offset();
	console.log("offset_left_px_left = " + offset_left_px.left);
	console.log("offset_left_px_top = " + offset_left_px.top);
	offset_left = offset_left_px.top;
	console.log("offset_left = " + offset_left);
	//alert(place);

	//alert(offset)
	/*
					offset =  $(Associates).offset();
	*/
	console.log("displayed_content_left = " + displayed_content_left);
	move_here_x = (offset.left);
	/*	console.log("offset.top = " + offset.top);
		console.log("offset.left = " + offset.left);
		console.log("offset.width = " + offset.width);*/
	move_here_y = (displayed_content_top - display_here_top);
	//move_here_y = displayed_content_top;
	console.log("displayed_content_top = " + displayed_content_top);
	console.log("display_here_top = " + display_here_top);
	console.log("move_here_y = " + move_here_y);

	//alert($( this ).css( "transform" ));

	if ($(displayed_content).css("transform") == 'none') {
		//$(this).css("transform","rotate(45deg)");
		console.log("displayed_content=" + displayed_content);
		//$(displayed_content).css("transform","translate(0px,-"+move_here+"px)");
		//$(displayed_content).css("transform","translate(0px,100px)");

		/*	console.log(displayed_content);
			console.log(move_here_x + "=move_here_x px");*/
		console.log(move_here_y + "= move_here_y px");
		$(displayed_content).css("transform", "translate(0px,-" + move_here_y + "px)");

		/*$(displayed_content).css("position", "absolute");
		$(displayed_content).css("z-index", "100");
		$(displayed_content).css("margin", "0 auto");*/

		//$(displayed_content).css("transform", "translate(0px,-179px)");
	} else {
		$(displayed_content).css("transform", "none");
		$(displayed_content).css("position", "relative");
		$(displayed_content).css("transform", "translate(auto auto )");
		console.log("reset?");
	}

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