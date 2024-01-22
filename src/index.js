const nome = "Kratos";
const xp = 15000;

if(xp <= 1000){
    console.log(nome + " está no nível Ferro!")
} else if (xp >= 1001 && xp <= 2000) {
    console.log(nome + " está no nível Bronze!")
} else if (xp >= 2001 && xp <= 5000) {
    console.log(nome + " está no nível Prata!")
} else if (xp >= 5001 && xp <= 7000) {
    console.log(nome + " está no nível Ouro!")
} else if (xp >= 7001 && xp <= 9000) {
    console.log(nome + " está no nível Platina!")
} else if (xp >= 9001 && xp <= 11000) {
    console.log(nome + " está no nível Ascendente!")
} else if (xp >= 11001 && xp <= 13000) {
    console.log(nome + " está no nível Radiante!")
} else {
    console.log(nome + " está no nível Imortal!")
}