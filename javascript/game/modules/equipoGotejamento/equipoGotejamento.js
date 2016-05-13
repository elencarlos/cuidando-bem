/*
This file is part of Cuidando Bem.

    Cuidando Bem is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Cuidando Bem is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Cuidando Bem.  If not, see <http://www.gnu.org/licenses/>.
*/

define(["require","text!../html/equipoGotejamento/equipoGotejamento.html"],function(e){function p(){this.x,this.y,this.frameTime,this.accumulator=0,this.frameTotal,this.frameCounter=0,this.cyclesPerMinute,this.img=[],this.hasToDraw=!1,this.width,this.height,this.srWidth,this.srHeight,this.update=function(){this.accumulator+=u.time;while(this.accumulator>=this.frameTime)this.frameCounter++,this.frameCounter=this.frameCounter%this.frameTotal,this.hasToDraw=!0,this.accumulator-=this.frameTime},this.draw=function(e){if(this.hasToDraw){var t=e.getContext("2d"),n=this.frameCounter*this.width,r=this.img[this.frameCounter];t.drawImage(r,0,0,this.srWidth,this.srHeight,this.x,this.y,this.width,this.height)}}}function b(e){$(e).append(t);var n=$(r)[0];n.setAttribute("width",800),n.setAttribute("height",600),$(".less").click(function(){C()}),$(".plus").click(function(){N()}),$(".sliderFront").slider({orientation:"vertical",min:a,max:f,value:60,slide:function(e,t){k(t.value)}}),O(c)}function w(){$(n).show(),h.frameCounter=0,u.accumulator=0,u.last=(new Date).getTime(),o=s.playing,T()}function E(){$(n).hide(),o=s.stopped}function S(){h.update()}function x(e){ctx=e.getContext("2d"),ctx.clearRect(0,0,800,600),h.draw(e)}function T(){u.now=(new Date).getTime(),u.passed=u.now-u.last,u.last=u.now,u.accumulator+=u.passed;while(u.accumulator>=u.time)S(),u.accumulator-=u.time;x($(r)[0]),o==s.playing&&window.requestAnimationFrame(T)}function N(){h.cyclesPerMinute+1<=f&&(h.cyclesPerMinute+=1,h.frameTime=6e4/h.cyclesPerMinute/h.frameTotal,h.frameCounter=0,$(".sliderFront").slider("value",h.cyclesPerMinute))}function C(){h.cyclesPerMinute-1>=a&&(h.cyclesPerMinute-=1,h.frameTime=6e4/h.cyclesPerMinute/h.frameTotal,h.frameCounter=0,$(".sliderFront").slider("value",h.cyclesPerMinute))}function k(e){h.cyclesPerMinute=e,h.frameTime=6e4/h.cyclesPerMinute/h.frameTotal,h.frameCounter=0}function L(e){l=e}function A(){return l==h.cyclesPerMinute}function O(e){e=="soro"?($(".slider").removeClass("dieta"),$(".slider").addClass("soro"),h=d):($(".slider").removeClass("soro"),$(".slider").addClass("dieta"),h=g)}var t=e("text!../html/equipoGotejamento/equipoGotejamento.html"),n="#equipo",r="#equipoGotejamento",s={playing:0,stopped:1},o=s.stopped,u={last:undefined,passed:undefined,now:undefined,accumulator:0,time:undefined,rate:60},a=0,f=120,l=60,c="soro",h;u.time=1e3/u.rate;var d=new p;d.x=120,d.y=0,d.width=140,d.height=610,d.srWidth=314,d.srHeight=1426,d.frameTotal=20,d.cyclesPerMinute=60,d.frameTime=6e4/d.cyclesPerMinute/d.frameTotal;var v=0;for(i=0;i<d.frameTotal;i++){d.img.push(new Image),d.img[i].onload=function(){v++};var m=d.img[i];i<10&&(i="0"+i),m.src="./images/modalScenes/soro/gotas_0"+i+".png"}var g=new p;g.x=120,g.y=0,g.width=140,g.height=610,g.srWidth=314,g.srHeight=1426,g.frameTotal=20,g.cyclesPerMinute=60,g.frameTime=6e4/g.cyclesPerMinute/g.frameTotal;var y=0;for(i=0;i<g.frameTotal;i++){g.img.push(new Image),g.img[i].onload=function(){y++};var m=g.img[i];i<10&&(i="0"+i),m.src="./images/modalScenes/dieta/gotaDieta_0"+i+".png"}return{init:b,setCyclesPerMinute:k,setMode:O,isValueRight:A,setRightValue:L,open:w,close:E}});