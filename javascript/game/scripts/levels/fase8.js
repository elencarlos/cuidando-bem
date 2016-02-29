define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function k(){console.log("Funcao: recepcao_ir_corredor"),u.changeScene(1)}function L(){console.log("Action: Nada")}function A(){u.changeScene(2)}function O(){v.getFlag("score_pegou_medicamento").getValue()==0&&v.getFlag("score_ir_posto_hora_errada").getValue()==0&&(u.registerScoreItem(h.irPostoEnfermagemHoraErrada),v.getFlag("score_ir_posto_hora_errada").setValue(!0)),u.changeScene(5)}function M(){v.getFlag("score_ir_ala_feminina_hora_errada").getValue()==0&&(u.registerScoreItem(h.irAlaFemininaHoraErrada),v.getFlag("score_ir_ala_feminina_hora_errada").setValue(!0)),u.changeScene(7)}function _(){v.getFlag("score_viu_prontuario").getValue()==0&&v.getFlag("score_ir_farmacia_hora_errada").getValue()==0&&(u.registerScoreItem(h.irFarmaciaHoraErrada),v.getFlag("score_ir_farmacia_hora_errada").setValue(!0)),u.changeScene(4)}function D(){v.getFlag("levou_yuri_centro_cirurgico").getValue()==0?(v.getFlag("score_ir_centro_cirurgico_hora_errada").getValue()==0&&(u.registerScoreItem(h.irCentroCirurgicoHoraErrada),v.getFlag("score_ir_centro_cirurgico_hora_errada").setValue(!0)),u.changeScene(6)):(v.getFlag("entrou_centro_cirurgico").setValue(!0),u.changeScene(8))}function P(){console.log("Funcao: farmacia_ir_corredor"),console.log("Ir para o corredor"),v.getFlag("ja_falou_farmaceutico").getValue()==1&&v.getFlag("score_conferiu_medicacao").getValue()==0&&v.getFlag("score_nao_conferiu_medicacao").getValue()==0&&(u.registerScoreItem(h.naoConferirMedicacao),v.getFlag("score_nao_conferiu_medicacao").setValue(!0)),u.changeScene(1)}var p=require("DialogsData").fase8,d=require("DialogsData").alertas,h=require("ScoresData").level8,v=new r("Level 8");console.groupCollapsed(v.getName());var m,g,y,b,w,E,S,x,T,N,C;m=a.scenes.recepcao.getClone().onLoad(function(){console.log("Load scene: "+m.getName())}),m.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Recepcionista")).setCssClass("intObj-talkToReceptionist").onClick(L).setVisibility(!0),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left").onClick(k).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right").onClick(k).setVisibility(!0)]),g=a.scenes.corredor.getClone().onLoad(function(){console.log("Entrando no corredor")}).onUnload(function(){console.log("Saindo do corredor")}),g.registerInteractiveObjects([(new s("io-ir_sala_leitos","Ir para a sala de Leitos Masculino")).setCssClass("intObj-goToBedroom").onClick(A).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToNursingStation").onClick(O).setVisibility(!0),(new s("io-ir_ala_feminina","Ir para a Ala Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(M).setVisibility(!0),(new s("io-ir_farmacia","Ir para a Farmácia")).setCssClass("intObj-goToPharmacy").onClick(_).setVisibility(!0),(new s("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(D).setVisibility(!0)]),y=(new t("salaDeLeitos","scene-salaDeLeitos")).setCssClass("scene-bedroom").onLoad(function(){console.log("Load scene: Ala Masculina"),v.getFlag("ja_falou_paciente").getValue()==1&&u.openCommandBar(),v.getFlag("ja_falou_paciente").getValue()==0&&(v.getFlag("ja_falou_paciente").setValue(!0),u.openDialog(0)),v.getFlag("ja_falou_farmaceutico").getValue()==1&&v.getFlag("levou_yuri_centro_cirurgico").getValue()==0&&(u.setActionVisible("btn-lavarMaos",!0),u.setInteractiveObjectVisible("io-ir_leito",!0),u.openCommandBar()),v.getFlag("levou_yuri_centro_cirurgico").getValue()==1&&u.setInteractiveObjectVisible("io-ir_leito",!1)}).onUnload(function(){console.log("Ala Masculina: OnUnload"),u.closeCommandBar()}),y.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.changeScene(1)}).setVisibility(!0),(new s("io-ir_leito","Ir ao leito")).setCssClass("intObj-ir_leito-fase4").onClick(function(){v.getFlag("score_lavar_maos_antes_leito").getValue()==0&&v.getFlag("score_nao_lavar_maos_antes_leito").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosAntesLeito),v.getFlag("score_nao_lavar_maos_antes_leito").setValue(!0)),u.changeScene(3)}).setVisibility(!1)]),y.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){console.log("Action: ler prontuario"),v.getFlag("score_viu_prontuario").getValue()==0&&(u.registerScoreItem(h.verProntuario),v.getFlag("score_viu_prontuario").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){console.log("Action: Lavar as mãos"),v.getFlag("score_lavar_maos_antes_leito").getValue()==0&&(u.registerScoreItem(h.lavarMaosAntesLeito),v.getFlag("score_lavar_maos_antes_leito").setValue(!0))}).setVisibility(!1)]),y.registerDialogs([(new i(a.characters.jogador)).setText(p.alaMasculina[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.alaMasculina[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.alaMasculina[4]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[5]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.jogador)).setText(p.alaMasculina[6]).registerOption("",function(){u.closeDialog()})]),b=a.scenes.leitos.yuri.getClone().onLoad(function(){u.openCommandBar(),console.log("Leito: Onload"),v.getFlag("score_pegou_agua").getValue()==1&&v.getFlag("score_pegou_copo").getValue()==1&&u.setActionVisible("btn-oferecer_copo",!0),v.getFlag("score_pegou_medicamento").getValue()==1&&u.setActionVisible("btn-administrar_medicamento",!0)}).onUnload(function(){console.log("Leito: OnUnload"),u.closeCommandBar()}),b.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_02-checar_pulseira").onClick(function(){console.log("IO: pulseira_paciente"),v.getFlag("score_verificar_pulseira").getValue()==0&&(v.getFlag("score_verificar_pulseira").setValue(!0),u.registerScoreItem(h.verificarPulseira)),u.openModalScene("pulseira"),f.open()}).setVisibility(!0)]),b.registerDialogs([(new i(a.characters.jogador)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.yuri)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[2]).registerOption("",function(){u.closeDialog()})]),b.registerActions([(new n("btn-falarPaciente","Conversar com Paciente")).setCssClass("action-leito-char-02").onClick(function(){u.openDialog(0),u.closeCommandBar()}).setVisibility(!0),(new n("btn-oferecer_copo","Oferecer copo com água para o paciente")).setCssClass("action-copo_descartavel").onClick(function(){console.log("Action: Oferecer copo com água para o paciente"),v.getFlag("score_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.oferecerCopo),v.getFlag("score_ofereceu_copo").setValue(!0))}).setVisibility(!1),(new n("btn-administrar_medicamento","Administrar o medicamento")).setCssClass("action-midazolam_medicamento").onClick(function(){console.log("Action: Administrar o medicamento"),v.getFlag("score_ofereceu_copo").getValue()==0&&v.getFlag("score_nao_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.naoOferecerCopo),v.getFlag("score_nao_ofereceu_copo").setValue(!0)),v.getFlag("score_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.administrarMedicamento),v.getFlag("score_administrou_medicamento").setValue(!0))}).setVisibility(!1),(new n("btn-anotarProntuario","Anotar prontuario")).setCssClass("action-anotarProntuario").onClick(function(){console.log("Action: Anotar prontuario"),v.getFlag("score_administrou_medicamento").getValue()==0&&v.getFlag("score_nao_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoAdministrarMedicamento),v.getFlag("score_nao_administrou_medicamento").setValue(!0)),v.getFlag("score_anotar_prontuario").getValue()==0&&(u.registerScoreItem(h.anotarProntuario),v.getFlag("score_anotar_prontuario").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0),(new n("btn-levar_yuri_cc","Levar paciente ao Centro Cirurgico")).setCssClass("action-paciente9").onClick(function(){console.log("Action: Jogar algodão na bandeja"),v.getFlag("score_verificar_pulseira").getValue()==0&&v.getFlag("score_nao_verificar_pulseira").getValue()==0&&(u.registerScoreItem(h.naoVerificarPulseira),v.getFlag("score_nao_verificar_pulseira").setValue(!0)),v.getFlag("score_ofereceu_copo").getValue()==0&&v.getFlag("score_nao_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.naoOferecerCopo),v.getFlag("score_nao_ofereceu_copo").setValue(!0)),v.getFlag("score_administrou_medicamento").getValue()==0&&v.getFlag("score_nao_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoAdministrarMedicamento),v.getFlag("score_nao_administrou_medicamento").setValue(!0)),v.getFlag("levou_yuri_centro_cirurgico").getValue()==0&&v.getFlag("levou_yuri_centro_cirurgico").setValue(!0),u.setActionVisible("btn-falarPaciente",!1),u.setActionVisible("btn-oferecer_copo",!1),u.setActionVisible("btn-administrar_medicamento",!1)}).setVisibility(!0),(new n("btn-ir_sala_leitos","Ir para sala de leitos")).setCssClass("action-ir_sala_de_leitos").onClick(function(){console.log("Action: Voltar para a ala masculina"),v.getFlag("score_anotar_prontuario").getValue()==0&&v.getFlag("score_nao_anotar_prontuario").getValue()==0&&(u.registerScoreItem(h.naoAnotarProntuario),v.getFlag("score_nao_anotar_prontuario").setValue(!0)),u.changeScene(2)}).setVisibility(!0)]),w=(new t("farmacia","scene-pharmacy")).setCssClass("scene-pharmacy").onLoad(function(){console.log("Load scene: Ala Masculina"),v.getFlag("ja_falou_farmaceutico").getValue()==1&&(u.setInteractiveObjectVisible("io-midazolam_medicamento",!v.getFlag("score_pegou_medicamento").getValue()),u.setActionVisible("btn-conferir_midazolam",!0),u.openCommandBar()),v.getFlag("score_viu_prontuario").getValue()==1&&v.getFlag("ja_falou_farmaceutico").getValue()==0&&(v.getFlag("ja_falou_farmaceutico").setValue(!0),u.openDialog(0))}).onUnload(function(){console.log("Ala Masculina: OnUnload"),u.closeCommandBar()}),w.registerInteractiveObjects([(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left").onClick(P).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right").onClick(P).setVisibility(!0)]),w.registerActions([(new n("btn-conferir_midazolam","Conferir Medicamento")).setCssClass("action-midazolam_medicamento").onClick(function(){console.log("Action: Conferir Medicamento"),v.getFlag("score_pegou_medicamento").getValue()==0&&v.getFlag("score_nao_pegou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoPegarMedicamento),v.getFlag("score_nao_pegou_medicamento").setValue(!0)),v.getFlag("score_conferiu_medicacao").getValue()==0&&(u.registerScoreItem(h.conferirMedicacao),v.getFlag("score_conferiu_medicacao").setValue(!0))}).setVisibility(!1)]),w.registerInteractiveObjects([(new s("io-midazolam_medicamento","Pegar Medicamento")).setCssClass("intObj-midazolam_medicamento").onClick(function(){console.log("Action: Pegar Medicamento"),u.registerScoreItem(h.pegarMedicamento),v.getFlag("score_pegou_medicamento").setValue(!0),u.setInteractiveObjectVisible("io-midazolam_medicamento",!1)}).setVisibility(!1)]),w.registerDialogs([(new i(a.characters.paulo)).setText(p.farmacia[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(p.farmacia[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.paulo)).setText(p.farmacia[2]).registerOption("",function(){u.closeDialog(),u.setInteractiveObjectVisible("io-midazolam_medicamento",!0),u.setActionVisible("btn-conferir_midazolam",!0),u.openCommandBar()})]),E=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){console.log("Load scene: Posto de enfermagem"),u.openCommandBar(),v.getFlag("score_pegou_medicamento").getValue()==1&&(u.setActionVisible("btn-lavarMaos",!0),u.setInteractiveObjectVisible("io-pegar_agua",!v.getFlag("score_pegou_agua").getValue()),u.setInteractiveObjectVisible("io-pegar_copo",!v.getFlag("score_pegou_copo").getValue()),u.openCommandBar())}).onUnload(function(){console.log("Posto de enfermagem: OnUnload"),u.closeCommandBar()}),E.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){console.log("Action: ir_corredor"),v.getFlag("score_pegou_medicamento").getValue()==1&&(v.getFlag("score_pegou_agua").getValue()==0&&v.getFlag("score_nao_pegou_agua").getValue()==0&&(u.registerScoreItem(h.naoPegarAguaPotavel),v.getFlag("score_nao_pegou_agua").setValue(!0)),v.getFlag("score_pegou_copo").getValue()==0&&v.getFlag("score_nao_pegou_copo").getValue()==0&&(u.registerScoreItem(h.naoPegarCopoDescartavel),v.getFlag("score_nao_pegou_copo").setValue(!0))),u.changeScene(1)}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){console.log("Action: lavarMaos"),v.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.lavarMaosPostoEnfermagem),v.getFlag("score_lavar_maos_posto_enfermagem").setValue(!0))}).setVisibility(!1)]),E.registerInteractiveObjects([(new s("io-pegar_agua","Pegar água potável")).setCssClass("intObj-garrafa_agua_potavel").onClick(function(){console.log("Action: Pegar água potável"),v.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&v.getFlag("score_nao_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosPostoEnfermagem),v.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!0)),u.registerScoreItem(h.pegarAguaPotavel),v.getFlag("score_pegou_agua").setValue(!0),u.setInteractiveObjectVisible("io-pegar_agua",!1)}).setVisibility(!1),(new s("io-pegar_copo","Pegar copo descartavel")).setCssClass("intObj-copo_descartavel").onClick(function(){console.log("Action: Pegar copo descartavel"),v.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&v.getFlag("score_nao_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosPostoEnfermagem),v.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!0)),u.registerScoreItem(h.pegarCopoDescartavel),v.getFlag("score_pegou_copo").setValue(!0),u.setInteractiveObjectVisible("io-pegar_copo",!1)}).setVisibility(!1)]),centroCirurgico=a.scenes.centroCirurgico.getClone().onLoad(function(){console.log("Load scene: Centro cirurgico"),u.openCommandBar()}).onUnload(function(){console.log("Centro cirurgico: OnUnload"),u.closeCommandBar()}),centroCirurgico.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){console.log("Action: ir_corredor"),u.changeScene(1)}).setVisibility(!0)]),x=a.scenes.alaFeminina.getClone().onLoad(function(){console.log("Load scene: Ala feminina")}).onUnload(function(){console.log("Ala feminina: OnUnload")}),x.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.changeScene(1)}).setVisibility(!0)]),T=a.scenes.centroCirurgicoYuri.getClone().onLoad(function(){console.log("Load scene: Centro cirurgico Yuri"),u.openCommandBar()}).onUnload(function(){console.log("Centro cirurgico: OnUnload"),u.closeCommandBar()}),T.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){console.log("Action: ir_corredor"),u.changeScene(1)}).setVisibility(!0),(new n("btn-lavar_maos_cirurgia","Lavar as mãos técnica cirúrgica")).setCssClass("action-lavar_maos_escova").onClick(function(){console.log("Action: Lavar as mãos técnica cirúrgica"),v.getFlag("score_lavar_maos_tecnica_cirurgica").getValue()==0&&(u.registerScoreItem(h.lavarMaosTecnicaCirurgica),v.getFlag("score_lavar_maos_tecnica_cirurgica").setValue(!0))}).setVisibility(!0),(new n("btn-falar_circulante","Falar com circulante de sala")).setCssClass("action-leito-char-02").onClick(function(){console.log("Action: Falar com circulante de sala"),v.getFlag("score_lavar_maos_tecnica_cirurgica").getValue()==0&&v.getFlag("score_nao_lavar_maos_tecnica_cirurgica").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosTecnicaCirurgica),v.getFlag("score_nao_lavar_maos_tecnica_cirurgica").setValue(!0)),u.openDialog(0),u.closeCommandBar()}).setVisibility(!0),(new n("btn-testar_equipamentos","Testar Equipamentos")).setCssClass("action-testar_equipamentos").onClick(function(){console.log("Action: Testar Equipamentos"),v.getFlag("score_testou_equipamentos").getValue()==0&&(u.registerScoreItem(h.testarEquipamentos),v.getFlag("score_testou_equipamentos").setValue(!0))}).setVisibility(!0),(new n("btn-fazer_lista","Fazer lista de verificação")).setCssClass("action-fazer_lista").onClick(function(){console.log("Action: Fazer lista de verificação"),v.getFlag("score_testou_equipamentos").getValue()==0&&v.getFlag("score_nao_testou_equipamentos").getValue()==0&&(u.registerScoreItem(h.naoTestarEquipamentos),v.getFlag("score_nao_testou_equipamentos").setValue(!0)),v.getFlag("score_fez_lista_verificacao").getValue()==0&&(u.registerScoreItem(h.fazerListaVerificacao),v.getFlag("score_fez_lista_verificacao").setValue(!0))}).setVisibility(!0),(new n("btn-mudar_posicao_paciente","Mudar posição do paciente")).setCssClass("action-mudar_posicao_paciente").onClick(function(){console.log("Action: Mudar posição do paciente"),v.getFlag("score_fez_lista_verificacao").getValue()==0&&v.getFlag("score_nao_fez_lista_verificacao").getValue()==0&&(u.registerScoreItem(h.naoFazerListaVerificacao),v.getFlag("score_nao_fez_lista_verificacao").setValue(!0)),v.getFlag("score_mudou_posicao_paciente").getValue()==0&&(u.registerScoreItem(h.mudarPosicaoPaciente),v.getFlag("score_mudou_posicao_paciente").setValue(!0))}).setVisibility(!0),(new n("btn-colocar_placa","Colocar placa neutra")).setCssClass("action-placa_neutra").onClick(function(){console.log("Action: Colocar placa neutra"),v.getFlag("score_mudou_posicao_paciente").getValue()==0&&v.getFlag("score_nao_mudou_posicao_paciente").getValue()==0&&(u.registerScoreItem(h.naoMudarPosicaoPaciente),v.getFlag("score_nao_mudou_posicao_paciente").setValue(!0)),v.getFlag("score_colocou_placa_neutra").getValue()==0&&(u.registerScoreItem(h.colocarPlacaNeutra),v.getFlag("score_colocou_placa_neutra").setValue(!0))}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){console.log("Action: Lavar as mãos"),v.getFlag("score_colocou_placa_neutra").getValue()==0&&v.getFlag("score_nao_colocou_placa_neutra").getValue()==0&&(u.registerScoreItem(h.naoColocarPlacaNeutra),v.getFlag("score_nao_colocou_placa_neutra").setValue(!0)),v.getFlag("score_lavar_maos_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.lavarMaosCentroCirurgico),v.getFlag("score_lavar_maos_centro_cirurgico").setValue(!0))}).setVisibility(!0),(new n("btn-anotarProntuario","Anotar prontuario")).setCssClass("action-anotarProntuario").onClick(function(){console.log("Action: Anotar prontuario"),v.getFlag("score_lavar_maos_centro_cirurgico").getValue()==0&&v.getFlag("score_nao_lavar_maos_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosCentroCirurgico),v.getFlag("score_nao_lavar_maos_centro_cirurgico").setValue(!0)),v.getFlag("score_anotar_prontuario_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.anotarProntuarioCentroCirurgico),v.getFlag("score_anotar_prontuario_centro_cirurgico").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0)]),T.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.centroCirurgico[0],function(){u.openDialog(1)}).registerOption(p.centroCirurgico[1],function(){u.openDialog(2)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.centroCirurgico[2]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.circulante)).setText(p.centroCirurgico[3]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[5]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[6]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[7]).registerOption("",function(){u.openDialog(7)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[8]).registerOption("",function(){u.openDialog(8)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[9]).registerOption("",function(){u.openDialog(9)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[10]).registerOption("",function(){u.openDialog(10)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[11]).registerOption("",function(){u.openDialog(11)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[12]).registerOption("",function(){u.openDialog(12)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[13]).registerOption("",function(){u.openDialog(13)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[14]).registerOption("",function(){u.openDialog(14)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[15]).registerOption("",function(){u.openDialog(15)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[16]).registerOption("",function(){u.openDialog(16)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[17]).registerOption("",function(){u.openDialog(17)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[18]).registerOption("",function(){u.closeDialog(),u.openCommandBar()})]),N=new t("pulseira","pulseira"),N.registerInteractiveObjects([]),N.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){console.log("Ação: Fechar modal pulseira"),u.closeModalScene("Pulseira"),f.close()}).setVisibility(!0)]),C=new t("Prontuario","Prontuario"),C.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){console.log("Action: Fechar prontuario"),l.close(),v.getFlag("entrou_centro_cirurgico").getValue()==1?(u.closeCommandBar(),u.showEndOfLevel()):u.closeModalScene("Prontuario")}).setVisibility(!0)]),v.registerScene(m),v.registerScene(g),v.registerScene(y),v.registerScene(b),v.registerScene(w),v.registerScene(E),v.registerScene(centroCirurgico),v.registerScene(x),v.registerScene(T),v.registerModalScene(N),v.registerModalScene(C),v.setSetupScript(function(){v.getFlag("ja_falou_farmaceutico").setValue(!1),v.getFlag("ja_falou_paciente").setValue(!1),v.getFlag("ja_falou_paciente_leito").setValue(!1),v.getFlag("levou_yuri_centro_cirurgico").setValue(!1),v.getFlag("entrou_centro_cirurgico").setValue(!1),v.getFlag("score_ir_posto_hora_errada").setValue(!1),v.getFlag("score_ir_farmacia_hora_errada").setValue(!1),v.getFlag("score_ir_ala_feminina_hora_errada").setValue(!1),v.getFlag("score_ir_centro_cirurgico_hora_errada").setValue(!1),v.getFlag("score_viu_prontuario").setValue(!1),v.getFlag("score_nao_viu_prontuario").setValue(!1),v.getFlag("score_pegou_medicamento").setValue(!1),v.getFlag("score_nao_pegou_medicamento").setValue(!1),v.getFlag("score_conferiu_medicacao").setValue(!1),v.getFlag("score_nao_conferiu_medicacao").setValue(!1),v.getFlag("score_lavar_maos_posto_enfermagem").setValue(!1),v.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!1),v.getFlag("score_pegou_agua").setValue(!1),v.getFlag("score_nao_pegou_agua").setValue(!1),v.getFlag("score_pegou_copo").setValue(!1),v.getFlag("score_nao_pegou_copo").setValue(!1),v.getFlag("score_lavar_maos_antes_leito").setValue(!1),v.getFlag("score_nao_lavar_maos_antes_leito").setValue(!1),v.getFlag("score_verificar_pulseira").setValue(!1),v.getFlag("score_nao_verificar_pulseira").setValue(!1),v.getFlag("score_ofereceu_copo").setValue(!1),v.getFlag("score_nao_ofereceu_copo").setValue(!1),v.getFlag("score_administrou_medicamento").setValue(!1),v.getFlag("score_nao_administrou_medicamento").setValue(!1),v.getFlag("score_anotar_prontuario").setValue(!1),v.getFlag("score_nao_anotar_prontuario").setValue(!1),v.getFlag("score_lavar_maos_tecnica_cirurgica").setValue(!1),v.getFlag("score_nao_lavar_maos_tecnica_cirurgica").setValue(!1),v.getFlag("score_testou_equipamentos").setValue(!1),v.getFlag("score_nao_testou_equipamentos").setValue(!1),v.getFlag("score_fez_lista_verificacao").setValue(!1),v.getFlag("score_nao_fez_lista_verificacao").setValue(!1),v.getFlag("score_mudou_posicao_paciente").setValue(!1),v.getFlag("score_nao_mudou_posicao_paciente").setValue(!1),v.getFlag("score_colocou_placa_neutra").setValue(!1),v.getFlag("score_nao_colocou_placa_neutra").setValue(!1),v.getFlag("score_lavar_maos_centro_cirurgico").setValue(!1),v.getFlag("score_nao_lavar_maos_centro_cirurgico").setValue(!1),v.getFlag("score_anotar_prontuario_centro_cirurgico").setValue(!1),f.setNameRegExp(/Yuri de Souza Almeida/),f.setLeitoRegExp(/0*2/),f.setDataRegExp(/16\/03\/1993/),f.setName("Yuri de Souza Almeida"),f.setLeito("02"),f.setData("16/03/1993"),f.disable(),l.setNome("Yuri de Souza Almeida"),l.setSexo("M"),l.setEstadoCivil("Solteiro"),l.setDataNascimento("16/03/1993"),l.setIdade("22 anos"),l.setProfissao("Estudante"),l.setPai("Miguel Augusto Briganti Almeida"),l.setMae("Mariana Soares Almeida"),l.setAlergiaMedicamentosa(!0,"Dipirona, sulfa."),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("27/09/2015"),l.setLeito("02 - Enfermaria masculina"),l.setAntecedentes(""),l.setHipotese("Cirurgia de reconstrução do ligamento cruzado anterior (LCA), no MMII direito."),l.setObservacoes("Acidente automobilístico."),l.setPeso("73"),l.setAltura("1,80"),l.setCircunferenciaAbdominal("90"),l.setPrescMedicaRowData(0,"27/09","Midazolam","Oral","15 mg","01x/dia antes do procedimento cirúrgico",!1,!0),l.setPrescMedicaRowData(1,"","","","","",!1,!0),l.setSsvvRowData(0,"27/09","120x70","72","16","96","35,5",!0),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("27/09","")}),v.registerFlag(new o("ja_falou_farmaceutico"),!1),v.registerFlag(new o("ja_falou_paciente"),!1),v.registerFlag(new o("ja_falou_paciente_leito"),!1),v.registerFlag(new o("levou_yuri_centro_cirurgico"),!1),v.registerFlag(new o("entrou_centro_cirurgico"),!1),v.registerFlag(new o("score_ir_posto_hora_errada"),!1),v.registerFlag(new o("score_ir_farmacia_hora_errada"),!1),v.registerFlag(new o("score_ir_ala_feminina_hora_errada"),!1),v.registerFlag(new o("score_ir_centro_cirurgico_hora_errada"),!1),v.registerFlag(new o("score_viu_prontuario"),!1),v.registerFlag(new o("score_nao_viu_prontuario"),!1),v.registerFlag(new o("score_pegou_medicamento"),!1),v.registerFlag(new o("score_nao_pegou_medicamento"),!1),v.registerFlag(new o("score_conferiu_medicacao"),!1),v.registerFlag(new o("score_nao_conferiu_medicacao"),!1),v.registerFlag(new o("score_lavar_maos_posto_enfermagem"),!1),v.registerFlag(new o("score_nao_lavar_maos_posto_enfermagem"),!1),v.registerFlag(new o("score_pegou_agua"),!1),v.registerFlag(new o("score_nao_pegou_agua"),!1),v.registerFlag(new o("score_pegou_copo"),!1),v.registerFlag(new o("score_nao_pegou_copo"),!1),v.registerFlag(new o("score_lavar_maos_antes_leito"),!1),v.registerFlag(new o("score_nao_lavar_maos_antes_leito"),!1),v.registerFlag(new o("score_verificar_pulseira"),!1),v.registerFlag(new o("score_nao_verificar_pulseira"),!1),v.registerFlag(new o("score_ofereceu_copo"),!1),v.registerFlag(new o("score_nao_ofereceu_copo"),!1),v.registerFlag(new o("score_administrou_medicamento"),!1),v.registerFlag(new o("score_nao_administrou_medicamento"),!1),v.registerFlag(new o("score_anotar_prontuario"),!1),v.registerFlag(new o("score_nao_anotar_prontuario"),!1),v.registerFlag(new o("score_lavar_maos_tecnica_cirurgica"),!1),v.registerFlag(new o("score_nao_lavar_maos_tecnica_cirurgica"),!1),v.registerFlag(new o("score_testou_equipamentos"),!1),v.registerFlag(new o("score_nao_testou_equipamentos"),!1),v.registerFlag(new o("score_fez_lista_verificacao"),!1),v.registerFlag(new o("score_nao_fez_lista_verificacao"),!1),v.registerFlag(new o("score_mudou_posicao_paciente"),!1),v.registerFlag(new o("score_nao_mudou_posicao_paciente"),!1),v.registerFlag(new o("score_colocou_placa_neutra"),!1),v.registerFlag(new o("score_nao_colocou_placa_neutra"),!1),v.registerFlag(new o("score_lavar_maos_centro_cirurgico"),!1),v.registerFlag(new o("score_nao_lavar_maos_centro_cirurgico"),!1),v.registerFlag(new o("score_anotar_prontuario_centro_cirurgico"),!1),v.setInitialScene(0),e.registerLevel(v,8),console.groupEnd()});