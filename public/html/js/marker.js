/*------------------------init------------------------*/
var frame = 36; //set frame num
var jsonPath = 'db/marker_r150.json'; //for GSX-R150 json
var htmlPath = 'html/'; //set path modal html

var markLength, $markFrame, $mark, domReady;
var ajaxError;
var mark_path = 'img/ui/mark.png';
/*-------------------------------------------------------*/

/*---------------------get marker data---------------------*/
var DATA, DATAlen;
var _json;
ajax(jsonPath);
function ajax(url) {
    var $tg = $('#mark_box li');
    var $inner_tg = $('ul li');
    var _url = url;
    $.ajax({
        type: 'GET',
        url: _url,
        dataType: 'json',
        success: function(json) {
            DATAlen = markLength = json.length;
            DATA = json;
            if (domReady) {
              domChange();
              settingMarks();
              modalSetting();
            }
        }
    });
}
/*-------------------------------------------------------*/

/*-------------search name ---------------*/
function search(value) {
    var result = $.grep(DATA, function(e) {
        return e['name'] == value;
    });
    return result;
}
/*-----------------------------------------------------*/

/*-------------add marker dom---------------*/
function markdomSetting() {
    var spins = "";
    for (var i = 0; i < frame; i++) {
        var markSetter = "";
        for (var k = 0; k < markLength; k++) {
            var keys = "<li class=\"" + DATA[k].name + " marks\"><img src =\"" + mark_path + "\"/ ></li>";
            markSetter = markSetter + keys;
        }
        var spin_li = "<li class=\"mark_hidden\"><ul>" + markSetter + "</ul></li>";
        spins = spins + spin_li;
    }
    var marker_box_box = "<ul id=\"mark_box\">" + spins + "</ul>";
    $('div#mark').prepend(marker_box_box);
    $markFrame = $('#mark_box> li');
    $mark = $('#mark_box li ul li');
    $markFrame.eq(0).attr('class', 'mark_current');
}
/*------------------------------------------------*/

/*-------------change grade---------------*/
function domChange() {
    if ($('#mark_box > li').length) {
        $markFrame.find('ul li').remove();
        for (var i = 0; i < frame; i++) {
            var markSetter = "";
            for (var k = 0; k < markLength; k++) {
                var keys = "<li class=\"" + DATA[k].name + " marks\"><img src =\"" + mark_path + "\"/ ></li>";
                markSetter = markSetter + keys;
            }
            $markFrame.eq(i).find('ul').append(markSetter);
        }
        $mark = $('#mark_box li ul li');
    }
}
/*------------------------------------------------*/

/*-------fix frame------*/
var cur, pre;

function currentCall(tg) {
    var num = $('.spin_box ul li').index(tg);
    cur = num;
}

function preCall(tg) {
    var num = $('.spin_box ul li').index(tg);
    pre = num;
    changeCall();
}

function inertia(frame) {
    $markFrame.attr('class', 'mark_hidden');
    $markFrame.eq(frame).attr('class', 'mark_current');
    cur = frame;
}

function changeCall() {
    $markFrame.eq(cur).attr('class', 'mark_current');
    $markFrame.eq(pre).attr('class', 'mark_hidden');
}
/*-----------------------------------------------*/

/*---------------feature modal-----------------*/
function modalSetting() {
    $mark.on('click', modalOpen);
}
function modalOpen() {
    var modalOverlay = "<div id=\"modal_overlay\" style=\"display:none;\"></div>";
    $('#modal_contents').before(modalOverlay);
    $('#modal_contents .close_btn,#modal_overlay').on('click', modalClose);
    $('#modal_overlay').fadeIn('fast');
    $('#modal_contents').css({
      'display':'block',
      'opacity':'0.0'
    });
    addContent(this);
}

function modalClose() {
    $('#modal_contents, #modal_overlay').fadeOut('fast', function() {
        $('#modal_overlay,#modal_contents .contents_inner .contents_box > div').remove();
        $('#modal_contents .close_btn,#modal_contents .contents_box').removeAttr('style');
    });
    $('#modal_contents .close_btn, #modal_overlay').off('click');

}

