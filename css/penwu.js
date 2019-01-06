window.onload = function(){
 var cover = document.getElementsByClassName('tou')[0];
    window.onscroll = function(){
      var st = document.documentElement.scrollTop || document.body.scrollTop;
      if(st>180){
        cover.style.position = 'fixed'
      }else{
        cover.style.position = 'static'
      }
    }
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var slider = document.getElementById("slider");
		var Bimg = document.getElementById("Bimg");
		var box = document.getElementsByClassName('goumai')[0];
		img1.onmouseover = function () {
			slider.style.display = 'block';
			img2.style.display = 'block';
		}
		img1.onmouseout = function () {
			slider.style.display = 'none';
			img2.style.display = 'none';
		}

		img1.onmousemove = function (ev) {
			var ev = ev || window.event;

			var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
	
			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + 'px'
			Bimg.style.top = -scale * oT + 'px'
		}
		var jian = document.getElementById('jian');
		var jia = document.getElementById('jia');
		var geshu = document.getElementById('geshu');

		jian.onclick = function() {
			if(geshu.placeholder>1)
			geshu.placeholder--;
		}
		jia.onclick = function(){
			if(geshu.placeholder<5)
			geshu.placeholder++;
		}

		var xiaoml = document.getElementById('150ml');
		var daml = document.getElementById('200ml');
		var jiml = document.getElementById('jiml');
		xiaoml.onclick = function(){
			jiml.innerHTML = '"'+'150ml'+'"';
			daml.style.background = 'none';
			xiaoml.style.background = 'url(./img/duigou.png) no-repeat bottom right';
			xiaoml.style.border ='1px solid #fe0d4a';
			daml.style.border ='none';	
		}
		daml.onclick = function(){
			jiml.innerHTML = '"'+'200ml'+'"';
			xiaoml.style.background = 'none';
			daml.style.background = 'url(./img/duigou.png) no-repeat bottom right';
			daml.style.border = '1px solid #fe0d4a';
			xiaoml.style.border ='none';	
		}

		var sp0 = document.getElementById('sp0');
		var sp1 = document.getElementById('sp1');
		var spanl1 = document.getElementById('spanl1');
		var spanr1 = document.getElementById('spanr1');
		var pp0 = document.getElementById('pp0'); 
		var pp1 = document.getElementById('pp1'); 
		sp0.onclick = function(){
			sp0.style.border = '2px solid #ff9003';
			sp1.style.border = 'none';
			pp0.style.display = 'block';
			pp1.style.display = 'none';

		}
		sp1.onclick = function(){
			sp1.style.border = '2px solid #ff9003';
			sp0.style.border = 'none';
			pp1.style.display = 'block';
			pp0.style.display = 'none';
		}
		spanl1.onclick = function(){
			sp0.style.border = '2px solid #ff9003';
			sp1.style.border = 'none';
			pp0.style.display = 'block';
			pp1.style.display = 'none';
		}
		spanr1.onclick = function(){
			sp1.style.border = '2px solid #ff9003';
			sp0.style.border = 'none';
			pp1.style.display = 'block';
			pp0.style.display = 'none';
		}
		var jrgwc = document.getElementById('jrgwc');
		var beijing2 = document.getElementsByClassName('beijing2');
		var jxgw = document.getElementById('jxgw');
		var guanbi = document.getElementById('guanbi');
		jrgwc.onclick = function(){
			beijing2[0].style.display = 'block';
		}
		jxgw.onclick = function(){
			beijing2[0].style.display = 'none';
		}
		guanbi.onclick =function(){
			beijing2[0].style.display = 'none';
		}
	}
