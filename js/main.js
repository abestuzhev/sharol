$(document).ready(function() {
    width = screen.width;
    if (width > 500) {
        height = $(window).height() - 99;
        $('.all, .all .container').css({
            'height': height,
        });
        $(window).resize(function() {
            height = $(window).height() - 99;
            $('.all, .all .container').css({
                'height': height,
            });
        });
    };

});
//
function StepsSlider() {
    var target = $('.container-steps');
    var steps = target.find('.step');
    var paginator = target.find('ul');
    var next_button = target.find('.nxt');
    //Р¤СѓРЅРєС†РёСЏ РїРѕРєР°Р·Р° С€Р°РіР°
    function ShowStep(index) {
        //РЈРґР°Р»СЏРµРј РІСЃРµ РЅРµ РЅСѓР¶РЅС‹Рµ SHOW
        var a = index - 1;
        $(steps[a]).addClass('blur').fadeOut(500);
        $(steps[index]).fadeIn(500).removeClass('blur');

    }
    var active = 0;
    ShowStep(active);
    //Р’Р·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ

    //checked
    function checkInput() {
        $('input').parent().removeClass('active');
        $('input:checked').parent().addClass('active');
    }
    $('label').click(function() {
        var len = $('label').length;
        checkInput();
        $('.left').css({
            'opacity': '1'
        });
        var text = $(this).parent().data('discount');
        $('.left .skidka').text(text).addClass('animated tada');
        $('.btn').addClass('active');
    });
    console.log(active);
    next_button.click(function() {


        if ($(this).parent().find('input:checked').prop('checked')) {
            active = active + 1;
            if (active >= steps.length) {
                return false;
            }
            ShowStep(active);
            console.log(1);
            $('.left .skidka').removeClass('animated tada');
            $('.btn').removeClass('active')
        } else if (active == 0) {
            active = active + 1;
            if (active >= steps.length) {
                return false;
            }
            ShowStep(active);
            console.log(1);
            $('.left .skidka').removeClass('animated tada');
            $('.btn').removeClass('active')
        } else {
            console.log('false')

        }

    });
}
StepsSlider();
$(document).ready(function() {
    $('[name=РўРµР»РµС„РѕРЅ]').mask('+7 (999)-999-99-99');
});
$(document).ready(function() {
    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $('html input:checked').serialize();
        th += '&' + $(this).serialize();
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th,
            success: function(response) {
                console.log(response);
            }
        }).done(function() {
            location.href = 'spasibo.html';
        });
        return false;
    });


//    popup
    /*
    $(".btn-question").click(function(event) {
        event.preventDefault();
        $('.c-popup_question').addClass('c-popup_show');
        $('.c-popup_bg').addClass('is-visible');
        $('body').addClass('body-popup');
        // $(this).parent().addClass('animated bounce');
    });
    */

    $(".btn-question").click(function(event) {
        event.preventDefault();
        $('.popup-iframe').addClass('c-popup_show');
        $('.c-popup_close').addClass('c-popup_show');
        $('body').addClass('body-popup');
        // $(this).parent().addClass('animated bounce');
    });

    /*закрыть popup*/
    $(".c-popup_close").click(function(event) {
        event.preventDefault();
        $(this).removeClass('c-popup_show');
        $(this).parent('.c-popup').removeClass('c-popup_show');
        $('.c-popup_bg').removeClass('is-visible');
        $('body').removeClass('body-popup');
        $('.btn-question_box').removeClass('animated bounce');
        $('.popup-iframe').removeClass('c-popup_show');
        // setTimeout($('.popup-iframe').removeClass('c-popup_show'), 300);
    });


    // появление через 30 секунд
    function autoShowPoup (){
      $('.c-popup_question').addClass('c-popup_show');
      $('.c-popup_bg').addClass('is-visible');
      $('body').addClass('body-popup');
    }

    setTimeout(autoShowPoup, 5000);
});
