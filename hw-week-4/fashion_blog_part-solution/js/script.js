function showMore() {
	$(".moretext").slideToggle(900);
	$(".readmore").hide();
}

$(document).ready( function() {
	$(".moretext").slideUp(0);
});

$(".readmore").click(showMore);
