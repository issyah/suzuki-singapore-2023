var ua = function() {
    var _ua;
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
        _ua = "sp";
    } else {
        _ua = "pc";
    }
    return _ua;
};

$head = $('head');
if (ua() == 'sp') {
    $head.append('<link rel="stylesheet" type="text/css" href="css/sp.css">');
    $head.append('<link rel="stylesheet" type="text/css" href="css/mark_sp.css">');
    $head.append('<link rel="stylesheet" type="text/css" href="css/summury_sp.css">');
    $head.append('<link rel="stylesheet" type="text/css" href="css/modal_sp.css">');
}

function swichDom() {
    var $tg1 = $('#selected');
    var $tg2 = $('#summary_btn');
    var $tg3 = $('#footer');
    var selectedSource = $tg1.html();
    var summaryBtnSource = $tg2.html();
    var footer = $tg3.html();
    $tg1.remove();
    $tg2.remove();
    $tg3.remove();
    var newDom = '<div class=\"info_area\"><div id=\"selected\">' + selectedSource + '</div><div id=\"summary_btn\">' + summaryBtnSource + '</div></div>';
    $('#menu').before(newDom);
    $('.listbox').append('<li class="footer">' + footer + '</li>');
    replaceNotation();
}

function setheight() {
    var wH = screen.availHeight;
    var headerH = $('#header').height();
    var boxH = $('.box').height();
    var infoH = $('.info_area').outerHeight();
    var tabH = $('#tab').outerHeight();
    var infoH_marginH = Number(($('.info_area').css('margin-top')).replace('px', ''));
    var setH = wH - headerH - boxH - infoH - infoH_marginH;
    $('#menu').height(setH);
    $('#menu #list, #menu .listbox').height(setH - tabH);
}

function replaceSummary() {
    var source = $('#summary').html();
    $('#summary').remove();
    $('#modal_contents').after('<div id="summary">' + source + '</div>');
}

function replaceNotation() {
    var source = $('.info_area .notation').html();
    $('.info_area .notation').remove();
    $('.info_area').append('<p class="notation">' + source + '</p>');
}

var $tg;

function horizontal() {
  console.trace();
    $tg.hide();
    $('#mark').addClass('horizontal_mode');
    $('#modal_contents').addClass('modal_horizontal');
    $('#horizontal_notation').addClass('horizontal');
    changeViewSize();
}

function vertical() {
    $tg.show();
    $('#mark').removeClass('horizontal_mode');
    $('#modal_contents').removeClass('modal_horizontal');
    $('#horizontal_notation').removeClass('horizontal');
    refreshSize();
}


var _wH = screen.availHeight;
var _wW = screen.availWidth;

function changeViewSize() {
    var setValue = (_wW / _wH) * 100;
    $('.viewer').css('padding-top', setValue + '%');
}

function refreshSize() {
    $('.viewer').removeAttr('style');
    setheight();
}

var oriTriger = true;

function orientationChange() {
    if (Math.abs(window.orientation) === 90 || $(this).height() < $(this).width()) {
        if (oriTriger === true) {
            horizontal();
            oriTriger = false;
        }
    } else {
        if (oriTriger === false) {
            vertical();
            oriTriger = true;
        }
    }
}

$(window).on('orientationchange resize', function() {
    if (ua() == 'sp') {
        orientationChange();
    }
});


jQuery(document).ready(function() {
    if (ua() == 'sp') {
        $('#wp').addClass('sp');
        swichDom();
        replaceSummary();
        $tg = $('#menu,#header,.info_area,#bikelogo,#swiches');
        orientationChange();

    }

});

addOnload(function() {
    if (ua() == 'sp') {
        setheight();
    }
});

function addOnload(func) {
    try {
        window.addEventListener("load", func, false);
    } catch (e) {
        window.attachEvent("onload", func);
    }
}
