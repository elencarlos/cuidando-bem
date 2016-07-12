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

define(["text!../html/prontuario/prontuario.html"],function(t){function e(){return Y}function o(){return Z}function a(){return tt}function r(){return et}function i(){return ot}function n(){return at}function s(){return rt}function c(){return it}function l(){return nt}function d(){return $t}function f(){return st}function p(){return ct}function u(){return lt}function w(){return wt}function x(){return xt}function m(){return mt}function v(){return prescEnfermagemState}function g(t){Y=t,$(gt).text(Y)}function b(t){Z=t,$(bt).text(Z)}function h(t){tt=t,$(ht).text(tt)}function _(t){et=t,$(_t).text(et)}function E(t){ot=t,$(Et).text(ot)}function k(t){at=t,$(kt).text(at)}function P(t){rt=t,$(Pt).text(rt)}function S(t){it=t,$(St).text(it)}function D(t){nt=t,$(Dt).text(nt)}function A(t){$t=t,$(At).text($t)}function R(t){st=t,$(Rt).text(st)}function y(t){ct=t,$(yt).text(ct)}function I(t){lt=t,$(It).text(lt)}function M(t,e){pt=t,t?($(Mt).text(Wt),$(Tt).text(Vt),dt=e,$(qt).val(e),$(qt).show()):($(Mt).text(Vt),$(Tt).text(Wt),$(qt).hide())}function N(t){Xt=t,$(qt).prop("disabled",Xt)}function q(t){wt=t,$(Ht).text(wt)}function C(t){xt=t,$(Lt).text(xt)}function T(t){mt=t,$(Ot).text(mt)}function V(t,e,o,a,r,i,n,s){if(s=s||!1,0>t||t>$e.length)throw new Error("Invalid row index");$e[t].disabled=s,$e[t].data=e,$e[t].pa=o,$e[t].fc=a,$e[t].fr=r,$e[t].sat=i,$e[t].temp=n,$($(ee,te)[t]).text(e),$($(oe,te)[t]).val(o),$($(ae,te)[t]).val(a),$($(re,te)[t]).val(r),$($(ie,te)[t]).val(i),$($(ne,te)[t]).val(n),$($(oe,te)[t]).prop("disabled",s),$($(ae,te)[t]).prop("disabled",s),$($(re,te)[t]).prop("disabled",s),$($(ie,te)[t]).prop("disabled",s),$($(ne,te)[t]).prop("disabled",s)}function W(t,e,o,a,r,i,n){if(0>t||t>$e.length)throw new Error("Invalid row index");se[t].pa=o,se[t].fc=a,se[t].fr=r,se[t].sat=i,se[t].temp=n}function X(t,e){fe=t,ue=e,$($(le,ce)[0]).val(t),$($(de,ce)[0]).text(e)}function H(t){var e=$($(de,ce)[0]).text();$($(de,ce)[0]).text(e+t)}function L(t,e){pe=t,we=e}function O(t,e,o,a,r,i,n,s){if(0>t||t>Qt.length)throw new Error("Invalid row index");Qt[t].disabled=s,Qt[t].data=e,Qt[t].medicacao=o,Qt[t].via=a,Qt[t].posologia=r,Qt[t].horario=i,Qt[t].relatorio=n,$($(jt,zt)[t]).text(e),$($(Bt,zt)[t]).text(o),$($(Ft,zt)[t]).text(a),$($(Gt,zt)[t]).text(r),$($(Jt,zt)[t]).text(i),Qt[t].relatorio?$($(Kt,zt)[t]).text("(x)"):$($(Kt,zt)[t]).text("( )")}function z(t,e){if(0>t||t>Qt.length)throw new Error("Invalid row index");Ut[t]=e}function j(){$("tr",Zt).hide()}function B(t){$.each(Yt,function(e,o){e==t?Yt[e]=!0:Yt[e]=!1}),$.each(Yt,function(t,e){e&&(prescEnfermagemState=t)}),$("."+prescEnfermagemState,Zt).show()}function F(e){$(e).append(t),$(Nt).click(function(){Xt||(pt=!0,$(Mt).text("X"),$(Tt).text("   "),$(qt).show())}),$(Ct).click(function(){Xt||(pt=!1,$(Tt).text("X"),$(Mt).text("   "),$(qt).hide())}),$(Kt,zt).click(function(){var t=$(Kt,zt).index(this);Qt[t].relatorio.disabled||(Qt[t].relatorio=!Qt[t].relatorio,Qt[t].relatorio?$(this).text("(x)"):$(this).text("( )"))}),$(".content").tabs()}function G(t){for($(vt).show(),row=0;row<$e.length;row++){$e[row].disabled;$($(oe,te)[row]).mask("000x000"),$($(ae,te)[row]).mask("000"),$($(re,te)[row]).mask("000"),$($(ie,te)[row]).mask("000"),$($(ne,te)[row]).mask("00.0")}J();var e=0;switch(t){case"internacao":e=1;break;case"prescMedica":e=2;break;case"prescEnfermagem":e=3;break;case"sinaisVitais":e=4;break;case"anotacoes":e=5;break;case"paciente":default:e=0}$(".content").tabs("option","active",e);var o=0;$(document).keydown(function(t){if($(".action_button:visible").length)var e=$.merge($("#prontuario li.ui-state-default:visible a"),$(".action_button:visible"));else var e=$("#prontuario li.ui-state-default:visible a");0!=e.length&&(40==t.which?(o>=e.length-1?o=0:o++,$(e[o]).focus(),$("<span>"+o+"</span><br>").appendTo("#testWelly")):38==t.which?(o>0?o--:o=e.length-1,$(e[o]).focus(),$("<span>"+o+"</span><br>").appendTo("#testWelly")):13==t.which&&($("<span>"+o+"</span><br>").appendTo("#testWelly"),-1!=o&&($(e[o]).click(),showing=!1)))})}function J(){for($(gt).text(Y),$(bt).text(Z),$(ht).text(tt),$(_t).text(et),$(Et).text(ot),$(kt).text(at),$(Pt).text(rt),$(St).text(it),$(Dt).text(nt),$(At).text($t),$(Rt).text(st),$(yt).text(ct),$(It).text(lt),$(Ht).text(wt),$(Lt).text(xt),$(Ot).text(mt),$(qt).prop("disabled",Xt),pt?($(Mt).text(Wt),$(Tt).text(Vt),$(qt).val(dt),$(qt).show()):($(Mt).text(Vt),$(Tt).text(Wt),$(qt).hide()),row=0;row<Qt.length;row++)$($(jt,zt)[row]).text(Qt[row].data),$($(Bt,zt)[row]).text(Qt[row].medicacao),$($(Ft,zt)[row]).text(Qt[row].via),$($(Gt,zt)[row]).text(Qt[row].posologia),$($(Jt,zt)[row]).text(Qt[row].horario),Qt[row].relatorio?$($(Kt,zt)[row]).text("(x)"):$($(Kt,zt)[row]).text("( )");for(row=0;row<$e.length;row++){var t=$e[row].disabled;$($(ee,te)[row]).text($e[row].data),$($(oe,te)[row]).val($e[row].pa),$($(ae,te)[row]).val($e[row].fc),$($(re,te)[row]).val($e[row].fr),$($(ie,te)[row]).val($e[row].sat),$($(ne,te)[row]).val($e[row].temp),$($(oe,te)[row]).prop("disabled",t),$($(ae,te)[row]).prop("disabled",t),$($(re,te)[row]).prop("disabled",t),$($(ie,te)[row]).prop("disabled",t),$($(ne,te)[row]).prop("disabled",t)}$($(le,ce)[0]).val(fe),$($(de,ce)[0]).val(ue)}function K(){for(Y=$(gt).text(),Z=$(bt).text(),tt=$(ht).text(),et=$(_t).text(),ot=$(Et).text(),at=$(kt).text(),rt=$(Pt).text(),it=$(St).text(),nt=$(Dt).text(),$t=$(At).text(),st=$(Rt).text(),ct=$(yt).text(),lt=$(It).text(),wt=$(Ht).text(),xt=$(Lt).text(),mt=$(Ot).text(),row=0;row<Qt.length;row++)Qt[row].data=$($(jt,zt)[row]).text(),Qt[row].medicacao=$($(Bt,zt)[row]).text(),Qt[row].via=$($(Ft,zt)[row]).text(),Qt[row].posologia=$($(Gt,zt)[row]).text(),Qt[row].horario=$($(Jt,zt)[row]).text();for(row=0;row<$e.length;row++){$e[row].disabled;$e[row].data=$($(ee,te)[row]).text(),$e[row].pa=$($(oe,te)[row]).val(),$e[row].fc=$($(ae,te)[row]).val(),$e[row].fr=$($(re,te)[row]).val(),$e[row].sat=$($(ie,te)[row]).val(),$e[row].temp=$($(ne,te)[row]).val()}fe=$($(le,ce)[0]).val(),ue=$($(de,ce)[0]).val()}function Q(){K(),$(vt).hide()}function U(){var t;if(!Xt){if(ut!=pt)return!1;if(pt&&!ft.test(dt))return!1}for(t=0;t<Qt.length;t++)if(!Qt[t].disabled&&!Qt[t].relatorio)return!1;for(t=0;t<$e.length;t++)if(!$e[t].disabled){if(pa=$($(oe,te)[t]).val(),fc=$($(ae,te)[t]).val(),fr=$($(re,te)[t]).val(),sat=$($(ie,te)[t]).val(),temp=$($(ne,te)[t]).val(),!se[t].pa.test(pa))return!1;if(!se[t].fc.test(fc))return!1;if(!se[t].fr.test(fr))return!1;if(!se[t].sat.test(sat))return!1;if(!se[t].temp.test(temp))return!1}return!0}var Y,Z,tt,et,ot,at,rt,it,nt,$t,st,ct,lt,dt,ft,pt,ut,wt,xt,mt,vt="#prontuario",gt="#pront_nome",bt="#pront_data_nascimento",ht="#pront_idade",_t="#pront_sexo",Et="#pront_estado_civil",kt="#pront_profissao",Pt="#pront_nome_pai",St="#pront_nome_mae",Dt="#pront_data_internacao",At="#pront_numero_leito",Rt="#pront_antecedentes",yt="#pront_hipotese_diagnostica",It="#pront_observacoes",Mt="#pront_alergia_spanSim",Nt="#pront_alergia_divSim",qt="#pront_alergia_qual",Ct="#pront_alergia_divNao",Tt="#pront_alergia_spanNao",Vt="   ",Wt="X",Xt=!1,Ht="#pront_peso",Lt="#pront_altura",Ot="#pront_circunferencia_abdominal",zt="#prescMedica_tbody",jt=".data",Bt=".medicacao",Ft=".via",Gt=".posologia",Jt=".horario",Kt=".relatorio",Qt=[{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1}],Ut=[{relatorio:""},{relatorio:""}],Yt={vazio:!1,decubito:!1,verificar_glicemia:!1,levantar_grade:!1,encaminhar_paciente_cc:!1,check_list_cirurgia:!1,placa_neutra:!1,risco_infeccao:!1,troca_curativo:!1,nutricao_desequilibrada:!1,manutencao_sonda_nasogastrica:!1,desiquilibrio_eletrolitico:!1,desiquilibrio_eletrolitico_fase9:!1},Zt="#prescEnfermagem_tbody",te="#ssvv_tbody",ee=".data",oe=".pa",ae=".fc",re=".fr",ie=".sat",ne=".temp",$e=[{disabled:!1,data:"",pa:"",fc:"",fr:"",sat:"",temp:""},{disabled:!1,data:"",pa:"",fc:"",fr:"",sat:"",temp:""}],se=[{data:"",pa:"",fc:"",fr:"",sat:"",temp:""},{data:"",pa:"",fc:"",fr:"",sat:"",temp:""}],ce="#anotacaoEnfermagem_tbody",le=".data",de=".anotacao",fe="",pe="",ue="",we="";return window.Prontuario={open:G,close:Q,isDataValid:U},{init:F,open:G,close:Q,isDataValid:U,updateDate:J,getNome:e,getDataNascimento:o,getIdade:a,getSexo:r,getEstadoCivil:i,getProfissao:n,getPai:s,getMae:c,getDataInternacao:l,getLeito:d,getAntecedentes:f,getHipotese:p,getObservacoes:u,getPeso:w,getAltura:x,getCircunferenciaAbdominal:m,setNome:g,setDataNascimento:b,setIdade:h,setAlergiaMedicamentosa:M,setDisableAlergiaMedicamentosa:N,setSexo:_,setEstadoCivil:E,setProfissao:k,setPai:P,setMae:S,setDataInternacao:D,setLeito:A,setAntecedentes:R,setHipotese:y,setObservacoes:I,setPeso:q,setAltura:C,setCircunferenciaAbdominal:T,clearPrescEnfermagemState:j,getPrescEnfermagemState:v,setPrescEnfermagemState:B,addToRelatorio:H,setSsvvRowData:V,setSsvvRowRegExp:W,setAnotacaoEnfermagemRowData:X,setAnotacaoEnfermagemRowRegExp:L,setPrescMedicaRowData:O,setPrescMedicaRowRegExp:z}});