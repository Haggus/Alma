describe("Equal", function () {

    describe("Testing 'equal' function", function () {
        it("2 is equal to 2", function () {
            expect(alma(2).equal(2).evaluate()).toBeTruthy();
        });
        it("0 is equal to 1", function () {
            expect(alma(0).equal(1).evaluate()).toBeFalsy();
        });
        it("1 is equal to '1'", function () {
            expect(alma(1).equal('1').evaluate()).toBeFalsy();
        });
        it("NaN is equal to 3", function () {
            expect(alma(NaN).equal(3).evaluate()).toBeFalsy();
        });
        it("6 is equal to null", function () {
            expect(alma(6).equal(null).evaluate()).toBeFalsy();
        });
        it("'!' is equal to 53", function () {
            expect(alma('!').equal(53).evaluate()).toBeFalsy();
        });
    });
});