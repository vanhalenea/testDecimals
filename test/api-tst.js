var expect = require('chai').expect;
var request = require("request");

describe("probaremos los EP de node", function() {

    it('debería retornar el saludo = hola que tal', (done) => {
        request.get("http://localhost:3000/saludo",function(error, response) {
            expect(response.body).to.equal('hola que tal');
            done();
        })  
    })

})