function modalReadyed(len){
  var timer;
  $('#modal_contents .contents img').on('load',function(){
    clearTimeout(timer);
    timer = setTimeout(allLoaded,100);
    function allLoaded(){

      //adjustment　modal position phase;
      var firstContentsHeight = $('#modal_contents .contents').eq(0).innerHeight();
      var lastContentsHeight = $('#modal_contents .contents').eq(len - 1).innerHeight();
      var topPading = ($(window).height() - firstContentsHeight)/2;
      var bottomPading = ($(window).height() - lastContentsHeight)/2;

      $('#modal_contents .contents_box,#modal_contents .close_btn').css({
        'padding-top':topPading
      });
      $('#modal_contents .contents_box').css({
        'padding-bottom':bottomPading,
      });

      $('#modal_contents').fadeTo('10',1.0);
    }

  });
}

function addContent(tg) {
    var markName, url, urlLen;
    var counter = 0;
    markName = $(tg).attr('class').match(/mark\d+/).toString();
    url = search(markName)[0].url;
    urlLen = url.length;

    fireAjax();
    function fireAjax(){
      if (counter < urlLen) {
        htmlAjax(url[counter]);
      }
    }

    function htmlAjax(url) {
        $.ajax({
            type: 'GET',
            url: htmlPath + url,
            dataType: 'html',
            success: function(html) {
              $('#modal_contents .contents_box').append(html);
              counter++;
              if (counter == urlLen) {
                modalReadyed(urlLen);
              }
              fireAjax();
            }
        });
    }


}
/*-----------------------------------------------*/

/*---------------set marker position-----------------*/
function settingMarks() {
  var markW,markH;
  if (ua() == 'sp') {
    markW = 17;
    markH = 11;
  }else {
    markW = 16;
    markH = 16;
  }

    for (var i = 0; i < DATAlen; i++) {
        for (var j = 0; j < frame; j++) {
            var frameNum, active, zIndex, position, _position, x, y,unit;

            var pos = DATA[i].position[j];
            // frameNum = pos.frame;
            active = pos.active;

            if (active == 'show') {
                zIndex = pos.zIndex;
                position = pos.pos;
                _position = position.split(',');
                if (ua() == 'sp') {
                  unit = '%';
                  x = (_position[0] - (markW/2))/1180*100;
                  y = (_position[1] - (markH/2))/576*100;
                }else {
                  unit = 'px';
                  x = _position[0] - (markW/2);
                  y = _position[1] - (markH/2);
                }
            } else {
                zIndex = x = y = 0;
            }

            if ($('#mark_box > li').length) {
                if (ua() == 'sp') {
                  $markFrame.eq(j).find('li').eq(i).css({
                      'left': x + unit,
                      'top': y + unit,
                      'z-index': zIndex
                  }).addClass(active);
                }else {
                  $markFrame.eq(j).find('li').eq(i).css({
                      'margin-left': x + unit,
                      'margin-top': y + unit,
                      'z-index': zIndex
                  }).addClass(active);
                }
            }
        }
    }
}
/*--------------------------------------------------*/

/*---------------FEATURES btn-----------------*/
function futureBtnInit(){
  $('#features_swich').on('click',futureBtn);
  $('#features_swich').attr('class', 'swich on');
}
function futureBtn(){
  if (!($('#swich_features').find('span').hasClass('on'))) {
    $('#swich_features').find('span').attr('class', 'swich on');
    $('#mark').show();
  }else {
    $('#swich_features').find('span').attr('class', 'swich');
    $('#mark').hide();
  }
}

function markerCallR(){
  ajax(jsonPath_XT);
}
function markerClallS(){
  ajax(jsonPath);
}
/*---------------------------------------------*/

jQuery(document).ready(function() {
    domReady = true;
    markdomSetting();
    modalSetting();
    settingMarks();
    futureBtnInit();
});
