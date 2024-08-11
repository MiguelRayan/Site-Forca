let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let tentativas = 6;

const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria: "PAÍS / LUGAR"
    },
    palavra002 = {
        nome: "BOLIVIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra003 = {
        nome: "PARAGUAI",
        categoria: "PAÍS / LUGAR"
    },
    palavra004 = {
        nome: "URUGUAI",
        categoria: "PAÍS / LUGAR"
    },
    palavra005 = {
        nome: "ARGENTINA",
        categoria: "PAÍS / LUGAR"
    },
    palavra006 = {
        nome: "CANADA",
        categoria: "PAÍS / LUGAR"
    },
    palavra007 = {
        nome: "MEXICO",
        categoria: "PAÍS / LUGAR"
    },
    palavra008 = {
        nome: "ESPANHA",
        categoria: "PAÍS / LUGAR"
    },
    palavra009 = {
        nome: "PORTUGAL",
        categoria: "PAÍS / LUGAR"
    },
    palavra010 = {
        nome: "ITALIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra011 = {
        nome: "FRANÇA",
        categoria: "PAÍS / LUGAR"
    },
    palavra012 = {
        nome: "GRECIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra013 = {
        nome: "ALEMANHA",
        categoria: "PAÍS / LUGAR"
    },
    palavra014 = {
        nome: "AUSTRIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra015 = {
        nome: "POLONIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra016 = {
        nome: "IRLANDA",
        categoria: "PAÍS / LUGAR"
    },
    palavra017 = {
        nome: "ISLANDIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra018 = {
        nome: "GROENLANDIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra019 = {
        nome: "UCRANIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra020 = {
        nome: "RUSSIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra021 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra022 = {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra023 = {
        nome: "LEAO",
        categoria: "ANIMAIS"
    },
    palavra024 = {
        nome: "GIRAFA",
        categoria: "ANIMAIS"
    },
    palavra025 = {
        nome: "LOBO",
        categoria: "ANIMAIS"
    },
    palavra026 = {
        nome: "BALEIA",
        categoria: "ANIMAIS"
    },
    palavra027 = {
        nome: "GOLFINHO",
        categoria: "ANIMAIS"
    },
    palavra028 = {
        nome: "CORVO",
        categoria: "ANIMAIS"
    },
    palavra029 = {
        nome: "SAPO",
        categoria: "ANIMAIS"
    },
    palavra030 = {
        nome: "TARTARUGA",
        categoria: "ANIMAIS"
    },
    palavra031 = {
        nome: "PORCO",
        categoria: "ANIMAIS"
    },
    palavra032 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra033 = {
        nome: "CRISTO REDENTOR",
        categoria: "PAÍS / LUGAR"
    },
    palavra034 = {
        nome: "ARCO DO TRIUNFO",
        categoria: "PAÍS / LUGAR"
    },
    palavra035 = {
        nome: "TORRE EIFFEL",
        categoria: "PAÍS / LUGAR"
    },
    palavra036 = {
        nome: "TORRE DE PISA",
        categoria: "PAÍS / LUGAR"
    },
    palavra037 = {
        nome: "MACHU PICCHU",
        categoria: "PAÍS / LUGAR"
    },
    palavra038 = {
        nome: "COLISEU",
        categoria: "PAÍS / LUGAR"
    },
    palavra039 = {
        nome: "TAJ MAHAL",
        categoria: "PAÍS / LUGAR"
    },
    palavra040 = {
        nome: "MOAI",
        categoria: "PAÍS / LUGAR"
    },
    palavra041 = {
        nome: "MAÇA",
        categoria: "FRUTA"
    },
    palavra042 = {
        nome: "BANANA",
        categoria: "FRUTA"
    },
    palavra043 = {
        nome: "KIWI",
        categoria: "FRUTA"
    },
    palavra044 = {
        nome: "LARANJA",
        categoria: "FRUTA"
    },
    palavra045 = {
        nome: "MORANGO",
        categoria: "FRUTA"
    },
    palavra046 = {
        nome: "MANGA",
        categoria: "FRUTA"
    },
    palavra047 = {
        nome: "UVA",
        categoria: "FRUTA"
    },
    palavra048 = {
        nome: "MEXERICA",
        categoria: "FRUTA"
    },
    palavra049 = {
        nome: "CEREJA",
        categoria: "FRUTA"
    },
    palavra050 = {
        nome: "FRAMBOESA",
        categoria: "FRUTA"
    },
    palavra051 = {
        nome: "PESSEGO",
        categoria: "FRUTA"
    },
    palavra052 = {
        nome: "MELANCIA",
        categoria: "FRUTA"
    },
    palavra053 = {
        nome: "ABACATE",
        categoria: "FRUTA"
    },
    palavra054 = {
        nome: "ABACAXI",
        categoria: "FRUTA"
    },
    palavra055 = {
        nome: "LIMAO",
        categoria: "FRUTA"
    },
    palavra056 = {
        nome: "CIENTISTA",
        categoria: "PROFISSÃO"
    },
    palavra057 = {
        nome: "MEDICO",
        categoria: "PROFISSÃO"
    },
    palavra058 = {
        nome: "ADVOGADO",
        categoria: "PROFISSÃO"
    },
    palavra059 = {
        nome: "PROFESSOR",
        categoria: "PROFISSÃO"
    },
    palavra060 = {
        nome: "FAXINEIRO",
        categoria: "PROFISSÃO"
    },
    palavra061 = {
        nome: "BOMBEIRO",
        categoria: "PROFISSÃO"
    },
    palavra062 = {
        nome: "POLICIAL",
        categoria: "PROFISSÃO"
    },
    palavra063 = {
        nome: "COZINHEIRO",
        categoria: "PROFISSÃO"
    },
    palavra064 = {
        nome: "SEGURANÇA",
        categoria: "PROFISSÃO"
    },
    palavra065 = {
        nome: "JORNALISTA",
        categoria: "PROFISSÃO"
    },
    palavra066 = {
        nome: "ATOR",
        categoria: "PROFISSÃO"
    },
    palavra067 = {
        nome: "AÇOUGUEIRO",
        categoria: "PROFISSÃO"
    },
    palavra068 = {
        nome: "CONTADOR",
        categoria: "PROFISSÃO"
    },
    palavra069 = {
        nome: "CANTOR",
        categoria: "PROFISSÃO"
    },
    palavra070 = {
        nome: "FERREIRO",
        categoria: "PROFISSÃO"
    },
    palavra071 = {
        nome: "LEGIAO URBANA",
        categoria: "BANDA MUSICAL"
    },
    palavra072 = {
        nome: "RAIMUNDOS",
        categoria: "BANDA MUSICAL"
    },
    palavra073 = {
        nome: "TITAS",
        categoria: "BANDA MUSICAL"
    },
    palavra074 = {
        nome: "PARALAMAS DO SUCESSO",
        categoria: "BANDA MUSICAL"
    },
    palavra075 = {
        nome: "BARAO VERMELHO",
        categoria: "BANDA MUSICAL"
    },
    palavra076 = {
        nome: "NX ZERO",
        categoria: "BANDA MUSICAL"
    },
    palavra077 = {
        nome: "ENGENHEIROS DO HAWAII",
        categoria: "BANDA MUSICAL"
    },
    palavra078 = {
        nome: "SKANK",
        categoria: "BANDA MUSICAL"
    },
    palavra079 = {
        nome: "CAPITAL INICIAL",
        categoria: "BANDA MUSICAL"
    },
    palavra080 = {
        nome: "SEPULTURA",
        categoria: "BANDA MUSICAL"
    },
    palavra081 = {
        nome: "CENOURA",
        categoria: "VEGETAIS"
    },
    palavra082 = {
        nome: "ALFACE",
        categoria: "VEGETAIS"
    },
    palavra083 = {
        nome: "TOMATE",
        categoria: "VEGETAIS"
    },
    palavra084 = {
        nome: "BATATA",
        categoria: "VEGETAIS"
    },
    palavra085 = {
        nome: "ESPINAFRE",
        categoria: "VEGETAIS"
    },
    palavra086 = {
        nome: "COUVE",
        categoria: "VEGETAIS"
    },
    palavra087 = {
        nome: "BROCOLIS",
        categoria: "VEGETAIS"
    },
    palavra088 = {
        nome: "PEPINO",
        categoria: "VEGETAIS"
    },
    palavra089 = {
        nome: "ABOBORA",
        categoria: "VEGETAIS"
    },
    palavra090 = {
        nome: "BETERRABA",
        categoria: "VEGETAIS"
    },
    palavra091 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra092 = {
        nome: "BORRACHA",
        categoria: "OBJETOS"
    },
    palavra093 = {
        nome: "CADERNO",
        categoria: "OBJETOS"
    },
    palavra094 = {
        nome: "TESOURA",
        categoria: "OBJETOS"
    },
    palavra095 = {
        nome: "REGUA",
        categoria: "OBJETOS"
    },
    palavra096 = {
        nome: "MOCHILA",
        categoria: "OBJETOS"
    },
    palavra097 = {
        nome: "CANETA",
        categoria: "OBJETOS"
    },
    palavra098 = {
        nome: "GRAMPEADOR",
        categoria: "OBJETOS"
    },
    palavra099 = {
        nome: "LIVRO",
        categoria: "OBJETOS"
    },
    palavra100 = {
        nome: "CALCULADORA",
        categoria: "OBJETOS"
    },
    palavra101 = {
        nome: "COMPUTADOR",
        categoria: "OBJETOS"
    },
    palavra102 = {
        nome: "CELULAR",
        categoria: "OBJETOS"
    },
    palavra103 = {
        nome: "MOUSE",
        categoria: "OBJETOS"
    },
    palavra104 = {
        nome: "TECLADO",
        categoria: "OBJETOS"
    },
    palavra105 = {
        nome: "MONITOR",
        categoria: "OBJETOS"
    },
    palavra106 = {
        nome: "IMPRESSORA",
        categoria: "OBJETOS"
    },
    palavra107 = {
        nome: "CADEIRA",
        categoria: "OBJETOS"
    },
    palavra108 = {
        nome: "MESA",
        categoria: "OBJETOS"
    },
    palavra109 = {
        nome: "LUMINARIA",
        categoria: "OBJETOS"
    },
    palavra110 = {
        nome: "VENTILADOR",
        categoria: "OBJETOS"
    },
    palavra111 = {
        nome: "GARRAFA",
        categoria: "OBJETOS"
    },
    palavra112 = {
        nome: "PANELA",
        categoria: "OBJETOS"
    },
    palavra113 = {
        nome: "TALHER",
        categoria: "OBJETOS"
    },
    palavra114 = {
        nome: "PRATO",
        categoria: "OBJETOS"
    },
    palavra115 = {
        nome: "COPO",
        categoria: "OBJETOS"
    },
    palavra116 = {
        nome: "TELEVISAO",
        categoria: "OBJETOS"
    },
    palavra117 = {
        nome: "OCULOS",
        categoria: "OBJETOS"
    },
    palavra118 = {
        nome: "BARALHO",
        categoria: "OBJETOS"
    },
    palavra119 = {
        nome: "CHAVE",
        categoria: "OBJETOS"
    },
    palavra120 = {
        nome: "RELOGIO",
        categoria: "OBJETOS"
    },
    palavra121 = {
        nome: "BONECA",
        categoria: "BRINQUEDOS"
    },
    palavra122 = {
        nome: "CARRINHO",
        categoria: "BRINQUEDOS"
    },
    palavra123 = {
        nome: "BOLA",
        categoria: "BRINQUEDOS"
    },
    palavra124 = {
        nome: "QUEBRA CABEÇA",
        categoria: "BRINQUEDOS"
    },
    palavra125 = {
        nome: "URSO DE PELUCIA",
        categoria: "BRINQUEDOS"
    },
    palavra126 = {
        nome: "LEGO",
        categoria: "BRINQUEDOS"
    },
    palavra127 = {
        nome: "PIAO",
        categoria: "BRINQUEDOS"
    },
    palavra128 = {
        nome: "BICICLETA",
        categoria: "BRINQUEDOS"
    },
    palavra129 = {
        nome: "PATINS",
        categoria: "BRINQUEDOS"
    },
    palavra130 = {
        nome: "JOGO DE TABULEIRO",
        categoria: "BRINQUEDOS"
    },
    palavra131 = {
        nome: "PATINETE",
        categoria: "BRINQUEDOS"
    },
    palavra132 = {
        nome: "TRICICLO",
        categoria: "BRINQUEDOS"
    },
    palavra133 = {
        nome: "BOLICHE",
        categoria: "BRINQUEDOS"
    },
    palavra134 = {
        nome: "MARIONETE",
        categoria: "BRINQUEDOS"
    },
    palavra135 = {
        nome: "FANTOCHES",
        categoria: "BRINQUEDOS"
    },
    palavra136 = {
        nome: "AVIAOZINHO",
        categoria: "BRINQUEDO / PROFISSAO"
    },
    palavra137 = {
        nome: "TRENZINHO",
        categoria: "BRINQUEDOS"
    },
    palavra138 = {
        nome: "CASINHA DE BONECA",
        categoria: "BRINQUEDOS"
    },
    palavra139 = {
        nome: "ESCORREGADOR",
        categoria: "BRINQUEDOS"
    },
    palavra140 = {
        nome: "GIRA GIRA",
        categoria: "BRINQUEDOS"
    },
    palavra141 = {
        nome: "MONGOLIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra142 = {
        nome: "MALASIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra143 = {
        nome: "ESTADOS UNIDOS",
        categoria: "PAÍS / LUGAR"
    },
    palavra144 = {
        nome: "TAILANDIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra145 = {
        nome: "AFEGANISTAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra146 = {
        nome: "EGITO",
        categoria: "PAÍS / LUGAR"
    },
    palavra147 = {
        nome: "FILIPINAS",
        categoria: "PAÍS / LUGAR"
    },
    palavra148 = {
        nome: "JAPAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra149 = {
        nome: "CHINA",
        categoria: "PAÍS / LUGAR"
    },
    palavra150 = {
        nome: "INDIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra151 = {
        nome: "AUSTRALIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra152 = {
        nome: "HOLANDA",
        categoria: "PAÍS / LUGAR"
    },
    palavra153 = {
        nome: "NORUEGA",
        categoria: "PAÍS / LUGAR"
    },
    palavra154 = {
        nome: "REINO UNIDO",
        categoria: "PAÍS / LUGAR"
    },
    palavra155 = {
        nome: "SENEGAL",
        categoria: "PAÍS / LUGAR"
    },
    palavra156 = {
        nome: "TURQUIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra157 = {
        nome: "AFRICA DO SUL",
        categoria: "PAÍS / LUGAR"
    },
    palavra158 = {
        nome: "SUECIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra159 = {
        nome: "BELGICA",
        categoria: "PAÍS / LUGAR"
    },
    palavra160 = {
        nome: "COREIA DO SUL",
        categoria: "PAÍS / LUGAR"
    },
    palavra161 = {
        nome: "PSICOLOGO",
        categoria: "PROFISSÃO"
    },
    palavra162 = {
        nome: "NUTRICIONISTA",
        categoria: "PROFISSÃO"
    },
    palavra167 = {
        nome: "ARQUITETO",
        categoria: "PROFISSÃO"
    },
    palavra168 = {
        nome: "DESIGNER",
        categoria: "PROFISSÃO"
    },
    palavra169 = {
        nome: "FARMACEUTICO",
        categoria: "PROFISSÃO"
    },
    palavra170 = {
        nome: "VETERINARIO",
        categoria: "PROFISSÃO"
    },
    palavra171 = {
        nome: "PROGRAMADOR",
        categoria: "PROFISSÃO"
    },
    palavra172 = {
        nome: "BIOLOGO",
        categoria: "PROFISSÃO"
    },
    palavra173 = {
        nome: "PILOTO",
        categoria: "PROFISSÃO"
    },
    palavra174 = {
        nome: "MINECRAFT",
        categoria: "JOGO ONLINE"
    },
    palavra175 = {
        nome: "LEAGUE OF LEGENDS",
        categoria: "JOGO ONLINE"
    },
    palavra176 = {
        nome: "FORTNITE",
        categoria: "JOGO ONLINE"
    },
    palavra177 = {
        nome: "DOTA",
        categoria: "JOGO ONLINE"
    },
    palavra178 = {
        nome: "WORLD OF WARCRAFT",
        categoria: "JOGO ONLINE"
    },
    palavra179 = {
        nome: "FREE FIRE",
        categoria: "JOGO ONLINE"
    },
    palavra180 = {
        nome: "OVERWATCH",
        categoria: "JOGO ONLINE"
    },
    palavra181 = {
        nome: "APEX LEGENDS",
        categoria: "JOGO ONLINE"
    },
    palavra182 = {
        nome: "VALORANT",
        categoria: "JOGO ONLINE"
    },
    palavra183 = {
        nome: "ROCKET LEAGUE",
        categoria: "JOGO ONLINE"
    },
    palavra184 = {
        nome: "CALL OF DUTY",
        categoria: "JOGO ONLINE"
    },
    palavra185 = {
        nome: "HADES",
        categoria: "JOGO ONLINE"
    },
    palavra186 = {
        nome: "DIABLO",
        categoria: "JOGO ONLINE"
    },
    palavra187 = {
        nome: "RUNESCAPE",
        categoria: "JOGO ONLINE"
    },
    palavra188 = {
        nome: "TERRARIA",
        categoria: "JOGO ONLINE"
    },
    palavra189 = {
        nome: "APEX LEGENDS",
        categoria: "JOGO ONLINE"
    },
    palavra190 = {
        nome: "WARFRAME",
        categoria: "JOGO ONLINE"
    },
    palavra191 = {
        nome: "COUNTER STRIKE",
        categoria: "JOGO ONLINE"
    },
    palavra192 = {
        nome: "FINAL FANTASY",
        categoria: "JOGO ONLINE"
    },
    palavra193 = {
        nome: "STREET FIGHTER",
        categoria: "JOGO ONLINE"
    },
    palavra194 = {
        nome: "FIFA",
        categoria: "JOGO ONLINE"
    },
    palavra195 = {
        nome: "VALHEIM",
        categoria: "JOGO ONLINE"
    },
    palavra196 = {
        nome: "GRAND THEFT AUTO",
        categoria: "JOGO ONLINE"
    },
    palavra197 = {
        nome: "SEA OF THIEVES",
        categoria: "JOGO ONLINE"
    },
    palavra198 = {
        nome: "PHASMOPHOBIA",
        categoria: "JOGO ONLINE"
    },
    palavra199 = {
        nome: "HOLLOW KNIGHT",
        categoria: "JOGO ONLINE"
    },
    palavra200 = {
        nome: "AMONG US",
        categoria: "JOGO ONLINE"
    },
    palavra201 = {
        nome: "GOD OF WAR",
        categoria: "JOGO ONLINE"
    },
    palavra202 = {
        nome: "TETRIS",
        categoria: "JOGO ONLINE"
    },
    palavra203 = {
        nome: "RED DEAD REDEMPTION",
        categoria: "JOGO ONLINE"
    },
    palavra204 = {
        nome: "TERRARIA",
        categoria: "JOGO ONLINE"
    },
    palavra205 = {
        nome: "OVERWATCH",
        categoria: "JOGO ONLINE"
    },
    palavra206 = {
        nome: "PAC MAN",
        categoria: "JOGO ONLINE"
    },
    palavra207 = {
        nome: "DEAD BY DAYLIGHT",
        categoria: "JOGO ONLINE"
    },
    palavra208 = {
        nome: "SUPER MARIO",
        categoria: "JOGO ONLINE"
    },
    palavra209 = {
        nome: "RESIDENT EVIL",
        categoria: "JOGO ONLINE"
    },
    palavra209 = {
        nome: "COCO",
        categoria: "FRUTA"
    },
    palavra210 = {
        nome: "JABUTICABA",
        categoria: "FRUTA"
    },
    palavra211 = {
        nome: "GRAVIOLA",
        categoria: "FRUTA"
    },
    palavra212 = {
        nome: "CAJU",
        categoria: "FRUTA"
    },
    palavra213 = {
        nome: "MANGABA",
        categoria: "FRUTA"
    },
    palavra214 = {
        nome: "MAMAO",
        categoria: "FRUTA"
    },
    palavra215 = {
        nome: "TAMARINDO",
        categoria: "FRUTA"
    },
    palavra216 = {
        nome: "GOIABA",
        categoria: "FRUTA"
    },
    palavra217 = {
        nome: "PERA",
        categoria: "FRUTA"
    },
    palavra216 = {
        nome: "ARABIA SAUDITA",
        categoria: "PAÍS / LUGAR"
    },
    palavra217 = {
        nome: "SIBERIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra218 = {
        nome: "UZBEQUISTAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra219 = {
        nome: "KIRGUISTAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra220 = {
        nome: "TURCOMENISTAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra221 = {
        nome: "ARMENIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra222 = {
        nome: "GEORGIA",
        categoria: "PAÍS / LUGAR"
    },
    palavra223 = {
        nome: "QATAR",
        categoria: "PAÍS / LUGAR"
    },
    palavra224 = {
        nome: "PAQUISTAO",
        categoria: "PAÍS / LUGAR"
    },
    palavra225 = {
        nome: "VIETNA",
        categoria: "PAÍS / LUGAR"
    },
    palavra226 = {
        nome: "MONACO",
        categoria: "PAÍS / LUGAR"
    },
    palavra227 = {
        nome: "LIBANO",
        categoria: "PAÍS / LUGAR"
    },
    palavra228 = {
        nome: "SINGAPURA",
        categoria: "PAÍS / LUGAR"
    },
    palavra229 = {
        nome: "ISRAEL",
        categoria: "PAÍS / LUGAR"
    },
    palavra230 = {
        nome: "PALESTINA",
        categoria: "PAÍS / LUGAR"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    // console.log(palavraSecretaSorteada)
    // console.log(palavraSecretaCategoria)
}

montarPalavraTela();
function montarPalavraTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i=0; i<palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            }else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }

        }else{
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            }else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        }
    }
}

function verificarLetraEscolhida(letra){
    document.getElementById("tecla-"+ letra).disabled = true;

    if(tentativas > 0){
        mudarStyleLetra("tecla-"+ letra);
        comparaListas(letra);
        montarPalavraTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#708090"
    document.getElementById(tecla).style.color = "#000000"
}

function comparaListas(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra);

    if(posicao < 0){
        tentativas--;
        imagensForca();
        if(tentativas == 0){
            abreModal("Fim de jogo", "Não foi dessa vez... A palavra secreta era: <br>" + palavraSecretaSorteada);
        }
    }else{
        for(i=0; i<palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i=0; i<palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("Parabéns!", "Você venceu 🏆");
        tentativas = 0;
    }
}

function imagensForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca-cabeca.png')";
            break;
        
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca-torso.png')";
            break;

        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca-braco1.png')";
            break;

        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca-braco2.png')";
            break;

        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca-perna1.png')";
            break;

        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca-perna2.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#tecla-Reiniciar");
btnReiniciar.addEventListener("click", function(){
    location.reload();
});