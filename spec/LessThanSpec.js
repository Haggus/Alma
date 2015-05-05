describe("LessThan", function () {

    describe("Testing 'lessThan' function", function () {
        it("2 is less than 23", function () {
            expect(alma(2).lessThan(23).evaluate()).toBeTruthy();
        });
        it("0 is less than 1", function () {
            expect(alma(0).lessThan(1).evaluate()).toBeFalsy();
        });
        it("0 is less than 0", function () {
            expect(alma(0).lessThan(0).evaluate()).toBeFalsy();
        });
        it("NaN is less than 3", function () {
            expect(alma(NaN).lessThan(3).evaluate()).toBeFalsy();
        });
        it("6 is less than NaN", function () {
            expect(alma(6).lessThan(NaN).evaluate()).toBeFalsy();
        });
        it("'23' is less than 27", function () {
            expect(alma('23').lessThan(27).evaluate()).toBeTruthy();
        });
        it("'random string' is less than -1", function () {
            expect(alma('random string').lessThan(-1).evaluate()).toBeFalsy();
        });
        it("empty string is less than 10", function () {
            expect(alma('').lessThan(10).evaluate()).toBeFalsy();
        });
        it("empty is less than empty", function () {
            expect(alma().lessThan().evaluate()).toBeFalsy();
        });
        it("null is less than 5", function () {
            expect(alma(null).lessThan(5).evaluate()).toBeFalsy();
        });
    });
});