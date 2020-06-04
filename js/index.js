$(document).ready(function () {
  // sticky header
  var stickyNavTop = $('header').offset().top;
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('header').addClass('fixed-top');
    } else {
      $('header').removeClass('fixed-top');
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });

  $('.menu-item .sub-menu').each(function () {
    if ($(this).find('li').length == 0) {
      $(this).hide();
    } else {
      $(this).parent().addClass('has-sub');
    }
  })
  $('.mobile-menu-list .sub-menu-mobile').each(function () {
    if ($(this).find('li').length == 0) {
      $(this).hide();
    } else {
      $(this).parent().addClass('has-sub');
    }
  })

  $('.mobile-menu').click(function () {
    $(this).toggleClass('opened');
    $('header').toggleClass('show_main_menu');
    // $('main').toggleClass('hide_on_menu_opened');
  })

  $('.hidden_menu .language').click(function () {
    $(this).toggleClass('opened');
  })

  $('.mobile-menu-list li.has-sub').click(function () {
    $(this).toggleClass('opened');
  })

  $('.clone-p').text($('.root-p').text())
  $('.clone-button').text($('.root-button').text())
  $('.clone-button').attr('href', $('.root-button').attr('href'));
});

