/*-----------------------*/
/*        common         */
/*-----------------------*/
var win = window,
    doc = document;

// main json path
var url1 = "db/gsxr150.json";

// img path
var listThumPath = 'img/list_thumbnail';
var path = 'img/main/';
var colorChipsPath = 'img/ui/color_chips/';
var bodyColorChipsPath = 'img/ui/body_color_chips/';
var icon360Path = 'img/ui/icon360.png';

//util
var data;
var ims;

var $protectTg;

var gradeInput;
var colorInput;
var lightInput;
var accessoryInput = [];

var singleMode,acCounter;

var Ready = false;
var spintoggle = true;
var p_spintoggle = true;
var initedspin = false;

var lookDb = [];

/*-----------------------*/
/*        ajax           */
/*-----------------------*/
Ajax(url1);
function Ajax(url) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(json) {
            data = json;
            createBcList();
            createAcList();
            initCheck();
            selecterInit();
            initDettailBtn();
            if (!Ready) {
              settingSpin();
            }
        }
    });
}

/*------------------------------*/
/*   data search module         */
/*------------------------------*/
function Search(cotegory, key, value) {
    var result = $.grep(cotegory, function(e) {
        return e[key] == value;
    });
    return result;
}

/*---------------------------------*/
/*  create BODY COLOR list         */
/*---------------------------------*/
function createBcList() {
  $('#bodyColorList ul li').remove();
    for (var i = 0; i < data.bdColor.length; i++) {
        var bL = data.bdColor[i];
        var list =
        '<li class=\"lists ' + bL.id + '\">\
          <div class=\"listright\">\
            <input type=\"radio\" name=\"color\" value=\"' + bL.id + '\" id=\"rdc' + i + '\">\
            <label for=\"rdc' + i + '\" class=\"radiotype\"><\/label>\
          <\/div>\
          <p>' + bL.listname + '<\/p>\
          <img src=\"' + bodyColorChipsPath + bL.thumbnail + '\" alt=\"' + bL.listname + '\" class=\"thum\" \/>\
        <\/li>';

        $('#bodyColorList ul').append(list);
    }
}

/*--------------------------------------*/
/*  create GENUINE ACCESSORY list       */
/*--------------------------------------*/
function createAcList() {
  var icon360 = '<img class=\"icon360\" alt="360&deg;VIEWER" src=\"'+ icon360Path +'\"\/>';

  $('#genuineAccessoryList ul li').remove();
    for (var i = 0; i < data.supplies.length; i++) {

      var aL = Search(data.supplies, 'order', (i+1))[0];


      //create color chip DOM
      if (aL.itemcolor) {
        var chips = '';
        for (var j = 0; j < aL.colorThumbs.length; j++) {
          var chipImg = (ua() == 'sp') ? (aL.colorThumbs[j]).replace('.','_sp.') : aL.colorThumbs[j];
          var icNumber = ('0' + (j+1)).slice(-2);
          var chip = '<li class="chips ic'+icNumber+'"><img src=\"'+colorChipsPath+chipImg+'\" /></li>';
          chips += chip;
        }
        var colorChipDom = '<ul class=\"color_chips '+aL.gid+'\">'+chips+'</ul>';
      }

      //DOM create & add
      var list;
      var list_radio =
      '<li class=\"lists radio ' + aL.gid + '\">\
        <div class=\"listright\">\
          <input type=\"checkbox\" name=\"accessory\" value=\"' + aL.gid + '\" id=\"ga' + i + '\">\
          <label for=\"ga' + i + '\" class=\"radiotype\"><\/label>\
        <\/div>\
        <div class=\"havebtn\">\
          <p>'+ aL.name[0] +'<\/p>\
          <span class=\"detail_btn ' + aL.gid + '\"><\/span>\
        <\/div>\
        <img src=\"img\/list_thumbnail\/'+ aL.thumbnail[0] +'\" alt=\"'+aL.name[0]+'\" class=\"thum\" \/>\
      <\/li>';

      var list_noradio =
      '<li class=\"lists noradio ' + aL.gid + '\">\
        <div class=\"havebtn\">\
          <p>'+ aL.name[0] +'<\/p>\
          <span class=\"detail_btn ' + aL.gid + '\"><\/span>\
        <\/div>\
        <img src=\"img\/list_thumbnail\/'+ aL.thumbnail[0] +'\" alt=\"'+aL.name[0]+'\" class=\"thum\" \/>\
      <\/li>';

      list = (aL.radiobtn) ? list_radio : list_noradio;
      $('#genuineAccessoryList > ul').append(list);

      //add 360icon
      if (((Search(data.mainoutputcontrol, 'gid', aL.gid)).length) === 1) {
        var $block = $('#genuineAccessoryList li.'+aL.gid);
        $block.addClass('adapt360').find('.listright').append(icon360);
      }

      //color chip control setting
      if (aL.itemcolor) {
        var initSelect = Number(aL.firstColSelect) - 1;
        $('#genuineAccessoryList li.'+aL.gid+' span').wrap('<div class="have_chips"></div>');
        $('#genuineAccessoryList li.'+aL.gid+' .have_chips').append(colorChipDom);
        $('#genuineAccessoryList .color_chips.'+aL.gid+' li').on('click',accessoryColorSelect);
        $('#genuineAccessoryList .color_chips.'+aL.gid+' li').eq(initSelect).addClass('select');
      }
    }
}


