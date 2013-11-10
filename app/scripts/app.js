/*global masonry,nav*/
/**
 * Call everything from here
 */

// KREIS 1
var $win = $(window).scroll(function() {
	if($win.scrollTop()>200) {
		$('#circle_1').hide();
		$('#circle_1_2').show();
		}
});

// KREIS 2
// weiß
var $win = $(window).scroll(function() {
	if($win.scrollTop()>200) {
		$('#circle_2').hide();
		$('#circle_2_2').show();
		}
});
// blank
var $win = $(window).scroll(function() {
	if($win.scrollTop()>1000) {
		$('#circle_2').show();
		$('#circle_2_2').hide();
		}
});

// KREIS 3
//weiß
var $win = $(window).scroll(function() {
	if($win.scrollTop()>1000) {
		$('#circle_3').hide();
		$('#circle_3_2').show();
		}
});
//blank
var $win = $(window).scroll(function() {
	if($win.scrollTop()>1500) {
		$('#circle_3').show();
		$('#circle_3_2').hide();
		}
});

// KREIS 4
//weiß
var $win = $(window).scroll(function() {
	if($win.scrollTop()>1500) {
		$('#circle_4').hide();
		$('#circle_4_2').show();
		}
});

//backwards

// KREIS 4
//blank
var $win = $(window).scroll(function() {
	if($win.scrollTop()<1500) {
		$('#circle_4').show();
		$('#circle_4_2').hide();
		}
});

// KREIS 3
//blank
var $win = $(window).scroll(function() {
	if($win.scrollTop()<1000) {
		$('#circle_3').show();
		$('#circle_3_2').hide();
		}
});

// $('.footer').click(function() {
// 	$.scrollTop($(.Page--2), 200);
// });

