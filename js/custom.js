$(document).ready(function() {
	$('.introBoxHider').removeClass('introBoxHider');
	$('.introBox1').animate({"left": "0", "top": "250"}, 1500, "linear");
	$('.introBox2').animate({"right": "0", "top": "250"}, 1500, "linear");
	$('.introBox3').animate({"left": "0", "bottom": "200"}, 1500, "linear");
	$('.introBox4').animate({"right": "0", "bottom": "200"}, 1500, "linear", function(){
		removeOffsets();
		removeClasses();
		$('.introText').fadeIn();
	});
	$('.introBox4').click(function(){
		window.location.href = "http://shop.monikashaarstudio.de/";
	});

});

function removeOffsets() {
	$('.introBox1').animate({"left": "0", "top": "0"}, 0);
	$('.introBox2').animate({"left": "0", "top": "0"}, 0);
	$('.introBox3').animate({"left": "0", "top": "0"}, 0);
	$('.introBox4').animate({"left": "0", "top": "0"}, 0);
}

function removeClasses(){
	$('.introBox1').removeClass('introBox1');
	$('.introBox2').removeClass('introBox2');
	$('.introBox3').removeClass('introBox3');
	$('.introBox4').removeClass('introBox4');
}