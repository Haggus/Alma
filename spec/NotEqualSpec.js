describe("NotEqual", function () {

    describe("Testing 'notEqual' function", function () {
        it("2 is not equal to 2", function () {
            expect(alma(2).notEqual(2).evaluate()).toBeFalsy();
        });
        it("0 is not equal to 1", function () {
            expect(alma(0).notEqual(1).evaluate()).toBeTruthy();
        });
        it("1 is not equal to '1'", function () {
            expect(alma(1).notEqual('1').evaluate()).toBeTruthy();
        });
        it("NaN is not equal to 3", function () {
            expect(alma(NaN).notEqual(3).evaluate()).toBeTruthy();
        });
        it("6 is not equal to null", function () {
            expect(alma(6).notEqual(null).evaluate()).toBeTruthy();
        });
        it("'!' is not equal to 53", function () {
            expect(alma('!').notEqual(53).evaluate()).toBeTruthy();
        });
    });
});