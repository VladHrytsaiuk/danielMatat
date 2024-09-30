$(document).ready(function () {
	$('.spoiler-title').click(function (event) {
		$('.spoiler-title').not($(this)).removeClass('active');
		$('.spoiler').not($(this).next()).slideUp(300);
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


// $(document).ready(function () {
// 	$('.spoiler-title').click(function (event) {
// 		if ($('.spoiler-block').hasClass('one')) {
// 			$('.spoiler-title').not($(this)).removeClass('active');
// 			$('.spoiler').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });




$(document).ready(function () {
	$('.product-spoiler-title').click(function (event) {
		$('.product-spoiler-title').not($(this)).removeClass('active');
		$('.product-spoiler-description-text').not($(this).next()).slideUp(300);
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
