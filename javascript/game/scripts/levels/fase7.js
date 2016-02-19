define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function g(){console.log("Funcao: recepcao_ir_corredor"),v.getFlag("conversar_recepcionista").getValue()==1?(u.closeDialog(),u.changeScene(1),console.log("Ir para o corredor")):console.log("Necessita ação: conversar com a recepcionista")}function y(){console.log("Action: Conversar com a recepcionista"),u.openDialog(0)}function b(){console.log("Action: corredorIrFarmaciaHoraErrada"),u.changeScene(4)}function w(){console.log("Action: corredorIrPostoEnfermagem"),v.getFlag("ir_postoEnfermagem_horaErrada").getValue()==0?(u.registerScoreItem(h.irPostoEnfermagemHoraErrada),v.getFlag("ir_postoEnfermagem_horaErrada").setValue(!0),u.changeScene(5)):u.changeScene(5)}function E(){console.log("Action: corredorIrAlaFeminina"),u.changeScene(2)}function S(){console.log("Action: corredorIrCentroCirurgicoHoraErrada"),v.getFlag("ir_centroCirurgico_horaErrada").getValue()==0?(u.registerScoreItem(h.irCentroCirurgicoHoraErrada),v.getFlag("ir_centroCirurgico_horaErrada").setValue(!0),u.changeScene(7)):u.changeScene(7)}function x(){console.log("Action: corredorIrAlaMasculinaHoraErrada"),v.getFlag("ir_AlaMasculina_horaErrada").getValue()==0?(u.registerScoreItem(h.irAlaMasculinaHoraErrada),v.getFlag("ir_AlaMasculina_horaErrada").setValue(!0),u.changeScene(6)):u.changeScene(6)}function O(){console.log("Action: centroCirurgicoIrCorredor"),u.changeScene(1)}var p=require("DialogsData").fase7,d=require("DialogsData").alertas,v=new r("Level 7");console.groupCollapsed(v.getName());var m=a.scenes.recepcao.getClone().onLoad(function(){console.log("Load scene: "+m.getName()),v.getFlag("conversar_recepcionista").setValue(!0),u.openDialog(0)});m.registerDialogs([(new i(a.characters.jogador)).setText(p.recepcao[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.recepcionista)).setText(p.recepcao[1]).registerOption("",function(){u.closeDialog()})]),m.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(y),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left").onClick(g).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right").onClick(g).setVisibility(!0)]),corredor=a.scenes.corredor.getClone().onLoad(function(){console.log("Entrando no corredor")}).onUnload(function(){console.log("Saindo do corredor")}),corredor.registerInteractiveObjects([(new s("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(S).setVisibility(!0),(new s("io-ir_farmacia","Ir para a Farmacia")).setCssClass("intObj-goToFarmacia").onClick(b).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToPostoEnfermagem").onClick(w).setVisibility(!0),(new s("io-ir_ala_feminina","Ir para a Ala Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(E).setVisibility(!0),(new s("io-ir_alaMasculina","Ir para a Ala Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(x).setVisibility(!0)]);var T=a.scenes.alaFeminina.getClone().onLoad(function(){v.getFlag("ir_ala_feminina_primeira_vez").setValue(!0),console.log("Load scene: "+T.getName())});T.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.enfermariaFeminina[0],function(){u.openDialog(1)}).registerOption(p.enfermariaFeminina[1],function(){u.openDialog(5)}).setRandomize(!0),(new i(a.characters.pacientes.ana)).setText(p.enfermariaFeminina[2]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.enfermariaFeminina[3]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.ana)).setText(p.enfermariaFeminina[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.enfermariaFeminina[5]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.enfermariaFeminina[6]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.mentor)).setText(d.esqueceu.conversarPaciente).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarMedicamento).registerOption("",function(){u.closeDialog()})]),T.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){v.getFlag("conversarPaciente").getValue()!=0&&(v.getFlag("ler_prontuario").getValue()==0?(v.getFlag("ler_prontuario").setValue(!0),console.log("Action: ler prontuario"),l.open(),u.openModalScene("Prontuario"),u.registerScoreItem(h.verProntuario)):(console.log("Action: ler prontuario"),l.open(),u.openModalScene("Prontuario")))}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.getFlag("lavarMaos").getValue()==0&&(v.getFlag("lavarMaos").setValue(!0),u.registerScoreItem(h.lavarMaos),v.getFlag("score_lavar_maos").setValue(!0))}).setVisibility(!0)]),T.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaFeminina_corredor").onClick(function(){v.getFlag("conversarPaciente").getValue()==0?u.openDialog(6):(console.log("voltando para corredor"),u.changeScene(1))}),(new s("io-conversar_paciente2","Ir ao leito")).setCssClass("intObj-irLeitoEsquerda").onClick(function(){v.getFlag("lavarMaos").getValue()==0?u.openDialog(7):v.getFlag("conversarPaciente").getValue()==0?(v.getFlag("conversarPaciente").setValue(!0),u.registerScoreItem(h.falarComPaciente),u.openDialog(0)):v.getFlag("pegarMedicamento").getValue()==0?u.openDialog(8):u.changeScene(3)}).setVisibility(!0)]);var N=a.scenes.farmacia.getClone().onLoad(function(){v.getFlag("ir_ala_feminina_primeira_vez").getValue()==1?(console.log("Load scene: "+N.getName()),console.log("Abrindo dialogo com farmaceutico"),u.openDialog(0)):(console.log("Hora Errada!"),v.getFlag("ir_farmacia_horaErrada").getValue()==0&&u.registerScoreItem(h.irFarmaciaHoraErrada),v.getFlag("ir_farmacia_horaErrada").setValue(!0),u.openDialog(9),u.changeScene(1))});N.registerDialogs([(new i(a.characters.jogador)).setText(p.farmacia[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.paulo)).setText(p.farmacia[1]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.jogador)).setText("").registerOption(p.farmacia[2],function(){u.openDialog(3)}).registerOption(p.farmacia[3],function(){u.openDialog(5)}).setRandomize(!0),(new i(a.characters.paulo)).setText(p.farmacia[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText("").registerOption(p.farmacia[5],function(){u.openDialog(6)}).registerOption(p.farmacia[6],function(){u.registerScoreItem(h.trocarMedicamento),u.closeDialog()}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.farmacia[7]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.mentor)).setText(p.farmacia[8]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.mentor)).setText(d.esqueceu.verificarMedicamento).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarMedicamento).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),N.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){v.getFlag("pegarMedicamento").getValue()==0?u.openDialog(8):v.getFlag("conferir_medicamento_correto").getValue()==0?u.openDialog(7):u.changeScene(1)}),(new n("btn-pegarMedicamento","Pegar Medicamento")).setCssClass("action-pegarMedicamento").onClick(function(){v.getFlag("pegarMedicamento").setValue(!0),u.registerScoreItem(h.pegarMedicamento)}),(new n("btn-conferirMedicamento","Conferir Medicamento")).setCssClass("action-conferir_medicamento").onClick(function(){v.getFlag("pegarMedicamento").getValue()!=0&&(v.getFlag("conferir_medicamento_errado").getValue()==0?(v.getFlag("conferir_medicamento_errado").setValue(!0),u.registerScoreItem(h.conferirMedicamentoErrado),u.openDialog(2)):(v.getFlag("conferir_medicamento_correto").setValue(!0),u.registerScoreItem(h.conferirMedicamentoCorreto)))})]);var C=a.scenes.leitos.ana.getClone().onLoad(function(){u.openDialog(0)});C.registerDialogs([(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.jogador)).setText("").registerOption(p.leitoPaciente[3],function(){u.openDialog(4)}).registerOption(p.leitoPaciente[4],function(){u.openDialog(7)}).setRandomize(!0),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[5]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[6]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[7]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.leitoPaciente[8]).registerOption("",function(){u.openDialog(3)})]);var k=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){v.getFlag("ir_ala_feminina_primeira_vez").getValue()==1?console.log("Load scene: "+k.getName()):(console.log("Hora Errada!"),v.getFlag("ir_postoEnfermagem_horaErrada").getValue()==0&&u.registerScoreItem(h.irFarmaciaHoraErrada),v.getFlag("ir_postoEnfermagem_horaErrada").setValue(!0),u.openDialog(2),u.changeScene(1))});k.registerDialogs([(new i(a.characters.mentor)).setText(d.esqueceu.pegarObjetosGaveta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),k.registerInteractiveObjects([(new s("io-abrirGaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){console.log("Action: abrirGaveta"),u.openModalScene("gaveta"),u.openCommandBar()}).setVisibility(!0),(new s("io-pegarBandeja","Pegar Bandeja")).setCssClass("intObj-bandeja").onClick(function(){console.log("Action: Pegar bandeja"),v.getFlag("pegarBandeja").setValue(!0),u.setInteractiveObjectVisible("io-pegarBandeja",!1)}).setVisibility(!0)]),k.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){v.getFlag("pegar_copo_descartavel").getValue()==0||v.getFlag("pegar_agua_potavel").getValue()==0?u.openDialog(0):u.changeScene(1)})]);var L=a.scenes.alaMasculina.getClone().onLoad(function(){console.log("Load scene: "+L.getName())});L.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){console.log("voltando para corredor"),u.changeScene(1)})]);var A=a.scenes.centroCirurgico.getClone().onLoad(function(){console.log("Load scene: "+A.getName())});A.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){O()})]),prontuario=new t("Prontuario","Prontuario"),prontuario.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){console.log("Action: Fechar prontuario"),l.close(),u.closeModalScene("Prontuario")}).setVisibility(!0)]),gaveta=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),gaveta.registerActions([(new n("btn-fecharGaveta","Fechar gaveta")).setCssClass("action-fecharGaveta").onClick(function(){console.log("Action: fecharGaveta"),u.closeModalScene("Gaveta")}).setVisibility(!0)]),gaveta.registerInteractiveObjects([(new s("io-copo_descartavel","Copo Descartável")).setCssClass("intObj-copoDescartavel").onClick(function(){v.getFlag("pegarBandeja").getValue()==0?u.openDialog(1):(console.log("IntObj: io-copo_descartavel"),v.getFlag("pegar_copo_descartavel").setValue(!0),u.setInteractiveObjectVisible("io-copo_descartavel",!1),v.getFlag("score_pegar_copo_descartavel").getValue()==0&&(u.registerScoreItem(h.pegarCopoDescartavel),v.getFlag("score_pegar_copo_descartavel").setValue(!0)))}).setVisibility(!0),(new s("io-agua_potavel","Água Potável")).setCssClass("intObj-aguaPotavel").onClick(function(){v.getFlag("pegarBandeja").getValue()==0?u.openDialog(1):(console.log("IntObj: io-agua_potavel"),v.getFlag("pegar_agua_potavel").setValue(!0),u.setInteractiveObjectVisible("io-agua_potavel",!1),v.getFlag("score_pegar_agua_potavel").getValue()==0&&(u.registerScoreItem(h.pegarAguaPotavel),v.getFlag("score_pegar_agua_potavel").setValue(!0)))}).setVisibility(!0)]),v.registerModalScene(prontuario),v.registerModalScene(gaveta),v.registerScene(m),v.registerScene(corredor),v.registerScene(T),v.registerScene(C),v.registerScene(N),v.registerScene(k),v.registerScene(L),v.registerScene(A),v.registerScene(prontuario),v.registerScene(gaveta),v.setSetupScript(function(){v.getFlag("conversar_recepcionista").setValue(!1),v.getFlag("conversar_mentor").setValue(!1),v.getFlag("ir_farmacia_horaErrada").setValue(!1),v.getFlag("ir_postoEnfermagem_horaErrada").setValue(!1),v.getFlag("ir_centroCirurgico_horaErrada").setValue(!1),v.getFlag("ir_AlaMasculina_horaErrada").setValue(!1),v.getFlag("ir_AlaFeminina_horaErrada").setValue(!1),v.getFlag("ir_postoEnfermagem_horaErrada").setValue(!1),v.getFlag("conversarPaciente").setValue(!1),v.getFlag("ler_prontuario").setValue(!1),v.getFlag("conferir_medicamento_errado").setValue(!1),v.getFlag("pegarMedicamento").setValue(!1),v.getFlag("conferir_medicamento_correto").setValue(!1),v.getFlag("pegar_copo_descartavel").setValue(!1),v.getFlag("pegar_agua_potavel").setValue(!1),v.getFlag("pegarBandeja").setValue(!1),v.getFlag("score_pegar_agua_potavel").setValue(!1),v.getFlag("score_pegar_copo_descartavel").setValue(!1),v.getFlag("ir_ala_feminina_primeira_vez").setValue(!1),v.getFlag("lavarMaos").setValue(!1),l.setNome("Ana Beatriz Galvão"),l.setSexo("F"),l.setEstadoCivil("Solteira"),l.setDataNascimento("19/07/1979"),l.setIdade("36 anos"),l.setProfissao("Publicitária"),l.setPai("Antônio Bueno Galvão"),l.setMae("Isabela Romeira Galvão"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("23/08/2015"),l.setLeito("03 - Enfermaria Feminina"),l.setAntecedentes("Nenhum"),l.setHipotese("Cirurgia de fratura de fêmur"),l.setObservacoes("Diabetes Mellitus II e Hipertensão Arterial Sistêmica"),l.setPeso("50"),l.setAltura("1,65"),l.setCircunferenciaAbdominal("78"),l.setPrescEnfermagemState("decubito"),l.setPrescMedicaRowData(1,"","Clorpropamida","Oral","250mg/1x/dia","07:00h","(X) Administrado  medicamento  sem intercorrências",!1),l.setSsvvRowData(1,"","120X70 mmHg","60 bpm","18 rpm","96%","35ºC",!0),l.setSsvvRowData(1,"","130X70 mmHg","68 bpm","20 rpm","96%","36,4ºC",!0),l.setAnotacaoEnfermagemRowData("15/03","")}),v.registerFlag(new o("conversar_recepcionista"),!1),v.registerFlag(new o("conversar_mentor"),!1),v.registerFlag(new o("ir_farmacia_horaErrada"),!1),v.registerFlag(new o("ir_postoEnfermagem_horaErrada"),!1),v.registerFlag(new o("ir_centroCirurgico_horaErrada"),!1),v.registerFlag(new o("ir_AlaMasculina_horaErrada"),!1),v.registerFlag(new o("ir_AlaFeminina_horaErrada"),!1),v.registerFlag(new o("ir_postoEnfermagem_horaErrada"),!1),v.registerFlag(new o("conversarPaciente"),!1),v.registerFlag(new o("ler_prontuario"),!1),v.registerFlag(new o("conferir_medicamento_errado"),!1),v.registerFlag(new o("pegarMedicamento"),!1),v.registerFlag(new o("conferir_medicamento_correto"),!1),v.registerFlag(new o("pegar_copo_descartavel"),!1),v.registerFlag(new o("pegar_agua_potavel"),!1),v.registerFlag(new o("pegarBandeja"),!1),v.registerFlag(new o("score_pegar_agua_potavel"),!1),v.registerFlag(new o("score_pegar_copo_descartavel"),!1),v.registerFlag(new o("ir_ala_feminina_primeira_vez"),!1),v.registerFlag(new o("lavarMaos"),!1),v.setInitialScene(0),e.registerLevel(v,7),console.groupEnd()});