/*-----------------------------------------------------*/
/*  check  init controller && inheritance              */
/*-----------------------------------------------------*/
function initCheck(){
  // ---------- init ----------//
  var $tg;

  // ---------- grade & light swich----------//
  if (!Ready) {
    $('#gradeList input[value = "g01"]').prop('checked', true).addClass('clicked');
    $('#swich_light .swich').removeClass('on');
  }

  // ---------- color ----------//
  $('#bodyColorList input[value = "c1"]').prop('checked', true).addClass('clicked');


  /*-----------------------------------------*/
  /*  control accesory inheritance          */
  /*-----------------------------------------*/
  if (Ready) {
    for (var i in accessoryInput) {
      $tg = $('#genuineAccessoryList').find('.lists.' + accessoryInput[i].name);
      var checked = accessoryInput[i].check;
      var col = accessoryInput[i].col;
      var look = (!(accessoryInput[i].look == 'none')) ? accessoryInput[i].look : 'none';
      // console.log(look);
      if (checked == 1) {
        $tg.find('input').prop('checked', true);
      }
      if (col != '') {
        $tg.find('.color_chips .select').removeClass('select');
        $tg.find('.' + col).addClass('select');
      }
      if (!(look == 'none')) {
        $tg.addClass(look);
      }
    }
    itemColorActivater();
  }
}


/*--------------------------------------*/
/*  init tab control                    */
/*--------------------------------------*/
var $tabAll;
var $listAll;

// ----------- init ----------//
function initTabs(){
  $('#grade').on('click',gradeSelect);
  $('#bodyColor').on('click',colorSelect);
  $('#genuineAccessory').on('click',accessorySelect);
  $tabAll = $('#tab .tabs');
  $listAll = $('#list .listbox');
  $('#grade').click();
}
// ----------- grade panel ----------//
function gradeSelect(t){
  $tabAll.removeClass('select');
  $listAll.addClass('hide');
  $(this).addClass('select');
  $('#gradeList').removeClass('hide').addClass('view');
}
// ----------- color panel ----------//
function colorSelect(){
  $tabAll.removeClass('select');
  $listAll.addClass('hide');
  $(this).addClass('select');
  $('#bodyColorList').removeClass('hide').addClass('view');
}
// ----------- acccessory panel ----------//
function accessorySelect(){
  $tabAll.removeClass('select');
  $listAll.addClass('hide');
  $(this).addClass('select');
  $('#genuineAccessoryList').removeClass('hide').addClass('view');
}



/*---------------------------------------------*/
/*  check btn action setting                   */
/*---------------------------------------------*/
function selecterInit(){
  /*---------init---------*/
  if (!Ready) {
    $('#gradeList input').on('click',gradeBtn);
    $('#swich_light .swich').on('click',lightBtn);
  }
  $('#bodyColorList input').on('click',colorBtn);
  $('#genuineAccessoryList input').on('click',acceBtn);
  getParameter(true,'selecterInit');
}

