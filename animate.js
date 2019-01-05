
window.onload = function(){
    function getStyle(obj, attr) { //返回值带有单位px
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return getComputedStyle(obj, null)[attr];
      }
    }

    function animate(obj, json, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
          (function (attr) {
            if (attr == "opacity") {
              var now = parseInt(getStyle(obj, attr) * 100);
              var dest = json[attr] * 100;
            } else {
              var now = parseInt(getStyle(obj, attr));
              var dest = json[attr];
            }
            var speed = (dest - now) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (now != dest) {
              flag = false;
              if (attr == "opacity") {
                obj.style[attr] = (now + speed) / 100;
              } else {
                obj.style[attr] = now + speed + "px";
              }
            }
          })(attr);
        }
        if (flag) {
          clearInterval(obj.timer);
        callback && callback(); //如果回调函数存在，就调用回调函数
      }
    }, 30);
    }
    var cover = document.getElementsByClassName('tou')[0];
    window.onscroll = function(){
      var st = document.documentElement.scrollTop || document.body.scrollTop;
      if(st>180){
        cover.style.position = 'fixed'
      }else{
        cover.style.position = 'static'
      }
    }
    var box = document.getElementById('box');
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist = document.getElementById('nav').children;
    var index = 1; //打开页面生效的图片的下标为1
    var timer;
    var isMoving = false;
          box.onmouseover = function () {
                animate(left, {
                  opacity: 0.6
                })
                 animate(right, {
                  opacity: 0.6
               })
            clearInterval(timer); //图片停止滚动
          }
          box.onmouseout = function () {
            animate(left, {
              opacity: 0
            })
            animate(right, {
              opacity: 0
            })
            timer = setInterval(next, 3000); //图片开始接着滚动
          }
          right.onclick = next;
          left.onclick = prev;

          function next() {
            if (isMoving) {
              return;
            }
            isMoving = true;
            index++;
            navmove();
            animate(slider, {
              left: -800 * index
            }, function () {
              if (index == 7) {
                slider.style.left = '-800px';
                index = 1;
              }
              isMoving = false;
            });
          }

          function prev() {
            if (isMoving) {
              return;
            }
            isMoving = true;
            index--;
            navmove();
            animate(slider, {
              left: -800 * index
            }, function () {
              if (index == 0) {
                slider.style.left = '-4800px';
                index = 6;
              }
              isMoving = false;
            });
          }
          for (var i = 0; i < oNavlist.length; i++) {
            oNavlist[i].index = i;
            oNavlist[i].onclick = function () {
              index = this.index + 1;
              navmove();
              animate(slider, {
                left: -800 * index
              });
            }

          }
          function navmove() {
            for (var i = 0; i < oNavlist.length; i++) {
              oNavlist[i].className = "";
            }
            if (index > 6) {
              oNavlist[0].className = "active";
            } else if (index <= 0) {
              oNavlist[5].className = "active";
            } else {
              oNavlist[index - 1].className = "active";
            }
          }
          timer = setInterval(next, 3000);
          var money = document.getElementById('money');
          money.onchange = function(){    
            var m = document.getElementById('money2');
            m.innerHTML = money.value;
          }

          var celan1 = document.getElementsByClassName('celan1');
          var erweima = document.getElementById('erweima');

          celan1[0].onmouseover = function(){
            celan1[0].style.width = 100 + 'px';
          }
          celan1[0].onmouseout = function(){
            celan1[0].style.width = 40+'px';
          }

          celan1[1].onmouseover = function(){
            celan1[1].style.width = 50 + 'px';
          }
          celan1[1].onmouseout = function(){
            celan1[1].style.width = 40+'px';
          }

          celan1[2].onmouseover = function(){
            celan1[2].style.width = 140 + 'px';
            erweima.style.display = 'block';
          }
          celan1[2].onmouseout = function(){
            celan1[2].style.width = 40+'px';
            erweima.style.display = 'none';
          }

          celan1[3].onmouseover = function(){
            celan1[3].style.width = 100 + 'px';
          }
          celan1[3].onmouseout = function(){
            celan1[3].style.width = 40+'px';
          }

          var speed1 = 30;
          var gundong = document.getElementById('gundong');
          var gundong1 = document.getElementById('gundong1');
          var gundong2 = document.getElementById('gundong2');
          gundong2.innerHTML = gundong1.innerHTML;
          gundong3.innerHTML = gundong1.innerHTML;
          function Marquee1(){
            if(gundong2.offsetTop-gundong.scrollTop <=0 || gundong1.offsetHeight-gundong.scrollTop<=0){
              gundong.scrollTop-=gundong1.offsetHeight
            }else{
              gundong.scrollTop++
            }
          }
          var MyMar1 = setInterval(Marquee1,speed1);
          gundong.onmouseover=function() {
            clearInterval(MyMar1);
          }
          gundong.onmouseout = function(){
            MyMar1 = setInterval(Marquee1,speed1);
          }
         
        }

