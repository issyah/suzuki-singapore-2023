/*
spin plugin ver.1.02
03.2016 (jQuery ver.1.12.2)

◯宣言のみ or 宣言済み取得
jQuery(element).spin();

◯宣言・定義 or 定義のみ or オーバーライド
jQuery(element).spin({
	images:[		<= 連番（1〜）を除いた基本URLとドット付き拡張子（後に記述するほど前面に表示）＜必須＞
		{url:'./img/a_', ext:'.jpg'},
		{url:'./img/b_', ext:'.png'}
	],
	frame:0,		<= 1回転のフレーム数 ＜必須＞
	speed:1,		<= アニメーション速度（1〜10）
	inertia:true,	<= 慣性アニメーションの有無
	start:true,		<= スタンバイ時のアニメーションの有無
	progress:null,	<= ローディング時のプログレスバーの表示先（jQuery Object）※1
	fade:null		<= 回転開始・停止時にフェードアウト・インするDom（jQuery Object）
}, {ready:function(){
	.....			<= DOM生成完了時処理
}, complete:function(){
	.....			<= ローディング完了時処理
}});

◯オプション値取得
jQuery(element).spin('option name');

◯開始 or 再開
jQuery(element).fireSpin();

◯停止
jQuery(element).stopSpin();

◯削除
jQuery(element).removeSpin();

※1…追加されるプログレスバーのDOM
<div class="spin_progress">
	<div class="spin_bar"><div></div></div>
	<p><span class="spin_count">0</span><span>%</span></p>
</div>

**********実行例**********

$('#box').spin(
	{frame:36, images:[{url:'./img/ph_', ext:'.jpg'}], progress:$('#progress')},
	{complate:function(){
		$(this).fireSpin();
	}}
);

$('#box').spin('frame');

$('#box').stopSpin();

*************************
*/