/*---------grade btn action---------*/
function gradeBtn(){
  if (!($(this).hasClass('clicked'))) {
    $('#gradeList input').removeClass('clicked');
    $(this).addClass('clicked');
    var thisval = $(this).val();
    setTimeout(function(){
      gradeChange(thisval,"gradeBtn");
    },10);

  }

}
/*---------color btn action---------*/
function colorBtn(){
  if (!($(this).hasClass('clicked'))) {
    $('#bodyColorList input').removeClass('clicked');
    $(this).addClass('clicked');
    getParameter(true,'colorBtn');
  }
}
/*---------accessory btn action main---------*/
function accessoryColorSelect(){
  var thisGID = (($(this).parent('ul').attr('class')).split(' '))[1];
  if ($(this).closest('ul').hasClass('color_chips_active')) {
    $(this).closest('ul').find('.select').removeClass('select');
    $(this).addClass('select');

    var thisAccesoryCheckStatus = $('#genuineAccessoryList li.'+thisGID+'').find('input').prop('checked');
    if (thisAccesoryCheckStatus) {
      getParameter(true,'accessoryColorSelect');
    }else{
      getParameter(false,'accessoryColorSelect');
    }
  }
}
/*---------light btn action---------*/
function lightBtn(){
  if (!($(this).hasClass('on'))) {
    $(this).addClass('on');
  }else {
    $(this).removeClass('on');
  }
  getParameter(true,'lightBtn');
}
/*---------accessory btn action sub---------*/
var timer;
function acceBtn(){
  var $input = $(this);
  var getId = $(this).val();
  var thisAcOb = (Search(data.supplies, 'gid', getId))[0];

  var $tg;

  /*--------------------------------------*/
  /*  check box exc control               */
  /*--------------------------------------*/
  /*---------- look ---------------*/
  if ($(this).prop('checked')) {
    $(this).closest('li').addClass('look').removeClass('look_off');
  }else{
    $(this).closest('li').removeClass('look').addClass('look_off');
  }

  cbec();
  function cbec(){
    if (thisAcOb.swichControl) {
      var controlOption = thisAcOb.swichController;
      var $block = $('#genuineAccessoryList');


      for (var i in controlOption) {
        //init
        var controlTg = controlOption[i].tg;
        var control = controlOption[i].control;
        var mySatus = controlOption[i].mySatus;
        var lookedTargerControl = controlOption[i].lookedTargerControl;

        //conroll phase init
        var $getTg = $block.find('.' + controlTg).find('input');
        var mystatusMatting = ($input.prop('checked') == mySatus) ? true : false;
        var lookedFlagMatting;
        // var lookedFlagMatting = ($getTg.closest('li').hasClass('look') == lookedTargerControl) ? true : false;
        if (lookedTargerControl) {
          lookedFlagMatting = true;
        }else{
          lookedFlagMatting = ($getTg.closest('li').hasClass('look') == lookedTargerControl) ? true : false;
        }


        //conroll phase start
        if (mystatusMatting && lookedFlagMatting && $getTg.length > 0) {
          $getTg.prop('checked',control);
          if (control == false && $getTg.closest('li').hasClass('look')) {
            $getTg.closest('li').removeClass('look');
          }
        }
      }
    }
  }
  itemColorActivater();

  clearTimeout(timer);
  timer = setTimeout(callparam,850);
  function callparam(){
    getParameter(true,'acceBtn');
  }
}


/*--------------------------------------*/
/*  item color acrivete                 */
/*--------------------------------------*/
function itemColorActivater(){
  $('.color_chips').each(function(){
    var ThisItemCheckStatus = $(this).closest('.lists').find('input').prop('checked');
    if (ThisItemCheckStatus) {
      $(this).addClass('color_chips_active');
    }else{
      $(this).removeClass('color_chips_active');
    }
  });
}

/*--------------------------------------*/
/*  chenge grade                        */
/*--------------------------------------*/
 function gradeChange(val){
   if (val == 'g01') {
     Ajax(url1);
     markerClallS();
   }else{
     Ajax(url2);
      markerCallR();
   }
 }


 /*--------------------------------------*/
 /*  create parameter                    */
 /*--------------------------------------*/
