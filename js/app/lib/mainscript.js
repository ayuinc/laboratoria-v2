// Generated by CoffeeScript 1.8.0
(function() {
  var onScroll;

  $(document).ready(function() {
    var $navSectionRef, $sectionNav, getDocHeight;
    $sectionNav = $('.header');
    $navSectionRef = $('.smooth-scroll a');
    $('.disable-anchors a').click(function(e) {
      // e.preventDefault();
    });
    $(document).on('scroll', onScroll);
    $navSectionRef.on('click', function(e) {
      var $target, target;
      // e.preventDefault();
      target = this.hash;
      $target = $(target);
      $(target).velocity('scroll', {
        duration: 400,
        offset: 7
      });
    });
    getDocHeight = function() {
      var D;
      D = document;
      return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
    };
    $(window).scroll(function() {
      if ($(window).scrollTop() > ($(window).height() / 2)) {
        $sectionNav.addClass('on-scroll');
      } else {
        $sectionNav.removeClass('on-scroll');
      }
    });
  });

  onScroll = function(e) {
    var $navSectionRef, $progressBar, $scrollPos;
    $navSectionRef = $('.smooth-scroll a');
    $scrollPos = $(document).scrollTop();
    $progressBar = $('.support-progress-bar .bar');
    $navSectionRef.each(function() {
      var $currLink, $currLinkParent, $refElement;
      $currLink = $(this);
      $currLinkParent = $currLink.parent();
      $refElement = $($currLink.attr('href'));
      if ($refElement.position().top <= $scrollPos && $refElement.position().top + $refElement.height() > $scrollPos) {
        $currLink.addClass('active');
        if ($refElement.selector === '#nueva-coder') {
          $progressBar.velocity({
            width: '350px'
          }, {
            duration: 800
          });
        } else {
          $progressBar.css({
            width: '0'
          });
        }
      } else {
        $currLink.removeClass('active');
      }
    });
  };

}).call(this);
