function adaptiveRem() {
	var docEl = document.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function() {
	        var width = docEl.getBoundingClientRect().width;
	        if (width > 640) { // 最大宽度
	            width = 640;
	        }
	        var rem = width / 6.4; 
	        docEl.style.fontSize = rem + 'px';

	    };
	recalc();
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
}