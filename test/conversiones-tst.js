var expect = require('chai').expect;
var funciones = require("../utiles/conversiones");

describe("probamos las distintas conversiones en base 2", () => {

    it("pruebo converir de decimal a binario", ()=>{
        expect(funciones.decimalToBinario(100)).to.equals('1100100');
    })

    it("pruebo converir de binario a decimal", ()=>{
        expect(funciones.binarioToDecimal(1001)).to.equals(9);
    })

})