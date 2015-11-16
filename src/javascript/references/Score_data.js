define(function ()
{
    function Score(_title, _score){
        this.title = _title;
        this.score = _score;
    }

    return {
        general: {},
        tutorial: {
            identificarPaciente: new Score("Ver pulseira/identificação do paciente", 100),
            pegarOximetro: new Score("Pegar oxímetro", 50),
            pegarAparelhoPressao: new Score("Pegar aparelho de pressão", 50),
            pegarTermometro: new Score("Pegar termômetro", 50),
            pegarRelogio: new Score("Pegar relógio", 50),
            lavarMaosAntes: new Score("Lavar as mãos", 200),
            verTemperatura: new Score("Ver temperatura", 100),
            verPressao: new Score("Ver pressão", 100),
            verSaturacao: new Score("Ver saturação de O2", 100),
            verFrequenciaRespiratoria: new Score("Ver frequência respiratória", 100),
            lavarMaosDepois: new Score("Lavar as mãos após procedimento", 200),
            anotarNoProntuario: new Score("Anotar no prontuário", 250)
        },
        level1: {
            irPostoEnfermagem_horaErrada: new Score("Ir ao posto de enfermagem em hora indevida", -50),
            lavarMaosAntes: new Score("Lavar as mãos antes de examinar paciente", 200),
            falarComPaciente: new Score("Falar com Paciente", 50),
            verificarPulseira: new Score("Verificar Pulseira", 100),
            examinarPaciente: new Score("Examinar Paciente", 150),
            lavarMaosDepois: new Score("Lavar as mãos após procedimento", 200),
            falarComMentorApos: new Score("Falar com mentor após examinar paciente", 50),
            pegarCoxim: new Score("Pegar Coxim", 50),
            lavarMaosProntuario: new Score("Lavar mãos antes de pegar prontuario", 200),
            naoLavarMaosProntuario: new Score("Não lavar as mãos antes de pegar prontuario", -100),
            anotarNoProntuario: new Score("Anotar no prontuário", 50)
        },
        level2: {
            irPostoEnfermagem_horaErrada: new Score("Ir ao posto de enfermagem em hora indevida", -25),
            irFarmacia_horaErrada: new Score("Ir à farmácia sem precisar", -25),
            irAlaFeminina_horaErrada: new Score("Ir à ala feminina sem precisar", -25),
            lavaMaosAntes: new Score("Lavar maos antes de pegar no prontuário", 200),
            checarProntuario: new Score("Checar Prontuário", 150),
            pegarKitGlicemia: new Score("Pegar kit de glicemia", 50),
            pegarAlgodao: new Score("Pegar algodão seco", 50),
            pegarLuvas: new Score("Pegar luvas", 50),
            pegarBandeja: new Score("Pegar bandeja", 50),
            lavarMaosAntesLeito: new Score("Lavar mãos antes de ir para o leito do paciente", 200),
            falarComPaciente: new Score("Conversar com paciente", 50),
            verificarPulseira: new Score("Verificar Pulseira", 50),
            naoVerificarPulseira: new Score("Não verificar a pulseira no momemto correto", -50),
            selecionarBandeja: new Score("Selecionar Bandeja", 50),
            naoSelecionarBandeja: new Score("Não selecionar a bandeja no momemto correto", -50),
            porLuvas: new Score("Calçar luvas", 50),
            naoPorLuvas: new Score("Não calçar as luvas no momemto correto", -50),
            usarAlgodao: new Score("Usar Algodão", 50),
            naoUsarAlgodao: new Score("Não usar algodão no momemto correto", -50),
            realizarTesteGlicemia: new Score("Realizar teste de glicemia", 100),
            naoRealizarTesteGlicemia: new Score("Não realizar o teste de glicemia no momemto correto", -100),
            usarAlgodao2: new Score("Usar Algodão", 50),
            naoUsarAlgodao2: new Score("Não usar algodão no momemto correto", -50),
            explicarResultado: new Score("Explicar resultado do teste para o paciente", 150),
            naoExplicarResultado: new Score("Não explicar resultado do teste para o paciente no momemto correto", -150),
            algodaoLixoCerto: new Score("Jogar algodão no lixo branco", 50),
            agulhaLixoCerto: new Score("Jogar agulha no lixo de perfuro cortante", 50),
            elevarGradeDaCama: new Score("Elevar grade da cama", 150),
            lavarMaosAposLixos: new Score("Lavar as mãos após procedimentos", 200),
            anotarNoProntuario: new Score("Anotar no prontuário", 250)
        },
        level3: {
            irPostoEnfermagem_horaErrada: new Score("Ir ao posto de enfermagem sem precisar", -25),
            irFarmacia_horaErrada: new Score("Ir ao posto de enfermagem sem precisar", -25),
            irAlaFeminina_horaErrada: new Score("Ir ao posto de enfermagem sem precisar", -25),
            lavarMaosHoraErrada: new Score("Lavar mãos ao inves de lavar mãos técnica cirúrgica", -200),
            lavarMaosCirurgica: new Score("Lavar mãos tecnica cirurgica", 200),
            testarEquipamentos: new Score("Lavar mãos tecnica cirurgica", 250),
            lavarMaos2: new Score("Lavar mãos antes de ir ao leito", 200),
            irAoLeitoCorreto: new Score("Ir ao leito correto", 150),

        },
        level4: {
            irPostoEnfermagem_horaErrada: new Score("Ir ao posto de enfermagem em hora indevida", -25),
            irFarmacia_horaErrada: new Score("Ir a farmácia em hora indevida", -25),
            lavarMaosProntuario: new Score("Lavar mãos antes de pegar no prontuário", 200),
            checarProntuario: new Score("Checar Prontuário", 150),
            pegarPrescricaoMedica: new Score("Pegar prescrição médica", 250),
            pegarMedicamento: new Score("Pegar medicamento", 50),
            conferirMedicamento: new Score("Conferir medicamento", 300),
            calcularValorMedicamento: new Score("Calcular o valor a ser aspirado no frasco", 250),
            lavarMaosPrepararMedicacao: new Score("Lavar mãos antes de preparar o medicamento", 200),
            pegarSoroFisiológico: new Score("Pegar soro fisiológico 0,9% 100ml", 50),
            pegarSeringa5: new Score("Pegar seringa de 5ml", 50),
            pegarAgulha: new Score("Pegar agulha 40x12", 50),
            pegarAlcool: new Score("Pegar álcool 70%", 50),
            pegarAlgodao: new Score("Pegar algodão", 50),
            pegarEquipoSoroMacrogotas: new Score("Pegar equipamento de soro macrogotas", 50),
            pegarLuvas: new Score("Pegar par de luvas de procedimento", 50),
            pegarSeringa10: new Score("Pegar seringa de 10ml", 50),
            pegarAmpolaSF: new Score("Pegar ampola de soro fisiológico 0,9% 10ml", 50),
            pegarBandeja: new Score("Pegar bandeja", 50),
            pegarInstrumentos: new Score("Pegar todos os instrumentos", 350),
            confirmarMedicacao: new Score("Confirmar medicação com mentor", 150),
            prepararMedicacao: new Score("Preparar medicação", 150),
            calcularGotejamento: new Score("Calcular gotejamento de soro", 350),
            identificarMedicacao: new Score("Identificar medicacao", 250),
            lavarMaosLeito: new Score("Lavar mãos antes de ir para o leito do paciente", 200),
            checarPulseira: new Score("Verificar Pulseira", 50),
            administrarMedicacao: new Score("Administrar medicação", 250),
            gotejarSoroEquipo: new Score("Realizar gotejamento de soro no equipamento", 350),
            anotarNoProntuario: new Score("Anotar no prontuário", 200)
        },
        level5: {
            irPostoEnfermagem_horaErrada: new Score("Ir ao posto de enfermagem em hora indevida", -25),
            irFarmacia_horaErrada: new Score("Ir à farmácia sem precisar", -25),
            irAlaFeminina_horaErrada: new Score("Ir à ala feminina em hora indevida", -25),
            irAlaMasculina_horaErrada: new Score("Ir à ala masculina sem precisar", -25),
            irCentroCirurgico_horaErrada: new Score("Ir ao centro cirurgico sem precisar", -25),
            irAlaMasculina_aposFalaMentor: new Score("Ir à ala masculina mesmo após o que o mentor disse", -25),
            verProntuario: new Score("Ver Prontuário", 150),
            lavarMaosPostoEnfermagem: new Score("Lavar mãos antes de pegar os intrumentos", 200),
            pegarKitGlicemia: new Score("Pegar kit de glicemia", 50),
            pegarAlgodao: new Score("Pegar algodão seco", 50),
            pegarLuvas: new Score("Pegar luvas", 50),
            pegarBandeja: new Score("Pegar bandeja", 50),
            pegarLuvasEstereis: new Score("Pegar luvas estéreis", 50),
            pegarGaze: new Score("Pegar gaze esterilizada", 50),
            pegarFitaHipoalergenica: new Score("Pegar fita adesiva hipoalergênica", 50),
            pegarSoro: new Score("Pegar soro fisiológico 0,9% (250 ml) aquecido", 50),
            pegarSeringa: new Score("Pegar seringa de 20 ml", 50),
            pegarAgulha: new Score("Pegar agulha 40X12", 50),
            pegarTodosInstrumentos: new Score("Pegar todos os instrumentos", 350),
            lavarMaosAntesLeito: new Score("Lavar mãos antes de ir para o leito do paciente", 200),
            falarComPaciente: new Score("Conversar com paciente", 150),
            naoFalarComPaciente: new Score("Não conversar com paciente no momemto correto", -150),
            verificarPulseira: new Score("Verificar a pulseira", 100),
            naoVerificarPulseira: new Score("Não verificar a pulseira no momemto correto", -100),
            //falarComPaciente2: new Score("Conversar com paciente", 150),
            fazerTesteGlicemia: new Score("Fazer teste de glicemia capilar", 100),
            naoFazerTesteGlicemia: new Score("Não fazer teste de glicemia capilar no momemto correto", -100),
            jogarAgulhaLixoCerto: new Score("Jogar agulha no descarpax", 50),
            naoJogarAgulhaLixoCerto: new Score("Não jogar agulha no descarpax no momemto correto", -50),
            jogarAlgodaoBandeja: new Score("Jogar agulha na bandeja", 50),
            naoJogarAlgodaoBandeja: new Score("Não jogar agulha na bandeja no momemto correto", -50),
            selecionarMateriaisCurativo: new Score("Selecionar todos os materiais do curativo", 350),
            naoSelecionarMateriaisCurativo: new Score("Não selecionar todos os materiais do curativo no momemto correto", -350),
            lavarMaosAntesLuva: new Score("Lavar as mãos antes de calçar a luva estéril", 200),
            naoLavarMaosAntesLuva: new Score("Não lavar as mãos antes de calçar a luva estéril no momemto correto", -200),
            calcarLuvaProcedimento: new Score("Calçar a luva de procedimento", -150),
            calcarLuvaEsteril: new Score("Calçar a luva estéril", 150),
            naoCalcarLuvaEsteril: new Score("Não calçar a luva estéril no momemto correto", -150),
            fazerCurativo: new Score("Fazer o curativo na paciente", 150),
            naoFazerCurativo: new Score("Não fazer o curativo na paciente no momemto correto", -150),
            identificarCurativo: new Score("Identificar o curativo feito", 150),
            naoIdentificarCurativo: new Score("Não identificar o curativo feito no momemto correto", -150),
            elevarGradeDaCama: new Score("Elevar a grade da cama", 350),
            naoElevarGradeDaCama: new Score("Não elevar a grade da cama no momemto correto", -350),
            anotarNoProntuario: new Score("Anotar no prontuário", 350)
        },
        level6: {

        },
        level7: {
               irFarmacia_horaErrada: new Score("Ir para a Farmacia sem precisar", -25),
               irPostoEnfermagem_horaErrada: new Score("Ir para o Posto Enfermagem sem precisar", -25),
               irCentroCirurgico_horaErrada: new Score("Ir para o Centro Cirugico sem precisar", -25),
               irAlaMasculina_horaErrada: new Score("Ir para a Ala Masculina sem precisar", -25),

        },
        level8: {

        },
        level9: {

        }
    }
});
