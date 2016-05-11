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

define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData","EquipoGotejamento"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p){function M(){u.changeScene(6),u.flag("scoreIrCentroCirurgicoHoraErrada")==0&&(u.flag("scoreIrCentroCirurgicoHoraErrada",!0),u.registerScoreItem(h.irCentroCirurgicoHoraErrada))}function _(){u.changeScene(7),u.flag("scoreIrAlaFemininaHoraErrada")==0&&(u.flag("scoreIrAlaFemininaHoraErrada",!0),u.registerScoreItem(h.irAlaFemininaHoraErrada))}function D(){u.changeScene(1)}function P(){u.openDialog(0)}function H(){u.flag("ler_prontuario")==1&&(u.changeScene(4),u.openDialog(0))}function B(){u.flag("conferirDieta")==1&&u.changeScene(5)}function j(){u.changeScene(2)}var d=require("DialogsData").fase6,v=require("DialogsData").alertas,h=h.level6,m=require("Player"),g=new r("Level 7");g.setMaxPoints(h._sum);var y,b,w,E,S,x,T,N,C,k,L,A,O,E=a.scenes.centroCirurgico.getClone().onLoad(function(){});E.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)}).setVisibility(!0)]);var w=a.scenes.alaFeminina.getClone().setCssClass("scene-bedroom-level5").onLoad(function(){});w.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaFeminina_corredor").onClick(function(){u.changeScene(1)})]);var y=a.scenes.recepcao.getClone().onLoad(function(){u.openDialog(0)});y.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(P),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(D).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(D).setVisibility(!0)]),y.registerDialogs([(new i(a.characters.recepcionista)).setText(d.recepcao[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(d.recepcao[1]).registerOption("",function(){u.closeDialog()})]),b=a.scenes.corredor.getClone().onLoad(function(){m.stopAll(),m.play(m.audios.sfx.abrirPorta),m.playInLoop(m.audios.loops.recepcao),u.flag("conversar_mentor")==0&&(u.flag("conversar_mentor",!0),u.openDialog(0))}).onUnload(function(){m.stopAll(),m.play(m.audios.sfx.abrirPorta),m.playInRange(m.audios.musics.inGame)}),b.registerDialogs([(new i(a.characters.mentor)).setText(d.corredor[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText("").registerOption(d.corredor[1],function(){u.openDialog(2)}).registerOption(d.corredor[2],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(d.corredor[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.corredor[4]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(v.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),b.registerInteractiveObjects([(new s("io-ir_centro_cirurgico","Ir ao Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(M).setVisibility(!0),(new s("io-ir_farmacia","Ir à Farmacia")).setCssClass("intObj-goToFarmacia").onClick(H).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir ao Posto de Enfermagem")).setCssClass("intObj-goToPostoEnfermagem").onClick(B).setVisibility(!0),(new s("io-ir_ala_feminina","Ir à Enfermaria Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(_).setVisibility(!0),(new s("io-ir_alaMasculina","Ir à Enfermaria Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(j).setVisibility(!0),(new s("io-conversar_mentor","Conversar com Mentor")).setCssClass("intObj-talkToMentor").onClick(function(){u.closeCommandBar(),u.flag("ir_AlaMasculina_primeiraVez")==0&&u.openDialog(0)}).setVisibility(!0)]);var F=a.scenes.alaMasculina.getClone().setCssClass("scene-bedroom-level6").onLoad(function(){u.setInteractiveObjectVisible("io-conversar_com_paciente",!1),u.flag("pegou_tudo_postoEnfermagem")==1?u.setInteractiveObjectVisible("io-conversar_com_paciente",!0):u.flag("ler_prontuario")!=1&&(u.flag("conversar_paciente",!0),u.openDialog(0))});F.registerDialogs([(new i(a.characters.jogador)).setText(d.alaMasculina[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.josivaldo)).setText(d.alaMasculina[1]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.jogador)).setText("").registerOption(d.alaMasculina[2],function(){u.flag("ler_prontuario",!0),u.closeDialog()}).registerOption(d.alaMasculina[3],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(d.alaMasculina[4]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()})]),F.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){u.changeScene(1)}),(new s("io-conversar_com_paciente","Ir ao leito")).setCssClass("intObj-ir_leito_fase3").onClick(function(){u.flag("ir_leito_paciente")==0&&(u.flag("ir_leito_paciente",!0),u.registerScoreItem(h.irAoLeitoCorreto),u.changeScene(3))}).setVisibility(!0)]),F.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){l.open("prescMedica"),u.openModalScene("Prontuario")}).setVisibility(!0)]);var N=a.scenes.farmacia.getClone().onLoad(function(){});N.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(d.farmacia[0],function(){u.openDialog(1)}).registerOption(d.farmacia[1],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.paulo)).setText(d.farmacia[2]).registerOption("",function(){u.closeDialog(),u.setInteractiveObjectVisible("io-frasco_de_dieta",!0),u.openCommandBar()}),(new i(a.characters.mentor)).setText(d.farmacia[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.farmacia[4]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.mentor)).setText(v.esqueceu.pegarDieta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.esqueceu.conferirDieta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.perdido.farmacia).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.farmacia[5]).registerOption("",function(){u.closeDialog()})]),N.registerInteractiveObjects([(new s("io-frasco_de_dieta","Pegar frasco de dieta")).setCssClass("intObj-frasco_de_dieta").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegarDieta")==0&&(u.flag("pegarDieta",!0),u.registerScoreItem(h.pegarDieta)),u.setInteractiveObjectVisible("io-frasco_de_dieta",!1)}).setVisibility(!1)]),N.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.flag("pegarDieta")==0&&u.openDialog(4),u.flag("pegarDieta")==1&&u.flag("conferirDieta")==0&&u.openDialog(5),u.flag("pegarDieta")==1&&u.flag("conferirDieta")==1&&u.changeScene(1)}),(new n("btn-conferirMedicamento","Conferir Dieta Prescrita")).setCssClass("action-frasco_dieta").onClick(function(){u.flag("pegarDieta")==0?u.openDialog(7):(u.flag("conferirDieta")==0&&(u.flag("conferirDieta",!0),u.registerScoreItem(h.conferirDieta)),u.openModalScene("conferirFrascoDieta"))})]);var T=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){});T.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(d.postoEnfermagem[0],function(){u.closeDialog(),u.registerScoreItem(h.calcularInfusaoDieta)}).registerOption(d.postoEnfermagem[1],function(){u.openDialog(2)}).registerOption(d.postoEnfermagem[2],function(){u.openDialog(2)}).setRandomize(!0),(new i(a.characters.mentor)).setText(v.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.postoEnfermagem[3]).registerOption("",function(){u.openDialog(0)})]),T.registerInteractiveObjects([(new s("io-abrir_gaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){m.play(m.audios.sfx.abrirGaveta),u.flag("pegar_bandeja")==0?u.openDialog(1):(u.openModalScene("gaveta"),u.openCommandBar())}).setVisibility(!0),(new s("io-pegar_bandeja","Pegar Bandeja")).setCssClass("intObj-bandeja").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_bandeja",!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!0)]),T.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.flag("pegou_tudo_postoEnfermagem")!=0&&u.changeScene(1)}),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){m.play(m.audios.sfx.lavarMaos),u.flag("score_lavarMaos1")==0&&u.registerScoreItem(h.lavarMaos1),u.flag("score_lavarMaos1",!0)}).setVisibility(!0),(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){l.open(),u.openModalScene("Prontuario")}).setVisibility(!0)]);var x=a.scenes.leitos.josivaldo.getClone().onLoad(function(){u.openDialog(0),u.flag("score_falarComPaciente")==0&&(u.flag("score_falarComPaciente",!0),u.registerScoreItem(h.falarComPaciente))});x.registerDialogs([(new i(a.characters.jogador)).setText(d.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.josivaldo)).setText(d.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(d.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.josivaldo)).setText(d.leitoPaciente[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(d.leitoPaciente[4]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.josivaldo)).setText(d.leitoPaciente[5]).registerOption("",function(){u.closeDialog()})]),x.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_07-checar_pulseira").onClick(function(){u.openModalScene("Pulseira"),f.open(),u.openCommandBar()}).setVisibility(!0),(new s("io-conversar_paciente07","Falar com o paciente")).setCssClass("intObj-conversar_paciente").onClick(function(){}).setVisibility(!0)]),x.registerActions([(new n("btn-pegar_suporte_soro","Pegar Suporte de Soro")).setCssClass("action-pegar_suporte_soro").onClick(function(){u.flag("score_pegar_suporte_soro")==0&&u.registerScoreItem(h.pegarSuporteSoro),u.flag("score_pegar_suporte_soro",!0)}).setVisibility(!0),(new n("btn-elevar_cama","Elevar Cabeceira da Cama em 90º")).setCssClass("action-elevar_cama").onClick(function(){u.flag("score_elevar_cama")==0&&u.registerScoreItem(h.elevarCama),u.flag("score_elevar_cama",!0)}).setVisibility(!0),(new n("btn-verificar_sonda","Verificar Local da Sonda")).setCssClass("action-verificar-sonda").onClick(function(){u.flag("score_verificar_sonda")==0&&u.registerScoreItem(h.verificarSonda),u.flag("score_verificar_sonda",!0)}).setVisibility(!0),(new n("btn-administrar_dieta","Administrar Dieta")).setCssClass("action-frasco_dieta").onClick(function(){u.flag("score_administrar_dieta")==0&&u.registerScoreItem(h.administrarDieta),u.flag("score_administrar_dieta",!0)}).setVisibility(!0),(new n("btn-colocar_gotejamento","Colocar Gotejamento")).setCssClass("action-colocar_gotejamento").onClick(function(){u.flag("score_colocar_gotejamento")==0&&u.registerScoreItem(h.colocarGotejamento),u.flag("score_colocar_gotejamento",!0),p.open(),u.openModalScene("equipoSoro")}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){m.play(m.audios.sfx.lavarMaos),u.flag("score_lavarMaos2")==0&&u.registerScoreItem(h.lavarMaos2),u.flag("score_lavarMaos2",!0)}).setVisibility(!0),(new n("btn-anotar_prontuario","Anotar prontuario")).setCssClass("action-anotar_prontuario").onClick(function(){u.flag("score_lavarMaos2")!=0&&(l.open(),u.openModalScene("Prontuario"),u.flag("score_anotar_prontuario")==0&&(u.registerScoreItem(h.anotarNoProntuario),u.flag("score_anotar_prontuario",!0)))}).setVisibility(!0)]),k=new t("Pulseira","Pulseira"),k.registerInteractiveObjects([]),k.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){u.closeModalScene("Pulseira"),u.flag("score_verificar_pulseira")==0&&(u.registerScoreItem(h.verificarPulseira),u.flag("score_verificar_pulseira",!0)),f.close()}).setVisibility(!0)]),L=new t("Prontuario","Prontuario"),L.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){u.flag("pegarDieta")==0?u.openDialog(2):(l.close(),u.flag("score_colocar_gotejamento")==1&&(u.unlockLevel(7),u.closeCommandBar(),u.showEndOfLevel(),m.stopAll(),m.play(m.audios.sfx.missaoCumprida))),l.close(),u.closeModalScene("Prontuario")}).setVisibility(!0)]),C=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),C.registerActions([(new n("btn-fechar_gaveta","Fechar gaveta")).setCssClass("action-fecharGaveta").onClick(function(){m.play(m.audios.sfx.fecharGaveta),u.closeModalScene("Gaveta"),u.flag("pegar_copo_descartavel")==1&&u.flag("pegar_agua_potavel")==1&&u.flag("pegar_seringa")==1&&u.flag("pegar_equipoCorreto")==1&&(u.openDialog(0),u.flag("pegou_tudo_postoEnfermagem",!0))}).setVisibility(!0)]),C.registerInteractiveObjects([(new s("io-copo_descartavel","Copo Descartável")).setCssClass("intObj-copoDescartavel").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_copo_descartavel",!0),u.setInteractiveObjectVisible("io-copo_descartavel",!1),u.registerScoreItem(h.pegarCopoDescartavel)}).setVisibility(!0),(new s("io-agua_potavel","Água Potável")).setCssClass("intObj-aguaPotavel").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_agua_potavel",!0),u.setInteractiveObjectVisible("io-agua_potavel",!1),u.registerScoreItem(h.pegarAguaPotavel)}).setVisibility(!0),(new s("io-seringa","Seringa")).setCssClass("intObj-seringa_de_10_ml").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_seringa",!0),u.setInteractiveObjectVisible("io-seringa",!1),u.registerScoreItem(h.pegarSeringa)}).setVisibility(!0),(new s("io-infusao","Equipamento de infusão de dieta")).setCssClass("intObj-equipo_de_infusao_de_dieta").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_equipoCorreto",!0),u.setInteractiveObjectVisible("io-infusao",!1),u.registerScoreItem(h.pegarEquipoCorreto)}).setVisibility(!0),(new s("io-equipoErrado","Equipamento ??????????????????")).setCssClass("equipo").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_equipoErrado",!0),u.setInteractiveObjectVisible("io-equipoErrado",!1),u.registerScoreItem(h.pegarEquipoErrado)}).setVisibility(!0)]),O=(new t("conferirFrascoDieta","Conferir Frasco de Dieta")).setCssClass("modalScene-frascoDieta"),O.registerActions([(new n("btn-fechar_zoom","Finalizar conferição")).setCssClass("action-frasco_dieta").onClick(function(){u.closeModalScene("conferirFrascoDieta"),u.openDialog(2)})]),equipoSoro=new t("equipoSoro","EquipamentoSoro"),equipoSoro.registerActions([(new n("btn-fecharEquipoSoro","Fechar Equipamento de Soro")).setCssClass("action-fecharEquipoSoro").onClick(function(){p.close(),u.closeModalScene("equipoSoro")}).setVisibility(!0)]),g.registerModalScene(L),g.registerModalScene(C),g.registerModalScene(k),g.registerModalScene(O),g.registerModalScene(equipoSoro),g.registerScene(y),g.registerScene(b),g.registerScene(F),g.registerScene(x),g.registerScene(N),g.registerScene(T),g.registerScene(E),g.registerScene(w),g.setSetupScript(function(){l.setNome("Josivaldo Silva"),l.setSexo("M"),l.setEstadoCivil("Solteiro"),l.setDataNascimento("02/02/1961"),l.setIdade("54 anos"),l.setProfissao("Pedreiro"),l.setPai("Josué Souza Silva"),l.setMae("Maria das Graças Costa Silva"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("15/05/2015"),l.setLeito("03 - Enfermaria Masculina"),l.setAntecedentes(""),l.setHipotese("Câncer de esôfago"),l.setObservacoes("Diagnóstico identificado de Câncer (CA) de Esôfago há um ano atrás, encontra-se em cuidados paliativos."),l.setPeso("48"),l.setAltura("1,60"),l.setCircunferenciaAbdominal("70"),l.setPrescMedicaRowData(0,"","Nutrição Enteral (Hipercalórica  0,99 cal/ml)","Sonda Nasogástrica","200 ml/01 hora","06h/06h",!1,!0),l.setPrescMedicaRowData(1,"","Morfina (solução oral/gota)","Oral","40mg/ml","12/12h",!0,!0),l.setPrescMedicaRowData(2,"","","","","",!1,!0),l.setPrescMedicaRowData(3,"","","","","",!1,!0),l.clearPrescEnfermagemState(),l.setPrescEnfermagemState("nutricao_desequilibrada"),l.setPrescEnfermagemState("manutencao_sonda_nasogastrica"),l.setPrescEnfermagemState("desiquilibrio_eletrolitico"),l.setSsvvRowData(0,"","100X10","65","16","93","36.5",!0),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("",""),f.setNameRegExp(/Josivaldo Silva/),f.setLeitoRegExp(/0*3/),f.setDataRegExp(/02\/02\/1961/),f.setName("Josivaldo Silva"),f.setLeito("03"),f.setData("02/02/1961"),f.disable()}),g.registerFlag(new o("conversar_mentor",!1)),g.registerFlag(new o("conversar_paciente",!1)),g.registerFlag(new o("score_ir_postoEnfermagem_horaErrada",!1)),g.registerFlag(new o("scoreIrFarmaciaHoraErrada",!1)),g.registerFlag(new o("scoreIrAlaFemininaHoraErrada",!1)),g.registerFlag(new o("scoreIrCentroCirurgicoHoraErrada",!1)),g.registerFlag(new o("ir_AlaMasculina_primeiraVez",!1)),g.registerFlag(new o("ler_prontuario",!1)),g.registerFlag(new o("pegarDieta",!1)),g.registerFlag(new o("pegar_seringa",!1)),g.registerFlag(new o("conferirDieta",!1)),g.registerFlag(new o("lavarMaos",!1)),g.registerFlag(new o("pegar_bandeja",!1)),g.registerFlag(new o("pegou_tudo_posto_enfermagem",!1)),g.registerFlag(new o("score_lavarMaos1",!1)),g.registerFlag(new o("score_lavarMaos2",!1)),g.registerFlag(new o("pegar_copo_descartavel",!1)),g.registerFlag(new o("pegar_agua_potavel",!1)),g.registerFlag(new o("pegar_equipoCorreto",!1)),g.registerFlag(new o("pegar_equipoErrado",!1)),g.registerFlag(new o("pegou_tudo_postoEnfermagem",!1)),g.registerFlag(new o("ir_leito_paciente",!1)),g.registerFlag(new o("score_verificar_pulseira",!1)),g.registerFlag(new o("score_falarComPaciente",!1)),g.registerFlag(new o("score_pegar_suporte_soro",!1)),g.registerFlag(new o("score_elevar_cama",!1)),g.registerFlag(new o("score_verificar_sonda",!1)),g.registerFlag(new o("score_administrar_dieta",!1)),g.registerFlag(new o("score_colocar_gotejamento",!1)),g.registerFlag(new o("score_anotar_prontuario",!1)),g.setInitialScene(0),e.registerLevel(g,7)});