function getParameter(flag,callfrom){

  var difftoggle = true;
  var callFrom = callfrom;

  // create cache
  var accessoryInputCache = []
  if (Ready) {
    for (var n in accessoryInput) {
      var cacheStage = accessoryInput[n];
      var cacheStageName = cacheStage.name;
      var cacheStageCheck = cacheStage.check;
      var cacheStageitemCol = cacheStage.itemCol;
      var cacheStageCol = cacheStage.col;
      var cacheStageLook = cacheStage.look;
      var cacheStageViewerAffectFlag = cacheStage.viewerAffectFlag;

      var cacheOb = {
        'name':cacheStageName,
        'check':cacheStageCheck,
        'itemCol':cacheStageitemCol,
        'col':cacheStageCol,
        'look':cacheStageLook,
        'viewerAffectFlag':cacheStageViewerAffectFlag
      };
      accessoryInputCache[cacheStageName] = cacheOb;
    }
  }


  //init
  var viewChangeFlag = flag;
  //get grade input
  gradeInput = $('#gradeList input.clicked').val();
  //get color input
  colorInput = $('#bodyColorList input.clicked').val();


  //get accessory input
  aci();
  function aci(){
    // accessoryInputCache = accessoryInput;


    if (!Ready) {
      //landing
      $('#genuineAccessoryList > ul > .radio').each(function(index){
        //check status
        var check = $(this).find('input').prop('checked');
        var num;
        if (check) {num = 1;}else {num = 0; }


        //color or item color status
        var col,itemCol;
        if ($(this).find('.color_chips').length === 1) {
          itemCol = true;
          col = (($(this).find('.color_chips li.select').attr('class')).split(' '))[1];
        }else{
          itemCol = false;
          col = '';
        }

        // get gid
        var key = $(this).find('input').val();

        //viewer affect flag
        var viewerAffectFlag = ((Search(data.mainoutputcontrol, 'gid', key).length) == 1) ? true : false;
        // console.log(viewerAffectFlag);


        var ob = {
          'name':key,
          'check':num,
          'itemCol':itemCol,
          'col':col,
          'look':'none',
          'viewerAffectFlag':viewerAffectFlag
        };
        accessoryInput[key] = ob;
      });
    }else{
      //landed
      $('#genuineAccessoryList > ul > .radio').each(function(){
        var name = $(this).find('input').val();
        var check = $(this).find('input').prop('checked') ? 1 : 0;
        var itemCol = ($(this).find('.color_chips').length === 1) ? true : false;
        var col = (itemCol) ? (($(this).find('.color_chips li.select').attr('class')).split(' '))[1] : '';
        var look = 'none';
        if ($(this).hasClass('look')) {
          look = 'look';
        }
        if ($(this).hasClass('look_off')) {
          look = 'look_off';
        }

        var viewerAffectFlag = ((Search(data.mainoutputcontrol, 'gid', name).length) == 1) ? true : false;

        if (!(typeof accessoryInput[name] === 'undefined') ) {
          accessoryInput[name].check = check;
          accessoryInput[name].itemCol = itemCol;
          if (itemCol) {
            accessoryInput[name].col = col;
          }
          accessoryInput[name].look = look;
          accessoryInput[name].viewerAffectFlag = viewerAffectFlag;

        }else{
          // if new accesory .....
          var _ob = {
            'name':name,
            'check':check,
            'itemCol':itemCol,
            'col':col,
            'look':look,
            'viewerAffectFlag':viewerAffectFlag
          };
          accessoryInput[name] = _ob;
        }
      });
    }
  }

  //get light input
  ls();
  function ls(){
    if ($('#swich_light .swich').hasClass('on')) {
      lightInput = 1;
    }else {
      lightInput = 0;
    }
  }

  // single mode toggle
  acCounter = 0;
  for(var i in accessoryInput){
    if (accessoryInput[i].check == 1) {
      acCounter++
    }
  }
  singleMode = (acCounter > 0 || lightInput == 1) ? false : true;


  // console.log(gradeInput);
  // console.log(colorInput);
  // console.table(accessoryInputCache);
  // console.table(accessoryInput);
  // console.log(lightInput);

  // change diff
  if (Ready && (callFrom == 'acceBtn')) {
    var counter = 0;
    for (var o in accessoryInput) {
      var diffmain;
      var diffsource = accessoryInput[o];
      var diffTg = diffsource.name;
      // console.log(!(typeof accessoryInputCache[diffTg] == 'undefined'));
      if (!(typeof accessoryInputCache[diffTg] == 'undefined')) {
        var diffCheck = (!(diffsource.check == accessoryInputCache[diffTg].check)) ? true : false;
        var diffcol = (!(diffsource.col == accessoryInputCache[diffTg].col)) ? true : false;
      }

      if (diffCheck || diffcol) {
        diffmain = accessoryInputCache[diffTg];
        if (diffmain.viewerAffectFlag) {
          counter++;
        }
      }
    }
    // console.log(counter);
    difftoggle = (counter > 0) ? true : false;
    // if (counter > 0) {
    //   difftoggle = true;
    // }
  }

  if (viewChangeFlag) {
    // Img();
    if (difftoggle) {
      Img();
    }
    gac();
    LChange();
  }
}

