$(function () {

  $('.list__inner .tab, .reviews__tab').on('click', function (event) {
    const id = $(this).attr('data-id');

    $('.list__inner, .reviews__inner').find('.tab-item, .reviews__content-item')
      .removeClass('active-tab').hide();
    $('.list__inner .tabs, .reviews__tabs').find('.tab, .reviews__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  
  $popularLink = $('#popularLink');
  $historyMobileBg = $('.history__mobile-bg');
  // const historyImg = document.createElement('img');
  
  // historyImg.src = 'img/alonso-mobile.jpg';
  
  // $historyMobileBg.append(historyImg);

  $(window).on('resize', onResizeWidth);

  function onResizeWidth() {
    if ($(window).width() < 480) {
      $popularLink.html('получить к себе в аптечку')
    } else if ($(window).width() > 480) {
      $popularLink.html('получить средство-панацею к себе в аптечку')
    }
  }

});
