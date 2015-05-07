describe("Month", function () {

    describe("Testing 'month' function", function () {
        it("9", function () {
            expect(alma(9).month().evaluate()).toBeTruthy();
        });
        it("'12'", function () {
            expect(alma('12').month().evaluate()).toBeTruthy();
        });
        it("23", function () {
            expect(alma(23).month().evaluate()).toBeFalsy();
        });
        it("0", function () {
            expect(alma(0).month().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').month().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).month().evaluate()).toBeFalsy();
        });
        it("NaN", function () {
            expect(alma(NaN).month().evaluate()).toBeFalsy();
        });
    });
});