/*--------------------------------------*/
/*  summury                             */
/*--------------------------------------*/
var $sutg, $suCtg;
//init
function summaryInit(){
  $('#summary_btn').on('click',suOpen);
  $('#s_close_btn').on('click',suClose);
  $sutg = $('#summary');
  $suCtg = $('#s_close_btn');
}
//open
function suOpen(){
  if (!($sutg.hasClass('open'))) {
    $sutg.addClass('open');
    createSu();
  }
}
//close
function suClose(){
  if (($sutg.hasClass('open'))) {
    $sutg.removeClass('open');
    refreshSu();
  }
}
// create summury accesory contents
function createSu(){
  var gname = data.gradeName[0];
  $('#s_grade_area').append('<p>' + gname + '</p>');

  var cName = (Search(data.bdColor, 'id', colorInput))[0].listname;
  $('#s_color_area').append('<p>' + cName + '</p>');

  var $oArea = $('#s_options_area ul');
  var $acList = $('#genuineAccessoryList');
  $acList.find('input[type="checkbox"]:checked').each(function(index, el) {
    var checkedGid = $(this).val();
    if (accessoryInput[checkedGid].check == 1) {
        var aName = '<span>' + (Search(data.supplies, 'gid', accessoryInput[checkedGid].name))[0].name + '</span>';
        if (accessoryInput[checkedGid].itemCol) {
          var chipImgNames = Search(data.supplies, 'gid', accessoryInput[checkedGid].name)[0].colorThumbs;
          var selectedChipsIdNum = Number((accessoryInput[checkedGid].col).replace('ic','')) - 1;
          var setImgChipsName = (ua() == 'sp') ? (chipImgNames[selectedChipsIdNum]).replace('.','_sp.') : chipImgNames[selectedChipsIdNum];
          aName += '<img src="'+colorChipsPath+setImgChipsName+'" />';
        }
        $oArea.append('<li class="slist">' + aName + '</li>');
      }
  });
}
// reflesh summury contents
function refreshSu(){
  $('#s_grade_area p,#s_color_area p,#s_options_area ul li').remove();
}

// create summury grade & color contents
function gac(){
  var $tg1 = $('#sGrade');
  var $tg2 = $('#sColor');
  var gname = data.gradeName[0];
  var cName = (Search(data.bdColor, 'id', colorInput))[0].listname;
  $tg1.find('p').remove();
  $tg1.append('<p>' + gname + '</p>');
  $tg2.find('p').remove();
  $tg2.append('<p>' + cName + '</p>');
}


/*--------------------------------------*/
/*  logo                                */
/*--------------------------------------*/
function LChange(){
  var $tg = $('#bikelogo');
  if (gradeInput == 'g01') {
    $tg.attr('class', 'type1');
  }else {
    $tg.attr('class', 'type2');
  }
}


/*--------------------------------------*/
/*  detail btn                          */
/*--------------------------------------*/
// init
var detailHtmlePath = 'detail_html/';
function initDettailBtn(){
  $('#genuineAccessoryList .detail_btn').on('click',detailBtn);
}
// modal open controller
function _modalOpen() {
    var modalOverlay = "<div id=\"modal_overlay\" style=\"display:none;\"></div>";
    $('#modal_contents').before(modalOverlay);
    $('#modal_contents .close_btn,#modal_overlay').on('click', modalClose);

}
// btn click main action
function detailBtn(){
  var getGid = ($(this).attr('class')).replace('detail_btn ','');
  var dImgHtml =  (Search(data.supplies,'gid',getGid))[0].detailImg;
  $.ajax({
    ype: 'GET',
    url: detailHtmlePath + dImgHtml,
    dataType: 'html',
    success:function(html){
      _modalOpen();
      $('#modal_contents .contents_box').append(html);
      $('#modal_overlay').fadeIn('fast');
      $('#modal_contents').css('opacity',0.0).show();

      $('#modal_contents .contents img').on('load',function(){
        var h = $(window).height();
        var modal_h = $('#modal_contents .contents').height();
        $('#modal_contents .contents_box,#modal_contents .close_btn').css({
          'padding-top':(h - modal_h)/2
        });
        $('#modal_contents').fadeTo('10',1.0);
      });

    }
  });
}

