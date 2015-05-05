describe("MoreThan", function () {

    describe("Testing 'moreThan' function", function () {
        it("24 is more than 3", function () {
            expect(alma(24).moreThan(2).evaluate()).toBeTruthy();
        });
        it("0 is more than 1", function () {
            expect(alma(0).moreThan(1).evaluate()).toBeFalsy();
        });
        it("0 is more than 0", function () {
            expect(alma(0).moreThan(0).evaluate()).toBeFalsy();
        });
        it("NaN is more than 3", function () {
            expect(alma(NaN).moreThan(3).evaluate()).toBeFalsy();
        });
        it("6 is more than NaN", function () {
            expect(alma(6).moreThan(NaN).evaluate()).toBeFalsy();
        });
        it("'23' is more than 2", function () {
            expect(alma('23').moreThan(2).evaluate()).toBeTruthy();
        });
        it("'random string' is more than -1", function () {
            expect(alma('random string').moreThan(-1).evaluate()).toBeFalsy();
        });
        it("empty string is more than 10", function () {
            expect(alma('').moreThan(10).evaluate()).toBeFalsy();
        });
        it("empty is more than empty", function () {
            expect(alma().moreThan().evaluate()).toBeFalsy();
        });
        it("null is more than 5", function () {
            expect(alma(null).moreThan(5).evaluate()).toBeFalsy();
        });
    });
});