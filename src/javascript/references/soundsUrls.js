/**
 * @author Otho - Marcelo Lopes Lotufo
 */
define(function() {

    var masterVolume = 1;
    var baseDir = "./sounds/";
    var paths = {
        sfx: {
            abrirGaveta: [
                "gavetaAbrindo1.mp3",
                "gavetaAbrindo2.mp3"
            ],
            abrirPorta: [
                "portaAbrindo1.mp3",
                "portaAbrindo2.mp3"
            ],
            bip: [
                "beepTermometroOximetro.mp3"
            ],
            bombinha: [
                "bombinhaEsfigmnanometro.mp3"
            ],
            campainha: [
                "campainha1.mp3",
                "campainha2.mp3"
            ],
            clique: [
                "cliqueDeLuzBotaoCampainhaEtc.mp3"
            ],
            escrever: [
                "escrevendoPapel.mp3"
            ],
            fecharGaveta: [
                "gavetaFechando.mp3"
            ],
            jogandoLixo: [
                "jogandoLixo.mp3"
            ],
            lavarMaos: [
                "lavandoMaos.mp3"
            ],
            mesaComRodinha: [
                "mesaComRodinha.mp3"
            ],
            missaoCumprida: [
                "missaoCumprida.mp3"
            ],
            monitorCoracao: [
                "beepsMonitorCoracao.mp3"
            ],
            objeto: [
                "efeitoObjeto1.mp3",
                "efeitoObjeto2.mp3",
                "efeitoObjeto3.mp3"
            ],
            pegarObjeto: [
                "somParaColetarItens.mp3"
            ],
            selecionarMenu: [
                "menuSelect.mp3"
            ],
            ticTac: [
                "tictacRelogioDePulso.mp3"
            ]
        },
        musics: {
            menu: [ "cuidandoBemDoMenu.mp3" ],
            inGame: [
                "cuidandoBemDosPacientes1.mp3",
                "cuidandoBemDosPacientes2.mp3",
                "cuidandoBemDosPacientes3.mp3"
            ]
        },
        loops: {
            recepcao: [ "sonsAmbienteHospitalRecepcao.mp3" ]
        }

    };

    return {
        baseDir: baseDir,
        paths: paths,
        masterVolume: masterVolume
    };
});