/*--------------------------------------*/
/* create view                          */
/*--------------------------------------*/
function Img(){
  // control protect
  $protectTg.addClass('protect').prepend('<span class="protectPanel"></span>');

  //body
  var bd;
  base();
  function base(){
    var name = gradeInput + '_' + colorInput.replace('c','c0') + '_';
    if (singleMode) {
      bd = {
        'ext':'.jpg',
        'url':path + name + 'all_'
      };
    }else {
      bd = {
        'ext':'.jpg',
        'url':path + name
        // 'url':path + name + 'all_' //for debag mode
      };
    }
    accesory();
  }

  //accesory
  function accesory(){
    var C = function(id,acType){
      /*-------------------*/
      /*        init       */
      /*-------------------*/
      var flag = acType;
      var This;
      var Head,Color,Type,Head_aOrs,Color_aOrs;
      var itemcolor;

      /*-------------------*/
      /*  search object    */
      /*-------------------*/
      switch (flag) {
        case 'standard': This = (Search(data.standard, 'gid', id))[0]; break;
        case 'supplies': This = (Search(data.supplies, 'gid', id))[0]; break;
        case 'light': This = (Search(data.light, 'gid', id))[0]; break;
        default: break;
      }

      /*-------------------*/
      /* get check status  */
      /*-------------------*/
      var checkStatus;
      if (flag == 'standard') {
        checkStatus = 0;
      }else if(flag == 'supplies'){
        checkStatus = accessoryInput[id].check;
      }else if(flag == 'light'){
        checkStatus = lightInput;
      }

      /*-------------------*/
      /* get color status  */
      /*-------------------*/
      var colorStatus = Number(colorInput.replace('c','')) - 1; //color


      /*-------------------*/
      /* create head       */
      /*-------------------*/
      Head_aOrs = (checkStatus == 1) ? This.ida : This.ids; // standard or accessory
      Head = Head_aOrs[colorStatus]; // standard or accessory [[color1],[color2],[color3], .....]


      /*-------------------*/
      /* create color      */
      /*-------------------*/
      itemcolor = This.itemcolor; // valid or unvalid item color
      if (itemcolor) {
        Color = accessoryInput[id].col;
      }else{
        Color_aOrs = This.color[checkStatus]; // color[[standard],[accessory]]
        Color = Color_aOrs[colorStatus]; // standard or accessory[color1, color2, color.....]
      }


      /*-------------------------*/
      /*       other control   */
      /*-------------------------*/

      if (This.excflag) {
        var control = This.control;
        for (var i in control) {
          var tg = control[i].tg;
          var linktg = control[i].linktg;
          var flag = control[i].flag;
          var value = control[i].value;
          var sourceSelect =  control[i].sourceSelect;
          var source;
          var linkTgExist = !(typeof accessoryInput[linktg] === 'undefined');

          switch (sourceSelect) {
             case 'gradeInput': source = gradeInput; break;
             case 'colorInput': source = colorInput; break;
             case 'accessoryInput': source = accessoryInput; break;
             case 'lightInput': source = lightInput; break;
             case 'important': source = flag; break;
             default: break;
           }

          // send Rewritephase
          switch(sourceSelect){
            case 'gradeInput': writetype2(); break;
            case 'colorInput': writetype2(); break;
            case 'accessoryInput': writetype1(); break;
            case 'lightInput': writetype2(); break;
            case 'important': writetype2(); break;
            default: break;
          }

          function writetype1(){
            var tgVal = accessoryInput[linktg].check;
               var matching = (tgVal == flag) ? true : false;
               if (matching) {
                 Rewritephase(value);
               }
          }

          function writetype2(){
            var tgVal = source;
              var matching = (tgVal == flag) ? true : false;
              if (matching) {
                Rewritephase(value);
              }
          }

          // main Rewritephase
          function Rewritephase(Rewritevalue){
            switch (tg) {
               case 'Head': Head = Rewritevalue; break;
               case 'Color': Color = Rewritevalue; break;
               case 'Type': Type += Rewritevalue + '_'; break;
               default: break;
             }
          }

          //  if (sourceSelect == 'accessoryInput') {
          //    var tgVal = accessoryInput[linktg].check;
          //    var matching = (tgVal == flag) ? true : false;
          //    if (matching) {
          //      Rewritephase(value);
          //    }
          //  }else{
          //    var tgVal = source;
          //    var matching = (tgVal == flag) ? true : false;
          //    if (matching) {
          //      Rewritephase(value);
          //    }
          //  }
           //
          //  function important(){
          //    Rewritephase(value);
          //  }

           try {
             if (Head.indexOf('undefined') != -1) {
               Head = Head.replace('undefined','');
             }
             if (Color.indexOf('undefined') != -1) {
               Color = Color.replace('undefined','');
             }
             if (Type.indexOf('undefined') != -1) {
               Type = Type.replace('undefined','');
             }
           } catch (e) {

           }
        }
        if (typeof Type === 'undefined') {
          Type = 't00_'
        }
      }else{
        Type = 't00_';
      }

      //*------------------*/
      /* out put control  */
      /*-------------------*/
      if (Head != 'none') {
        var ob = {
          'ext':'.png',
          'url':path + Head + '_' + Color + '_' + Type
        };
        return ob;
      }
    };

    /*edit image*/
    // debug xt
    // console.log(C('s01','standard')); //Normal seat
    // console.log(C('a01','supplies')); //High seat
    // console.log(C('a02','supplies')); //low seat
    // console.log(C('a03','standard')); //Engine Under Cowling
    // console.log(C('s02','standard')); //Normal screen
    // console.log(C('a04','supplies')); //Touring screen
    // console.log(C('a05','light')); //HeadLamp On
    // console.log(C('a06','light')); //TailLamp On
    // console.log(C('a07','supplies')); //Accessory bar
    // console.log(C('a08','supplies')); //Standard side case set
    // console.log(C('s03','standard')); //Turn signal lamps
    // console.log(C('a09','supplies')); //Turn signal lamps LED
    // console.log(C('a10','supplies')); //LED fog lamp set
    // console.log(C('a11','supplies')); //Standard top case, 35L
    // console.log(C('a12','supplies')); //Top case, 55L
    // // console.log(C('a13','supplies')); handle?
    // console.log(C('a14','standard')); //Handle Knuckle Guards

    //debug std
    // console.log(C('s01','standard')); //Normal seat
    // console.log(C('a01','supplies')); //High seat
    // console.log(C('a02','supplies')); //low seat
    // console.log(C('a03','supplies')); //Engine Under Cowling
    // console.log(C('s02','standard')); //Normal screen
    // console.log(C('a04','supplies')); //Touring screen
    // console.log(C('a05','light')); //HeadLamp On
    // console.log(C('a06','light')); //TailLamp On
    // console.log(C('a07','supplies')); //Accessory bar
    // console.log(C('a08','supplies')); //Standard side case set
    // console.log(C('s03','standard')); //Turn signal lamps
    // console.log(C('a09','supplies')); //Turn signal lamps LED
    // console.log(C('a10','supplies')); //LED fog lamp set
    // console.log(C('a11','supplies')); //Standard top case, 35L
    // console.log(C('a12','supplies')); //Top case, 55L
    // // console.log(C('a13','supplies')); handle?
    // console.log(C('a14','supplies')); //Handle Knuckle Guards

    // console.log('-----------------');


    /*---------------------*/
    /*  send spin phase    */
    /*---------------------*/
    var outPutData = data.mainoutputcontrol;
    var _ims;
    if (singleMode === true) {
      _ims = [bd];
    }else{
      _ims = [bd];
      for (var m = 0; m < outPutData.length; m++) {
        var ordedOb = Search(outPutData, 'order', (m+1))[0];
        var _gid = ordedOb.gid;
        var _category = ordedOb.category;
        _ims.push(C(_gid,_category));
      }
    }

    /*-------------------*/
    /*  fire spin        */
    /*-------------------*/
    ims = $.grep(_ims, function(e){return e;});
    if (initedspin) {
      spin();
    }
  }
}



