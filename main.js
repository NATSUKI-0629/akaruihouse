$(function(){
    $('.hamburger').on ('click', function(){
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });
    $('#navi a').on('click',function() {
        $('#header').removeClass('open');
    });

    let pagetop = $('#to-top');
    pagetop.hide();
    //スクロールイベント
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function() {
        $('body.html').animate({scrollTop: 0}, 500);
        //イベントが親要素へ伝播しないための記述
        return false;
    });
});
