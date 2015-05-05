describe("Number", function () {

    describe("Testing 'number' function", function () {
        it("when argument is a number", function () {
            expect(alma(24).number().evaluate()).toBeTruthy();
        });
        it("when argument is zero", function () {
            expect(alma(0).number().evaluate()).toBeTruthy();
        });
        it("when argument is NaN", function () {
            expect(alma(NaN).number().evaluate()).toBeFalsy();
        });
        it("when argument is a number inside a string ('23')", function () {
            expect(alma('23').number().evaluate()).toBeTruthy();
        });
        it("when argument is a string", function () {
            expect(alma('random string').number().evaluate()).toBeFalsy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').number().evaluate()).toBeFalsy();
        });
        it("when argument is empty", function () {
            expect(alma().number().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).number().evaluate()).toBeFalsy();
        });
    });
});
