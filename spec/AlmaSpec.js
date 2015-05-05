describe("Alma", function () {

    describe("random chains", function () {
        it("string -> required().string().number()", function () {
            expect(alma('string').required().string().number().evaluate()).toBeFalsy();
        });
        it("number -> required().string().number()", function () {
            expect(alma(2332).required().string().number().evaluate()).toBeFalsy();
        });
        it("empty string -> string().required()", function () {
            expect(alma('').string().required().evaluate()).toBeFalsy();
        });
        it("1234 -> moreThan(4).required().number().notEqual(233).length(4)", function () {
            expect(alma(1234).moreThan(4).required().number().notEqual(233).length(4).evaluate()).toBeTruthy();
        });
    });
});
