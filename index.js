let distanceInly = prompt("digite a distância em anos luz")

let chosenOption = prompt("para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade astronomica" +
                "\n 3. quilometros (km) \n\n (digite o número da opção desejada) " )

let chosenUnity
let converteDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        converteDistance = distanceInly * 0.306601
        break
    case "2":
        chosenUnity = "Unidade astronomica"
        converteDistance = distanceInly * 63241.1
        break
     case "3":
        chosenUnity = "quilometros "
        converteDistance = distanceInly * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "unidade não indentificada"
        converteDistance = "conversão fora de alcance"
      
}
alert("Distância em anos luz: "+ distanceInly +"\n" + chosenUnity + ": " + converteDistance)
