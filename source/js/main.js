//= require 'plugins'
//= require 'vendor/jquery-2.1.1.min'
//= require 'vendor/skrollr-0.6.29-min'
//= require 'vendor/skrollr.menu-0.1.15.min'
//= require 'vendor/jquery.magnific-popup'
//= require 'menu'

var slideData = {};
slideData.slides = $('#skrollr-body').children('.section');
slideData.activeLayer = 0;

var snapData = {};
snapData.animateUpSettings = {
  duration: 1200,
  easing: 'outCubic',
  done: function() {
    document.body.style.overflow = 'auto';
  }
}
snapData.animateDownSettings = {
  duration: 1200,
  easing: 'outCubic',
  done: snapData.animateUpSettings.done
};

$(function(){
  if( isUnsupportedMobile() ) {
    location.replace("//d280vzogkide3l.cloudfront.net/flatiron_annual_review.pdf");
  }

  // Video load animation
  $('#first-video')[0].onloadeddata = function() {
    $('#first-video').css('transition', '0.5s all linear');
    $('#first-video').css('opacity', 1);
  }
  $('#final-video')[0].onloadeddata = function() {
    $('#final-video').css('transition', '0.5s all linear');
    $('#final-video').css('opacity', 1);
  }
  // Magnific Popup
  $('.play-btn').magnificPopup({ type: 'iframe'});

  // Prepare url anchor
  var anchor = window.location.hash;

  // Skrollr Init
  if( isSupportedMobile() ) {
    $('#first-video').remove();
    $('#final-video').remove();
    document.body.style.overflow = 'scroll';
    var s = skrollr.init({
      forceHeight: false,
      render: function(info) {
        window.dynamicText();
      }
    });
    skrollr.menu.init(s, {
      animate: true,
      easing: 'sqrt',
      scale: 2,
      duration: function(currentTop, targetTop) {
          return 200;
      },
      complexLinks: true
    });
    // Handle url hash
    setTimeout(function(){
      var target = document.querySelector('#menu a[href="'+ anchor +'"]');
      skrollr.menu.click(target);
    }, 1500);
  } else {
    var s = skrollr.init({
      forceHeight: false,
      render: function(info) {
        $('#first-video')[0].oncanplaythrough = function() { $('#first-video')[0].play(); }
        $('#final-video')[0].oncanplaythrough = function() { $('#final-video')[0].play(); }
        window.dynamicText();
        window.snap.call(this, info);
      }
    });
    skrollr.menu.init(s, {
      animate: true,
      easing: 'sqrt',
      scale: 2,
      duration: function(currentTop, targetTop) {
          return 200;
      },
      complexLinks: true
    });
    // Handle url hash
    if (anchor != "" && !isMobile()) {
      $('#menu a[href="'+ anchor +'"]').trigger('click');
    }
  }
});

function snap(info){
  if (window.scrollY === 0 || atBottom()) {
    document.body.style.overflow = 'auto';
    return;
  }

  if (window.scrollY != $(menuData.anchor).offset().top){
    if(this.isAnimatingTo()) {
      return;
    }

    var lastOffset = this.relativeToAbsolute(slideData.slides[slideData.activeLayer], 'top', 'top');
    // Math ceil and Math ceil + 1 for zoom fix
    if(Math.ceil(this.getScrollTop()) === lastOffset || Math.ceil(this.getScrollTop()) + 1 === lastOffset) {
      return;
    }

    document.body.style.overflow = 'hidden';

    //Make sure to start animating at the last snap pos
    this.setScrollTop(lastOffset);

    if(info.direction === 'down') {
      if(slideData.activeLayer + 1 < slideData.slides.length) {
        slideData.activeLayer++;

        var offset = this.relativeToAbsolute(slideData.slides[slideData.activeLayer], 'top', 'top');

        //Move down slow with nice easing
        this.animateTo(offset, snapData.animateDownSettings);
      }
    } else if(slideData.activeLayer > 0) {
      slideData.activeLayer--;


      var offset = this.relativeToAbsolute(slideData.slides[slideData.activeLayer], 'top', 'top');

      //Move up very fast
      this.animateTo(offset, snapData.animateUpSettings);
    }
  }
}

function dynamicText() {
  // slide 14
  var fourteenthOpacity = $('.fourteenth .table-container').css('opacity');
  if (fourteenthOpacity > 0) {
    $('.college-graduation').text(Math.round(fourteenthOpacity * 59) + '%').append('<span>1</span>');
    $('.college-months').text(Math.round(fourteenthOpacity * 52)+ ' MONTHS').append('<span>2</span>');
    $('.college-cost').text('$'+ Math.round(fourteenthOpacity * 62556).toLocaleString()).append('<span>3</span>');
    $('.college-salary').text('$'+ Math.round(fourteenthOpacity * 44928).toLocaleString()).append('<span>4</span>');
    $('.fis-graduation').text(Math.round(fourteenthOpacity * 98) + '%');
    $('.fis-weeks').text(Math.round(fourteenthOpacity * 16)+ ' WEEKS');
    $('.fis-cost').text('$'+ Math.round(fourteenthOpacity * 15000).toLocaleString());
    $('.fis-salary').text('$'+ Math.round(fourteenthOpacity * 73771).toLocaleString());
  }

  // slide 19
  var nineteenthOpacity = $('.nineteenth .layout-one-container').css('opacity');
  if (nineteenthOpacity > 0) {
    $('.hours').text(Math.round(nineteenthOpacity * 990)+ ' HOURS');
    $('.lecture').text(Math.round(nineteenthOpacity * 144));
    $('.labs').text(Math.round(nineteenthOpacity * 566));
    $('.deploying').text(Math.round(nineteenthOpacity * 280));
    $('.results').text(Math.round(nineteenthOpacity * 2) + ' YEARS');
    $('.forks').text(Math.round(nineteenthOpacity * 14916).toLocaleString());
    $('.commits').text(Math.round(nineteenthOpacity * 21815).toLocaleString());
    $('.labs-complete').text(Math.round(nineteenthOpacity * 890));
    $('.apps').text(Math.round(nineteenthOpacity * 365));
  }

  // slide 21
  var twentyFirstOpacity = $('.twenty-first .layout-one-container').css('opacity');
  if (twentyFirstOpacity > 0) {
    $('.mentor').text(Math.round(twentyFirstOpacity * 25)+ '%')
    $('.tech-conferences').text(Math.round(twentyFirstOpacity * 15) + '%')
    $('.posts').text(Math.round(twentyFirstOpacity * 1427)+ '+')
  }
}

function isMobile() {
  return isSupportedMobile() || isUnsupportedMobile()
}

function isSupportedMobile() {
  return /Android|webOS/i.test(navigator.userAgent) || isIos8()
}

function isIos8() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) && /8.0 Mobile/i.test(navigator.userAgent)
}

function isIos7Below() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) && /7.0 Mobile|6.0 Mobile/i.test(navigator.userAgent)
}

function isUnsupportedMobile() {
  return /BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isIos7Below()
}

function atBottom() {
  return $(document).height() - window.innerHeight === window.scrollY
}
