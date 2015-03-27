console.log(WURFL.form_factor);

if(WURFL.form_factor == 'Desktop'){
	$(document).ready(function() {
			$('.fold-video-container').videoBG({
				mp4:'assets/video/loop_laboratoria.mp4',
				ogv:'assets/video/loop_laboratoria.ogv',
				webm:'assets/video/loop_laboratoria.webm',
				// poster:'assets/img/video_placeholder.jpg',
				autoplay:true,
				scale:true,
				loop: 1,
				zIndex:0
			});
			$('video,audio').each(function(){this.muted=true});

			if(WURFL.form_factor == 'Smartphone' || WURFL.form_factor == 'Tablet'){
				$('.fold-video-container').videoBG({
					poster: 'assets/img/video_placeholder.jpg'
				});
			}
	});
}