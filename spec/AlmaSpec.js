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
    });
});
