
function decimalToBinario(decimal){
    let decimalEnBinario = decimal.toString(2); // A la base 2
    return decimalEnBinario
}

function binarioToDecimal(binario){
    let binarioEnDecimal = parseInt(binario, 2); // La base es 2
    return binarioEnDecimal;
}

  
module.exports = { decimalToBinario, binarioToDecimal };

  