$(document).ready ->
	$sectionNav = $('.header')
	$navSectionRef = $('.smooth-scroll a')

	$(document).on 'scroll', onScroll

	# SMOOTH SCROLL CON VELOCITY JS
	$navSectionRef.on 'click', (e) ->
		e.preventDefault()
		target = this.hash
		$target = $(target)
		$(target).velocity 'scroll', {
			duration: 200,
			offset: 7
		}
		return

  # OCULTAR NAVEGACION CUANDO USUARIO EN FOOTER
	getDocHeight = ->
    D = document
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight)

	$(window).scroll ->
	  if($(window).scrollTop() > ($(window).height() / 2))
      $sectionNav.addClass 'on-scroll'
    else
    	$sectionNav.removeClass 'on-scroll'
			return		

	return

onScroll = (e) ->	
	$navSectionRef = $('.smooth-scroll a')
	$scrollPos = $(document).scrollTop()
	# console.log $scrollPos
	$navSectionRef.each ->
    $currLink = $(this)
    $currLinkParent = $currLink.parent()
    $refElement = $($currLink.attr('href'))
    if ($refElement.position().top <= $scrollPos && $refElement.position().top + $refElement.height() > $scrollPos)
      $currLink.addClass 'active'
    else
      $currLink.removeClass 'active'
    return
	return