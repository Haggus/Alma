describe("Required", function () {

    describe("Testing 'required' function", function () {
        it("when argument is a number", function () {
            expect(alma(5).required().evaluate()).toBeTruthy();
        });
        it("when argument is NaN", function () {
            expect(alma(NaN).required().evaluate()).toBeFalsy();
        });
        it("when argument is a string", function () {
            expect(alma('random string').required().evaluate()).toBeTruthy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').required().evaluate()).toBeFalsy();
        });
        it("when argument is empty", function () {
            expect(alma().required().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).required().evaluate()).toBeFalsy();
        });
    });
});