/*--------------------------------------*/
/*  chenge spin                         */
/*--------------------------------------*/
var sptoggle = function(){
  var $t;
  if (spintoggle === true) {
    $t = $('#spin_area2');
    spintoggle = false;
  }else {
    spintoggle = true;
    $t = $('#spin_area1');
  }
  return $t;
};
var _sptoggle = function(){
  var $t;
  if (p_spintoggle === true) {
    $t = $('#spin_area1');
    p_spintoggle = false;
  }else {
    p_spintoggle = true;
    $t = $('#spin_area2');
  }
  return $t;
};

/*--------------------------------------*/
/*  spin settig                         */
/*--------------------------------------*/
function settingSpin() {
    sp1 = $('#spin_area1');
    sp2 = $('#spin_area2').css({
        'opacity': '0.0',
        'display': 'none'
    });
    spp = $('.rotation');
    spi = spp.find('img');
    sp1.spin({
        frame: 36,
        start: false,
        speed: 18,
        inertia:false,
        images: ims,
        progress: spp,
        fade: null
    }, {
        ready: function() {
            var tm = setInterval(function() {
                if (!$('.spin_progress')[0]) {
                    clearInterval(tm);
                    spi.animate({
                        'opacity': '1.0'
                    }, {
                        duration: 150,
                        easing: 'swing'
                    });
                }
            }, 50);
        },
        complate: function() {
            sp1.spin({
                speed: 3
            }).fireSpin();
            initedspin = true;
            setTimeout(function(){
                $protectTg.removeClass('protect');
                $('.protectPanel').remove();
            },200);
            Ready = true;
        }
    });
    firstTouch();
}

