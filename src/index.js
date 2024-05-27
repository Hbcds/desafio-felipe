// alerta inicial declarando nome
var heroi = window.prompt("ola heroi, qual seu nome", heroi)
 window.alert('é um prazer heroi: ' + heroi)

//declarando xp
 var xp = Number(window.prompt("heroi " + heroi + " Quanto xp foi acumulado durante sua jonada? ", xp))
if (xp <= 1000) {
    titulo = "Ferro"
} else if (xp <= 2000) {
    titulo = "Bronze"
} else if (xp <= 5000) {
    titulo = "Prata"
} else if (xp <= 7000) {
    titulo = "Ouro"
} else if (xp <= 8000) {
    titulo = "Platina"
} else if (xp <= 9000) {
    titulo = "Ascendente"
} else if (xp <= 10000) {
    titulo = "Imortal"
} else if (xp >= 10001) {
    titulo = "Radiante"
} else {
    titulo = "Ninguem"
}
 window.alert("que otimo heroi " + heroi + " com essa quantidade de xp você se torna: " + heroi +" o "+ titulo)
 
 window.document.write("O Herói de nome " + heroi + " está no nível "+ titulo)