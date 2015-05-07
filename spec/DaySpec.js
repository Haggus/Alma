describe("Day", function () {

    describe("Testing 'day' function", function () {
        it("23", function () {
            expect(alma(23).day().evaluate()).toBeTruthy();
        });
        it("'15'", function () {
            expect(alma('15').day().evaluate()).toBeTruthy();
        });
        it("32", function () {
            expect(alma(32).day().evaluate()).toBeFalsy();
        });
        it("0", function () {
            expect(alma(0).day().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').day().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).day().evaluate()).toBeFalsy();
        });
        it("NaN", function () {
            expect(alma(NaN).day().evaluate()).toBeFalsy();
        });
    });
});
