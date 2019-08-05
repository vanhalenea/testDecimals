var expect = require('chai').expect;
var funciones = require("../utiles/conversiones");

describe("probamos las distintas conversiones en base 2", () => {

    it("pruebo converir de decimal a binario", ()=>{
        expect(funciones.decimalToBinario(100)).to.equals('1100100');
    })

    it("pruebo converir de binario a decimal", ()=>{
        expect(funciones.binarioToDecimal(1001)).to.equals(9);
    })

    it("pruebo converir de binario a decimal con nueva funcion", ()=>{
        expect(funciones.binarioToDecimalSecondFn(11)).to.equals(3);
    })

    it("pruebo convertir un numero mas una base por parametro a decimal", ()=>{
        expect(funciones.AnyBaseToDecimal(10, 10)).to.equals(10);
    })


})