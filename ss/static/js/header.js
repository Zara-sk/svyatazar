$(function(){
    $('#header-nav').data('size','big');
});

$(window).scroll(function() {
    if($(document).scrollTop() > 0)
    {
        //  Сверху страницы
        if($('#header-nav').data('size') == 'big')
        {
            $('#header-nav').data('size','small');
            $('#logo').stop().animate({
                width:'5vw'
            },0);
            $('#header-nav').stop().animate({
                height:'5.2vw',
                top:'0',
            },400);
            $('#header-ps').stop().animate({
                height:'0',
            },400);
            $('.button').css('color', '#F8F5F1');
            setTimeout(scroll, 500)
        }
        // else if($(document).scrollTop() < 300)
        // {
        //     var hash = document.getElementById('about_us');
        //     $('html, body').animate({
        //         scrollTop: $(hash).offset().top - 80
        //     }, 600, function(){
        //         window.location.hash = hash;
        //     });
        //     setTimeout(scroll, 500)
        // }
        // else if(($(document).scrollTop() < 800) && ($(document).scrollTop() > 600))
        // {
        //     var hash = document.getElementById('retro');
        //     $('html, body').animate({
        //         scrollTop: $(hash).offset().top - 80
        //     }, 600, function(){
        //         window.location.hash = hash;
        //     });
        //     setTimeout(scroll, 500)
        // }
    }
    else
    {
        // Если прокрутим вниз
        if($('#header-nav').data('size') == 'small')
        {
            $('#header-nav').data('size','big');
            $('#header-nav').stop().animate({
                height:'0',
                top:'3.3vw',
            },200);
            $('#header-ps').stop().animate({
                height:'0'
            },200);
            $('#logo').stop().animate({
                width:'0'
            },200);
            $('.button').css('color', '#F43B86');
            setTimeout(scroll, 500)
        }
    }



    if(($(document).scrollTop() >= 0) &&($(document).scrollTop() < 650)) {
        $('title').text('Срываем оковы');
    }
    else if(($(document).scrollTop() > 650) &&($(document).scrollTop() < 3120)){
        $('title').text('Галерея');
    }
    else {
        $('title').text('Контакты');
    }
});