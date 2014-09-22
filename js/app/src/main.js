$(document).ready(function() {

	$('.fold-video-container').videoBG({
		mp4:'assets/video/loop_laboratoria.mp4',
		ogv:'assets/video/loop_laboratoria.ogv',
		webm:'assets/video/loop_laboratoria.webm',
		poster:'assets/img/video_placeholder.jpg',
		autoplay:true,
		scale:true,
		loop: 0,
		zIndex:0
	});

	$('video,audio').each(function(){this.muted=true});
});