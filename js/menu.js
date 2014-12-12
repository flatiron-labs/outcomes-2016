var menuData = {
  anchor: '#home',
  open: false
};

$(function(){
  $('#hamburger-menu').on('click', function() {
    $("#menu a").removeClass('active');
    $('#menu').fadeToggle();
    if (menuData.open) {
      document.body.style.overflow = 'scroll';
      menuData.open = false;
    } else {
      document.body.style.overflow = 'hidden';
      menuData.open = true;
    }

    var currentSection = $('.skrollable-between').last().data('menu-anchor');
    $("#menu a[href='"+ currentSection +"']").first().addClass('active');
  });

  $('#menu li').on('click', function() {
    var anchor = $('.skrollable-between').last().data('menu-anchor');
    $('body').css('overflow','auto');
    $('#menu').fadeOut();
  });

  $('#menu a').on('click', function(e){
    menuData.anchor = e.target.attributes.href.value;
    var target = $(menuData.anchor)[0].parentNode;
    slideData.activeLayer = slideData.slides.toArray().indexOf(target);
  });
});
