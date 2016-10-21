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

define(["SimpleStorage"],function(e){function t(e){this.name=e,this.empty=!0,this.lastLevel=0,this.credits=!1,this.version=q,this.levels=[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0],this.getClone=function(){var e=new t(this.name);return e.empty=this.empty,e.lastLevel=this.lastLevel,e.levels=this.levels,e}}function n(){V=e.get(D),void 0!==V&&V instanceof Array&&3===V.length||o();for(i in V){var n=V[i];(!n instanceof t||null===n||n.version!==q)&&(n=z.getClone(),V[i]=n);for(j in n.levels)null===n.levels[j]&&(n.levels[j]=void 0)}v(),R=e.get(G),(void 0===R||"boolean"!=typeof R)&&(R=!1,e.set(G,R)),k=e.get(K),(void 0===k||"boolean"!=typeof k)&&(k=!1,e.set(K,k)),F=e.get(H),(void 0===F||"number"!=typeof F)&&(F=1,e.set(H,F)),J=e.get(Q),(void 0===J||"number"!=typeof J)&&(J=1,e.set(Q,J)),O=e.get(T),(void 0===O||"number"!=typeof O||0>O||O>3)&&(O=0,e.set(T))}function o(){V=[z.getClone(),z.getClone(),z.getClone()],e.set(D,V)}function r(){return V}function s(e){if(0>e||e>2)throw new Error(B.idOutRange+e);return A=e,V[e]}function l(){return V[A]}function u(){e.flush(),n()}function f(t){if(0>t||t>2)throw new Error(B.idOutRange+t);V[t]=z.getClone(),e.set(D,V)}function v(){e.set(D,V)}function d(e,t){if(N>e||e>P)throw new Error("LevelId Failed");var n=e-1,i=V[A].levels[n];i?i instanceof Array&&i.push(t):i=[t],V[A].levels[n]=i}function c(e){if(N>e||e>P)throw new Error("LevelId Failed");var t=e-1;V[A].levels[t]=void 0}function a(e,t){var n=V[e];n.name=t,n.empty=!1,V[e]=n,v()}function g(t){O=t,e.set(T,O)}function m(){R=!R,e.set(G,R)}function h(){k=!k,e.set(K,k)}function S(){return R}function p(){return k}function y(){return F}function w(){return J}function L(t){F=t>=0&&1>=t?t:1,e.set(H,F)}function C(t){J=t>=0&&1>=t?t:1,e.set(Q,J)}function M(){return O}function b(e){var t=V[A];t.lastLevel<e&&(t.lastLevel=e-1),v()}function x(){var e=V[A],t=0;for(i=0;i<e.levels.length-1;i++)if("undefined"!=typeof e.levels[i])for(j=0;j<e.levels[i].length;j++)t+=e.levels[i][j].score;return t}function _(e){var t=V[A],n=t.levels[e],i=0;if("undefined"!=typeof n)for(j=0;j<n.length;j++)i+=n[j].score;return i}function E(){var e=V[A];return e.credits}function I(){var e=V[A];e.credits=!0}var V,A,O,R,F,k,J,N=1,P=10,q="1.8.2",z=new t("Novo Jogo"),B={idOutRange:"Save id must be: 0 <= id <= 2. Passed id: "},D="saves_container",G="sfx_muted",H="sfx_volume",K="music_muted",Q="music_volume",T="selected_id";n();for(i in V)var U=V[i];return{load:r,loadSlot:s,save:v,setupSlot:a,reset:f,resetAll:u,unlockLevel:b,addScore:d,resetScore:c,getScoreSum:x,getLevelScoreSum:_,setSfxVolume:L,getSfxVolume:y,setMusicVolume:C,getMusicVolume:w,toggleSfxMute:m,toggleMusicMute:h,isSfxMuted:S,isMusicMuted:p,hasSeenCredits:E,seeCredits:I,getLoadedSlot:l,setSelectedId:g,getSelectedId:M}});