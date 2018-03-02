function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if (element_class !== '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }

    if ($(window).scrollTop() !== scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}

$(document).ready(function () {
    /*
	    Navigation
	*/
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });
    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function () {
        $('nav').toggleClass('navbar-no-bg');
    });

    /*---------------------------------------------------------------- Fixed menu ----------------------------*/
    $('header').scrollToFixed();

    /*---------------------------------------------------------------- animation1 ----------------------------*/
    $('.features .item').hover(function () {
        $(this).addClass('animated pulse')
    }, function () {
        $(this).removeClass('animated pulse')
    });

    $('.table .table-list').hover(function () {
        $(this).addClass('animated tada')
    }, function () {
        $(this).removeClass('animated tada')
    });

    /*---------------------------------------------------------------- Tooltip -------------------------------*/
    $('.tooltips').tooltip();

    /*----------------------------------------------------------------- ToTop --------------------------------*/
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*------------------------------------------------- check FormData -------------------------*/

    // Как только страничка загрузилась
    window.onload = function () {
        // проверяем поддерживает ли браузер FormData
            if(!window.FormData) {
                /* * если не поддерживает, то выводим
                * то выводим предупреждение вместо формы */
                var div = ge('content');
                div.innerHTML = "Ваш браузер не поддерживает объект FormData";
                div.className = 'notSupport';
            }
    };

    /*-----------------------------------------contact--------------------------------------------------------*/
    document.getElementById('feedback-form').addEventListener('submit', function (e) {
        var http = new XMLHttpRequest(), f = this;
        e.preventDefault();
        http.open("POST", "contacts.php", true);
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
                if (http.responseText.indexOf(f.name.value) == 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
                    f.tel.removeAttribute('value');
                    f.tel.value = '';
                    f.name.removeAttribute('value');
                    f.name.value = '';
                    f.comp.removeAttribute('value');
                    f.comp.value = '';
                    f.email.removeAttribute('value');
                    f.email.value = '';
                }
            }
        };
        http.onerror = function () {
            alert('Извините, данные не были переданы');
        };
        http.send(new FormData(f));
    }, false);

    /*---------------------------------------------------------------- Slider Button Set animation ----------------------------*/
    // setInterval(function () {
    //     $('.slider a').toggleClass('animated shake')
    // }, 2000);

    /*
        Wow
    */
    new WOW().init();
});

$(window).load(function () {
    /*
        Loader
    */
    $(".loader-img").fadeOut();
    $(".loader").delay(1000).fadeOut("slow");
});