(function($){

/*--------------------
class method
--------------------*/

var ua = self.navigator.userAgent.toLowerCase();
var obj = {
	_mousedown:('ontouchstart' in self) ? 'touchstart' : 'mousedown',
	_mousemove:('ontouchmove' in self) ? 'touchmove' : 'mousemove',
	_mouseup:('ontouchend' in self) ? 'touchend' : 'mouseup',
	_spins:[],
	_active:null,
	_timer:null,
	_spin:function(s){
		for(var i = obj._spins.length; i--;){
			if(s === obj._spins[i]._selector) return obj._spins[i];
		}
		return void(0);
	},
	_ie8:(/msie 8/).test(ua),
	_trd:(/trident/).test(ua),
	_ffx:(/windows|android/).test(ua) && (/firefox/i).test(ua)
};

/*-----add css-----*/
document.write(
(obj._trd ? '<meta http-equiv="x-ua-compatible" content="IE=EmulateIE10">' : '')+
'<style type="text/css"><!--'+
	'.spin_box{'+
		'position:relative;'+
		'user-select:none;'+
		'-webkit-user-select:none;'+
		'-moz-user-select:none;'+
		'-o-user-select:none;'+
		'-ms-user-select:none;'+
	'}'+
	'.spin_box div, .spin_box ul, .spin_box li, .spin_box img{'+
		'display:block;'+
		'margin:0;'+
		'padding:0;'+
		'border:0;'+
		'line-height:0;'+
	'}'+
	'.spin_box > *, .spin_box li{'+
		'position:absolute;'+
		'width:100%;'+
		'height:100%;'+
	'}'+
	(obj._trd ?
	'.spin_box .spin_current{'+
		'z-index:1'+
	'}'
	: '')+
	'.spin_box .spin_hidden{'+
		((obj._ffx || obj._trd) ? 'opacity:0.0;' : 'visibility:hidden;')+
	'}'+
	'.spin_images{'+
		'list-style:none;'+
	'}'+
	'.spin_images img{'+
		'position:absolute;'+
		'top:-50%;'+
		'bottom:-50%;'+
		'width:100%;'+
		'margin:auto 0;'+
	'}'+
	'.spin_progress p{'+
		'position:absolute;'+
		'top:0;'+
		'bottom:0;'+
		'left:0;'+
		'right:0;'+
		'width:4em;'+
		'height:1em;'+
		'margin:auto;'+
		'text-align:center;'+
		'line-height:1em;'+
	'}'+
'--></style>'
);

/*-----class action-----*/
(function(){
	var nX, tX, aX, tM, aM, timer;

	$(document).on(obj._mousedown, function(e){
		if(obj._active){
			nX = tX = aX = e.screenX || e.originalEvent.touches[0].pageX;
			tM = aM = 0;
			obj._timer = setInterval(function(){
				tM = nX - tX;
				tX = nX;

				aM = nX - aX;
				if((20 / obj._active._options.speed) < Math.abs(aM)){
					var nxt, tgt = obj._active._dom.find('li.spin_current');
					if(0 < aM){
						nxt = tgt.next().length ? tgt.next() : obj._active._dom.find('li').eq(0);
					}else if(aM < 0){
						nxt = tgt.prev().length ? tgt.prev() : obj._active._dom.find('li').eq(-1);
					}

					nxt.attr('class', 'spin_current');
					currentCall(nxt);
					_currentCall(nxt);
					tgt.attr('class', 'spin_hidden ');
					$('.spin_box ul li').removeClass('near');
					nxt.next().addClass('near');
			    nxt.next().next().addClass('near');
			    nxt.next().next().next().addClass('near');
					nxt.next().next().next().next().addClass('near');
					nxt.next().next().next().next().next().addClass('near');
					nxt.prev().addClass('near');
			    nxt.prev().prev().addClass('near');
					nxt.prev().prev().prev().addClass('near');
			    nxt.prev().prev().prev().prev().addClass('near');
					nxt.prev().prev().prev().prev().prev().addClass('near');
					if ($('.spin_box ul li').index(nxt) == 35) {
						$('.spin_box ul li').eq(0).addClass('near');
						$('.spin_box ul li').eq(1).addClass('near');
						$('.spin_box ul li').eq(2).addClass('near');
						$('.spin_box ul li').eq(3).addClass('near');
						$('.spin_box ul li').eq(4).addClass('near');
					}
					if ($('.spin_box ul li').index(nxt) === 0) {
						$('.spin_box ul li').eq(31).addClass('near');
						$('.spin_box ul li').eq(32).addClass('near');
						$('.spin_box ul li').eq(33).addClass('near');
						$('.spin_box ul li').eq(34).addClass('near');
						$('.spin_box ul li').eq(35).addClass('near');
					}
					preCall(tgt);
					aX = nX;
				}
			}, 50);
		}

	}).on(obj._mousemove, function(e){
		if(obj._active){
			try{ //*get x pos err fix
				e.preventDefault(); //*IE & android default fix
				nX = e.screenX || e.originalEvent.touches[0].pageX;
			}catch(err){}
		}

	}).on(obj._mouseup, function(e){
		clearInterval(obj._timer);
		if(obj._active && obj._active._options.inertia && (10 < Math.abs(tM))){ //inertia animation
			var frm = obj._active._options.frame, lDom = obj._active._dom.find('.spin_images li');
			var sfr = lDom.index(lDom.filter('.spin_current')) + ((0 < tM) ? 1 : - 1 - frm);
			var ffr = sfr + Math.round((frm * obj._active._options.speed / 5) * tM / 100);
			var dur = 500 + Math.abs(tM);

			obj._active._inertia.prop('fps', sfr).animate({'fps':ffr}, {duration:dur, easing:'swing', step:function(){
				lDom.attr('class', 'spin_hidden').eq(Math.round(this.fps) % frm).attr('class', 'spin_current');
				inertia(Math.round(this.fps) % frm);
				_inertia(Math.round(this.fps) % frm);
			}, complete:function(){
				$(this).prop('fps', 0);
			}});
		}


		if(obj._active && obj._active._options.fade){
			obj._active._options.fade.stop().animate({'opacity':'1.0'}, {duration:250 / obj._active._options.speed, easing:'swing'});
		}
		obj._active = null;
	});

})();

/*--------------------
instance method
--------------------*/

var spin = function(selector, options){
	this._selector = selector;
	this._dom = $(selector).addClass('spin_box');
	this._options = $.extend({images:[], frame:0, speed:1, inertia:true, start:true, progress:null, fade:null}, options);
	this._old = {images:[], frame:0};
	this._standby = false;
	this._enable = false;
	this._inertia = $({fps:0});

	/*-----method action-----*/
	var tgt = this;
	this._dom.on(obj._mousedown, function(e){
		tgt._inertia.stop().prop('fps', 0); //inertia animation stop
		if(tgt._enable && tgt._standby){
			obj._active = tgt;
			if(tgt._options.fade){
				tgt._options.fade.stop().animate({'opacity':'0.0'}, {duration:250 / tgt._options.speed, easing:'swing'});
			}
		}
	});
	if(!obj._ie8) this._dom.on('selectstart dragstart', false);

	return this;
};
spin.prototype.fire = function(){
	this._enable = true;
	if(obj._ie8){
		this._dom.css('cursor', 'e-resize');
	}else{
		this._dom.css('cursor', 'ew-resize');
	}
};
spin.prototype.stop = function(){
	obj._active = null;
	clearInterval(obj._timer);
	this._inertia.stop().prop('fps', 0); //inertia animation stop

	this._enable = false;
	this._dom.css('cursor', 'auto');
};
spin.prototype.init = function(fc){
	var dfr = $.Deferred(); //*defer
	var tgt = this, opt = tgt._options, old = tgt._old, dom = tgt._dom, pDom = opt.progress;

	if(!(function(){
		if(opt.frame !== old.frame) return false;
		var len = old.images.length;
		if(len !== opt.images.length) return false;
		for(var i = len; i--;){
			if(old.images[i].url !== opt.images[i].url || old.images[i].ext !== opt.images[i].ext) return false;
		}
		return true;
	})()){
		tgt._standby = false; //stop action

		//make dom
		var str = '<ul class="spin_images">';
		for(var i = 0, ilen = parseInt(opt.frame, 10); i < ilen; i++){
			if(i === 0){
				str = str + '<li class="spin_current">';
			}else{
				str = str + '<li class="spin_hidden">';
			}
			for(var j = 0, jlen = opt.images.length; j < jlen; j++){
				str = str + '<img src="' + opt.images[j].url + (i + 1) + opt.images[j].ext + '">';
			}
			str = str + '</li>';
		}
		str = str + '</ul></div>'+

		dom.html(str);

		if(pDom) pDom.append( //*progress
		'<div class="spin_progress">'+
			'<div class="spin_bar"><div></div></div>'+
			'<p><span class="spin_count">0</span><span>%</span></p>'+
		'</div>');

		if(fc) fc.call(dom); //ready function

		//img load
		var iDom = dom.find('.spin_images img');
		var mxc = iDom.length, nwc = 0;

		if(pDom){ //*progress
			var sDom = pDom.find('.spin_count'), bDom = pDom.find('.spin_bar > div');
		}

		dom.css('cursor', 'progress');

		var finish = function(){
			if(tgt._enable){
				if(obj._ie8){
					this._dom.css('cursor', 'e-resize');
				}else{
					this._dom.css('cursor', 'ew-resize');
				}
			}else{
				dom.css('cursor', 'auto');
			}

			tgt._standby = true; //standby action
			old.images = opt.images; old.frame = opt.frame; //set old

			dfr.resolve(); //*defer resolve
		};
		var count = function(){
			nwc++;

			if(pDom){ //*progress
				var per = Math.round(nwc / mxc * 100).toString();
				sDom.text(per);
				bDom.width(per + '%');
			}
			if(nwc === mxc){
				if(pDom) pDom.children('.spin_progress').remove(); //*progress

				if(opt.start){ //start animation
					setTimeout(function(){
						var lDom = dom.find('.spin_images li'), f = 1, efr = opt.frame, inv = 250 / opt.speed;
						var timer = setInterval(function(){
							lDom.attr('class', 'spin_hidden');
							if(f === efr){
								clearInterval(timer);
								lDom.eq(0).attr('class', 'spin_current');

								setTimeout(function(){finish();}, 100);
							}else{
								lDom.eq(f++).attr('class', 'spin_current');
							}
						}, inv);
					}, 100);
				}else{
					finish();
				}
			}
		};
		if(obj._ie8){ //*IE8 blocking fix
			iDom.error(function(e){
				$(this).css('display', 'none');
				mxc--;
			});
			var ieTimer = setInterval(function(){
				var ien = 0;
				iDom.each(function(){
					if(this.complete) ien++;
				});
				if(nwc !== ien){
					nwc = ien - 1;
					count();
				}
				if(ien === mxc) clearInterval(ieTimer);
			}, 200);
		}else{
			iDom.on('load', function(){
				count();
			}).error(function(e){
				$(this).css('display', 'none');
				count();
			});
		}
	}else{
		if(fc) fc.call(dom); //ready function
		dfr.resolve(); //*defer resolve
	}
	return dfr.promise(); //*defer promise
};

/*--------------------
jQuery method
--------------------*/

$.fn.spin = function(){
	var tgt = this, arg = arguments, spn = obj._spin(this.selector);
	if(!arg.length || typeof arg[0] === 'object'){
		if(!spn){
			spn = new spin(this.selector, arg[0]);
			obj._spins.push(spn);
		}else if(arg[0]){
			$.extend(spn._options, arg[0]);
		}else{
			return spn;
		}

		var rFc = arg[1] && arg[1].ready;
		var cFc = arg[1] && arg[1].complate;
		spn.init(rFc).always(function(){
			if(cFc) cFc.call(tgt); //complate function
		});
	}else if(typeof arg[0] === 'string'){
		try{
			return eval('spn._options.' + arg[0]);
		}catch(err){}
	}
	return this;
};
$.fn.stopSpin = function(){
	obj._spin(this.selector).stop();
	return this;
};
$.fn.fireSpin = function(){
	obj._spin(this.selector).fire();
	return this;
};
$.fn.removeSpin = function(){
	for(var i = obj._spins.length; i--;){
		if(this.selector === obj._spins[i]._selector){
			if(!obj._ie8) this.off('selectstart dragstart');
			this.off(obj._mousedown).html('').removeClass('spin_box').css('cursor', '');

			obj._spins[i] = void(0);
			obj._spins.splice(i, 1);
			break;
		}
	}
	return this;
};

})(jQuery);
