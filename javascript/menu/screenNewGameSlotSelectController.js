define(["Stage"],function(e){function l(){$(o).dialog({resizable:!1,autoOpen:!1,height:200,modal:!0,draggable:!1,buttons:[{text:"Voltar","class":"dialogVoltarBtt",click:function(){$(this).dialog("close")}},{text:"Apagar","class":"dialogApagarBtt",click:function(){l=$(".slot"),$(this).dialog("close"),n.reset(i),$(l[i]).removeClass("filled"),$(l[i]).addClass("empty"),r[i]=n.loadSlot(i);var e=r[i];s=e.empty,$(l[i]).text(e.name),c()}}]}),$(o).dialog().dialog("widget").find(".ui-dialog-titlebar-close").hide(),$(u).dialog({resizable:!1,autoOpen:!1,height:210,modal:!0,draggable:!1,buttons:[{text:"Voltar","class":"dialogVoltarBtt",click:function(){$(this).dialog("close"),$(a).val(f)}},{text:"Confirmar","class":"dialogConfirmarBtt",click:function(){$(this).dialog("close");var t=$(a).val();if(t===null||t===undefined||t===""||t===f)t=f+" "+(i+1);n.setupSlot(i,t),n.loadSlot(i),s=!1,c(),e.changeScreen(6)}}]}),$(u).dialog().dialog("widget").find(".ui-dialog-titlebar-close").hide();var l=$(".slot");$(l[i]).addClass("selected"),c();var h;for(h in r){var p=r[h];p.empty?$(l[h]).addClass("empty"):$(l[h]).addClass("filled"),$(l[h]).text(p.name)}$(".menuButton").click(function(){t.play(t.audios.sfx.selecionarMenu)}),$(".backButton").click(function(){e.changeScreen(0)}),$("#deleteSlot").click(function(){s||$("#dialog-confirmDelete").dialog("open")}),$("#loadSlot").click(function(){s?$(u).dialog("open"):(n.loadSlot(i),e.changeScreen(6))}),l.click(function(){var e=$(".slot");i=e.index(this),e.removeClass("selected"),$(this).addClass("selected");var t=r[i];s=t.empty,c(),n.setSelectedId(i)})}function c(){s?($("#deleteSlot").addClass("disabled"),$("#loadSlot").text("Iniciar")):($("#deleteSlot").removeClass("disabled"),$("#loadSlot").text("Carregar"))}function h(){}var t=require("Player"),n=require("Storage"),r=n.load(),i=n.getSelectedId(),s=r[i].empty,o="#dialog-confirmDelete",u="#dialog-typeName",a="#nameInput",f="";return{load:l,unload:h}});