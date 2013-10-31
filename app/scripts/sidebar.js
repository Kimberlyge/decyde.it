var $foo = $('#circle_2');

var $win = $(window).scroll(function() {
	if($win.scrollTop()>200) {
		if(!$foo.is(':visible')) {
			$foo.stop(true, true).fadeIn();
		}
	}
	else {
		if(!$foo.is(':animated')) {
			$foo.stop(true, true).fadeOut();
		}
	}
});
// function circle_2(){
//   document.getElementById ('d').style.visibility = 'visible';
// }

// // Folgende Funktion nutzt JavaScript, um das DIV auszublenden
// function circle_2_2 () {
//   document.getElementById ('d').style.visibility = 'hidden';
// }