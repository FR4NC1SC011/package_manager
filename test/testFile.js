const sumar = require("../index");
const assert = require("assert");

describe("Probar suma de dos numeros", () => {
  it("Cinco mas Cinco SON Diez", () => {
    assert.equal(10, sumar(5, 5));
  });

  it("Cinco mas Siete NO SON 10", () => {
    assert.notEqual(10, sumar(5, 7));
  });

});


