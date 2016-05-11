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

define(["text!../html/prontuario/prontuario.html"],function(e){function Tt(){return r}function Nt(){return s}function Ct(){return u}function kt(){return f}function Lt(){return c}function At(){return p}function Ot(){return v}function Mt(){return y}function _t(){return w}function Dt(){return S}function Pt(){return T}function Ht(){return C}function Bt(){return L}function jt(){return U}function Ft(){return W}function It(){return V}function qt(){return prescEnfermagemState}function Rt(e){r=e,$(n).text(r)}function Ut(e){s=e,$(i).text(s)}function zt(e){u=e,$(o).text(u)}function Wt(e){f=e,$(a).text(f)}function Xt(e){c=e,$(l).text(c)}function Vt(e){p=e,$(h).text(p)}function $t(e){v=e,$(d).text(v)}function Jt(e){y=e,$(g).text(y)}function Kt(e){w=e,$(b).text(w)}function Qt(e){S=e,$(E).text(S)}function Gt(e){T=e,$(x).text(T)}function Yt(e){C=e,$(N).text(C)}function Zt(e){L=e,$(k).text(L)}function en(e,t){B=e,e?($(A).text(I),$(H).text(F),_=t,$(M).val(t),$(M).show()):($(A).text(F),$(H).text(I),$(M).hide())}function tn(e,t){D=t,j=e}function nn(e){q=e,$(M).prop("disabled",q)}function rn(e){U=e,$(R).text(U)}function sn(e){W=e,$(z).text(W)}function on(e){V=e,$(X).text(V)}function un(e,t,n,r,i,s,o,u){u=u||!1;if(e<0||e>vt.length)throw new Error("Invalid row index");vt[e].disabled=u,vt[e].data=t,vt[e].pa=n,vt[e].fc=r,vt[e].fr=i,vt[e].sat=s,vt[e].temp=o,$($(ft,at)[e]).text(t),$($(lt,at)[e]).val(n),$($(ct,at)[e]).val(r),$($(ht,at)[e]).val(i),$($(pt,at)[e]).val(s),$($(dt,at)[e]).val(o),$($(lt,at)[e]).prop("disabled",u),$($(ct,at)[e]).prop("disabled",u),$($(ht,at)[e]).prop("disabled",u),$($(pt,at)[e]).prop("disabled",u),$($(dt,at)[e]).prop("disabled",u)}function an(e,t,n,r,i,s,o){if(e<0||e>vt.length)throw new Error("Invalid row index");mt[e].pa=n,mt[e].fc=r,mt[e].fr=i,mt[e].sat=s,mt[e].temp=o}function fn(e,t){wt=e,St=t,$($(yt,gt)[0]).val(e),$($(bt,gt)[0]).text(t)}function ln(e){var t=$($(bt,gt)[0]).text();$($(bt,gt)[0]).text(t+e)}function cn(e,t){Et=e,xt=t}function hn(e,t,n,r,i,s,o,u){if(e<0||e>nt.length)throw new Error("Invalid row index");nt[e].disabled=u,nt[e].data=t,nt[e].medicacao=n,nt[e].via=r,nt[e].posologia=i,nt[e].horario=s,nt[e].relatorio=o,$($(Q,J)[e]).text(t),$($(G,J)[e]).text(n),$($(Y,J)[e]).text(r),$($(Z,J)[e]).text(i),$($(et,J)[e]).text(s),nt[e].relatorio?$($(tt,J)[e]).text("(x)"):$($(tt,J)[e]).text("( )")}function pn(e,t){if(e<0||e>nt.length)throw new Error("Invalid row index");rt[e]=t}function dn(){$("tr",st).hide()}function vn(e){$.each(it,function(t,n){t==e?it[t]=!0:it[t]=!1}),$.each(it,function(e,t){t&&(prescEnfermagemState=e)}),$("."+prescEnfermagemState,st).show()}function mn(t){$(t).append(e),$(O).click(function(){q||(B=!0,$(A).text("X"),$(H).text("   "),$(M).show())}),$(P).click(function(){q||(B=!1,$(H).text("X"),$(A).text("   "),$(M).hide())}),$(tt,J).click(function(){var e=$(tt,J).index(this);nt[e].relatorio.disabled||(nt[e].relatorio=!nt[e].relatorio,nt[e].relatorio?$(this).text("(x)"):$(this).text("( )"))}),$(".content").tabs()}function gn(e){$(t).show();for(row=0;row<vt.length;row++){var n=vt[row].disabled;$($(lt,at)[row]).mask("000x000"),$($(ct,at)[row]).mask("000"),$($(ht,at)[row]).mask("000"),$($(pt,at)[row]).mask("00"),$($(dt,at)[row]).mask("00.0")}yn();var r=0;switch(e){case"internacao":r=1;break;case"prescMedica":r=2;break;case"prescEnfermagem":r=3;break;case"sinaisVitais":r=4;break;case"anotacoes":r=5;break;case"paciente":default:r=0}$(".content").tabs("option","active",r)}function yn(){$(n).text(r),$(i).text(s),$(o).text(u),$(a).text(f),$(l).text(c),$(h).text(p),$(d).text(v),$(g).text(y),$(b).text(w),$(E).text(S),$(x).text(T),$(N).text(C),$(k).text(L),$(R).text(U),$(z).text(W),$(X).text(V),$(M).prop("disabled",q),B?($(A).text(I),$(H).text(F),$(M).val(_),$(M).show()):($(A).text(F),$(H).text(I),$(M).hide());for(row=0;row<nt.length;row++)$($(Q,J)[row]).text(nt[row].data),$($(G,J)[row]).text(nt[row].medicacao),$($(Y,J)[row]).text(nt[row].via),$($(Z,J)[row]).text(nt[row].posologia),$($(et,J)[row]).text(nt[row].horario),nt[row].relatorio?$($(tt,J)[row]).text("(x)"):$($(tt,J)[row]).text("( )");for(row=0;row<vt.length;row++){var e=vt[row].disabled;$($(ft,at)[row]).text(vt[row].data),$($(lt,at)[row]).val(vt[row].pa),$($(ct,at)[row]).val(vt[row].fc),$($(ht,at)[row]).val(vt[row].fr),$($(pt,at)[row]).val(vt[row].sat),$($(dt,at)[row]).val(vt[row].temp),$($(lt,at)[row]).prop("disabled",e),$($(ct,at)[row]).prop("disabled",e),$($(ht,at)[row]).prop("disabled",e),$($(pt,at)[row]).prop("disabled",e),$($(dt,at)[row]).prop("disabled",e)}$($(yt,gt)[0]).val(wt),$($(bt,gt)[0]).val(St)}function bn(){r=$(n).text(),s=$(i).text(),u=$(o).text(),f=$(a).text(),c=$(l).text(),p=$(h).text(),v=$(d).text(),y=$(g).text(),w=$(b).text(),S=$(E).text(),T=$(x).text(),C=$(N).text(),L=$(k).text(),U=$(R).text(),W=$(z).text(),V=$(X).text();for(row=0;row<nt.length;row++)nt[row].data=$($(Q,J)[row]).text(),nt[row].medicacao=$($(G,J)[row]).text(),nt[row].via=$($(Y,J)[row]).text(),nt[row].posologia=$($(Z,J)[row]).text(),nt[row].horario=$($(et,J)[row]).text();for(row=0;row<vt.length;row++){var e=vt[row].disabled;vt[row].data=$($(ft,at)[row]).text(),vt[row].pa=$($(lt,at)[row]).val(),vt[row].fc=$($(ct,at)[row]).val(),vt[row].fr=$($(ht,at)[row]).val(),vt[row].sat=$($(pt,at)[row]).val(),vt[row].temp=$($(dt,at)[row]).val()}wt=$($(yt,gt)[0]).val(),St=$($(bt,gt)[0]).val()}function wn(){bn(),$(t).hide()}function En(){var e;if(!q){if(j!=B)return!1;if(B&&!D.test(_))return!1}for(e=0;e<nt.length;e++)if(!nt[e].disabled&&!nt[e].relatorio)return!1;for(e=0;e<vt.length;e++)if(!vt[e].disabled){pa=$($(lt,at)[e]).val(),fc=$($(ct,at)[e]).val(),fr=$($(ht,at)[e]).val(),sat=$($(pt,at)[e]).val(),temp=$($(dt,at)[e]).val();if(!mt[e].pa.test(pa))return!1;if(!mt[e].fc.test(fc))return!1;if(!mt[e].fr.test(fr))return!1;if(!mt[e].sat.test(sat))return!1;if(!mt[e].temp.test(temp))return!1}return!0}var t="#prontuario",n="#pront_nome",r,i="#pront_data_nascimento",s,o="#pront_idade",u,a="#pront_sexo",f,l="#pront_estado_civil",c,h="#pront_profissao",p,d="#pront_nome_pai",v,m,g="#pront_nome_mae",y,b="#pront_data_internacao",w,E="#pront_numero_leito",S,x="#pront_antecedentes",T,N="#pront_hipotese_diagnostica",C,k="#pront_observacoes",L,A="#pront_alergia_spanSim",O="#pront_alergia_divSim",M="#pront_alergia_qual",_,D,P="#pront_alergia_divNao",H="#pront_alergia_spanNao",B,j,F="   ",I="X",q=!1,R="#pront_peso",U,z="#pront_altura",W,X="#pront_circunferencia_abdominal",V,J="#prescMedica_tbody",K=".prescMedica_row",Q=".data",G=".medicacao",Y=".via",Z=".posologia",et=".horario",tt=".relatorio",nt=[{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1},{disabled:!1,data:"",medicacao:"",via:"",posologia:"",horario:"",relatorio:!1}],rt=[{relatorio:""},{relatorio:""}],it={vazio:!1,decubito:!1,verificar_glicemia:!1,levantar_grade:!1,encaminhar_paciente_cc:!1,check_list_cirurgia:!1,placa_neutra:!1,risco_infeccao:!1,troca_curativo:!1,nutricao_desequilibrada:!1,manutencao_sonda_nasogastrica:!1,desiquilibrio_eletrolitico:!1,desiquilibrio_eletrolitico_fase9:!1},st="#prescEnfermagem_tbody",ot=!1,ut="",at="#ssvv_tbody";"";var ft=".data",lt=".pa",ct=".fc",ht=".fr",pt=".sat",dt=".temp",vt=[{disabled:!1,data:"",pa:"",fc:"",fr:"",sat:"",temp:""},{disabled:!1,data:"",pa:"",fc:"",fr:"",sat:"",temp:""}],mt=[{data:"",pa:"",fc:"",fr:"",sat:"",temp:""},{data:"",pa:"",fc:"",fr:"",sat:"",temp:""}],gt="#anotacaoEnfermagem_tbody",yt=".data",bt=".anotacao",wt="",Et="",St="",xt="";return window.Prontuario={open:gn,close:wn,isDataValid:En},{init:mn,open:gn,close:wn,isDataValid:En,updateDate:yn,getNome:Tt,getDataNascimento:Nt,getIdade:Ct,getSexo:kt,getEstadoCivil:Lt,getProfissao:At,getPai:Ot,getMae:Mt,getDataInternacao:_t,getLeito:Dt,getAntecedentes:Pt,getHipotese:Ht,getObservacoes:Bt,getPeso:jt,getAltura:Ft,getCircunferenciaAbdominal:It,setNome:Rt,setDataNascimento:Ut,setIdade:zt,setAlergiaMedicamentosa:en,setDisableAlergiaMedicamentosa:nn,setSexo:Wt,setEstadoCivil:Xt,setProfissao:Vt,setPai:$t,setMae:Jt,setDataInternacao:Kt,setLeito:Qt,setAntecedentes:Gt,setHipotese:Yt,setObservacoes:Zt,setPeso:rn,setAltura:sn,setCircunferenciaAbdominal:on,clearPrescEnfermagemState:dn,getPrescEnfermagemState:qt,setPrescEnfermagemState:vn,addToRelatorio:ln,setSsvvRowData:un,setSsvvRowRegExp:an,setAnotacaoEnfermagemRowData:fn,setAnotacaoEnfermagemRowRegExp:cn,setPrescMedicaRowData:hn,setPrescMedicaRowRegExp:pn}});