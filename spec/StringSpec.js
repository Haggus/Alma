describe("String", function () {

    describe("Testing 'string' function", function () {
        it("when argument is a number", function () {
            expect(alma(0).string().evaluate()).toBeFalsy();
        });
        it("when argument is NaN", function () {
            expect(alma(NaN).string().evaluate()).toBeFalsy();
        });
        it("when argument is a string", function () {
            expect(alma('323').string().evaluate()).toBeTruthy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').string().evaluate()).toBeTruthy();
        });
        it("when argument is empty", function () {
            expect(alma().string().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).string().evaluate()).toBeFalsy();
        });
    });
});
