describe("MoreThan", function () {

    describe("Testing 'moreThan' function", function () {
        it("24 is more than 3", function () {
            expect(alma(24).moreThan(2).evaluate()).toBeTruthy();
        });
        it("0 has length 1", function () {
            expect(alma(0).length(1).evaluate()).toBeTruthy();
        });
        it("0 has length 0", function () {
            expect(alma(0).length(0).evaluate()).toBeFalsy();
        });
        it("NaN has length 3", function () {
            expect(alma(NaN).length(3).evaluate()).toBeFalsy();
        });
        it("6 has length NaN", function () {
            expect(alma(6).length(NaN).evaluate()).toBeFalsy();
        });
        it("'23' has length 2", function () {
            expect(alma('23').length(2).evaluate()).toBeTruthy();
        });
        it("'random string' has length -1", function () {
            expect(alma('random string').length(-1).evaluate()).toBeFalsy();
        });
        it("empty string has length 10", function () {
            expect(alma('').length(10).evaluate()).toBeFalsy();
        });
        it("empty has length empty", function () {
            expect(alma().length().evaluate()).toBeFalsy();
        });
        it("null has length 5", function () {
            expect(alma(null).length(5).evaluate()).toBeFalsy();
        });
    });
});