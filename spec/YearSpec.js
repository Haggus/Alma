describe("Year", function () {

    describe("Testing 'year' function", function () {
        it("1921", function () {
            expect(alma(1921).year().evaluate()).toBeTruthy();
        });
        it("'2015'", function () {
            expect(alma('2015').year().evaluate()).toBeTruthy();
        });
        it("32", function () {
            expect(alma(32).year().evaluate()).toBeFalsy();
        });
        it("0", function () {
            expect(alma(0).year().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').year().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).year().evaluate()).toBeFalsy();
        });
        it("NaN", function () {
            expect(alma(NaN).year().evaluate()).toBeFalsy();
        });
    });
});
