define(["Stage","CuidandoBem"],function(e,t){function r(){$(".menuButton").click(function(){n.play(n.audios.sfx.selecionarMenu)}),$(".backButton").click(function(){e.changeScreen(0)}),t.init()}function i(){}var n=require("Player");return{load:r,unload:i}});