function firstTouch() {
    var mo = ('ontouchstart' in self) ? 'touchstart' : 'mousedown';
    var mm = ('ontouchmove' in self) ? 'touchmove' : 'mousemove';
    spi.on('dragstart', false);
    $('.box').on(mo, function() {
        $(this).on(mm, function() {
          $('.rotation').addClass('firstrotated');
            spi.stop().animate({
                'opacity': '0.0'
            }, {
                duration: 500,
                easing: 'swing',
                complete: function() {
                    $(this).unbind('dragstart').remove();
                }
            });
            $(this).unbind(mo).unbind(mm);
        });
    });
}


var CurrentFrame = 0;
function _currentCall(_tg){
  var _num = $('.spin_box ul li').index(_tg);
  CurrentFrame = _num;
}
// function _inertia(_frame) {
//   if (_frame >= 0) {
//     CurrentFrame = _frame;
//   }else {
//     CurrentFrame = 36 + _frame;
//   }
// }

/*--------------------------------------*/
/*  spin                                */
/*--------------------------------------*/
var fadeToggle = true;
var fadeToggle2 = true;
function spin(){
  var t = sptoggle();
  var _t = _sptoggle();
  spp = $('.rotation');
  spi = spp.find('img');
  _t.stopSpin();
  t.spin({
      frame: 36,
      start: false,
      speed: 18,
      inertia:false,
      images: ims,
      progress: spp,
      fade: null
  }, {
      ready: function() {
        t.find('.spin_images li').removeClass('spin_current').addClass('spin_hidden');
        t.find('.spin_images li').eq(CurrentFrame).removeClass('spin_hidden').addClass('spin_current');
          var tm = setInterval(function() {
              if (!$('.spin_progress')[0]) {
                  clearInterval(tm);
                  spi.animate({
                      'opacity': '1.0'
                  }, {
                      duration: 150,
                      easing: 'swing'
                  });
              }
          }, 50);
      },
      complate: function() {
        if (fadeToggle && fadeToggle2) {
          t.show().fireSpin().animate({
            'opacity':1.0
          },{
            duration:'fast',
            complete:function(){
              _t.removeSpin();
              fadeToggle = false;
              fadeToggle2 = false;
            }
          });
        }else if(fadeToggle && !fadeToggle2){
          t.fireSpin().fadeIn('fast',function(){
            _t.removeSpin();
            fadeToggle = false;
          });
        }else {
          _t.fadeOut('fast', function() {
            t.fireSpin();
            _t.removeSpin().removeAttr('style').hide();
            fadeToggle = true;
          });
        }
        setTimeout(function(){
            $protectTg.removeClass('protect');
            $('.protectPanel').remove();
        },200);
      }
  });
}



/*--------------------------------------*/
/*  document load                       */
/*--------------------------------------*/
jQuery(document).ready(function() {
    initTabs();
    summaryInit();
    $protectTg = $('#list,.box');
});
