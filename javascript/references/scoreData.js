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

define([],function(){function e(e,t){this.title=e,this.score=t}var t={tutorial:{identificarPaciente:new e("Ver pulseira/identificação do paciente",100),pegarOximetro:new e("Pegar oxímetro",50),pegarAparelhoPressao:new e("Pegar aparelho de pressão",50),pegarTermometro:new e("Pegar termômetro",50),pegarRelogio:new e("Pegar relógio",50),lavarMaosAntes:new e("Lavar as mãos",200),verTemperatura:new e("Ver temperatura",100),verPressao:new e("Ver pressão",100),verSaturacao:new e("Ver saturação de O2",100),verFrequenciaRespiratoria:new e("Ver frequência respiratória",100),lavarMaosDepois:new e("Lavar as mãos após procedimento",200),anotarNoProntuario:new e("Anotar no prontuário",250)},level1:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem em hora indevida",-50),lavarMaosAntes:new e("Lavar as mãos antes de examinar paciente",200),falarComPaciente:new e("Falar com Paciente",50),verificarPulseira:new e("Verificar Pulseira",100),examinarPaciente:new e("Examinar Paciente",150),lavarMaosDepois:new e("Lavar as mãos após procedimento",200),falarComMentorApos:new e("Falar com mentor após examinar paciente",50),pegarCoxim:new e("Pegar Coxim",50),lavarMaosProntuario:new e("Lavar mãos antes de pegar prontuario",200),naoLavarMaosProntuario:new e("Não lavar as mãos antes de pegar prontuario",-100),anotarNoProntuario:new e("Anotar no prontuário",50)},level2:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem em hora indevida",-25),irFarmaciaHoraErrada:new e("Ir à farmácia sem precisar",-25),irAlaFemininaHoraErrada:new e("Ir à ala feminina sem precisar",-25),lavaMaosAntes:new e("Lavar maos antes de pegar no prontuário",200),checarProntuario:new e("Checar Prontuário",150),pegarKitGlicemia:new e("Pegar kit de glicemia",50),pegarAlgodao:new e("Pegar algodão seco",50),pegarLuvas:new e("Pegar luvas",50),pegarBandeja:new e("Pegar bandeja",50),lavarMaosAntesLeito:new e("Lavar mãos antes de ir para o leito do paciente",200),falarComPaciente:new e("Conversar com paciente",50),verificarPulseira:new e("Verificar Pulseira",50),naoVerificarPulseira:new e("Não verificar a pulseira no momento correto",-50),selecionarBandeja:new e("Selecionar Bandeja",50),naoSelecionarBandeja:new e("Não selecionar a bandeja no momento correto",-50),porLuvas:new e("Calçar luvas",50),naoPorLuvas:new e("Não calçar as luvas no momento correto",-50),usarAlgodao:new e("Usar Algodão",50),naoUsarAlgodao:new e("Não usar algodão no momento correto",-50),realizarTesteGlicemia:new e("Realizar teste de glicemia",100),naoRealizarTesteGlicemia:new e("Não realizar o teste de glicemia no momento correto",-100),usarAlgodao2:new e("Usar Algodão",50),naoUsarAlgodao2:new e("Não usar algodão no momento correto",-50),explicarResultado:new e("Explicar resultado do teste para o paciente",150),naoExplicarResultado:new e("Não explicar resultado do teste para o paciente no momento correto",-150),algodaoLixoCerto:new e("Jogar algodão no lixo infectante",50),agulhaLixoCerto:new e("Jogar agulha no lixo de perfuro cortante",50),algodaoLixoErrado:new e("Jogar algodão no lixo errado",-50),agulhaLixoErrado:new e("Jogar agulha no lixo errado",-50),elevarGradeDaCama:new e("Elevar grade da cama",150),lavarMaosAposLixos:new e("Lavar as mãos após procedimentos",200),anotarNoProntuario:new e("Anotar no prontuário",250)},level3:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem sem precisar",-25),irFarmaciaHoraErrada:new e("Ir à farmácia sem precisar",-25),irAlaFemininaHoraErrada:new e("Ir à ala feminina em hora indevida",-25),lavarMaosHoraErrada:new e("Lavar mãos ao inves de lavar mãos técnica cirúrgica",-200),lavarMaosCirurgica:new e("Lavar mãos tecnica cirurgica",200),testarEquipamentos:new e("Testar Equipamentos",250),lavarMaos2:new e("Lavar mãos antes de ir ao leito",200),naoLavarMaos:new e("Não lavar mãos antes de ir ao leito",-200),irAoLeitoCorreto:new e("Ir ao leito correto",150),pegarProntuario:new e("Ver e pegar prontuário",150),encaminharPacienteCentroCirurgico:new e("Encaminhar Paciente ao Centro Cirurgico",150),anotarNoProntuario:new e("Anotar no prontuário",250),colocarPlacaNeutra:new e("Colocar placa neutra antes da cirurgia no paciente",250)},level4:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem em hora indevida",-25),irFarmaciaHoraErrada:new e("Ir à farmácia em hora indevida",-25),irAlaFeminina:new e("Ir à ala feminina sem precisar",-25),checarProntuario:new e("Checar prontuário",150),naoChecarProntuario:new e("Não checar prontuário",-150),pegarPrescricaoMedica:new e("Pegar prescrição médica",250),naoPegarPrescricaoMedica:new e("Pegar prescrição médica",-250),pegarMedicamento:new e("Pegar medicamento",150),conferirMedicamento:new e("Conferir medicamento",300),naoConferirMedicamento:new e("Não conferir medicamento",-300),calcularValorMedicamento:new e("Calcular o valor a ser aspirado no frasco",250),calcularErradoValorMedicamento:new e("Calcular errado o valor a ser aspirado no frasco",-250),lavarMaos:new e("Lavar as mãos antes de pegar os instrumentos",200),naoLavarMaos:new e("Não lavar as mãos antes de pegar os instrumentos",-200),pegarBandeja:new e("Pegar bandeja",50),pegarSoroFisiologico:new e("Pegar soro fisiológico 0,9% 100ml",50),pegarSeringa5:new e("Pegar seringa de 5ml",50),pegarAgulha:new e("Pegar agulha 40x12",50),pegarAlcool:new e("Pegar álcool 70%",50),pegarAlgodao:new e("Pegar algodão",50),pegarEquipoSoroMacrogotas:new e("Pegar equipamento de soro macrogotas",50),pegarLuvas:new e("Pegar par de luvas de procedimento",50),pegarSeringa10:new e("Pegar seringa de 10ml",50),pegarAmpolaSF:new e("Pegar ampola de soro fisiológico 0,9% 10ml",50),naoPegarAlgumInstrumento:new e("Fechar a gaveta sem pegar todos os instrumentos",-50),confirmarMedicacaoPosto:new e("Confirmar medicação com mentor",150),prepararMedicacao:new e("Preparar medicação",150),calcularGotejamento:new e("Calcular gotejamento de soro",350),identificarMedicacao:new e("Identificar medicacao",250),lavarMaosAntesLeito:new e("Lavar as mãos antes de ir ao leito do paciente",200),naoLavarMaosAntesLeito:new e("Não lavar as mãos antes de ir ao leito do paciente",-200),checarPulseira:new e("Verificar pulseira",50),naoChecarPulseira:new e("Não verificar pulseira",-50),administrarMedicacao:new e("Administrar medicamento",250),naoAdministrarMedicacao:new e("Não administrar medicamento",-250),gotejarSoroEquipo:new e("Realizar gotejamento de soro no equipamento",350),naoGotejarSoroEquipo:new e("Não realizar gotejamento de soro no equipamento",-350),lavarMaosAntesProntuario:new e("Lavar as mãos antes de realizar as anotações no prontuario",200),naoLavarMaosAntesProntuario:new e("Não lavar as mãos antes de realizar as anotações no prontuario",-200),anotarNoProntuario:new e("Anotar no prontuário",200)},level5:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem em hora indevida",-25),irFarmaciaHoraErrada:new e("Ir à farmácia sem precisar",-25),irAlaFemininaHoraErrada:new e("Ir à ala feminina em hora indevida",-25),irAlaMasculinaHoraErrada:new e("Ir à ala masculina sem precisar",-25),irCentroCirurgicoHoraErrada:new e("Ir ao centro cirurgico sem precisar",-25),irAlaMasculinaAposFalaMentor:new e("Ir à ala masculina mesmo após o que o mentor disse",-25),verProntuario:new e("Ver Prontuário",150),naoVerProntuario:new e("Não ver o prontuário no momento correto",-150),lavarMaosPostoEnfermagem:new e("Lavar mãos antes de pegar os instrumentos",200),pegarKitGlicemia:new e("Pegar kit de glicemia",50),pegarAlgodao:new e("Pegar algodão seco",50),pegarLuvas:new e("Pegar luvas",50),pegarBandeja:new e("Pegar bandeja",50),pegarLuvasEstereis:new e("Pegar luvas estéreis",50),pegarGaze:new e("Pegar gaze esterilizada",50),pegarFitaHipoalergenica:new e("Pegar fita adesiva hipoalergênica",50),pegarSoro:new e("Pegar soro fisiológico 0,9% (250 ml) aquecido",50),pegarSeringa:new e("Pegar seringa de 20 ml",50),pegarAgulha:new e("Pegar agulha 40X12",50),pegarTodosInstrumentos:new e("Pegar todos os instrumentos",350),lavarMaosAntesLeito:new e("Lavar as mãos antes de ir para o leito do paciente",200),falarComPaciente:new e("Conversar com paciente",150),naoFalarComPaciente:new e("Não conversar com paciente no momento correto",-150),verificarPulseira:new e("Verificar a pulseira",100),naoVerificarPulseira:new e("Não verificar a pulseira no momento correto",-100),fazerTesteGlicemia:new e("Fazer teste de glicemia capilar",100),naoFazerTesteGlicemia:new e("Não fazer teste de glicemia capilar no momento correto",-100),jogarAgulhaLixoCerto:new e("Jogar agulha no descarpax",50),naoJogarAgulhaLixoCerto:new e("Não jogar agulha no descarpax no momento correto",-50),jogarAlgodaoBandeja:new e("Jogar agulha na bandeja",50),naoJogarAlgodaoBandeja:new e("Não jogar o algodão na bandeja no momento correto",-50),selecionarMateriaisCurativo:new e("Selecionar todos os materiais do curativo",350),naoSelecionarMateriaisCurativo:new e("Não selecionar todos os materiais do curativo no momento correto",-350),lavarMaosAntesLuva:new e("Lavar as mãos antes de calçar a luva estéril",200),naoLavarMaosAntesLuva:new e("Não lavar as mãos antes de calçar a luva estéril no momento correto",-200),calcarLuvaProcedimento:new e("Calçar a luva de procedimento",-150),calcarLuvaEsteril:new e("Calçar a luva estéril",150),naoCalcarLuvaEsteril:new e("Não calçar a luva estéril no momento correto",-150),fazerCurativo:new e("Fazer o curativo na paciente",150),naoFazerCurativo:new e("Não fazer o curativo na paciente no momento correto",-150),identificarCurativo:new e("Identificar o curativo feito",150),naoIdentificarCurativo:new e("Não identificar o curativo feito no momento correto",-150),elevarGradeDaCama:new e("Elevar a grade da cama",350),naoElevarGradeDaCama:new e("Não elevar a grade da cama no momento correto",-350),anotarNoProntuario:new e("Anotar no prontuário",350)},level6:{irCentroCirurgicoHoraErrada:new e("Ir para o Centro Cirugico sem precisar",-25),irAlaFemininaHoraErrada:new e("Ir para a Ala Feminina sem precisar",-25),irFarmaciaHoraErrada:new e("Ir para a Farmácia sem precisar",-25),pegarDieta:new e("Pegar a dieta do paciente",50),conferirDieta:new e("Conferir medicamento/dieta",150),lavarMaos1:new e("Lavar as mãos no posto de enfermagem",200),lavarMaos2:new e("Lavar as mãos antes de anotar no prontuário",200),pegarCopoDescartavel:new e("Pegar copo descartável",50),pegarAguaPotavel:new e("Pegar agua potável",50),pegarSeringa:new e("Pegar seringa",50),pegarEquipoCorreto:new e("Pegar equipamento correto",150),pegarEquipoErrado:new e("Pegar equipamento errado",-150),irAoLeitoCorreto:new e("Ir ao leito do paciente",50),verificarPulseira:new e("Verificar pulseira do paciente",150),falarComPaciente:new e("Falar com o paciente",50),pegarSuporteSoro:new e("Pegar Suporte de Soro",50),elevarCama:new e("Elevar Cabeceira da Cama",150),verificarSonda:new e("Verificar Localização da Sonda",350),administrarDieta:new e("Administrar Dieta",150),colocarGotejamento:new e("Colocar Gotejamento",350),anotarNoProntuario:new e("Anotar no Prontuário",350),calcularInfusaoDieta:new e("Calcular infusão da dieta corretamente",150)},level7:{irFarmaciaHoraErrada:new e("Ir para a Farmacia sem precisar",-25),irPostoEnfermagemHoraErrada:new e("Ir para o Posto Enfermagem sem precisar",-25),irCentroCirurgicoHoraErrada:new e("Ir para o Centro Cirugico sem precisar",-25),irAlaMasculinaHoraErrada:new e("Ir para a Ala Masculina sem precisar",-25),irAlaFemininaHoraErrada:new e("Ir para a Ala Feminina sem precisar",-25),lerProntuario:new e("Ler o prontuário",150),naoLeuProntuario:new e("Não leu o prontuário",150),falarComPaciente:new e("Falar com a paciente",150),naoFalarComPaciente:new e("Não falar com a paciente",-150),pegarMedicamento:new e("Pegar medicamento na farmácia",50),conferirMedicamentoErrado:new e("Verificar o medicamento fornecido pelo farmacêutico",350),trocarMedicamento:new e("Trocar o medicamento equivocado",150),conferirMedicamentoCorreto:new e("Verificar o novo medicamento fornecido pelo farmacêutico",150),pegarAguaPotavel:new e("Pegar água potável no posto de enfermagem",50),pegarCopoDescartavel:new e("Pegar copo descartável no posto de enfermagem",50),lavarMaos:new e("Lavar as mãos antes de ir ao leito do paciente",200),calcularInfusaoDieta:new e("Cálculo da infusão da dieta",150),explicarAcaoMedicamento:new e("Explicar a ação do medicamento para o paciente",150),verificarPulseira:new e("Verificar a pulseira da paciente",150),naoVerificarPulseira:new e("Não verificar a pulseira da paciente",-150),oferecerCopo:new e("Oferecer água para o paciente tomar o medicamento",150),lavarMaos2:new e("Lavar as mãos antes de fazer anotações no prontuário",200),naoLavarMaos2:new e("Não lavar as mãos antes de fazer anotações no prontuário",-200),anotarProntuario:new e("Anotar no Prontuário",350),naoPegarCopo:new e("Não pegar o copo descartável no posto de enfermagem",-50),naoPegarAgua:new e("Não pegar a água potável no posto de enfermagem",-50)},level8:{irPostoEnfermagemHoraErrada:new e("Ir ao posto de enfermagem em hora indevida",-25),irFarmaciaHoraErrada:new e("Ir à farmácia em hora indevida",-25),irAlaFemininaHoraErrada:new e("Ir à ala feminina sem precisar",-25),irCentroCirurgicoHoraErrada:new e("Ir ao centro cirurgico em hora indevida",-25),verProntuario:new e("Ver Prontuário",150),naoVerProntuario:new e("Não ver o prontuário no momento correto",-150),pegarMedicamento:new e("Pegar medicamento",50),naoPegarMedicamento:new e("Não pegar o medicamento no momento correto",-50),conferirMedicacao:new e("Conferir medicação",150),naoConferirMedicacao:new e("Não conferir a medicação no momento correto",-150),lavarMaosPostoEnfermagem:new e("Lavar as mãos antes de pegar os instrumentos",200),naoLavarMaosPostoEnfermagem:new e("Não Lavar as mãos antes de pegar os instrumentos",-200),pegarAguaPotavel:new e("Pegar água potável",50),naoPegarAguaPotavel:new e("Não pegar água potável no momento correto",-50),pegarCopoDescartavel:new e("Pegar copo descartável",50),naoPegarCopoDescartavel:new e("Não pegar copo descartável no momento correto",-50),lavarMaosAntesLeito:new e("Lavar as mãos antes de ir para o leito do paciente",200),naoLavarMaosAntesLeito:new e("Não lavar as mãos antes de ir para o leito do paciente",-200),verificarPulseira:new e("Verificar a pulseira",150),naoVerificarPulseira:new e("Não verificar a pulseira no momento correto",-150),oferecerCopo:new e("Oferecer copo com água para o paciente",150),naoOferecerCopo:new e("Não oferecer copo com água para o paciente",-150),administrarMedicamento:new e("Administrar o medicamento",350),naoAdministrarMedicamento:new e("Não administrar o medicamento no momento correto",-350),anotarProntuario:new e("Anotar no prontuário",350),naoAnotarProntuario:new e("Não anotar no prontuário no momento correto",-350),lavarMaosTecnicaCirurgica:new e("Lavar as mãos antes da técnica cirúrgica",200),naoLavarMaosTecnicaCirurgica:new e("Não lavar as mãos antes da técnica cirúrgica",-200),testarEquipamentos:new e("Testar equipamentos",350),naoTestarEquipamentos:new e("Não testar os equipamentos no momento correto",-350),fazerListaVerificacao:new e("Fazer lista de verificação",350),naoFazerListaVerificacao:new e("Não fazer lista de verificação no momento correto",-350),mudarPosicaoPaciente:new e("Mudar posição do paciente",350),naoMudarPosicaoPaciente:new e("Não mudar posição do paciente no momento correto",-350),colocarPlacaNeutra:new e("Colocar a placa neutra",350),naoColocarPlacaNeutra:new e("Não colocar a placa neutra no momento correto",-350),lavarMaosCentroCirurgico:new e("Lavar as mãos após realizar os procedimentos",200),naoLavarMaosCentroCirurgico:new e("Não lavar as mãos após realizar os procedimentos",-200),anotarProntuarioCentroCirurgico:new e("Anotar no prontuário após realizar os procedimentos",350)},level9:{lerProntuario:new e("Ler prontuario do paciente",150),pegarPrescricaoMedica:new e("Pegar Prescrição Médica",150),pegarFrascoSG:new e("Pegar Frasco SG 5%",50),pegarNACL:new e("Pegar NaCL 20%",50),conferirDieta:new e("Conferir Medicamento Prescrito",150),pegarSeringa:new e("Pegar Seringa 5ml",50),pegarAgulha:new e("Pegar Agulha 40X12",50),pegarGlicose:new e("Pegar Ampola de Glicose 50%",50),pegarSoro:new e("Pegar Soro de Macrogotas",50),irFarmaciaHoraErrada:new e("Ir para a farmácia na hora errada",-25),irCentroCirurgico_horaErrada:new e("Ir para o centro cirúrgico na hora errada",-25),irAlaFeminina_horaErrada:new e("Ir para a ala feminina na hora errada ",-25),irPosto_horaErrada:new e("Ir para o posto de enfermagem na hora errada",-25),lavarMaos:new e("Lavar as mãos antes de ir ao leito",200),lavarMaos1:new e("Lavar as mãos no posto de enfermagem",200),conversarPacienteLeito:new e("Falar com o paciente no leito",150),pegarSuporteSoro:new e("Pegar suporte de soro",50),administrarMedicamento:new e("Administrar Medicamento",150),realizarGotejamento:new e("Realizar Gotejamento de Soro",350),lavarMaos3:new e("Lavar as mãos antes de anotar no prontuário",200),anotarNoProntuario:new e("Anotar no prontuário",350),verPulseira:new e("Ver pulseria do paciente",150)}},n=0;for(levelId in t){var r=t[levelId];r._sum=0;for(scoreId in r)if(scoreId!=="_sum"){var i=r[scoreId];i.score>0&&(r._sum+=i.score)}n+=r._sum}return t.max=n,t});