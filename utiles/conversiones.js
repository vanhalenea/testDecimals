
function decimalToBinario(decimal){
    let decimalEnBinario = decimal.toString(2); // A la base 2
    return decimalEnBinario
}

function binarioToDecimal(binario){
    let binarioEnDecimal = parseInt(binario, 2); // La base es 2
    return binarioEnDecimal;
}

function binarioToDecimalSecondFn(nBinario) {
    //uso de metodo de duplicacion, codigo transcrito desde wikihow https://es.wikihow.com/convertir-binario-a-decimal
    
    base = 2;
    numResultado = 0;
    resultArray = [];

    // formula =  numAnterior x base + digito del recorrido del numero binatio
    arrayNumBin = nBinario.toString().split('').map(t => {
        
        numConvert = parseInt(t);
        numResultado = numResultado * base  + numConvert;
    });
    
    return numResultado;
}

function AnyBaseToDecimal(num, nBase) {
    //uso de metodo de duplicacion, codigo transcrito desde wikihow https://es.wikihow.com/convertir-binario-a-decimal
    
    base = nBase;
    numResultado = 0;
    resultArray = [];

    // formula =  numAnterior x base + digito del recorrido del numero binatio
    arrayNumBin = num.toString().split('').map(t => {
        
        numConvert = parseInt(t);
        numResultado = numResultado * base  + numConvert;
    });
    
    return numResultado;
}

  
module.exports = { decimalToBinario, binarioToDecimal, binarioToDecimalSecondFn, AnyBaseToDecimal};

  